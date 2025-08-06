import {Meta, StoryObj} from '@storybook/react'

import { ImageList, ImageListItem } from '../../components'

const meta: Meta<typeof ImageListItem> = {
  title: 'Layout/ImageListItem',
  component: ImageListItem,
}

export default meta
type Story = StoryObj<typeof ImageListItem>

export const Basic: Story = {
  render: (args) => (
    <ImageList cols={2}>
      <ImageListItem {...args}>
        <img src="https://picsum.photos/seed/item-1/400/300" alt="Item" loading="lazy" />
      </ImageListItem>
    </ImageList>
  ),
}
