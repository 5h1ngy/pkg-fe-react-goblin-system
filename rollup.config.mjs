import { readFileSync } from 'fs';
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import terser from '@rollup/plugin-terser';
import svgr from '@svgr/rollup';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import typescriptEngine from 'typescript';
import alias from '@rollup/plugin-alias';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entries = {
  components: path.resolve(__dirname, 'src/components/index.ts'),
  hocs: path.resolve(__dirname, 'src/hocs/index.ts'),
  layouts: path.resolve(__dirname, 'src/layouts/index.ts'),
  providers: path.resolve(__dirname, 'src/providers/index.ts'),
  store: path.resolve(__dirname, 'src/store/index.ts'),
};

const jsConfig = defineConfig(
  {
    input: entries,
    output: {
      dir: 'dist', // Utilizza "dir" invece di "file"
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      entryFileNames: '[name]/index.js', // Ogni entry verrà esportata in una cartella dedicata
    },
    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      external({ includeDependencies: true }),
      resolve({
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
      }),
      commonjs(),
      svgr(),
      url(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      typescript({
        tsconfig: './tsconfig.build.json',
        typescript: typescriptEngine,
        sourceMap: false,
        exclude: [
          'coverage',
          '.storybook',
          'storybook-static',
          'config',
          'dist',
          'node_modules/**',
          '*.cjs',
          '*.mjs',
          '**/__snapshots__/*',
          '**/.storybook/*',
          '**/__tests__',
          '**/*.test.js+(|x)',
          '**/*.test.ts+(|x)',
          '**/*.mdx',
          '**/*.story.ts+(|x)',
          '**/*.story.js+(|x)',
          '**/*.stories.ts+(|x)',
          '**/*.stories.js+(|x)',
          'setupTests.ts',
          'vite.config.ts',
          'vitest.config.ts',
        ],
      }),
      terser(),
    ],
  },
);

// Genera una configurazione dts separata per ogni categoria:
const dtsConfigs = Object.entries(entries).map(([key, entry]) =>
  defineConfig({
    input: entry,
    output: {
      file: `dist/${key}/index.d.ts`, // Unico file .d.ts per la categoria
      format: 'esm',
    },
    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      dts({
        tsconfig: './tsconfig.dts.json'
      })
    ],
  })
);

export default [jsConfig, ...dtsConfigs];