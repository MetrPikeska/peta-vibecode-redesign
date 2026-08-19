import { useEffect, useMemo, useRef } from "react";

/**
 * The seeded barcode field at the centre of the hero.
 *
 * Two commitments hold this together. The bar field is generated from a fixed
 * seed, so it is the same composition on every load, in every language, for
 * every visitor — a signature, not a random splash. And the sine trace drifting
 * across it is the only motion in the entire system; under
 * `prefers-reduced-motion: reduce` the same composition renders once, statically,
 * rather than being removed.
 */

const SEED = 0x5ee_d17;
const BAR_COUNT = 260;

/** mulberry32 — small, fast, and reproducible across engines. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Bar {
  /** Normalised across the field, so a resize rescales rather than regenerates. */
  x: number;
  width: number;
  top: number;
  bottom: number;
  alpha: number;
}

function buildField(): Bar[] {
  const random = mulberry32(SEED);
  const bars: Bar[] = [];
  for (let i = 0; i < BAR_COUNT; i += 1) {
    // Bars cluster and thin out across the field rather than spacing evenly —
    // an instrument reading has density, a ruler does not.
    const drift = random();
    const x = (i + drift * 0.85) / BAR_COUNT;
    const height = 0.14 + random() ** 2 * 0.72;
    const centre = 0.18 + random() * 0.64;
    bars.push({
      x,
      width: random() < 0.14 ? 2 : 1,
      top: Math.max(0.02, centre - height / 2),
      bottom: Math.min(0.98, centre + height / 2),
      alpha: 0.42 + random() * 0.58,
    });
  }
  return bars;
}

interface SignatureFieldProps {
  /** Boxed marks over the field, in reading order. */
  tags: string[];
  verdict: string;
  label: string;
}

/** Where the boxed labels sit, as fractions of the field. Layout, not content. */
const TAG_POSITIONS = [
  { left: "8%", top: "18%" },
  { left: "38%", top: "62%" },
  { left: "66%", top: "31%" },
];

export function SignatureField({ tags, verdict, label }: SignatureFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bars = useMemo(buildField, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let phase = 0;
    let frame = 0;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const paint = () => {
      if (width === 0 || height === 0) return;

      context.fillStyle = "#000";
      context.fillRect(0, 0, width, height);

      for (const bar of bars) {
        context.fillStyle = `rgba(255,255,255,${bar.alpha})`;
        context.fillRect(
          Math.round(bar.x * width),
          bar.top * height,
          bar.width,
          (bar.bottom - bar.top) * height,
        );
      }

      // One trace, drawn over everything: the reading itself.
      context.beginPath();
      context.lineWidth = 1.5;
      context.strokeStyle = "#fff";
      const amplitude = height * 0.22;
      const middle = height * 0.5;
      for (let x = 0; x <= width; x += 1) {
        const t = x / width;
        const y =
          middle +
          Math.sin(t * Math.PI * 4 + phase) * amplitude * (0.55 + 0.45 * Math.sin(t * Math.PI));
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
    };

    const tick = () => {
      phase += 0.006;
      paint();
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const start = () => {
      stop();
      if (motionQuery.matches) {
        paint();
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = Math.round(rect.width);
      height = Math.round(rect.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      paint();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    start();

    motionQuery.addEventListener("change", start);

    return () => {
      stop();
      observer.disconnect();
      motionQuery.removeEventListener("change", start);
    };
  }, [bars]);

  return (
    <div className="field">
      <canvas ref={canvasRef} className="field__canvas" role="img" aria-label={label} />
      <div className="field__overlay" aria-hidden="true">
        {tags.slice(0, TAG_POSITIONS.length).map((tag, index) => (
          <span key={tag} className="field__tag" style={TAG_POSITIONS[index]}>
            {tag}
          </span>
        ))}
        <p className="field__verdict">{verdict}</p>
      </div>
    </div>
  );
}
