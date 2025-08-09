import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { start } from '@docusaurus/core/lib/commands/start/start.js';
import { prepareRequire } from '../utils/require-polyfill.mjs';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const siteDir = resolve(rootDir, '.docs');

prepareRequire(import.meta.url);

await start(siteDir, {
  open: false,
});
