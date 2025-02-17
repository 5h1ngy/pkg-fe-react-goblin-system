import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

dotenv.config({ path: `.env.production` });

export default defineConfig({
    base: process.env.VITE_BASENAME,
    plugins: [
        react(),
        tsconfigPaths()
    ],
    build: {
        sourcemap: false,
        minify: 'terser',
        lib: {
            name: "react-goblin-system",
            formats: ['cjs', 'es'],
            fileName: (format, entryName) => {
                const ext = format === 'cjs' ? 'cjs' : 'mjs';
                return `${entryName}.${ext}`;
            },
            entry: {
                // index: path.resolve(__dirname, "src/index.ts"),
                "components/Factory/DynamicForm/index": path.resolve(__dirname, "src/components/Factory/DynamicForm/index.ts"),
                "components/SectionCard/index": path.resolve(__dirname, "src/components/SectionCard/index.ts"),
                "components/SectionCardRow/index": path.resolve(__dirname, "src/components/SectionCardRow/index.ts"),
            },
        },
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
            format: {
                comments: false,
            },
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "@chakra-ui/react"
            ],
            output: {
                plugins: [
                    // visualizer({ open: false })
                ],
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
                assetFileNames: (assetInfo) =>
                    assetInfo.name && assetInfo.name.endsWith('.css')
                        ? 'index.css'
                        : assetInfo.name || '[name]-[hash][extname]'
            }
        }
    }
});
