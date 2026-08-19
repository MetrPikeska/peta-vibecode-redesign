import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * `**[label](url)**`, `**bold**` or `[label](url)` — matched in one pass so all
 * three can mix in a sentence.
 *
 * The bold-link alternative comes first and must stay there: `**([^*]+)**`
 * would otherwise swallow `**[VečerkaPlus](https://vecerkaplus.cz/)**` whole
 * and print the brackets and the URL as emphasised text.
 */
const TOKEN =
  /\*\*\[([^\]]+)\]\(([^)\s]+)\)\*\*|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

interface RichTextOptions {
  /** Classes for a link. The default belongs to the topographic system (v1). */
  linkClassName?: string;
  boldClassName?: string;
  /** The instrument system has no icon set — its links are underlines only. */
  externalIcon?: boolean;
}

const DEFAULTS: Required<RichTextOptions> = {
  linkClassName:
    "text-topo underline decoration-topo/30 underline-offset-4 hover:decoration-topo transition-colors",
  boldClassName: "font-semibold text-foreground",
  externalIcon: true,
};

/**
 * Renders the light markup used inside copy in `content.ts`, so text keeps
 * emphasis and links without moving out of the data layer.
 *
 * The two design systems style the same strings differently, so presentation is
 * passed in rather than baked here — the markup stays one implementation.
 */
export function renderRichText(text: string, options?: RichTextOptions): ReactNode {
  const { linkClassName, boldClassName, externalIcon } = { ...DEFAULTS, ...options };
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(TOKEN)) {
    const [raw, boldLinkLabel, boldLinkUrl, bold, label, url] = match;
    const start = match.index ?? 0;

    if (start > cursor) nodes.push(text.slice(cursor, start));

    if (bold) {
      nodes.push(
        <strong key={start} className={boldClassName}>
          {bold}
        </strong>,
      );
    } else {
      // A bold link keeps the link's own colour and carries the emphasis on an
      // inner `<strong>`; `boldClassName` sets a colour of its own and would
      // fight the link for it.
      const isBold = Boolean(boldLinkLabel);
      const linkText = boldLinkLabel ?? label;
      nodes.push(
        <a
          key={start}
          href={boldLinkUrl ?? url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {isBold ? <strong className="font-semibold">{linkText}</strong> : linkText}
          {externalIcon ? (
            <ArrowUpRight
              className="inline-block w-3 h-3 ml-0.5 align-[-0.05em]"
              aria-hidden="true"
            />
          ) : null}
        </a>,
      );
    }

    cursor = start + raw.length;
  }

  if (nodes.length === 0) return text;
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}
