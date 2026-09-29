import type { ReactNode } from "react";

interface LedgerLabelProps {
  id?: string;
  children: ReactNode;
}

/**
 * The small mono label over a ledger block (education, research, skills).
 * Sentence case on purpose: the brief allows two uppercase eyebrows on the
 * page and these are sub-blocks, not sections.
 */
export function LedgerLabel({ id, children }: LedgerLabelProps) {
  return (
    <h3 id={id} className="flex items-center gap-2 font-survey-mono text-xs text-ink-muted">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-survey" />
      {children}
    </h3>
  );
}
