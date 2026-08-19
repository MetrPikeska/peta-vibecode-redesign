import { EvidencePlate } from "./evidence-plate";

interface EvidenceFigureProps {
  title: string;
  caption: string;
  /** Real screenshot, map or plot. Falls back to a generated plate. */
  image?: string;
  /** Where the full-resolution asset lives. */
  href?: string;
  hrefLabel?: string;
  generatedLabel: string;
}

/**
 * Project evidence at full width — framed by a hairline, captioned with the
 * description on the left and the measurements on the right. On narrow screens
 * the frame keeps its height and scrolls sideways rather than shrinking into
 * something nobody can read.
 */
export function EvidenceFigure({
  title,
  caption,
  image,
  href,
  hrefLabel,
  generatedLabel,
}: EvidenceFigureProps) {
  const frame = image ? (
    <img src={image} alt={title} className="mono-img" loading="lazy" decoding="async" />
  ) : (
    <EvidencePlate seed={title} label={title} />
  );

  return (
    <figure className="figure">
      <div className="figure__scroll">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="figure__frame">
            {frame}
          </a>
        ) : (
          <div className="figure__frame">{frame}</div>
        )}
      </div>
      <figcaption className="figure__caption t-label">
        <span>{caption}</span>
        <span className="figure__meta">
          {/* No resolution next to a generated plate: 1600×700 is the plate's
              own canvas, and printing it as a measurement would dress a
              placeholder up as a captured asset. A real screenshot's dimensions
              are not known here either, so neither case invents one. */}
          {image ? null : <span>{generatedLabel}</span>}
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {hrefLabel}
            </a>
          ) : null}
        </span>
      </figcaption>
    </figure>
  );
}
