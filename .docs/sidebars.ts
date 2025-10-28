import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/index',
        'components/foundations',
        'components/layout',
        'components/data-display',
        'components/inputs',
        'components/feedback',
        'components/navigation',
        'components/utilities',
      ],
    },
    {
      type: 'category',
      label: 'Styles',
      items: ['styles/global-style', 'styles/theme'],
    },
  ],
}

export default sidebars
