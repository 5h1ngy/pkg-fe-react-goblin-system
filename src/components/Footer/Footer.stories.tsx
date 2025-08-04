import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Shell/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    profile: {
      name: 'Avery Goblin',
      links: [
        { label: 'GitHub', url: 'https://github.com' },
        { label: 'LinkedIn', url: 'https://linkedin.com' },
        { label: 'Mail', url: 'mailto:hello@example.com' },
      ],
    },
    meta: {
      title: 'Goblin System',
    },
  },
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
