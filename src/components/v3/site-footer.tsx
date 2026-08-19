import { footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";

export function SiteFooter() {
  const { ui } = useContent();

  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {footer.name} · {footer.address} · {footer.zip} · {ui.footer.icoLabel}:{" "}
          {footer.ico}
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {/* A visible, machine-readable freshness signal. An undated page reads
              as abandoned to a reader and carries no recency signal to a model
              deciding whether it is still worth citing. The value comes from
              `define` at build time, so it cannot drift from the deployment. */}
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
