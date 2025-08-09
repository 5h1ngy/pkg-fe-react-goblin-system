import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from '@docusaurus/core/lib/commands/serve.js';
import { prepareRequire } from '../utils/require-polyfill.mjs';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const siteDir = resolve(rootDir, '.docs');
const outDir = resolve(rootDir, 'dist/docs');

prepareRequire(import.meta.url);

await serve(siteDir, {
  dir: outDir,
  build: false,
});
