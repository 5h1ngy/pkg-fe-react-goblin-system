import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Minimal Vite configuration for Storybook and playground builds.
export default defineConfig({
  base: "",
  plugins: [react(), tsconfigPaths()],
});
