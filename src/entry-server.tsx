import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

/**
 * The build-time render. `scripts/prerender.mjs` calls this and injects the
 * result into `dist/index.html`, so a crawler that runs no JavaScript sees the
 * whole page instead of an empty `<div id="root">`.
 *
 * Deliberately does not import `index.css`: the client build already emits the
 * stylesheet and its `<link>`, and pulling it in here would make the SSR bundle
 * carry a second copy of Tailwind's output for no one to read.
 *
 * `StrictMode` is kept so the tree matches `main.tsx` exactly. It renders no
 * DOM of its own, but React's `useId` numbering walks the whole tree — and the
 * ids in this markup have to be the ones hydration expects.
 */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
