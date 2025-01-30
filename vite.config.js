import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "brotliCompress" }), // Enable Brotli compression
    terser(),
  ],
});
