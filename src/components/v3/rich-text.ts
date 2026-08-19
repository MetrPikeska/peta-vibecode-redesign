/**
 * How the v3 surface styles the markup in `content.ts`.
 *
 * `renderRichText` takes presentation as an argument precisely so the same
 * strings can carry emphasis and links in three different systems — the
 * defaults in `lib/rich-text.tsx` belong to v1 and would paint topo green here.
 */
export const V3_RICH_TEXT = {
  linkClassName:
    "font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground",
  boldClassName: "font-semibold text-foreground",
  externalIcon: true,
} as const;
