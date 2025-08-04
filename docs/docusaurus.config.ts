import type { Config } from '@docusaurus/types';
import path from 'path';

const config: Config = {
  title: 'Goblin System Docs',
  tagline: 'Portfolio-grade React components and theme.',
  url: 'https://5h1ngy.github.io',
  baseUrl: '/pkg-fe-react-goblin-system/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '5h1ngy',
  projectName: 'pkg-fe-react-goblin-system',
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
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
  plugins: [
    function goblinSystemAlias() {
      return {
        name: 'goblin-system-alias',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                'pkg-fe-react-goblin-system': path.resolve(__dirname, '..', 'src'),
                'pkg-fe-react-goblin-system/components': path.resolve(__dirname, '..', 'src/components'),
                'pkg-fe-react-goblin-system/styles': path.resolve(__dirname, '..', 'src/styles'),
                'pkg-fe-react-goblin-system/data': path.resolve(__dirname, '..', 'src/data'),
                '@': path.resolve(__dirname, '..', 'src'),
                '@components': path.resolve(__dirname, '..', 'src/components'),
                '@styles': path.resolve(__dirname, '..', 'src/styles'),
                '@data': path.resolve(__dirname, '..', 'src/data'),
                '@hooks': path.resolve(__dirname, '..', 'src/hooks'),
                '@assets': path.resolve(__dirname, '..', 'src/assets'),
              },
            },
          };
        },
      };
    },
  ],
};

export default config;

