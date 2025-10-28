import { Meta, StoryObj } from '@storybook/react'

import { List, ListItem, ListItemIcon, ListItemText } from '../../components'
import { FolderIcon, StarIcon } from '../../foundations'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.List,
      },
    },
  },
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
