import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { build } from '@docusaurus/core/lib/commands/build/build.js';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteDir = resolve(rootDir, '.docs');
const outDir = resolve(rootDir, 'dist/docs');

await build(siteDir, { outDir });
