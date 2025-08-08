import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const targets = [resolve(rootDir, 'dist')];

await Promise.all(
  targets.map((path) => rm(path, { recursive: true, force: true })),
);
