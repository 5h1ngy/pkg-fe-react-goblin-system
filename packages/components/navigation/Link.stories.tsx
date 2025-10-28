import { Meta, StoryObj } from '@storybook/react'

import { Link } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Link,
      },
    },
  },
  args: {
    children: 'Storybook link',
    href: '#',
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Basic: Story = {}

export const UnderlineAlways: Story = {
  args: {
    underline: 'always',
  },
}
