import {Meta, StoryObj} from '@storybook/react'

import { IconButton } from '../../components'
import { FavoriteIcon } from '../../foundations'

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  args: {
    children: <FavoriteIcon aria-hidden />,
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Basic: Story = {}
