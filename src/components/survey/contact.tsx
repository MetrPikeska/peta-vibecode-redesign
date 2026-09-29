import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { CONTAINER } from "@/components/survey/sections";
import { contact, footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

type CopyState = "idle" | "copied" | "failed";

/**
 * Board 6: a colour-blocked survey band over the point-cloud plate. The
 * address is the call to action, set oversized in mono, with the remaining
 * channels as a mono readout on the right.
 */
export function Contact() {
  const { ui } = useContent();
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const channels = [
    {
      label: ui.v3.channels.phone,
      value: contact.phone,
      // Tel URIs reject the spaces the displayed number keeps for legibility.
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      label: ui.v3.channels.linkedin,
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: contact.linkedin,
    },
    {
      label: ui.v3.channels.github,
      value: contact.github.replace(/^https?:\/\//, ""),
      href: contact.github,
    },
    { label: ui.v3.channels.base, value: footer.base, href: null },
  ];

  // Clipboard access is refused outside a secure context and in some privacy
  // modes, so failure is reported rather than leaving an empty clipboard.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState("idle"), 2000);
  };

  const status =
    copyState === "copied"
      ? ui.actions.copied
      : copyState === "failed"
        ? ui.actions.copyFailed
        : "";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="survey-on-survey relative isolate overflow-hidden bg-survey text-on-survey"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url(/survey/contact-plate.webp)] bg-cover bg-bottom opacity-70"
      />

      <div
        className={cn(
          CONTAINER,
          "grid gap-14 pt-20 pb-[calc(10rem+var(--consent-inset,0px))] md:pt-28 md:pb-[calc(14rem+var(--consent-inset,0px))] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20",
        )}
      >
        <div className="min-w-0">
          <h2 id="contact-heading" className="text-lg font-medium">
            {ui.v4.nav.contact}
          </h2>

          <div className="mt-8 flex flex-wrap items-end gap-x-5 gap-y-4">
            {/* 2xl on a phone and 5xl on a desktop, one step under 3xl and
                6xl each: Geist Mono advances about 0.58 em, so the
                23-character address runs 414 px at 3xl (wider than a 390 px
                viewport) and 790 px at 6xl (wider than the column beside the
                channel list, where it broke before `.com`). */}
            <a
              href={`mailto:${contact.email}`}
              className="border-b border-on-survey/60 pb-2 font-survey-mono text-2xl leading-tight tracking-tight [overflow-wrap:anywhere] hover:border-on-survey active:translate-y-px sm:text-4xl lg:text-5xl"
            >
              {contact.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={ui.actions.copyEmail}
              title={ui.actions.copyEmail}
              className="inline-flex size-11 shrink-0 items-center justify-center border border-on-survey/40 hover:border-on-survey"
            >
              {copyState === "copied" ? (
                <Check aria-hidden="true" className="size-4" />
              ) : (
                <Copy aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
          <p role="status" className="mt-3 min-h-5 font-survey-mono text-xs">
            {status}
          </p>

          <p className="mt-6 max-w-[56ch] text-base leading-relaxed md:text-lg">
            {ui.contact.tagline}
          </p>
        </div>

        <ul className="space-y-5 self-start font-survey-mono text-sm lg:pt-16">
          {channels.map((channel) => (
            <li key={channel.label}>
              {channel.href ? (
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="survey-channel group flex items-start gap-3"
                >
                  <span aria-hidden="true" className="survey-waypoint mt-1" />
                  <span>
                    <span className="block text-xs text-on-survey/80">{channel.label}</span>
                    <span className="block underline-offset-4 group-hover:underline">
                      {channel.value}
                    </span>
                  </span>
                </a>
              ) : (
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="survey-waypoint survey-waypoint--fixed mt-1" />
                  <span>
                    <span className="block text-xs text-on-survey/80">{channel.label}</span>
                    <span className="block">{channel.value}</span>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
