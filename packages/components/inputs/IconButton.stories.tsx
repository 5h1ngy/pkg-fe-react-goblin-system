import { Meta, StoryObj } from '@storybook/react'

import { IconButton } from '../../components'
import { FavoriteIcon } from '../../foundations'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.IconButton,
      },
    },
  },
  args: {
    children: <FavoriteIcon aria-hidden />,
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Basic: Story = {}
