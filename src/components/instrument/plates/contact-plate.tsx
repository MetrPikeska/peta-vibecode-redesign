import { Fragment, useEffect, useState } from "react";
import { contact, footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { Ledger, LedgerCell } from "../ledger";
import { Plate } from "../plate";

type CopyState = "idle" | "copied" | "failed";

/** The ledger prints addresses, not URLs — the scheme is chrome. */
function stripScheme(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

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
    <div className="copy-row">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={ui.actions.copyEmail}
        title={ui.actions.copyEmail}
        className="nav__ctrl invertible t-label"
      >
        {contact.email}
      </button>
      <p aria-live="polite" className="t-label t-dim">
        {state === "copied" ? ui.actions.copied : null}
        {state === "failed" ? ui.actions.copyFailed : null}
      </p>
    </div>
  );
}

export function ContactPlate() {
  const { ui } = useContent();
  const l = ui.instrument.ledger;

  const c = ui.instrument.channels;

  /** Values are the addresses themselves — the ledger prints what it links to. */
  const channels = [
    { key: c.email, value: contact.email, href: `mailto:${contact.email}` },
    // Spaces in a tel: URI are mishandled by some dialers; the printed value
    // keeps them because that is how the number is read.
    {
      key: c.phone,
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    { key: "LinkedIn", value: stripScheme(contact.linkedin), href: contact.linkedin },
    { key: "GitHub", value: stripScheme(contact.github), href: contact.github },
    { key: c.web, value: stripScheme(contact.website), href: contact.website },
    { key: ui.footer.icoLabel, value: footer.ico },
  ];

  return (
    <Plate id="contact" index="09" label={ui.sections.contact}>
      <div className="stack-lg">
        <p className="t-headline">{ui.contact.tagline}</p>

        <Ledger head={[l.channel, l.value]} columns={2}>
          {channels.map((channel) => (
            <Fragment key={channel.key}>
              <LedgerCell lead>{channel.key}</LedgerCell>
              <LedgerCell>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                  >
                    {channel.value}
                  </a>
                ) : (
                  channel.value
                )}
              </LedgerCell>
            </Fragment>
          ))}
        </Ledger>

        <CopyEmailButton />
      </div>
    </Plate>
  );
}
