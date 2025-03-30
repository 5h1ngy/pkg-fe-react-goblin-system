import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";
import path from "path";
import dts from 'vite-plugin-dts';

// Carica variabili d'ambiente
dotenv.config({ path: `.env.production` });

export default defineConfig(({ mode }) => {
    dotenv.config({ path: `.env.${mode}` });
    console.log('env', `.env.${mode}`);

    const basePath = process.env.VITE_BASENAME || '';

    return {
        base: basePath,
        plugins: [
            react(),
            tsconfigPaths(),
            // Genera automaticamente i file .d.ts durante la build
            dts({
                outDir: 'dist/types',
                exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
                // Utilizziamo solo le opzioni supportate
                compilerOptions: {
                    skipLibCheck: true
                }
            }),
        ],
        build: {
            outDir: 'dist',
            sourcemap: mode === 'development',
            minify: mode === 'production' ? 'terser' : false,
            lib: {
                name: "react-goblin-system",
                formats: ['es'],
                fileName: (format, entryName) => `${entryName}.mjs`,
                // Usa un approccio più modulare per gli entry points - solo quelli che sappiamo esistere
                entry: {
                    // Entry point principale della libreria
                    "index": path.resolve(__dirname, "src/index.tsx"),
                    
                    // Moduli principali (con i file index.ts che abbiamo creato/verificato)
                    "components/index": path.resolve(__dirname, "src/components/index.ts"),
                    "pages/index": path.resolve(__dirname, "src/pages/index.ts"),
                    "providers/index": path.resolve(__dirname, "src/providers/index.ts"),
                    "services/index": path.resolve(__dirname, "src/services/index.ts"),
                    "store/index": path.resolve(__dirname, "src/store/index.ts"),
                    "theme/index": path.resolve(__dirname, "src/theme/index.ts"),
                },
            },
            rollupOptions: {
                external: [
                    'react', 
                    'react-dom', 
                    'styled-components',
                    '@reduxjs/toolkit',
                    'react-redux',
                    'react-router-dom',
                    'react-hook-form',
                    '@hookform/resolvers',
                    'zod',
                    'react-icons',
                    'react-icons/bi',
                    /^react-icons\/.*/,
                    'react-redux'  // Aggiungiamo 'react-redux' alla lista delle dipendenze esterne
                ],
                output: {
                    // Evita di includere le dipendenze esterne nel bundle
                    globals: {
                        'react': 'React',
                        'react-dom': 'ReactDOM',
                        'styled-components': 'styled',
                        '@reduxjs/toolkit': 'RTK',
                        'react-redux': 'ReactRedux',
                        'react-router-dom': 'ReactRouterDOM',
                        'react-hook-form': 'ReactHookForm',
                        '@hookform/resolvers': 'HookFormResolvers',
                        'zod': 'zod',
                        'react-icons': 'ReactIcons',
                        'react-icons/bi': 'ReactIconsBi'
                    },
                    // Preserva la struttura delle directory nel bundle
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                    // Formatta il nome dei chunks in modo più leggibile
                    chunkFileNames: (chunkInfo) => {
                        const id = chunkInfo.facadeModuleId || '';
                        if (!id) return 'chunks/[name]-[hash].mjs';
                        const match = id.match(/src\/(.+?)\.tsx?$/);
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
