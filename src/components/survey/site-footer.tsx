import { CONTAINER } from "@/components/survey/sections";
import { footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

/** The legal strip on paper under the contact band. */
export function SiteFooter() {
  const { ui } = useContent();

  return (
    <footer>
      <div
        className={cn(
          CONTAINER,
          "flex flex-col gap-2 py-8 font-survey-mono text-xs text-ink-muted lg:flex-row lg:items-center lg:justify-between lg:gap-8",
        )}
      >
        <p className="lg:whitespace-nowrap">
          {footer.name} · {footer.address} · {footer.zip} · {ui.footer.icoLabel} {footer.ico}
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {/* Build date from `define` in vite.config.ts, so it cannot drift
              from the deployment. */}
          <time dateTime={__BUILD_DATE__}>
            {ui.footer.updated}: {__BUILD_DATE__}
          </time>
          <span aria-hidden="true">·</span>
          <span>{ui.footer.copyright}</span>
        </p>
      </div>
    </footer>
  );
}
