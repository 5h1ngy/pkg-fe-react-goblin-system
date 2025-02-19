// docusaurus.config.ts
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'RG System Documentation',
  tagline: 'Empowering Your Vision, One Module at a Time.',
  url: 'https://5h1ngy.github.io',
  baseUrl: '/pkg-fe-react-goblin-system/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '5h1ngy', // GitHub username
  projectName: 'pkg-fe-react-goblin-system',   // Repository name
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false, // Blog section is disabled
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
      // Optionally, you can disable respecting the user's OS color scheme:
      // respectPrefersColorScheme: false,
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
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       { label: 'Overview', to: '/docs/overview' },
      //       { label: 'Get Started', to: '/docs/get-started' },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       { label: 'GitHub', href: 'https://github.com/5h1ngy/my-project' },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} 5h1ngy.`,
    },
  },
};

export default config;
