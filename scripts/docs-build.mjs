import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const runnerPath = resolve(rootDir, 'scripts/internal/docs-build-runner.mjs');

const nodeMajor = Number.parseInt(process.versions.node.split('.')[0] ?? '0', 10);
const needsLegacyRuntime = Number.isFinite(nodeMajor) && nodeMajor > 20;

if (needsLegacyRuntime) {
  const isWin = process.platform === 'win32';
  const command = isWin ? 'cmd.exe' : 'npx';
  const args = isWin
    ? ['/c', 'npx', '--yes', '-p', 'node@20.18.0', 'node', runnerPath]
    : ['--yes', '-p', 'node@20.18.0', 'node', runnerPath];
  const child = spawn(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
    env: {
      ...process.env,
    },
  });

  child.on('close', (code) => {
    process.exit(code ?? 0);
  });

  child.on('error', (error) => {
    console.error(error);
    process.exit(1);
  });
} else {
  await import('./internal/docs-build-runner.mjs');
}
