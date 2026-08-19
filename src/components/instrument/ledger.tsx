import type { ReactNode } from "react";

interface LedgerProps {
  /** Column headers. Header cells invert, matching a selected control. */
  head: string[];
  columns?: 2 | 3;
  children: ReactNode;
}

/**
 * A ruled table without a table's chrome: 1px cell borders, uppercase labels,
 * inverted header row. Used for CV rows, project metadata and method notes.
 *
 * It is a grid rather than a `<table>` because every row here is a record of
 * one entity, not a cross-tabulation — and because the grid collapses to a
 * single column on narrow screens without the reflow artefacts a table has.
 */
export function Ledger({ head, columns = 3, children }: LedgerProps) {
  return (
    <div className={columns === 2 ? "ledger ledger--two" : "ledger"}>
      {head.map((label) => (
        <div key={label} className="ledger__cell ledger__cell--head">
          {label}
        </div>
      ))}
      {children}
    </div>
  );
}

interface LedgerCellProps {
  /** Sentence-case prose. Uppercasing a Czech paragraph makes it unreadable. */
  prose?: boolean;
  dim?: boolean;
  /** Evidence belonging to the whole row rather than to one column. */
  span?: boolean;
  /** The entity the row is about, set in the display face. */
  lead?: boolean;
  /** Selected — inverts, the same way a selected control does. */
  active?: boolean;
  children: ReactNode;
}

export function LedgerCell({
  prose,
  dim,
  span,
  lead,
  active,
  children,
}: LedgerCellProps) {
  const classes = ["ledger__cell"];
  if (prose) classes.push("ledger__cell--prose");
  if (dim) classes.push("ledger__cell--dim");
  if (span) classes.push("ledger__cell--span");
  if (lead) classes.push("ledger__cell--lead");
  if (active) classes.push("invert");
  return <div className={classes.join(" ")}>{children}</div>;
}

/** Inline run of tags, separated by middots. Never a pill. */
export function TagRun({ items }: { items: string[] }) {
  return (
    <ul className="tags t-label">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
