import { Meta, StoryObj } from '@storybook/react'

import { List, ListItem, ListItemIcon, ListItemText } from '../../components'
import { MailIcon } from '../../foundations'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof ListItemIcon> = {
  title: 'Data Display/ListItemIcon',
  component: ListItemIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.ListItemIcon,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ListItemIcon>

export const Basic: Story = {
  render: (args) => (
    <List>
      <ListItem>
        <ListItemIcon {...args}>
          <MailIcon aria-hidden />
        </ListItemIcon>
        <ListItemText>Mail</ListItemText>
      </ListItem>
    </List>
  ),
}
