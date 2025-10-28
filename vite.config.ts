import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = dirname(fileURLToPath(new URL(".", import.meta.url)));

// Minimal Vite configuration for Storybook and playground builds.
export default defineConfig({
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      "pkg-fe-react-goblin-system": resolve(projectDir, "packages/index.ts"),
      "pkg-fe-react-goblin-system/components": resolve(projectDir, "packages/components/index.ts"),
      "pkg-fe-react-goblin-system/foundations": resolve(projectDir, "packages/foundations/index.ts"),
      "pkg-fe-react-goblin-system/system": resolve(projectDir, "packages/system/index.ts"),
    },
  },
});
