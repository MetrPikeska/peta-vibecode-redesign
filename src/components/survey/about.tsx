import { CropFrame } from "@/components/survey/crop-frame";
import { LedgerLabel } from "@/components/survey/ledger-label";
import { SURVEY_RICH_TEXT } from "@/components/survey/rich-text";
import { SectionHeading } from "@/components/survey/section-heading";
import { useContent } from "@/hooks/use-content";
import { renderRichText } from "@/lib/rich-text";

const LINK =
  "text-survey underline decoration-survey/40 underline-offset-4 hover:decoration-survey";

interface Waypoint {
  place: string;
  coords: string;
}

/**
 * The page's one side-rail note: the trajectory home, university, Erasmus+.
 * A vertical survey line beside the section from `md`; above the prose as a
 * horizontal strip on a phone.
 */
function Rail({ waypoints }: { waypoints: Waypoint[] }) {
  return (
    <aside className="border-b border-hairline px-6 py-6 md:border-b-0 md:border-r md:px-8 md:py-28">
      <ol className="relative flex justify-between gap-4 md:h-full md:flex-col">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-1 h-px bg-survey md:inset-y-0 md:left-1 md:right-auto md:h-auto md:w-px"
        />
        {waypoints.map((point) => (
          <li key={point.place} className="relative flex flex-col gap-2 md:flex-row md:gap-4">
            <span
              aria-hidden="true"
              className="size-[9px] shrink-0 rounded-full bg-survey ring-4 ring-paper"
            />
            <div className="md:-mt-1">
              <p className="text-xs font-medium text-ink">{point.place}</p>
              <p className="mt-0.5 w-[9ch] font-survey-mono text-[11px] leading-snug text-survey">
                {point.coords}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}

/**
 * Board 2: off-grid editorial. Portrait in a crop frame top-left of the
 * content column, heading and a narrow prose measure beside it, then the
 * education and certification ledgers as hairline rows, no cards.
 */
export function About() {
  const { about, certifications, education, hero, ui } = useContent();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="survey-dots border-b border-hairline"
    >
      <div className="md:grid md:grid-cols-[auto_minmax(0,1fr)]">
        <Rail waypoints={ui.v4.about.waypoints} />

        <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-12 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14">
            <CropFrame
              src={hero.portrait}
              alt={hero.name}
              width={371}
              height={496}
              className="w-36 self-start md:w-44"
              imgClassName="aspect-[3/4]"
            />

            <div className="min-w-0">
              <SectionHeading id="about-heading">{ui.v4.nav.about}</SectionHeading>
              <div className="mt-8 max-w-[60ch] space-y-5 text-base leading-relaxed text-ink">
                {about.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph, SURVEY_RICH_TEXT)}</p>
                ))}
              </div>

              <div id="education" className="mt-16">
                <LedgerLabel>{ui.sections.education}</LedgerLabel>
                <ul className="mt-4 border-t border-ink-muted/50">
                  {education.map((entry) => (
                    <li
                      key={entry.degree}
                      className="grid gap-1.5 border-b border-hairline py-4 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_minmax(0,10rem)] md:gap-6"
                    >
                      <span className="font-survey-mono text-xs leading-relaxed text-ink-muted">
                        {entry.type}
                      </span>
                      <div>
                        <p className="text-sm font-medium leading-snug">{entry.degree}</p>
                        <a
                          href={entry.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-1 inline-block text-sm ${LINK}`}
                        >
                          {entry.institution}
                        </a>
                      </div>
                      <span className="font-survey-mono text-xs leading-relaxed text-ink-muted md:text-right">
                        {entry.location}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="certifications" className="mt-14">
                <LedgerLabel>{ui.sections.certifications}</LedgerLabel>
                <ul className="mt-4 border-t border-ink-muted/50">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="grid gap-1.5 border-b border-hairline py-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline md:gap-6"
                    >
                      <div>
                        <p className="text-sm font-medium leading-snug">{cert.name}</p>
                        <p className="mt-1 font-survey-mono text-xs text-ink-muted">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                      {cert.pdfUrl ? (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-survey-mono text-xs ${LINK}`}
                        >
                          {ui.v4.openCertificate}
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
