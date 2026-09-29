/**
 * How the survey surface styles the markup in `content.ts`. Links carry the
 * survey blue with a hairline underline; the external-link arrow icon is
 * dropped because every link here already reads as a link by colour.
 */
export const SURVEY_RICH_TEXT = {
  linkClassName:
    "text-survey underline decoration-survey/40 underline-offset-4 hover:decoration-survey",
  boldClassName: "font-semibold text-ink",
  externalIcon: false,
} as const;
