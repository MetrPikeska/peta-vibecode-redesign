import { Subsection } from "@/components/v3/section";
import { useContent } from "@/hooks/use-content";
import { toolCount } from "@/lib/instrument-metrics";

/**
 * The tool catalogue, folded under the portfolio it belongs to.
 *
 * A skill list is a claim; the projects above it are the evidence. Standing on
 * its own it read as a wall of badges in a grid of cards — as rows under the
 * work, each category is one label and one run of tags, and the reader can see
 * the whole catalogue without scrolling through it.
 */
export function Skills() {
  const { skills, ui } = useContent();

  return (
    <Subsection id="skills" title={ui.sections.skills}>
      <dl className="border-t">
        {skills.map((category) => (
          <div
            key={category.name}
            className="grid gap-2 border-b py-4 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-8"
          >
            <dt className="text-sm font-medium leading-snug">{category.name}</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">
              {category.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
      {/* Derived, never typed: `toolCount` counts distinct tools across every
          category, so the figure cannot drift from the list above it. */}
      <p className="mt-4 text-xs text-muted-foreground">
        {toolCount(skills)} {ui.v3.toolsCatalogued}
      </p>
    </Subsection>
  );
}
