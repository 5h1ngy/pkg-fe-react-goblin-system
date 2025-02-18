// docusaurus.config.ts
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'My Project Documentation',
  tagline: 'Documentation for an awesome project',
  url: 'https://5h1ngy.github.io',
  baseUrl: '/my-project/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '5h1ngy', // GitHub username
  projectName: 'my-project',   // Repository name
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
    navbar: {
      title: 'My Project',
      logo: {
        alt: 'My Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/overview',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://5h1ngy.github.io/storybook',
          label: 'Components',
          position: 'left',
        },
        {
          href: 'https://github.com/5h1ngy/my-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Overview', to: '/docs/overview' },
            { label: 'Get Started', to: '/docs/get-started' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/5h1ngy/my-project' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 5h1ngy.`,
    },
  },
};

export default config;
