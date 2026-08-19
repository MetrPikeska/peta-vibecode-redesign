import { useEffect } from "react";

/** How long to keep correcting the landing before giving the page back. */
const SETTLE_WINDOW_MS = 3000;

/**
 * Scrolls to the URL fragment after the app has painted.
 *
 * The browser resolves `#contact` before React has rendered anything, so the
 * target does not exist yet and the visitor lands on the hero instead. Every
 * shared link, every copied nav URL and every deep link an AI assistant cites
 * depends on this running once the sections are actually in the document.
 *
 * One jump is not enough. `document.fonts.ready` resolves immediately when no
 * font has been requested yet, webfonts and images land after first paint, and
 * the canvas takes its height from a container that is still collapsing — so an
 * early jump computes an offset against a page a fraction of its final height
 * and stops thousands of pixels short. The landing is therefore corrected
 * whenever the document resizes, until it holds still or the visitor takes over.
 */
export function useHashScroll() {
  useEffect(() => {
    const target = resolveHashTarget();
    if (!target) return;

    let cancelled = false;
    let frame = 0;

    // The jump is instant, not smooth: on a cold deep link the visitor has not
    // seen the page yet, so there is no position to animate away from — and
    // animating 11,000px past every section is worse than arriving.
    //
    // "instant", not "auto": `auto` defers to CSS, and `html` here carries
    // `scroll-behavior: smooth`. Every correction below would then restart a
    // smooth animation instead of finishing the last one, and the page would
    // settle a few hundred pixels down from the top having never arrived.
    const jump = () => {
      if (cancelled) return;
      frame = requestAnimationFrame(() => {
        if (cancelled) return;
        target.scrollIntoView({ behavior: "instant", block: "start" });
      });
    };

    // Any deliberate scroll ends the correction: fighting the visitor for the
    // viewport is worse than landing in the wrong place.
    const release = () => {
      if (cancelled) return;
      cancelled = true;
      cleanup();
    };

    const observer = new ResizeObserver(jump);
    observer.observe(document.documentElement);

    const settleTimer = window.setTimeout(release, SETTLE_WINDOW_MS);

    function cleanup() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.clearTimeout(settleTimer);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchstart", release);
      window.removeEventListener("keydown", release);
      window.removeEventListener("load", jump);
    }

    window.addEventListener("wheel", release, { passive: true, once: true });
    window.addEventListener("touchstart", release, { passive: true, once: true });
    window.addEventListener("keydown", release, { once: true });

    settled().then(jump);
    if (document.readyState !== "complete") {
      window.addEventListener("load", jump, { once: true });
    }
    jump();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);
}

/**
 * Resolves once webfonts have settled, and never hangs: a font that fails to
 * load must not cost the visitor the scroll.
 */
function settled(): Promise<unknown> {
  if (!document.fonts) return Promise.resolve();
  return Promise.race([
    document.fonts.ready,
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]);
}

function resolveHashTarget(): HTMLElement | null {
  const raw = window.location.hash.slice(1);
  if (!raw) return null;

  let id = raw;
  try {
    id = decodeURIComponent(raw);
  } catch {
    // Malformed percent-encoding — fall back to the raw fragment.
  }

  // getElementById, not querySelector: a fragment is arbitrary user input and
  // must never be parsed as a selector.
  return document.getElementById(id);
}
