import type { Config } from '@docusaurus/types';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sidebarsPath = resolve(__dirname, './sidebars.ts');
const customCssPath = resolve(__dirname, './src/css/custom.css');
const requireShimPath = resolve(__dirname, './src/polyfills/require-shim.js');
const inlineRequireShim = `
if (typeof window !== 'undefined' && typeof window.require !== 'function') {
  Object.defineProperty(window, 'require', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function requireShim(id) {
      if (typeof __webpack_require__ === 'function') {
        return __webpack_require__(id);
      }
      throw new Error('Dynamic require is not available for: ' + id);
    },
  });

  var runtime = typeof __webpack_require__ === 'function' ? __webpack_require__ : null;

  window.require.resolve = runtime && runtime.resolve ? runtime.resolve.bind(runtime) : function (id) { return id; };
  window.require.resolveWeak = runtime && runtime.resolveWeak ? runtime.resolveWeak.bind(runtime) : function (id) { return id; };
}
`.trim();

const requireShimPlugin = () => ({
  name: 'require-shim',
  getClientModules() {
    return [requireShimPath];
  },
  injectHtmlTags() {
    return {
      headTags: [
        {
          tagName: 'script',
          attributes: { id: 'require-shim-inline' },
          innerHTML: inlineRequireShim,
        },
      ],
    };
  },
});

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
  plugins: [requireShimPlugin],
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


