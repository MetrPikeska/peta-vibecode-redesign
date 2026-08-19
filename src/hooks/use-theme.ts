import { useSyncExternalStore } from "react";
import {
  getServerTheme,
  getTheme,
  subscribe,
  toggleTheme,
  type Theme,
} from "@/lib/theme-store";

/** Subscribes a component to the v3 theme. See `lib/theme-store.ts`. */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  return { theme, toggle: toggleTheme };
}
