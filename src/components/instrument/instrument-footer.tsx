import { footer, hero } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { BarcodeGlyph } from "./barcode-glyph";

/** Closing metadata row — the same status vocabulary as the top bar. */
export function InstrumentFooter() {
  const { ui } = useContent();

  return (
    <footer className="foot">
      <BarcodeGlyph />
      <div className="foot__spread">
        <span>{footer.name}</span>
        <span>
          {footer.address} · {footer.zip}
        </span>
        <span>
          {ui.footer.icoLabel} {footer.ico}
        </span>
        <span>{hero.coordinates}</span>
        <span>{ui.footer.copyright}</span>
      </div>
    </footer>
  );
}
