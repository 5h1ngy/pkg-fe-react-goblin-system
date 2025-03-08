import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'installation',
      label: 'Installation 🚀',
    },
    {
      type: 'category',
      label: 'Store 🏬',
      items: [
        {
          type: 'doc',
          id: 'store/overview',
          label: 'Overview 📖',
        },
        {
          type: 'doc',
          id: 'store/auth',
          label: 'Authentication 🔐',
        },
      ],
    },
    {
      type: 'doc',
      id: 'hocs',
      label: 'HOCs 🔧',
    },
    {
      type: 'doc',
      id: 'providers',
      label: 'Providers 🌐',
    },
    {
      type: 'doc',
      id: 'services',
      label: 'Services ⚡',
    },
  ],
};

export default sidebars;
