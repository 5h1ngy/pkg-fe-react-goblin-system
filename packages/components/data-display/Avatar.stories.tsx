import {Meta, StoryObj} from '@storybook/react'

import { Avatar } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Avatar,
      },
    },
  },
  args: {
    children: 'JS',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Initials: Story = {
  args: {
    children: 'JS',
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://picsum.photos/seed/avatar-story/100/100',
    alt: 'User avatar',
  },
}