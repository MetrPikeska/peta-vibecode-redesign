import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  /** Anchor id. The same set v1 and v2 use, so shared links keep working. */
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}

/**
 * One section shell: rule, heading, lead, content — used by all nine so the
 * rhythm of the page is defined once.
 *
 * `scroll-mt-20` clears the sticky header, which `use-hash-scroll` cannot know
 * about: it calls `scrollIntoView`, and only the element itself can say how
 * much room the header above it needs.
 */
export function Section({ id, title, lead, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 border-t py-16 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {lead ? (
            <p className="mt-3 text-base text-muted-foreground">{lead}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}

/**
 * A block inside a section that used to be a section of its own.
 *
 * The navigation now names five destinations instead of nine, but the four
 * anchors that were folded in — `#education`, `#certifications`, `#projects`,
 * `#skills` — still exist and still land in the right place, because links to
 * them are already in the wild. Keeping the id is what makes the merge a
 * reorganisation rather than a set of dead links.
 */
export function Subsection({
  id,
  title,
  children,
  className,
}: Omit<SectionProps, "lead">) {
  return (
    <div id={id} className={cn("scroll-mt-20 mt-14 border-t pt-10", className)}>
      <h3 className="mb-6 text-lg font-semibold tracking-tight">{title}</h3>
      {children}
    </div>
  );
}
