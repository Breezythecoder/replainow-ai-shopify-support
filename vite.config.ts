import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  base: "/",                 // custom domain => root ist korrekt
  build: {
    outDir: "dist",
    emptyOutDir: true,       // Dist vor Build leeren
    sourcemap: true,         // Enable source maps for audit
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI Components (only include actually installed packages)
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-collapsible', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-hover-card', '@radix-ui/react-label', '@radix-ui/react-menubar', '@radix-ui/react-navigation-menu', '@radix-ui/react-popover', '@radix-ui/react-progress', '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-slot', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          // Utility libraries
          'utils-vendor': ['class-variance-authority', 'clsx', 'tailwind-merge', 'lucide-react'],
          // Query and state management
          'query-vendor': ['@tanstack/react-query'],
          // SEO and analytics
          'seo-vendor': ['react-helmet-async']
        }
      }
    }
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  },
  plugins: [react()]
});