import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
    return {
        base: '',
        plugins: [
            react(),
            tsconfigPaths(),
            // Genera automaticamente i file .d.ts durante la build
            dts({
                outDir: 'dist/lib/types',
                exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
                // Utilizziamo solo le opzioni supportate
                compilerOptions: {
                    skipLibCheck: true
                }
            }),
        ],
        build: {
            outDir: 'dist/lib',
            sourcemap: mode === 'development',
            minify: mode === 'production' ? 'terser' : false,
            lib: {
                name: "react-goblin-system",
                formats: ['es'],
                fileName: (format, entryName) => `${entryName}.mjs`,
                // Usa un approccio più modulare per gli entry points - solo quelli che sappiamo esistere
                entry: {
                    "index": path.resolve(__dirname, "packages/index.ts"),
                    "components/index": path.resolve(__dirname, "packages/components/index.ts"),
                },
            },
            rollupOptions: {
                external: [
                    'react', 
                    'react-dom', 
                    'styled-components',
                ],
                output: {
                    // Evita di includere le dipendenze esterne nel bundle
                    globals: {
                        'react': 'React',
                        'react-dom': 'ReactDOM',
                        'styled-components': 'styled',
                    },
                    // Preserva la struttura delle directory nel bundle
                    preserveModules: true,
                    preserveModulesRoot: 'packages',
                    // Formatta il nome dei chunks in modo più leggibile
                    chunkFileNames: (chunkInfo) => {
                        const id = chunkInfo.facadeModuleId || '';
                        if (!id) return 'chunks/[name]-[hash].mjs';
                        const match = id.match(/packages\/(.+?)\.tsx?$/);
                        return match ? `chunks/${match[1]}.mjs` : 'chunks/[name]-[hash].mjs';
                    },
                    // Ottimizza i nomi dei file asset
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.name) {
                            const { name } = path.parse(assetInfo.name);
                            return `assets/${name}[extname]`;
                        }
                        return 'assets/[name]-[hash][extname]';
                    }
                }
            },
            // Opzioni Terser per la minificazione
            terserOptions: {
                compress: {
                    drop_console: mode === 'production',
                    drop_debugger: mode === 'production'
                }
            }
        }
    }
});
