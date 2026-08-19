import { Fragment } from "react";
import { useContent } from "@/hooks/use-content";
import { Ledger, LedgerCell } from "../ledger";
import { Plate } from "../plate";

export function EducationPlate() {
  const { ui, education } = useContent();
  const l = ui.instrument.ledger;

  return (
    <Plate id="education" index="02" label={ui.sections.education}>
      <Ledger head={[l.institution, l.degree, l.notes]}>
        {education.map((entry) => (
          <Fragment key={entry.degree}>
            <LedgerCell lead>
              <a href={entry.institutionUrl} target="_blank" rel="noopener noreferrer">
                {entry.institution}
              </a>
            </LedgerCell>
            <LedgerCell>{entry.degree}</LedgerCell>
            <LedgerCell dim>{entry.type}</LedgerCell>
            <LedgerCell span prose dim>
              <div className="stack-sm">
                <ul className="bullets">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="t-label">{entry.location}</p>
              </div>
            </LedgerCell>
          </Fragment>
        ))}
      </Ledger>
    </Plate>
  );
}
