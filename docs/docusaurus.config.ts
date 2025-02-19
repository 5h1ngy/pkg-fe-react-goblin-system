import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'RG System Documentation',
  tagline: 'Empowering Your Vision, One Module at a Time.',
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
      disableSwitch: true,
    },
    navbar: {
      title: 'RG System',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs/overview',
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
