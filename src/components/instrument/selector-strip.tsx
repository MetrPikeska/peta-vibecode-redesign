import type { CSSProperties } from "react";
import type { PlottedCategory } from "@/lib/instrument-metrics";

interface SelectorStripProps {
  cells: PlottedCategory[];
  active: string | null;
  onSelect: (name: string) => void;
  hint: string;
}

/**
 * Seven square controls, each plotting one magnitude.
 *
 * The bar is a barcode gradient whose width carries the value, and the value
 * itself is printed underneath as a tabular number — so the mark can be read
 * as a comparison and the figure as a fact. What it encodes is the number of
 * tools catalogued in that category, because that is countable; it is
 * deliberately not a self-assessed proficiency.
 */
export function SelectorStrip({ cells, active, onSelect, hint }: SelectorStripProps) {
  return (
    <>
      <div className="selector" role="group" aria-label={hint}>
        {cells.map((cell) => (
          <button
            key={cell.name}
            type="button"
            aria-pressed={active === cell.name}
            onClick={() => onSelect(cell.name)}
            className="selector__cell invertible"
            style={{ "--strength": cell.strength } as CSSProperties}
          >
            <span className="t-label">{cell.name}</span>
            <span className="selector__bar barcode" aria-hidden="true" />
            <span className="selector__val">{cell.count}</span>
          </button>
        ))}
      </div>
      <p className="t-label t-dim selector__hint">{hint}</p>
    </>
  );
}
