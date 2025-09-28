import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  base: "/",                 // custom domain => root ist korrekt
  build: {
    outDir: "dist",
    emptyOutDir: true,       // Dist vor Build leeren
    rollupOptions: {
      // WICHTIG: KEINE manualChunks bis alles stabil ist
      // Vite/rollup splittet selbst sinnvoll
    }
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  },
  plugins: [react()]
});