/**
 * Vlozi build-time render aplikace do `dist/index.html`.
 *
 * Bezi az po obou Vite pruchodech: klientsky build uz zapsal `dist/index.html`
 * s hashovanym <script> a odkazem na stylesheet, SSR pruchod zapsal
 * `dist-ssr/entry-server.js`. Skript sahne vyhradne na obsah `<div id="root">`
 * — hlavicka (theme skript, gtag, CMP, JSON-LD graf, ikony) zustava presne
 * tak, jak ji Vite vydal.
 *
 * Duvod existence: stranka byla ciste klientsky renderovana, takze crawler,
 * ktery nespousti JS, videl jen prazdny #root. `llms.txt` to resil pro LLM,
 * ale ne pro vyhledavace.
 */
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(root, "dist/index.html");
const MARKER = '<div id="root"></div>';

const { render } = await import(
  pathToFileURL(resolve(root, "dist-ssr/entry-server.js")).href
);

const shell = readFileSync(htmlPath, "utf8");
if (!shell.includes(MARKER)) {
  throw new Error(`prerender: '${MARKER}' nenalezen v dist/index.html`);
}

const app = render();

// Pojistky, ne ozdoba. Prerender, ktery tise vyprodukuje prazdny retezec,
// nasadi stranku k nerozeznani od te predchozi a regrese se odhali az ve chvili,
// kdy nekdo za pul roku zjisti, ze web zase neni videt.
if (app.length < 10_000) {
  throw new Error(`prerender: podezrele maly render (${app.length} B)`);
}
if (!app.includes("Petr Mikeska")) {
  throw new Error("prerender: vykresleny markup neobsahuje jmeno majitele webu");
}

writeFileSync(htmlPath, shell.replace(MARKER, `<div id="root">${app}</div>`), "utf8");
rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true });

console.log(
  `dist/index.html — ${shell.length} B shell + ${app.length} B prerendered`,
);
