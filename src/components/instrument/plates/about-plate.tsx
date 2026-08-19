import { useContent } from "@/hooks/use-content";
import { renderRichText } from "@/lib/rich-text";
import { Plate } from "../plate";

/** Instrument links are colour-inherited underlines — no accent, no icon. */
export const INSTRUMENT_RICH_TEXT = {
  linkClassName: "underline",
  boldClassName: "t-strong",
  externalIcon: false,
} as const;

export function AboutPlate() {
  const { ui, about } = useContent();

  return (
    <Plate id="about" index="01" label={ui.sections.about}>
      <div className="stack">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="t-body">
            {renderRichText(paragraph, INSTRUMENT_RICH_TEXT)}
          </p>
        ))}
      </div>
    </Plate>
  );
}
