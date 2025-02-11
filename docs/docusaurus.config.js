// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'pkg-fe-react-goblin-system Docs',
    tagline: 'Documentazione ufficiale Goblin System',
    url: 'https://example.com',   // dominio del tuo progetto
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
  
    // Se usi GitHub Pages:
    organizationName: 'my-org',   // GitHub org/user
    projectName: 'pkg-fe-react-goblin-system',
    // baseUrl, repository, ecc...
  
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',  // Cartella dei tuoi file .md
            routeBasePath: '/docs', // Path su cui saranno serviti
            sidebarPath: require.resolve('./sidebars.js'),
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
  };
  
  module.exports = config;
  