import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => ({
  base: '',
  plugins: [
    react(),
    dts({
      outDir: 'dist/lib/types',
      exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
      compilerOptions: {
        skipLibCheck: true,
      },
    }),
  ],
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
      'pkg-fe-react-goblin-system/system': path.resolve(
        __dirname,
        'packages/system/index.ts',
      ),
    },
  },
  build: {
    outDir: 'dist/lib',
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'terser' : false,
    lib: {
      name: 'react-goblin-system',
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.mjs`,
      entry: {
        index: path.resolve(__dirname, 'packages/index.ts'),
        'components/index': path.resolve(__dirname, 'packages/components/index.ts'),
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
        preserveModules: true,
        preserveModulesRoot: 'packages',
        chunkFileNames: (chunkInfo) => {
          const id = chunkInfo.facadeModuleId || ''
          if (!id) {
            return 'chunks/[name]-[hash].mjs'
          }
          const match = id.match(/packages\/(.+?)\.tsx?$/)
          return match ? `chunks/${match[1]}.mjs` : 'chunks/[name]-[hash].mjs'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name) {
            const { name } = path.parse(assetInfo.name)
            return `assets/${name}[extname]`
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
  },
}))
