import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});
