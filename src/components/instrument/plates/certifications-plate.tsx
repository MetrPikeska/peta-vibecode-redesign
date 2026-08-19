import { Fragment } from "react";
import { useContent } from "@/hooks/use-content";
import { Ledger, LedgerCell } from "../ledger";
import { Plate } from "../plate";

export function CertificationsPlate() {
  const { ui, certifications } = useContent();
  const l = ui.instrument.ledger;

  return (
    <Plate id="certifications" index="07" label={ui.sections.certifications}>
      <Ledger head={[l.certificate, l.issuer, l.date]}>
        {certifications.map((entry) => (
          <Fragment key={entry.name}>
            <LedgerCell lead>
              {/* Only linked when a PDF is actually served — a dead link on a
                  credential is worse than no link. */}
              {entry.pdfUrl ? (
                <a href={entry.pdfUrl} target="_blank" rel="noopener noreferrer">
                  {entry.name}
                </a>
              ) : (
                entry.name
              )}
            </LedgerCell>
            <LedgerCell>{entry.issuer}</LedgerCell>
            <LedgerCell dim>{entry.date}</LedgerCell>
            <LedgerCell span prose dim>
              {entry.description}
            </LedgerCell>
          </Fragment>
        ))}
      </Ledger>
    </Plate>
  );
}
