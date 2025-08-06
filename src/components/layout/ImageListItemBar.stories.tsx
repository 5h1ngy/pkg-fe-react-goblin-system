import {Meta, StoryObj} from '@storybook/react'

import { ImageList, ImageListItem, ImageListItemBar } from '../../components'

const meta: Meta<typeof ImageListItemBar> = {
  title: 'Layout/ImageListItemBar',
  component: ImageListItemBar,
}

export default meta
type Story = StoryObj<typeof ImageListItemBar>

export const Basic: Story = {
  render: (args) => (
    <ImageList cols={1}>
      <ImageListItem>
        <img src="https://picsum.photos/seed/item-bar/600/400" alt="Gallery" loading="lazy" />
        <ImageListItemBar {...args} />
      </ImageListItem>
    </ImageList>
  ),
  args: {
    title: 'Gallery',
    subtitle: 'Subtitle text',
  },
}
