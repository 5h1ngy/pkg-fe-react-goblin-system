import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

dotenv.config({ path: `.env.production` });

export default defineConfig(({ mode }) => {
    dotenv.config({ path: `.env.${mode}` });
    console.log('env', `.env.${mode}`);

    return {
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
                formats: [
                    /** 'cjs', */
                    'es',
                ],
                fileName: (format, entryName) => `${entryName}.${format === 'cjs' ? 'cjs' : 'mjs'}`,
                entry: {
                    "components/Factory/Chakra/accordion": path.resolve(__dirname, "src/components/Factory/Chakra/accordion.tsx"),
                    "components/Factory/Chakra/action-bar": path.resolve(__dirname, "src/components/Factory/Chakra/action-bar.tsx"),
                    "components/Factory/Chakra/alert": path.resolve(__dirname, "src/components/Factory/Chakra/alert.tsx"),
                    "components/Factory/Chakra/avatar": path.resolve(__dirname, "src/components/Factory/Chakra/avatar.tsx"),
                    "components/Factory/Chakra/blockquote": path.resolve(__dirname, "src/components/Factory/Chakra/blockquote.tsx"),
                    "components/Factory/Chakra/breadcrumb": path.resolve(__dirname, "src/components/Factory/Chakra/breadcrumb.tsx"),
                    "components/Factory/Chakra/button": path.resolve(__dirname, "src/components/Factory/Chakra/button.tsx"),
                    "components/Factory/Chakra/checkbox": path.resolve(__dirname, "src/components/Factory/Chakra/checkbox.tsx"),
                    "components/Factory/Chakra/checkbox-card": path.resolve(__dirname, "src/components/Factory/Chakra/checkbox-card.tsx"),
                    "components/Factory/Chakra/clipboard": path.resolve(__dirname, "src/components/Factory/Chakra/clipboard.tsx"),
                    "components/Factory/Chakra/close-button": path.resolve(__dirname, "src/components/Factory/Chakra/close-button.tsx"),
                    "components/Factory/Chakra/color-mode": path.resolve(__dirname, "src/components/Factory/Chakra/color-mode.tsx"),
                    "components/Factory/Chakra/data-list": path.resolve(__dirname, "src/components/Factory/Chakra/data-list.tsx"),
                    "components/Factory/Chakra/dialog": path.resolve(__dirname, "src/components/Factory/Chakra/dialog.tsx"),
                    "components/Factory/Chakra/drawer": path.resolve(__dirname, "src/components/Factory/Chakra/drawer.tsx"),
                    "components/Factory/Chakra/empty-state": path.resolve(__dirname, "src/components/Factory/Chakra/empty-state.tsx"),
                    "components/Factory/Chakra/field": path.resolve(__dirname, "src/components/Factory/Chakra/field.tsx"),
                    "components/Factory/Chakra/file-button": path.resolve(__dirname, "src/components/Factory/Chakra/file-button.tsx"),
                    "components/Factory/Chakra/hover-card": path.resolve(__dirname, "src/components/Factory/Chakra/hover-card.tsx"),
                    "components/Factory/Chakra/input-group": path.resolve(__dirname, "src/components/Factory/Chakra/input-group.tsx"),
                    "components/Factory/Chakra/link-button": path.resolve(__dirname, "src/components/Factory/Chakra/link-button.tsx"),
                    "components/Factory/Chakra/menu": path.resolve(__dirname, "src/components/Factory/Chakra/menu.tsx"),
                    "components/Factory/Chakra/native-select": path.resolve(__dirname, "src/components/Factory/Chakra/native-select.tsx"),
                    "components/Factory/Chakra/number-input": path.resolve(__dirname, "src/components/Factory/Chakra/number-input.tsx"),
                    "components/Factory/Chakra/pagination": path.resolve(__dirname, "src/components/Factory/Chakra/pagination.tsx"),
                    "components/Factory/Chakra/password-input": path.resolve(__dirname, "src/components/Factory/Chakra/password-input.tsx"),
                    "components/Factory/Chakra/pin-input": path.resolve(__dirname, "src/components/Factory/Chakra/pin-input.tsx"),
                    "components/Factory/Chakra/popover": path.resolve(__dirname, "src/components/Factory/Chakra/popover.tsx"),
                    "components/Factory/Chakra/progress": path.resolve(__dirname, "src/components/Factory/Chakra/progress.tsx"),
                    "components/Factory/Chakra/progress-circle": path.resolve(__dirname, "src/components/Factory/Chakra/progress-circle.tsx"),
                    "components/Factory/Chakra/prose": path.resolve(__dirname, "src/components/Factory/Chakra/prose.tsx"),
                    "components/Factory/Chakra/provider": path.resolve(__dirname, "src/components/Factory/Chakra/provider.tsx"),
                    "components/Factory/Chakra/radio": path.resolve(__dirname, "src/components/Factory/Chakra/radio.tsx"),
                    "components/Factory/Chakra/radio-card": path.resolve(__dirname, "src/components/Factory/Chakra/radio-card.tsx"),
                    "components/Factory/Chakra/rating": path.resolve(__dirname, "src/components/Factory/Chakra/rating.tsx"),
                    "components/Factory/Chakra/segmented-control": path.resolve(__dirname, "src/components/Factory/Chakra/segmented-control.tsx"),
                    "components/Factory/Chakra/select": path.resolve(__dirname, "src/components/Factory/Chakra/select.tsx"),
                    "components/Factory/Chakra/skeleton": path.resolve(__dirname, "src/components/Factory/Chakra/skeleton.tsx"),
                    "components/Factory/Chakra/slider": path.resolve(__dirname, "src/components/Factory/Chakra/slider.tsx"),
                    "components/Factory/Chakra/stat": path.resolve(__dirname, "src/components/Factory/Chakra/stat.tsx"),
                    "components/Factory/Chakra/status": path.resolve(__dirname, "src/components/Factory/Chakra/status.tsx"),
                    "components/Factory/Chakra/stepper-input": path.resolve(__dirname, "src/components/Factory/Chakra/stepper-input.tsx"),
                    "components/Factory/Chakra/steps": path.resolve(__dirname, "src/components/Factory/Chakra/steps.tsx"),
                    "components/Factory/Chakra/switch": path.resolve(__dirname, "src/components/Factory/Chakra/switch.tsx"),
                    "components/Factory/Chakra/tag": path.resolve(__dirname, "src/components/Factory/Chakra/tag.tsx"),
                    "components/Factory/Chakra/timeline": path.resolve(__dirname, "src/components/Factory/Chakra/timeline.tsx"),
                    "components/Factory/Chakra/toaster": path.resolve(__dirname, "src/components/Factory/Chakra/toaster.tsx"),
                    "components/Factory/Chakra/toggle": path.resolve(__dirname, "src/components/Factory/Chakra/toggle.tsx"),
                    "components/Factory/Chakra/toggle-tip": path.resolve(__dirname, "src/components/Factory/Chakra/toggle-tip.tsx"),
                    "components/Factory/Chakra/tooltip": path.resolve(__dirname, "src/components/Factory/Chakra/tooltip.tsx"),

                    "components/Factory/DynamicForm/index": path.resolve(__dirname, "src/components/Factory/DynamicForm/index.ts"),

                    "components/LiquidSearchForm/index": path.resolve(__dirname, "src/components/LiquidSearchForm/index.ts"),
                    "components/LiquidTable/index": path.resolve(__dirname, "src/components/LiquidTable/index.ts"),
                    "components/LoginForm/index": path.resolve(__dirname, "src/components/LoginForm/index.ts"),
                    "components/RegisterForm/index": path.resolve(__dirname, "src/components/RegisterForm/index.ts"),
                    "components/SectionCard/index": path.resolve(__dirname, "src/components/SectionCard/index.ts"),
                    "components/SectionCardRow/index": path.resolve(__dirname, "src/components/SectionCardRow/index.ts"),
                    "components/StyledMarkdown/index": path.resolve(__dirname, "src/components/StyledMarkdown/index.ts"),

                    "hocs/withRouter": path.resolve(__dirname, "src/hocs/withRouter.tsx"),

                    "layouts/Error/index": path.resolve(__dirname, "src/layouts/Error/index.ts"),
                    "layouts/Loading/index": path.resolve(__dirname, "src/layouts/Loading/index.ts"),
                    "layouts/Transformer/index": path.resolve(__dirname, "src/layouts/Transformer/index.ts"),

                    "providers/Auth/index": path.resolve(__dirname, "src/providers/Auth/index.ts"),
                    "providers/Theme": path.resolve(__dirname, "src/providers/Theme.tsx"),

                    "services/auth": path.resolve(__dirname, "src/services/auth/index.ts"),
                    "services/handlers": path.resolve(__dirname, "src/services/handlers.ts"),
                    "services/types": path.resolve(__dirname, "src/services/types.ts"),

                    "store/auth": path.resolve(__dirname, "src/store/auth/index.ts"),
                    "store/shared": path.resolve(__dirname, "src/store/shared.ts"),
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
                    "@chakra-ui/react",
                    "react-router-dom",
                    "zod",
                ],
                output: {
                    plugins: [
                        visualizer({ open: false, filename: 'dist/stats.html' })
                    ],

                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
                    },

                    chunkFileNames: () =>
                        `.chunks/[hash].js`,

                    assetFileNames: (asset) => asset.name && asset.name.endsWith('.css')
                        ? 'styles/[name][extname]'
                        : '[name][extname]',
                }
            }
        }
    }
});
