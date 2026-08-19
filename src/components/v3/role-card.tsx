import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/data/content";

/**
 * One position. Shared by the professional roles and the university projects —
 * both are `Experience` in the content layer, and the only structural
 * difference is the optional `project` line, so they render through one card
 * rather than two that drift apart.
 */
export function RoleCard({ entry }: { entry: Experience }) {
  return (
    <Card>
      <CardHeader className="gap-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <CardTitle className="text-base leading-snug">{entry.role}</CardTitle>
          <span className="shrink-0 text-xs text-muted-foreground sm:text-right">
            {entry.period}
          </span>
        </div>
        <div className="flex flex-col gap-0.5 text-sm sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-medium">{entry.company}</span>
          <span className="shrink-0 text-xs text-muted-foreground sm:text-right">
            {entry.location}
          </span>
        </div>
        {entry.project ? (
          <p className="mt-1 text-sm italic text-muted-foreground">
            {entry.project}
          </p>
        ) : null}
      </CardHeader>
      <CardContent>
        {/* Evidence, not metadata. Periods, locations and issuers stay muted;
            the sentences that carry the actual claim do not. */}
        <ul className="space-y-2 text-sm text-foreground/80">
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50"
                aria-hidden="true"
              />
              {highlight}
            </li>
          ))}
        </ul>
        {entry.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.links.map((link) => (
              <Button key={link.url} asChild variant="outline" size="sm">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight />
                </a>
              </Button>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
