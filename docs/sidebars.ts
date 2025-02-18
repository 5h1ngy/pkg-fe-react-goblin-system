// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'overview',       // Reference to docs/overview.md
    'get-started',    // Reference to docs/get-started.md
    {
      type: 'link',
      label: 'Components',           // External link to Storybook
      href: 'https://5h1ngy.github.io/storybook',
    },
    {
      type: 'category',
      label: 'HOCs',                 // Category for HOCs documentation
      items: [
        'hocs/intro',              // Placeholder for docs/hocs/intro.md
        // Add additional HOCs docs here
      ],
    },
  ],
};

export default sidebars;
