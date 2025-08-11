import type { Config } from '@docusaurus/types'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sidebarsPath = resolve(__dirname, './sidebars.ts')
const customCssPath = resolve(__dirname, './src/css/custom.css')
const packagesDir = resolve(__dirname, '../packages')

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
    locales: ['en', 'it'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      it: {
        label: 'Italiano',
      },
    },
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
          to: '/storybook',
          label: 'Storybook',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
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
      copyright: `Copyright Â© ${new Date().getFullYear()} 5h1ngy.`,
    },
  },
  plugins: [
    async function goblinSystemAlias() {
      return {
        name: 'goblin-system-alias',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                'pkg-fe-react-goblin-system$': resolve(packagesDir, 'index.ts'),
                'pkg-fe-react-goblin-system/components$': resolve(
                  packagesDir,
                  'components/index.ts',
                ),
                'pkg-fe-react-goblin-system/foundations$': resolve(
                  packagesDir,
                  'foundations/index.ts',
                ),
                'pkg-fe-react-goblin-system/system$': resolve(packagesDir, 'system/index.ts'),
                'pkg-fe-react-goblin-system/components': resolve(packagesDir, 'components'),
                'pkg-fe-react-goblin-system/foundations': resolve(packagesDir, 'foundations'),
                'pkg-fe-react-goblin-system/system': resolve(packagesDir, 'system'),
              },
            },
          }
        },
      }
    },
  ],
}

export default config
