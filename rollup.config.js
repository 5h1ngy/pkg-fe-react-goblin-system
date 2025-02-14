import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false, // Disabilita il comportamento di default
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      modules: true,
      use: ['sass'],
    }),
    json(), // Permette a Rollup di importare file JSON

  ],
  external: [
    'react',
    'react-dom',
    '@chakra-ui/react',
    '@ark-ui/react',
    'next-themes'
  ],
};
