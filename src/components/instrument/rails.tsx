import { Fragment, type ReactNode } from "react";

/* ── Data rail (left) ─────────────────────────────────────────────────────── */

export interface RailRow {
  key: string;
  value: ReactNode;
}

interface DataRailProps {
  rows: RailRow[];
  /** Heading for the selectable block below the readings. */
  listLabel: string;
  items: string[];
  activeItem: string | null;
  onSelect: (item: string) => void;
}

export function DataRail({
  rows,
  listLabel,
  items,
  activeItem,
  onSelect,
}: DataRailProps) {
  return (
    <div className="rail">
      {rows.map((row) => (
        <div key={row.key} className="rail__row">
          <span className="t-label rail__key">{row.key}</span>
          <span className="rail__val">{row.value}</span>
        </div>
      ))}
      <div className="rail__row">
        <span className="t-label rail__key">{listLabel}</span>
      </div>
      <div className="rail__list">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            // Toggle, not radio: pressing the active entry clears the filter.
            aria-pressed={activeItem === item}
            onClick={() => onSelect(item)}
            className="rail__btn invertible t-label"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Result rail (right) ──────────────────────────────────────────────────── */

interface ResultRailProps {
  figure: string;
  figureLabel: string;
  rows: RailRow[];
  state: string;
  stateNote: string;
}

export function ResultRail({
  figure,
  figureLabel,
  rows,
  state,
  stateNote,
}: ResultRailProps) {
  return (
    <div className="result">
      <p className="t-num result__figure">{figure}</p>
      <p className="t-label t-dim">{figureLabel}</p>
      <dl className="result__dl t-label">
        {rows.map((row) => (
          <Fragment key={row.key}>
            <dt>{row.key}</dt>
            <dd>{row.value}</dd>
          </Fragment>
        ))}
      </dl>
      <div className="result__state">
        <p className="t-sub">{state}</p>
        <p className="t-label t-dim">{stateNote}</p>
      </div>
    </div>
  );
}
