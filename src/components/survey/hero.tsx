import { DetectionCta } from "@/components/survey/detection-cta";
import { RouteLink } from "@/components/survey/route-link";
import { CONTAINER } from "@/components/survey/sections";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

/** The tagline is two claims; each gets its own line, split at the first full stop. */
function splitTagline(tagline: string): string[] {
  const cut = tagline.indexOf(". ");
  if (cut === -1) return [tagline];
  return [tagline.slice(0, cut + 1), tagline.slice(cut + 2)];
}

/**
 * Board 1: the survey frame full-bleed, copy bottom-left where the frame
 * fades to paper. Four text elements only: headline, sub-line, two CTAs; the
 * coordinates top-left are the one decoration.
 */
export function Hero() {
  const { hero, ui } = useContent();

  return (
    <section
      id="top"
      aria-label={ui.v4.heroArtAlt}
      className="relative isolate flex min-h-[88dvh] flex-col justify-end overflow-hidden"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet="/survey/hero.webp" width={2560} height={1097} />
        <img
          src="/survey/hero-mobile.webp"
          alt=""
          aria-hidden="true"
          width={1000}
          height={1250}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
      </picture>

      <p className="absolute left-6 top-6 inline-flex items-center gap-2 bg-paper/85 px-2 py-1 font-survey-mono text-[11px] text-survey md:left-10 md:top-8">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-survey" />
        {hero.coordinates}
      </p>

      {/* The paper ground travels with the copy rather than being pinned to
          the section: while the consent banner is up the inset lifts the copy
          into the frame, and the headline must never land on the trees. The
          wide frame fades to paper in its lower left already; the 4:5 crop
          does not, hence the stronger ramp below `md`. */}
      <div className="bg-linear-to-t from-paper from-35% via-paper/90 via-65% to-transparent pt-32 md:from-30% md:via-paper/75 md:via-60%">
        <div
          className={cn(
            CONTAINER,
            "pb-[calc(3rem+var(--consent-inset,0px))] md:pb-[calc(4.5rem+var(--consent-inset,0px))]",
          )}
        >
          <div className="max-w-5xl">
            {/* 60 px only from `xl`: below 1280 px each claim would break in
                two at that size, and board 1 sets the pair as exactly two
                lines. */}
            <h1 className="text-4xl font-semibold leading-none tracking-tighter md:text-5xl xl:text-6xl">
              {splitTagline(hero.tagline).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[70ch] font-survey-mono text-xs leading-relaxed text-ink-muted md:text-sm">
              {hero.subtagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              <RouteLink href="#portfolio">{ui.v4.viewWork}</RouteLink>
              <DetectionCta href={hero.cvUrl} external>
                {ui.v4.downloadCv}
              </DetectionCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
