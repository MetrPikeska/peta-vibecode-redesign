import { useEffect, useRef, useState } from "react";
import { DetectionCta } from "@/components/survey/detection-cta";
import { SECTIONS, type SectionKey } from "@/components/survey/sections";
import { hero } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

/**
 * Sticky survey bar: the name as the mark, five mono destinations with a
 * waypoint dot under the section in view, language and the CV bracket.
 *
 * The active section starts as `null`, so the prerendered markup and the
 * first client render carry no dot and hydrate cleanly; the observer only
 * exists after mount.
 */
export function SiteNav() {
  const { ui } = useContent();
  const { lang, toggle } = useLanguage();
  const [active, setActive] = useState<SectionKey | null>(null);
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    setActive("about");

    const targets = SECTIONS.map((key) => document.getElementById(key)).filter(
      (el): el is HTMLElement => el !== null,
    );

    // A thin band a third of the way down the viewport: whichever section
    // crosses it is the one being read.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const key = SECTIONS.find((section) => section === entry.target.id);
          if (key) setActive(key);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-hairline bg-paper/85 backdrop-blur">
      <div className="flex h-full w-full items-center gap-4 px-6 md:px-10">
        <a href="#top" className="shrink-0 text-sm font-semibold tracking-tight">
          {hero.name}
        </a>

        <nav className="hidden flex-1 justify-center md:flex">
          <ol className="flex items-center gap-5 lg:gap-8">
            {SECTIONS.map((key, index) => {
              const current = active === key;
              return (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    aria-current={current ? "location" : undefined}
                    className={cn(
                      "relative inline-flex h-11 items-center gap-1.5 font-survey-mono text-xs lowercase",
                      current ? "text-ink" : "text-ink-muted hover:text-ink",
                    )}
                  >
                    <span aria-hidden="true" className="text-ink-muted/70">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {ui.v4.nav[key]}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-survey transition-transform duration-200 motion-reduce:transition-none",
                        current ? "scale-100" : "scale-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={toggle}
            aria-label={ui.a11y.switchLanguage}
            className="inline-flex h-11 min-w-11 items-center justify-center font-survey-mono text-xs text-ink-muted hover:text-ink"
          >
            {lang === "cs" ? "EN" : "CS"}
          </button>

          <DetectionCta href={hero.cvUrl} size="sm" external>
            {ui.v4.downloadCv}
          </DetectionCta>

          {/* A native disclosure instead of a dialog: five links do not need
              focus trapping, and it works before hydration. */}
          <details ref={menuRef} className="group md:hidden">
            <summary className="inline-flex h-11 cursor-pointer list-none items-center px-2 font-survey-mono text-xs lowercase text-ink [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">{ui.v4.menu.open}</span>
              <span className="hidden group-open:inline">{ui.v4.menu.close}</span>
            </summary>
            <nav className="absolute inset-x-0 top-full border-b border-hairline bg-paper px-6 py-3">
              <ol>
                {SECTIONS.map((key, index) => (
                  <li key={key} className="border-b border-hairline last:border-b-0">
                    <a
                      href={`#${key}`}
                      onClick={closeMenu}
                      className="flex h-12 items-center gap-3 font-survey-mono text-sm lowercase"
                    >
                      <span aria-hidden="true" className="text-ink-muted">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {ui.v4.nav[key]}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
