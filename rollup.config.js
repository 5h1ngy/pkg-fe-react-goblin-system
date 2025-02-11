import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

import packageJson from './package.json' assert { type: 'json' };

export default [
  // Primo oggetto: bundle .js (CJS + ESM)
  {
    input: 'src/index.ts',   // entry point del tuo pacchetto
    output: [
      {
        file: packageJson.main,   // es: "dist/index.cjs.js"
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module, // es: "dist/index.esm.js"
        format: 'esm',
        sourcemap: true,
      },
    ],
    // Riconosce le dipendenze (React, Chakra, etc.) come peer
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      // In genere si includono anche le 'dependencies' se vuoi escluderle dal bundle
      // ...Object.keys(packageJson.dependencies || {})
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      json(),
      typescript({
        tsconfig: './tsconfig.json',  // Assicurati punti al tuo tsconfig
      }),
    ],
  },

  // Secondo oggetto: generazione file .d.ts (tipi)
  {
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    // Imposta "external" per evitare di includere tipi di React e simili
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  },
]
