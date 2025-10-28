import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages'),
      'pkg-fe-react-goblin-system': path.resolve(__dirname, 'packages/index.ts'),
      'pkg-fe-react-goblin-system/components': path.resolve(
        __dirname,
        'packages/components/index.ts',
      ),
      'pkg-fe-react-goblin-system/foundations': path.resolve(
        __dirname,
        'packages/foundations/index.ts',
      ),
      'pkg-fe-react-goblin-system/system': path.resolve(__dirname, 'packages/system/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.tsx'],
    include: ['packages/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'html'],
      include: ['packages/**/*.{ts,tsx}'],
      exclude: [
        '**/*.stories.{ts,tsx}',
        '**/*.style.{ts,tsx}',
        '**/*.types.{ts,tsx}',
        '**/index.{ts,tsx}',
        '**/__tests__/**',
        '**/*.d.ts',
      ],
    },
  },
})
