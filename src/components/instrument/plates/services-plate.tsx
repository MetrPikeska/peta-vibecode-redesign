import { Fragment } from "react";
import { useContent } from "@/hooks/use-content";
import { Ledger, LedgerCell, TagRun } from "../ledger";
import { Plate } from "../plate";

export function ServicesPlate() {
  const { ui, services } = useContent();
  const l = ui.instrument.ledger;

  return (
    <Plate id="services" index="08" label={ui.sections.services}>
      <Ledger head={[l.service, l.question, l.stack]}>
        {services.map((service) => (
          <Fragment key={service.title}>
            <LedgerCell lead>{service.title}</LedgerCell>
            <LedgerCell prose>{service.question}</LedgerCell>
            <LedgerCell dim>
              <TagRun items={service.tags} />
            </LedgerCell>
            <LedgerCell span prose dim>
              {service.description}
            </LedgerCell>
          </Fragment>
        ))}
      </Ledger>
    </Plate>
  );
}
