import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configDir = resolve(rootDir, '.story');
const cliEntry = resolve(rootDir, 'node_modules/storybook/bin/index.cjs');

const child = spawn(process.execPath, [cliEntry, 'dev'], {
  cwd: rootDir,
  stdio: 'inherit',
  env: {
    ...process.env,
    CI: process.env.CI ?? '1',
    SBCONFIG_CONFIG_DIR: configDir,
    SBCONFIG_PORT: process.env.SBCONFIG_PORT ?? '6006',
  },
});

child.on('close', (code) => {
  process.exit(code ?? 0);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});
