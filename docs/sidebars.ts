import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/index',
        {
          type: 'category',
          label: 'Layout',
          items: [
            'components/layout/container',
            'components/layout/grid',
          ],
        },
        {
          type: 'category',
          label: 'Buttons',
          items: [
            'components/buttons/button',
            'components/buttons/iconbutton',
          ],
        },
        {
          type: 'category',
          label: 'Feedback',
          items: [
            'components/alert',
            'components/feedback/modal',
            'components/spinner',
          ],
        },
        {
          type: 'category',
          label: 'Typography',
          items: [
            'components/typography/text',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Pages',
      items: [
        'pages/index',
        'pages/error',
        'pages/loading',
        'pages/transformer',
      ],
    },
    {
      type: 'category',
      label: 'Providers',
      items: [
        'providers/goblin-provider',
        'providers/auth-provider',
      ],
    },
    {
      type: 'category',
      label: 'Services',
      items: [
        'services/http-handlers',
        'services/auth-service',
      ],
    },
    {
      type: 'category',
      label: 'Store',
      items: [
        'store/auth-store',
      ],
    },
    {
      type: 'category',
      label: 'Theme',
      items: [
        'theme/theme-system',
        'theming/index',
      ],
    },
  ],
};

export default sidebars;
