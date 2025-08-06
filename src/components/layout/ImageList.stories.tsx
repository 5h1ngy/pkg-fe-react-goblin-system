import {Meta, StoryObj} from '@storybook/react'

import { ImageList, ImageListItem } from '../../components'

const meta: Meta<typeof ImageList> = {
  title: 'Layout/ImageList',
  component: ImageList,
}

export default meta
type Story = StoryObj<typeof ImageList>

export const Masonry: Story = {
  render: () => (
    <ImageList cols={3} gap={1} variant="masonry">
      {Array.from({ length: 6 }).map((_, index) => (
        <ImageListItem key={index}>
          <img
            src={`https://picsum.photos/seed/imagelist-${index}/400/300`}
            alt={`Example ${index}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}
