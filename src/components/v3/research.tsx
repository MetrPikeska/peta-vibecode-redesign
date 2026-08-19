import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RoleCard } from "@/components/v3/role-card";
import { Subsection } from "@/components/v3/section";
import { useContent } from "@/hooks/use-content";

/**
 * Research: the university work and the written output it produced.
 *
 * The publication list deliberately repeats links that already appear in the
 * portfolio and the about copy — it exists so the record can be read as a
 * ledger in one place, which is also how a reader (or a citing model) looks
 * for it.
 */
export function Research() {
  const { universityProjects, publications, ui } = useContent();

  return (
    <Subsection id="projects" title={ui.sections.projects}>
      <div className="grid gap-4">
        {universityProjects.map((entry) => (
          <RoleCard key={`${entry.company}-${entry.period}`} entry={entry} />
        ))}
      </div>

      <h4 className="mt-10 mb-3 text-sm font-semibold tracking-tight">
        {ui.v3.publications}
      </h4>
      <ul className="divide-y border-t border-b">
        {publications.map((publication) => (
          <li
            key={publication.title}
            className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug">
                {publication.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {publication.kind} · {publication.venue}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Badge variant="secondary" className="font-normal">
                {publication.year}
              </Badge>
              {publication.url ? (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${publication.urlLabel ?? publication.url} — ${publication.title}`}
                  className="inline-flex items-center gap-0.5 text-xs font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  {publication.urlLabel ?? publication.url}
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Subsection>
  );
}
