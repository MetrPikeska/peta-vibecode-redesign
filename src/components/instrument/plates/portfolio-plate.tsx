import { useContent } from "@/hooks/use-content";
import { EvidenceFigure } from "../evidence-figure";
import { Ledger, LedgerCell, TagRun } from "../ledger";
import { Plate } from "../plate";

interface PortfolioPlateProps {
  /** Set from the hero rail's project index; marks the matching entry. */
  activeProject: string | null;
}

/**
 * Every project gets full-width evidence and a metadata ledger — no grid of
 * cards, no thumbnails. The entries stay in content order; the rail selection
 * marks one rather than filtering the rest away, because hiding evidence to
 * answer a click is the opposite of what this page is for.
 */
export function PortfolioPlate({ activeProject }: PortfolioPlateProps) {
  const { ui, projects } = useContent();
  const l = ui.instrument.ledger;

  return (
    <Plate id="portfolio" index="05" label={ui.sections.portfolio}>
      <div className="stack-lg">
        {projects.map((project, index) => {
          const href = project.link ?? project.webLink;
          const hrefLabel = project.linkLabel ?? project.webLinkLabel;
          const active = activeProject === project.title;

          return (
            <article
              key={project.title}
              id={`project-${index}`}
              data-active={active}
              className="entry"
              aria-current={active ? "true" : undefined}
            >
              {/* Every entry carries a figure: the real screenshot when `image`
                  is set, otherwise a plate seeded from the title and captioned
                  as not being project data.

                  The author was shown this option against the alternative of
                  rendering no figure until real screenshots exist, and chose
                  this one. The case against it is worth re-reading if it ever
                  comes up again: a plotted line over barcode bars, full width
                  under a project title, invites being read as that project's
                  results, and seven of them are a large share of the page's
                  height. Setting `image` retires the plate per project. */}
              <EvidenceFigure
                title={project.title}
                caption={project.title}
                image={project.image}
                href={href}
                hrefLabel={hrefLabel}
                generatedLabel={ui.instrument.figure.generated}
              />
              <Ledger head={[l.project, l.stack, l.link]}>
                <LedgerCell lead>{project.title}</LedgerCell>
                <LedgerCell dim>
                  <TagRun items={project.tags} />
                </LedgerCell>
                <LedgerCell>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="link-run">
                      {hrefLabel}
                    </a>
                  ) : (
                    "—"
                  )}
                  {project.webLink && project.link ? (
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-run"
                    >
                      {project.webLinkLabel}
                    </a>
                  ) : null}
                </LedgerCell>
                <LedgerCell span prose>
                  <div className="stack-sm">
                    <p>{project.description}</p>
                    <ul className="bullets">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </LedgerCell>
              </Ledger>
            </article>
          );
        })}
      </div>
    </Plate>
  );
}
