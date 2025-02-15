import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import alias from 'rollup-plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { fileURLToPath } from 'url';
import path from 'path';
import babel from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import json from '@rollup/plugin-json'; // 👈 Aggiunto

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    react(),
    peerDepsExternal(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }), // Aggiungi .tsx
    json(), // 👈 Aggiunto qui

    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      exclude: ['**/__tests__', '**/*.stories.tsx'],
      compilerOptions: {
        declaration: true,
        allowJs: true, // Permette di compilare anche file JS
        isolatedModules: true, // Forza una migliore compatibilità con Babel
        noImplicitAny: false,
      }
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Aggiunto .tsx
      babelHelpers: 'bundled',
      exclude: ['node_modules/**'] // Escludi TypeScript
    }),
    postcss({
      extract: true,
      modules: true,
      use: ['sass'],
    }),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') }
      ]
    })
  ],
  external: ['react', 'react-dom', '@chakra-ui/react']
};
