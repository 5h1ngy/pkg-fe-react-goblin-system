import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      base: "/pkg-fe-react-goblin-system/storybook/",
      build: {
        rollupOptions: {
          external: [
            'react-icons',
            'react-icons/.*',
            /^react-icons\/.*/,  // Espressione regolare per catturare tutti i sottomoduli
            'react-redux'
          ]
        }
      }
    });
  },
  refs: {
    '@chakra-ui/react': {
      disable: true, // Disabilita le storie di Chakra UI
    },
  },
};
export default config;
