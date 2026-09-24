import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// Cas posledniho buildu. Zapisuje se sem, ne do content.ts, aby ho nesla
// sama akce nasazeni a nemohlo zestarat tim, ze ho nekdo zapomene prepsat.
const buildTime = new Date().toISOString();

// JSON-LD v index.html dostava stejny cas jako paticka. Google u
// `ProfilePage.dateModified` chce DateTime s casovou zonou; samotne datum
// hlasi Search Console jako "Neplatna hodnota datetime".
const buildTimeInHtml: Plugin = {
  name: "build-time-in-html",
  transformIndexHtml: (html) => html.replaceAll("%BUILD_TIME%", buildTime),
};

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  define: {
    __BUILD_DATE__: JSON.stringify(buildTime.slice(0, 10)),
  },
  // Tailwind nema v prerender pruchodu co delat: nic v SSR grafu neimportuje
  // index.css a jeho vystup uz je v klientskem bundlu.
  plugins: isSsrBuild
    ? [react()]
    : [react(), tailwindcss(), buildTimeInHtml],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
