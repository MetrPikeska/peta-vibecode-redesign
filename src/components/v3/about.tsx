import { Certifications } from "@/components/v3/certifications";
import { Education } from "@/components/v3/education";
import { Section } from "@/components/v3/section";
import { V3_RICH_TEXT } from "@/components/v3/rich-text";
import { renderRichText } from "@/lib/rich-text";
import { useContent } from "@/hooks/use-content";

/**
 * Who, where it was learned, and what is documented — one destination.
 *
 * Education and certifications used to hold navigation slots of their own.
 * Neither is a reason anyone comes to the site; both are the answer to the
 * same question the prose above them opens, so they read as evidence under it
 * rather than as sections a visitor has to choose between.
 */
export function About() {
  const { about, ui } = useContent();

  return (
    <Section id="about" title={ui.v3.nav.about} lead={ui.v3.lead.about}>
      <div className="max-w-3xl space-y-4">
        {about.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-foreground/80">
            {renderRichText(paragraph, V3_RICH_TEXT)}
          </p>
        ))}
      </div>

      <Education />
      <Certifications />
    </Section>
  );
}
