import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'overview',
    'get-started',
    'architecture',
    {
      type: 'category',
      label: 'Components 🧩',
      items: [
        {
          type: 'link',
          label: 'Storybook',
          href: 'https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook',
        },
        'components/overview',
        'components/atomic-design',
        'components/examples',
      ],
    },
    {
      type: 'category',
      label: 'HOCs 🎩',
      items: [
        'hocs/intro',
        'hocs/advanced',
        'hocs/examples',
      ],
    },
    {
      type: 'category',
      label: 'Hooks 🪝',
      items: [
        'hooks/overview',
        'hooks/usage',
        'hooks/examples',
      ],
    },
    {
      type: 'category',
      label: 'State Management 📊',
      items: [
        'state-management/overview',
        'state-management/redux',
        'state-management/context',
      ],
    },
    'contributing',
  ],
};

export default sidebars;
