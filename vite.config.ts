import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["/offline.html"],

      workbox: {
        runtimeCaching: [
          {
            handler: "StaleWhileRevalidate",
            urlPattern: /\.(?:js|css|html)$/,
            options: {
              cacheName: "static-assets-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
        globDirectory: "./src",
        globPatterns: ["**/*.{js,css,html,png}"],
        navigateFallback: "/offline.html",
        navigationPreload: true,
      },

      manifest: {
        name: "Web App",
        short_name: "Web App",
        description: "Web App",
        theme_color: "#ffffff",
        // @ts-expect-error missing type property
        display_override: ["window-controls-overlay", "minimal-ui"],
        display: "standalone",

        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),

    visualizer({
      title: "App Bundle Size",
    }),
  ],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "/src/pages/"),
      "@components": path.resolve(__dirname, "/src/components/"),
      "@theme": path.resolve(__dirname, "/src/theme/"),
      "@icons": path.resolve(__dirname, "/src/icons/"),
      "@routes": path.resolve(__dirname, "/src/routes"),
      "@hooks": path.resolve(__dirname, "/src/hooks/"),
      "@config": path.resolve(__dirname, "/src/config.ts"),
      "@context": path.resolve(__dirname, "/src/context/"),
      "@utils": path.resolve(__dirname, "/src/utils/"),
      "@store": path.resolve(__dirname, "/src/store/"),
      "@api": path.resolve(__dirname, "/src/api/"),
      "@assets": path.resolve(__dirname, "/src/assets/"),
      "@constants": path.resolve(__dirname, "/src/constants/"),
      "@templates": path.resolve(__dirname, "/src/templates/"),
    },
  },
});
