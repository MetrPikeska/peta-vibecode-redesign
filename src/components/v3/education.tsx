import { ArrowUpRight } from "lucide-react";
import { Subsection } from "@/components/v3/section";
import { useContent } from "@/hooks/use-content";

/**
 * Education, as three rows rather than three cards.
 *
 * A card buys a border and a shadow; what these entries actually need is a
 * degree, an institution and two or three lines of scope. Rows give that at a
 * third of the vertical cost, which is the whole point of folding the block
 * into `#about` instead of letting it hold a navigation slot of its own.
 */
export function Education() {
  const { education, ui } = useContent();

  return (
    <Subsection id="education" title={ui.sections.education}>
      <dl className="border-t">
        {education.map((entry) => (
          <div
            key={entry.degree}
            className="grid gap-1 border-b py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] sm:gap-8"
          >
            <dt>
              <span className="block text-sm font-medium leading-snug">
                {entry.degree}
              </span>
              <a
                href={entry.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-0.5 text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {entry.institution}
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {entry.type}
              </span>
            </dt>
            <dd className="text-sm leading-relaxed text-foreground/80">
              {entry.highlights.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Subsection>
  );
}
