import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import storybook from 'eslint-plugin-storybook'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const docsRootDir = fileURLToPath(new URL('./.docs', import.meta.url))

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      '.docs/dist',
      '.docs/.docusaurus',
      '.docs/static',
      '.docs/static/storybook-static',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: [
      'packages/**/*.{ts,tsx,js,jsx,mjs,cjs}',
      '.docs/**/*.{ts,tsx,js,jsx,mjs,cjs}',
      '.story/**/*.{ts,tsx,js,jsx,mjs,cjs}',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['packages/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: projectRoot,
      },
    },
  },
  {
    files: ['.docs/src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: docsRootDir,
        allowDefaultProject: true,
      },
    },
  },
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: {
      storybook,
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'import/no-anonymous-default-export': 'off',
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/no-redundant-story-name': 'warn',
      'storybook/prefer-pascal-case': 'warn',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
  },
  {
    files: [
      '**/*.config.{js,ts,mjs,cjs}',
      'vite.config.ts',
      'vite.config.lib.ts',
      '.docs/docusaurus.config.ts',
      '.story/main.{js,jsx,ts,tsx,mjs,cjs}',
      '.story/manager.{js,jsx,ts,tsx,mjs,cjs}',
    ],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      storybook,
    },
    rules: {
      'storybook/no-uninstalled-addons': 'error',
    },
  },
)
