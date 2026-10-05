/**
 * Bakes the rendered /bp/ thesis page into `public/bp/index.html`.
 *
 * /bp/ is a prebuilt bundle whose source does not live in this repository, so
 * it cannot join the SSR prerender. Its bundle mounts with `createRoot`, which
 * replaces whatever `#root` holds, so a static copy of the rendered DOM is safe:
 * a crawler without JavaScript reads the thesis text, a browser re-renders it.
 *
 * Needs a local Chrome, so it is not part of `npm run build`. Rerun it by hand
 * when /bp/ changes: `node scripts/snapshot-bp.mjs [url]` (default: the live
 * page; `npm run preview` + `http://localhost:4173/bp/` works as well).
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const file = resolve(here, "../public/bp/index.html");
const url = process.argv[2] ?? "https://petrmikeska.cz/bp/";

const dom = execFileSync(
  "google-chrome",
  ["--headless=new", "--disable-gpu", "--virtual-time-budget=8000", "--dump-dom", url],
  { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
);

const match = dom.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/);
if (!match || match[1].length < 10_000) {
  throw new Error(`snapshot-bp: ${url} rendered no usable #root`);
}

// Motion leaves elements below the fold at `opacity: 0`; drop those inline
// styles so the snapshot is readable before the bundle runs.
const inner = match[1].replace(/ style="(?:opacity|transform)[^"]*"/g, "").trim();

const html = readFileSync(file, "utf8").replace(
  /<div id="root">[\s\S]*<\/div>(\s*<\/body>)/,
  `<div id="root">${inner}</div>$1`,
);
writeFileSync(file, html);
console.log(`snapshot-bp: ${inner.length} bytes into public/bp/index.html`);
