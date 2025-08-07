import type { Config } from '@docusaurus/types';
import { createRequire } from 'module';

const require = createRequire(import.meta.url) as NodeJS.Require & {
  resolveWeak?: NodeJS.RequireResolve;
};

if (!require.resolveWeak) {
  require.resolveWeak = require.resolve;
}

if (!(globalThis as unknown as { require?: typeof require }).require) {
  (globalThis as unknown as { require: typeof require }).require = require;
} else if (!(globalThis as unknown as { require: typeof require }).require.resolveWeak) {
  (globalThis as unknown as { require: typeof require }).require.resolveWeak = require.resolve;
}

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
          path: '../docs',
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
};

export default config;

