import { Fragment } from "react";

interface Step {
  title: string;
  note: string;
}

interface SequenceRowProps {
  steps: readonly Step[];
  result: Step;
  label: string;
}

/**
 * A pipeline read left to right: numbered steps joined by ruled links, ending
 * in an inverted result block. The numbers are positions in the sequence, not
 * measurements — they say "fourth step", not "four of anything".
 */
export function SequenceRow({ steps, result, label }: SequenceRowProps) {
  return (
    <div className="sequence" role="list" aria-label={label}>
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          <div className="sequence__step" role="listitem">
            <p className="t-num sequence__num">{String(index + 1).padStart(2, "0")}</p>
            <p className="t-label">{step.title}</p>
            <p className="t-label t-dim">{step.note}</p>
          </div>
          <span className="sequence__link" aria-hidden="true" />
        </Fragment>
      ))}
      <div className="sequence__result" role="listitem">
        <p className="t-sub">{result.title}</p>
        <p className="t-label">{result.note}</p>
      </div>
    </div>
  );
}
