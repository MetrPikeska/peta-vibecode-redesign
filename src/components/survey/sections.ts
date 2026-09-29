/**
 * The five destinations, in reading order. The keys are the anchor ids and
 * index `ui.v4.nav`, which also supplies the section headings, so a label and
 * the heading it leads to never disagree.
 */
export const SECTIONS = [
  "about",
  "experience",
  "portfolio",
  "services",
  "contact",
] as const;

export type SectionKey = (typeof SECTIONS)[number];

/** One content column for every section on the surface. */
export const CONTAINER = "mx-auto w-full max-w-6xl px-6 md:px-10";
