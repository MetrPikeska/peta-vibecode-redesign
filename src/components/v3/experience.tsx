import { RoleCard } from "@/components/v3/role-card";
import { Research } from "@/components/v3/research";
import { Section } from "@/components/v3/section";
import { useContent } from "@/hooks/use-content";

/**
 * Every paid and academic position on one page.
 *
 * The research block used to be a section of its own under a separate nav
 * label, which asked the visitor to guess which of two lists a given role sat
 * in. They are one record, ordered by weight: commissioned work first, the
 * university work and its publications under it.
 */
export function Experience() {
  const { experience, ui } = useContent();

  return (
    <Section id="experience" title={ui.v3.nav.experience} lead={ui.v3.lead.experience}>
      <div className="grid gap-4">
        {experience.map((entry) => (
          <RoleCard key={`${entry.company}-${entry.period}`} entry={entry} />
        ))}
      </div>

      <Research />
    </Section>
  );
}
