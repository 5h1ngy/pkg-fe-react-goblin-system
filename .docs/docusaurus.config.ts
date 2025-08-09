import type { Config } from '@docusaurus/types';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sidebarsPath = resolve(__dirname, './sidebars.ts');
const customCssPath = resolve(__dirname, './src/css/custom.css');

const config: Config = {
  title: 'Goblin System Docs',
  tagline: 'Portfolio-grade React components and theme.',
  url: 'https://5h1ngy.github.io',
  baseUrl: '/pkg-fe-react-goblin-system/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: '5h1ngy',
  projectName: 'pkg-fe-react-goblin-system',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: false,
        docs: {
          path: '../docs',
          sidebarPath: sidebarsPath,
        },
        theme: {
          customCss: customCssPath,
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: 'Goblin System',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook',
          label: 'Storybook',
          position: 'left',
        },
        {
          href: 'https://github.com/5h1ngy/pkg-fe-react-goblin-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 5h1ngy.`,
    },
  },
};

export default config;


