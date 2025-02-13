import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';
import tsconfigPaths from 'rollup-plugin-tsconfig-paths'; // 🔥 Aggiunto
import { createRequire } from 'module';
import json from '@rollup/plugin-json'; // 🔥 Importa il plugin JSON
import postcss from 'rollup-plugin-postcss'; // 🔥 Aggiunto per gestire i file CSS


const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.module, format: 'esm', sourcemap: true },
      { file: packageJson.main, format: 'cjs', sourcemap: true }
    ],
    plugins: [
      peerDepsExternal(),
      tsconfigPaths(), // 🔥 Aggiunto per gestire gli alias da tsconfig.json
      json(), // 🔥 Aggiunto supporto ai JSON
      resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.app.json',
        jsx: 'react'
      }),
      alias({
        entries: [
          { find: '@', replacement: path.resolve('src') },
          { find: '@components', replacement: path.resolve('src', 'components') },
          { find: '@layouts', replacement: path.resolve('src', 'layouts') },
          { find: '@providers', replacement: path.resolve('src', 'providers') },
          { find: '@hocs', replacement: path.resolve('src', 'hocs') },
          { find: '@store', replacement: path.resolve('src', 'store') },
        ]
      }),
      postcss(), // 🔥 Aggiunto per supportare il CSS
      terser()
    ],
    external: ['react', 'react-dom', 'gsap']
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];
