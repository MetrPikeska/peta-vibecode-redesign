import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContourBg } from "@/components/contour-bg";
import { contact } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";
import { Mail, Phone, Linkedin, Github, Globe, Copy, Check } from "lucide-react";

type CopyState = "idle" | "copied" | "failed";

/**
 * `mailto:` is the whole conversion path, and it silently does nothing for a
 * visitor with no mail client configured. Copying the address is the fallback.
 */
function CopyEmailButton() {
  const { ui } = useContent();
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = setTimeout(() => setState("idle"), 5000);
    return () => clearTimeout(timer);
  }, [state]);

  const handleCopy = async () => {
    try {
      // Absent on insecure origins, and it rejects when permission is denied.
      if (!navigator.clipboard) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(contact.email);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={ui.actions.copyEmail}
        title={ui.actions.copyEmail}
        className="relative w-9 h-9 rounded-md border border-hero-text/10 flex items-center justify-center text-hero-text/60 transition-colors hover:border-hero-text/30 hover:text-hero-text after:absolute after:-inset-1 after:content-['']"
      >
        {state === "copied" ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <p
        aria-live="polite"
        className={cn(
          "text-[13px] transition-opacity duration-300",
          state === "idle" && "opacity-0",
          state === "copied" && "text-hero-text/60",
          state === "failed" && "text-hero-text/80",
        )}
      >
        {state === "copied" && ui.actions.copied}
        {state === "failed" && ui.actions.copyFailed}
      </p>
    </div>
  );
}

export function ContactSection() {
  const { ui } = useContent();

  const contactLinks = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone}` },
    { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
    { icon: Github, label: "GitHub", href: contact.github },
    { icon: Globe, label: "petrmikeska.cz", href: contact.website },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-hero-bg overflow-hidden"
    >
      <ContourBg className="text-hero-text" animate={false} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading light>{ui.sections.contact}</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal delay={200}>
            <p className="text-hero-text/50 text-lg font-serif leading-relaxed max-w-md">
              {ui.contact.tagline}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="space-y-5">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 min-h-11 text-hero-text/60 hover:text-hero-text transition-colors group"
                >
                  <div className="w-9 h-9 rounded-md border border-hero-text/10 flex items-center justify-center group-hover:border-terracotta/40 transition-colors">
                    <Icon className="w-4 h-4 text-terracotta/70" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
              <CopyEmailButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
