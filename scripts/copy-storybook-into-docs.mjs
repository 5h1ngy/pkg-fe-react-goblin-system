import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const storybookDir = resolve('dist/storybook')
const docsStorybookDir = resolve('dist/docs/storybook')

if (!existsSync(storybookDir)) {
  console.warn('[copy-storybook-into-docs] Skipped: dist/storybook not found.')
  process.exit(0)
}

mkdirSync(dirname(docsStorybookDir), { recursive: true })

cpSync(storybookDir, docsStorybookDir, { recursive: true })

console.log('[copy-storybook-into-docs] Copied dist/storybook → dist/docs/storybook')

