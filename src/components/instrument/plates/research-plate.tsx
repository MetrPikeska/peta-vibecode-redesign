import { Fragment } from "react";
import { useContent } from "@/hooks/use-content";
import { Ledger, LedgerCell } from "../ledger";
import { Plate } from "../plate";
import { ExperienceRows } from "./experience-plate";

/**
 * Research and written output. The publication ledger holds nothing new — every
 * entry was already linked from somewhere on the site; it is only lifted out of
 * prose so it can be read as a record.
 */
export function ResearchPlate() {
  const { ui, universityProjects, publications } = useContent();
  const l = ui.instrument.ledger;

  return (
    <Plate id="projects" index="04" label={ui.sections.projects}>
      <div className="stack-lg">
        <Ledger head={[l.company, l.project, l.period]}>
          <ExperienceRows entries={universityProjects} />
        </Ledger>

        <div className="stack">
          <h3 className="t-label">{ui.instrument.publications}</h3>
          <Ledger head={[l.publication, l.kind, l.year]}>
            {publications.map((entry) => (
              <Fragment key={entry.title}>
                <LedgerCell lead>
                  {entry.url ? (
                    <a href={entry.url} target="_blank" rel="noopener noreferrer">
                      {entry.title}
                    </a>
                  ) : (
                    entry.title
                  )}
                </LedgerCell>
                <LedgerCell>{entry.kind}</LedgerCell>
                <LedgerCell dim>
                  {entry.year} · {entry.venue}
                  {entry.urlLabel ? ` · ${entry.urlLabel}` : ""}
                </LedgerCell>
              </Fragment>
            ))}
          </Ledger>
        </div>
      </div>
    </Plate>
  );
}
