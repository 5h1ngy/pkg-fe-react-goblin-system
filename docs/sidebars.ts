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
      label: 'Componenti',
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
          label: 'Pulsanti',
          items: [
            'components/buttons/button',
            'components/buttons/iconbutton',
          ],
        },
        {
          type: 'category',
          label: 'Feedback',
          items: [
            'components/feedback/modal',
            'components/feedback/spinner',
          ],
        },
        {
          type: 'category',
          label: 'Tipografia',
          items: [
            'components/typography/text',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Personalizzazione',
      items: [
        'theming/index',
      ],
    },
  ],
};

export default sidebars;
