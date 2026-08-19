/**
 * Light/dark for the shadcn surface (v3).
 *
 * The starter template ships a `.dark` token block but no way to reach it, so
 * the switch is supplied here. It is a module-level store rather than a React
 * context because two unrelated places read it — the nav renders the toggle,
 * the page hands the toaster its theme — and a provider wrapping only v3 would
 * have to be threaded through `App.tsx`, which the other two systems share.
 *
 * The class goes on `<html>`, matching `@custom-variant dark (&:is(.dark *))`
 * in `index.css`. v1 and v2 declare no dark tokens, so a stale `.dark` left
 * behind by a previous visit changes nothing for them.
 */

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const listeners = new Set<() => void>();

let theme: Theme = "light";
let initialized = false;

/**
 * Reads the stored preference defensively: storage is absent during
 * prerendering, throws outright in some privacy modes, and holds a
 * user-writable value, so anything but a known theme falls back to the
 * operating system's own setting.
 */
function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Storage denied — fall through to the system preference.
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function apply(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
}

/** Resolves the initial theme once, on first read, and paints it. */
function ensureInitialized() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  theme = readStoredTheme();
  apply(theme);
}

export function getTheme(): Theme {
  ensureInitialized();
  return theme;
}

/** The value `useSyncExternalStore` uses on the server — never the DOM. */
export function getServerTheme(): Theme {
  return "light";
}

export function setTheme(next: Theme) {
  ensureInitialized();
  if (next === theme) return;
  theme = next;
  apply(next);
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage denied — the choice still holds for this visit.
  }
  for (const listener of listeners) listener();
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
