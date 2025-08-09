import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tagged',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite')
    const { resolve, dirname } = await import('node:path')
    const { fileURLToPath } = await import('node:url')
    const projectDir = dirname(fileURLToPath(new URL('../', import.meta.url)))

    return mergeConfig(config, {
      base: '/pkg-fe-react-goblin-system/storybook-static/',
      resolve: {
        alias: {
          'pkg-fe-react-goblin-system': resolve(projectDir, 'packages/index.ts'),
          'pkg-fe-react-goblin-system/components': resolve(
            projectDir,
            'packages/components/index.ts',
          ),
          'pkg-fe-react-goblin-system/foundations': resolve(
            projectDir,
            'packages/foundations/index.ts',
          ),
          'pkg-fe-react-goblin-system/system': resolve(projectDir, 'packages/system/index.ts'),
        },
      },
    })
  },
}
export default config
