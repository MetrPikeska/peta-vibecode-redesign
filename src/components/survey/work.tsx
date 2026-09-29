import { LedgerLabel } from "@/components/survey/ledger-label";
import { CONTAINER } from "@/components/survey/sections";
import { SectionHeading } from "@/components/survey/section-heading";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

const LINK =
  "text-survey underline decoration-survey/40 underline-offset-4 hover:decoration-survey";

/**
 * Board 3: a sheet band of stacked ledger rows. Company large with a waypoint
 * dot, role and mono period under it, highlights in two columns from `lg`.
 * Research and publications follow as lighter rows.
 *
 * Highlights are set in Geist, not in the board's mono: they are full
 * sentences, some of them 40 words long, and the brief keeps mono for values.
 */
export function Work() {
  const { experience, publications, ui, universityProjects } = useContent();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-sheet">
      <div className={cn(CONTAINER, "py-20 md:py-28")}>
        <SectionHeading id="experience-heading">{ui.v4.nav.experience}</SectionHeading>

        <ol className="mt-12">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="grid gap-8 border-b border-hairline py-10 first:pt-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12"
            >
              <div className="flex gap-4 md:gap-5">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-2.5 shrink-0 rounded-full bg-survey md:mt-[19px]"
                />
                <div className="min-w-0">
                  <h3 className="text-3xl font-semibold leading-none tracking-tighter md:text-5xl">
                    {job.company}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-snug">{job.role}</p>
                  <p className="mt-2 font-survey-mono text-xs text-ink-muted">{job.period}</p>
                  <p className="mt-0.5 font-survey-mono text-xs text-ink-muted">
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="min-w-0 lg:pt-1">
                <ul className="grid gap-x-10 gap-y-3 lg:grid-cols-2">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 shrink-0 bg-survey" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {job.links?.length ? (
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {job.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-survey-mono text-xs ${LINK}`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div id="projects">
            <LedgerLabel>{ui.v4.research}</LedgerLabel>
            <ul className="mt-4 border-t border-ink-muted/50">
              {universityProjects.map((item) => (
                <li key={`${item.role}-${item.period}`} className="border-b border-hairline py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="font-medium leading-snug">{item.role}</p>
                    <span className="font-survey-mono text-xs text-ink-muted">{item.period}</span>
                  </div>
                  {item.project ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.project}</p>
                  ) : null}
                  <p className="mt-1.5 font-survey-mono text-xs text-ink-muted">{item.company}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <LedgerLabel>{ui.v4.publications}</LedgerLabel>
            <ul className="mt-4 border-t border-ink-muted/50">
              {publications.map((pub) => (
                <li key={pub.title} className="border-b border-hairline py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="font-medium leading-snug">{pub.title}</p>
                    <span className="font-survey-mono text-xs text-ink-muted">{pub.year}</span>
                  </div>
                  <p className="mt-1.5 font-survey-mono text-xs text-ink-muted">
                    {pub.kind} · {pub.venue}
                  </p>
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-2 inline-block font-survey-mono text-xs ${LINK}`}
                    >
                      {pub.urlLabel ?? pub.url}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
