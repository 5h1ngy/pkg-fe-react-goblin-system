import type { Meta, StoryObj } from '@storybook/react'

import { List, ListItem, ListItemIcon, ListItemText } from '../../components'
import { FolderIcon, StarIcon } from '../../foundations'

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
}

export default meta
type Story = StoryObj<typeof List>

export const Basic: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemIcon>
          <FolderIcon aria-hidden />
        </ListItemIcon>
        <ListItemText>Documents</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StarIcon aria-hidden />
        </ListItemIcon>
        <ListItemText>Favorites</ListItemText>
      </ListItem>
    </List>
  ),
}
