import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Datum posledniho buildu. Zapisuje se sem, ne do content.ts, aby ho nesla
  // sama akce nasazeni a nemohlo zestarat tim, ze ho nekdo zapomene prepsat.
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
