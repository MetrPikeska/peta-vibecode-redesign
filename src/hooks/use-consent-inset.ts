import { useEffect } from "react";

const BANNER_ID = "gdpr-toolkit-banner";
const CSS_VAR = "--consent-inset";

/**
 * Publishes the height the consent banner occupies as a CSS custom property,
 * so layout can reserve that space instead of putting content behind it.
 *
 * The banner is injected by a third party after load, is `position: fixed`, and
 * disappears for good once answered — so the value is observed rather than
 * assumed, and falls back to 0 the moment the element leaves the document.
 */
export function useConsentInset() {
  useEffect(() => {
    const root = document.documentElement;

    const clear = () => root.style.removeProperty(CSS_VAR);

    const measure = (banner: HTMLElement) => {
      const height = banner.getBoundingClientRect().height;
      if (height <= 0) return clear();
      // The gap the vendor leaves below itself counts too, or the reservation
      // stops exactly at the banner's edge with nothing to breathe into.
      const gap = parseFloat(getComputedStyle(banner).bottom) || 0;
      root.style.setProperty(CSS_VAR, `${Math.round(height + gap)}px`);
    };

    let resizeObserver: ResizeObserver | null = null;

    const attach = () => {
      const banner = document.getElementById(BANNER_ID);
      if (!banner) {
        resizeObserver?.disconnect();
        resizeObserver = null;
        clear();
        return;
      }
      if (resizeObserver) return;
      measure(banner);
      resizeObserver = new ResizeObserver(() => measure(banner));
      resizeObserver.observe(banner);
    };

    attach();

    // The banner arrives — and later leaves — on the third party's schedule.
    const domObserver = new MutationObserver(attach);
    domObserver.observe(document.body, { childList: true });

    return () => {
      domObserver.disconnect();
      resizeObserver?.disconnect();
      clear();
    };
  }, []);
}
