import { useContent } from "@/hooks/use-content";
import { useLanguage } from "@/contexts/language-context";
import { footer, hero } from "@/data/content";
import { BarcodeGlyph } from "./barcode-glyph";

const ANCHORS = [
  "about",
  "education",
  "experience",
  "projects",
  "portfolio",
  "skills",
  "certifications",
  "services",
  "contact",
] as const;

/**
 * Sticky status bar: mark and wordmark left, lowercase text anchors centre,
 * live metadata right.
 *
 * There is no hamburger. Below 760px the bar leaves the sticky layer, returns
 * to document flow and lets the anchors scroll sideways — a disclosure panel
 * would be chrome, and the anchors are already text.
 */
export function InstrumentNav() {
  const { ui } = useContent();
  const { lang, toggle } = useLanguage();
  const labels = ui.instrument;

  return (
    <nav className="nav t-label">
      <a href="#top" className="nav__brand">
        <BarcodeGlyph />
        {hero.name}
      </a>

      <div className="nav__anchors">
        {ANCHORS.map((anchor) => (
          <a key={anchor} href={`#${anchor}`}>
            {ui.nav[anchor].toLowerCase()}
          </a>
        ))}
      </div>

      <div className="nav__meta">
        <span className="nav__meta-item">{footer.base}</span>
        <span className="nav__meta-item">{hero.coordinates}</span>
        <span className="nav__meta-item">{labels.availability}</span>
        <a
          href={hero.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav__ctrl invertible"
        >
          {labels.cv}
        </a>
        <button
          type="button"
          onClick={toggle}
          title={ui.a11y.switchLanguage}
          aria-label={ui.a11y.switchLanguage}
          className="nav__ctrl invertible"
        >
          {lang === "cs" ? "CS" : "EN"}
        </button>
      </div>
    </nav>
  );
}
