import type { SkillCategory } from "@/data/content";

/**
 * Numbers the instrument surface is allowed to display.
 *
 * The layout puts figures in monumental type, which is exactly the pressure
 * that invites inventing them. Everything here is *derived* from the content
 * layer instead — countable, checkable, and wrong only if the content is wrong.
 * A self-assessed "proficiency" would look identical on screen and mean nothing,
 * so no such value exists in this module by design.
 */

/** Distinct tools across every skill category — one tool counted once. */
export function toolCount(skills: SkillCategory[]): number {
  const seen = new Set<string>();
  for (const category of skills) {
    for (const item of category.items) seen.add(item.toLowerCase());
  }
  return seen.size;
}

export interface PlottedCategory {
  name: string;
  count: number;
  /** Bar width, as a CSS percentage string. Never fully collapses. */
  strength: string;
}

/**
 * Scales each category against the largest one. The floor is 4%: a category
 * with a single entry still has to draw a mark, or the strip reads as missing
 * data rather than as a small quantity.
 */
export function plotCategories(skills: SkillCategory[]): PlottedCategory[] {
  const max = skills.reduce((peak, c) => Math.max(peak, c.items.length), 0) || 1;
  return skills.map((category) => ({
    name: category.name,
    count: category.items.length,
    strength: `${Math.max(4, Math.round((category.items.length / max) * 100))}%`,
  }));
}

/**
 * The seven cells of the selector strip: the largest categories, ties broken by
 * the order they appear in `content.ts` so the strip is identical on every load
 * and in both languages.
 */
export function selectorCells(skills: SkillCategory[], size = 7): PlottedCategory[] {
  return plotCategories(skills)
    .map((category, index) => ({ category, index }))
    .sort((a, b) => b.category.count - a.category.count || a.index - b.index)
    .slice(0, size)
    .map(({ category }) => category);
}
