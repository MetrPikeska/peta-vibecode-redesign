import { Copy, Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/v3/section";
import { contact, footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";

export function Contact() {
  const { ui } = useContent();

  const channels = [
    {
      icon: Mail,
      label: ui.v3.channels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: ui.v3.channels.phone,
      value: contact.phone,
      // Tel URIs reject spaces, which the displayed number needs to stay legible.
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Globe,
      label: ui.v3.channels.web,
      value: contact.website.replace(/^https?:\/\//, ""),
      href: contact.website,
    },
    {
      icon: Linkedin,
      label: ui.v3.channels.linkedin,
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: contact.linkedin,
    },
    {
      icon: Github,
      label: ui.v3.channels.github,
      value: contact.github.replace(/^https?:\/\//, ""),
      href: contact.github,
    },
    { icon: MapPin, label: ui.v3.channels.base, value: footer.base, href: null },
  ];

  /**
   * Clipboard access is refused outside a secure context and in some privacy
   * modes, and the failure is silent — so the visitor is told to select the
   * address by hand rather than being left with an empty clipboard.
   */
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      toast.success(ui.actions.copied);
    } catch {
      toast.error(ui.actions.copyFailed);
    }
  };

  return (
    <Section id="contact" title={ui.v3.nav.contact} lead={ui.contact.tagline}>
      <Card className="max-w-3xl">
        <CardContent className="divide-y p-0">
          {channels.map((channel) => (
            <div key={channel.label} className="flex items-start gap-4 px-6 py-4">
              <channel.icon
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              {/* Label above the value on a phone, beside it from `sm` up. The
                  previous single row truncated every address below 640px —
                  "piter.mikesk…" is not a contact detail. A wrapped address is
                  longer; an abbreviated one is unusable. */}
              <div className="min-w-0 flex-1 sm:flex sm:items-baseline sm:gap-4">
                <span className="block text-xs text-muted-foreground sm:w-24 sm:shrink-0">
                  {channel.label}
                </span>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block break-words text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span className="block break-words text-sm font-medium">
                    {channel.value}
                  </span>
                )}
              </div>
              {channel.value === contact.email ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyEmail}
                  aria-label={ui.actions.copyEmail}
                  title={ui.actions.copyEmail}
                  className="tap-44 shrink-0"
                >
                  <Copy />
                </Button>
              ) : null}
            </div>
          ))}
        </CardContent>
      </Card>
    </Section>
  );
}
