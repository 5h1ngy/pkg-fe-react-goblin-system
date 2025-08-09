import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from '@docusaurus/core/lib/commands/build/build.js';
import { prepareRequire } from '../utils/require-polyfill.mjs';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const siteDir = resolve(rootDir, '.docs');
const outDir = resolve(rootDir, 'dist/docs');

prepareRequire(import.meta.url);

if (process.env.DEBUG_DOCUSAURUS_POLYFILL === '1') {
  console.log('[polyfill] typeof require.resolveWeak:', typeof require.resolveWeak);
}

await build(siteDir, { outDir });
