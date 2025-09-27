import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index-[hash]-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.js`,
        chunkFileNames: `assets/[name]-[hash]-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.js`,
        assetFileNames: `assets/[name]-[hash]-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.[ext]`,
        manualChunks: {
          // Core React and framework
          'react-vendor': ['react', 'react-dom'],
          // UI Components
          'ui-components': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          // Icons
          'icons': ['lucide-react'],
          // Utils
          'utils': ['clsx', 'tailwind-merge'],
          // Marketing components
          'marketing': [
            './src/components/marketing/ModernHero.tsx',
            './src/components/marketing/ModernNavbar.tsx',
            './src/components/marketing/ModernLiveDemo.tsx'
          ],
          // Legal pages
          'legal': [
            './src/pages/PrivacyPolicy.tsx',
            './src/pages/TermsOfService.tsx',
            './src/pages/RefundPolicy.tsx',
            './src/pages/CookiePolicy.tsx'
          ]
        }
      }
    },
    // Optimize bundle size
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
