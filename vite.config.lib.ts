import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";
import path from "path";

// Carica le variabili d'ambiente per la produzione (o specifica un file .env personalizzato)
dotenv.config({ path: `.env.production` });

export default defineConfig({
    base: process.env.VITE_BASENAME, // ad esempio "/"
    plugins: [
        react(),
        tsconfigPaths() // Rispetta i path definiti nel tsconfig.json
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"), // Punto d'ingresso della libreria
            name: "ReactGoblinSystem", // Nome globale della libreria (per UMD)
            fileName: (format) => `react-goblin-system.${format}.js`
        },
        rollupOptions: {
            // Externalizza le peer dependencies
            external: ["react", "react-dom", "@chakra-ui/react"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        },
        sourcemap: true
    }
});
