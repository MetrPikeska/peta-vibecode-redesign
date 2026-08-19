import { useMemo } from "react";

/**
 * A generated evidence plate.
 *
 * Project screenshots do not exist in this repository yet, and the honest
 * alternative to a missing image is not a grey box — it is an instrument
 * readout drawn from the one thing the entry does have: its title. The seed is
 * the title, so a project's plate is stable across reloads, languages and
 * deploys, and two projects never share a composition.
 *
 * This is scaffolding with a defined exit: set `image` on the project in
 * `content.ts` and the real evidence replaces the plate with no other change.
 */

export const PLATE_WIDTH = 1600;
export const PLATE_HEIGHT = 700;

function seedFrom(text: string): number {
  // FNV-1a — order-sensitive, so "GEOTE Klima" and "Klima GEOTE" differ.
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface PlateGeometry {
  bars: { x: number; w: number; h: number; o: number }[];
  marks: { x: number; y: number; w: number; h: number }[];
  trace: string;
  baseline: string;
  ticks: number[];
}

function buildPlate(seed: number): PlateGeometry {
  const random = mulberry32(seed);

  // Spectrum along the bottom — the density reading.
  const bars: PlateGeometry["bars"] = [];
  const barCount = 96;
  for (let i = 0; i < barCount; i += 1) {
    const w = random() < 0.12 ? 5 : 3;
    bars.push({
      x: (i / barCount) * PLATE_WIDTH + 8,
      w,
      h: 24 + random() ** 1.8 * 190,
      o: 0.42 + random() * 0.58,
    });
  }

  // Detections — open squares, the way a detector draws a box.
  const marks: PlateGeometry["marks"] = [];
  const markCount = 18 + Math.floor(random() * 10);
  for (let i = 0; i < markCount; i += 1) {
    const size = 22 + random() * 54;
    marks.push({
      x: 60 + random() * (PLATE_WIDTH - 180),
      y: 50 + random() * (PLATE_HEIGHT - 330),
      w: size,
      h: size * (0.6 + random() * 0.8),
    });
  }

  // A single trace across the plate, sampled rather than smoothed.
  const points: string[] = [];
  let y = PLATE_HEIGHT * (0.28 + random() * 0.25);
  for (let x = 0; x <= PLATE_WIDTH; x += 40) {
    y += (random() - 0.5) * 74;
    y = Math.min(PLATE_HEIGHT - 240, Math.max(48, y));
    points.push(`${x},${Math.round(y)}`);
  }

  // A second, quieter trace: the residual the first one is measured against.
  const baseline: string[] = [];
  let b = PLATE_HEIGHT * 0.42;
  for (let x = 0; x <= PLATE_WIDTH; x += 96) {
    b += (random() - 0.5) * 30;
    b = Math.min(PLATE_HEIGHT - 260, Math.max(70, b));
    baseline.push(`${x},${Math.round(b)}`);
  }

  const ticks: number[] = [];
  for (let x = 0; x <= PLATE_WIDTH; x += 64) ticks.push(x);

  return {
    bars,
    marks,
    trace: points.join(" "),
    baseline: baseline.join(" "),
    ticks,
  };
}

interface EvidencePlateProps {
  seed: string;
  label: string;
}

export function EvidencePlate({ seed, label }: EvidencePlateProps) {
  const plate = useMemo(() => buildPlate(seedFrom(seed)), [seed]);

  return (
    <svg
      viewBox={`0 0 ${PLATE_WIDTH} ${PLATE_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
    >
      <rect width={PLATE_WIDTH} height={PLATE_HEIGHT} fill="#000" />

      {plate.bars.map((bar, index) => (
        <rect
          key={`bar-${index}`}
          x={bar.x}
          y={PLATE_HEIGHT - bar.h}
          width={bar.w}
          height={bar.h}
          fill="#fff"
          opacity={bar.o}
        />
      ))}

      {plate.ticks.map((x) => (
        <rect
          key={`tick-${x}`}
          x={x}
          y={PLATE_HEIGHT - 246}
          width={1}
          height={x % 256 === 0 ? 18 : 9}
          fill="#fff"
          opacity={0.42}
        />
      ))}

      <line
        x1={0}
        y1={PLATE_HEIGHT - 246}
        x2={PLATE_WIDTH}
        y2={PLATE_HEIGHT - 246}
        stroke="#fff"
        strokeOpacity={0.42}
        strokeWidth={1}
      />

      <polyline
        points={plate.baseline}
        fill="none"
        stroke="#fff"
        strokeOpacity={0.42}
        strokeWidth={1}
        strokeDasharray="6 5"
      />

      {plate.marks.map((mark, index) => (
        <rect
          key={`mark-${index}`}
          x={mark.x}
          y={mark.y}
          width={mark.w}
          height={mark.h}
          fill="none"
          stroke="#fff"
          strokeOpacity={0.7}
          strokeWidth={1}
        />
      ))}

      <polyline points={plate.trace} fill="none" stroke="#fff" strokeWidth={2} />
    </svg>
  );
}
