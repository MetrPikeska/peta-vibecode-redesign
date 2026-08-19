import { Fragment, useMemo } from "react";
import { useContent } from "@/hooks/use-content";
import { plotCategories, selectorCells } from "@/lib/instrument-metrics";
import { Ledger, LedgerCell, TagRun } from "../ledger";
import { Plate } from "../plate";
import { SelectorStrip } from "../selector-strip";

interface SkillsPlateProps {
  activeCategory: string | null;
  onSelectCategory: (name: string) => void;
}

/**
 * Seven plotted categories on the strip, all twelve in the ledger below.
 *
 * The strip shows the largest categories because those are the ones worth
 * comparing; the ledger stays complete, so selecting a cell marks a row rather
 * than removing the other eleven.
 */
export function SkillsPlate({ activeCategory, onSelectCategory }: SkillsPlateProps) {
  const { ui, skills } = useContent();
  const l = ui.instrument.ledger;

  const cells = useMemo(() => selectorCells(skills), [skills]);
  const plotted = useMemo(() => plotCategories(skills), [skills]);

  return (
    <Plate id="skills" index="06" label={ui.sections.skills} flush>
      <SelectorStrip
        cells={cells}
        active={activeCategory}
        onSelect={onSelectCategory}
        hint={ui.instrument.selectorHint}
      />
      <div className="plate__body">
        <Ledger head={[l.category, l.count, l.items]}>
          {plotted.map((category, index) => (
            <Fragment key={category.name}>
              <LedgerCell lead active={activeCategory === category.name}>
                {category.name}
              </LedgerCell>
              <LedgerCell>{category.count}</LedgerCell>
              <LedgerCell dim>
                <TagRun items={skills[index].items} />
              </LedgerCell>
            </Fragment>
          ))}
        </Ledger>
      </div>
    </Plate>
  );
}
