import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/landing_cd/',
  plugins: [react()],
  resolve: {
    alias: {
      "@/": "./assets/js/",
    },
  },
});
