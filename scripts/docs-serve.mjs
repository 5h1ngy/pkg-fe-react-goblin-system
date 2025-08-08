import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { serve } from '@docusaurus/core/lib/commands/serve.js';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteDir = resolve(rootDir, '.docs');
const outDir = resolve(rootDir, 'dist/docs');

await serve(siteDir, {
  dir: outDir,
  build: false,
});
