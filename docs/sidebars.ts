import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'overview',
    'architecture',
    'installazione',
    'utilizzo-generale',
    {
      type: 'category',
      label: 'Components 🧩',
      items: [
        {
          type: 'link',
          label: 'Storybook',
          href: 'https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook',
        },
        'componenti',
      ],
    },
    'layouts',
    'providers',
    'store',
  ],
};

export default sidebars;