import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { start } from '@docusaurus/core/lib/commands/start/start.js';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteDir = resolve(rootDir, '.docs');

await start(siteDir, {
  open: false,
});
