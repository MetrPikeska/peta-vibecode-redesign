import { Fragment } from "react";
import type { Experience } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { Ledger, LedgerCell } from "../ledger";
import { Plate } from "../plate";
import { SequenceRow } from "../sequence-row";

/** One CV record: identity row, then the evidence that belongs to it. */
export function ExperienceRows({ entries }: { entries: Experience[] }) {
  return (
    <>
      {entries.map((entry) => (
        <Fragment key={`${entry.company}-${entry.period}`}>
          <LedgerCell lead>{entry.company}</LedgerCell>
          <LedgerCell>{entry.project ?? entry.role}</LedgerCell>
          <LedgerCell dim>
            {entry.period} · {entry.location}
          </LedgerCell>
          <LedgerCell span prose>
            <div className="stack-sm">
              {entry.project ? <p className="t-label">{entry.role}</p> : null}
              <ul className="bullets">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {entry.links?.length ? (
                <p className="t-label">
                  {entry.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-run"
                    >
                      {link.label}
                    </a>
                  ))}
                </p>
              ) : null}
            </div>
          </LedgerCell>
        </Fragment>
      ))}
    </>
  );
}

export function ExperiencePlate() {
  const { ui, experience } = useContent();
  const l = ui.instrument.ledger;
  const sequence = ui.instrument.sequence;

  return (
    <Plate
      id="experience"
      index="03"
      label={ui.sections.experience}
      note={sequence.label}
    >
      <div className="stack-lg">
        <SequenceRow
          steps={sequence.steps}
          result={sequence.result}
          label={sequence.label}
        />
        <Ledger head={[l.company, l.role, l.period]}>
          <ExperienceRows entries={experience} />
        </Ledger>
      </div>
    </Plate>
  );
}
