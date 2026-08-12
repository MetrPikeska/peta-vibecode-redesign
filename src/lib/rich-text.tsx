import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** `**bold**` or `[label](url)` — matched in one pass so both can mix in a sentence. */
const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Renders the light markup used inside copy in `content.ts`, so text keeps
 * emphasis and links without moving out of the data layer.
 */
export function renderRichText(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(TOKEN)) {
    const [raw, bold, label, url] = match;
    const start = match.index ?? 0;

    if (start > cursor) nodes.push(text.slice(cursor, start));

    if (bold) {
      nodes.push(
        <strong key={start} className="font-semibold text-foreground">
          {bold}
        </strong>,
      );
    } else {
      nodes.push(
        <a
          key={start}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-topo underline decoration-topo/30 underline-offset-4 hover:decoration-topo transition-colors"
        >
          {label}
          <ArrowUpRight
            className="inline-block w-3 h-3 ml-0.5 align-[-0.05em]"
            aria-hidden="true"
          />
        </a>,
      );
    }

    cursor = start + raw.length;
  }

  if (nodes.length === 0) return text;
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}
