import type { ReactNode } from "react";

interface PlateProps {
  id?: string;
  /** Plate number, e.g. "03". Structural, not content — it numbers the sheet. */
  index: string;
  label: string;
  note?: ReactNode;
  /** Let a full-bleed child (a selector strip, a sequence row) reach the edges. */
  flush?: boolean;
  children: ReactNode;
}

/**
 * One instrument plate. No max-width, no card: the plate is a region of the
 * page surface, ruled off from the next one by a single hairline.
 */
export function Plate({ id, index, label, note, flush, children }: PlateProps) {
  return (
    <section
      id={id}
      className={flush ? "plate plate--flush" : "plate"}
      aria-labelledby={`${index}-label`}
    >
      <header className="plate__head">
        <h2 id={`${index}-label`} className="t-sub">
          <span className="plate__index">{index}</span> {label}
        </h2>
        {note ? <p className="t-label t-dim">{note}</p> : null}
      </header>
      {children}
    </section>
  );
}
