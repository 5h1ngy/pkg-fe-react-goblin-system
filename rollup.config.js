import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import json from '@rollup/plugin-json'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts'

import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      json(),
      typescript({
        tsconfig: './tsconfig.app.json',
        include: ['src/**/*'],
        exclude: ['node_modules', '**/*.stories.tsx', '**/*.test.tsx'],
      }),
    ],
  },

  {
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  },
]
