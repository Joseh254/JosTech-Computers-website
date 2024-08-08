import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
  },
  build: {
    outDir: "build", // Change the output directory from "dist" to "build"
  },
});
