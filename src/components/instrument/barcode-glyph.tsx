/**
 * The system's mark: a 42×22 block of 1px rules. It is texture, not a logo —
 * screen readers get nothing from it and it carries no text alternative.
 */
export function BarcodeGlyph() {
  return <span className="barcode-glyph" aria-hidden="true" />;
}
