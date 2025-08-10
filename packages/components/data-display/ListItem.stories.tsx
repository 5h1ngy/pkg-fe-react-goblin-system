import { Meta, StoryObj } from '@storybook/react'

import { List, ListItem, ListItemIcon, ListItemText } from '../../components'
import { FolderIcon } from '../../foundations'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof ListItem> = {
  title: 'Data Display/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.ListItem,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ListItem>

export const Basic: Story = {
  render: (args) => (
    <List>
      <ListItem {...args}>
        <ListItemIcon>
          <FolderIcon aria-hidden />
        </ListItemIcon>
        <ListItemText>Inbox</ListItemText>
      </ListItem>
    </List>
  ),
}
