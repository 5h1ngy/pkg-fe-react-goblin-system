import {Meta, StoryObj} from '@storybook/react'

import { List, ListItem, ListItemText } from '../../components'

const meta: Meta<typeof ListItemText> = {
  title: 'Data Display/ListItemText',
  component: ListItemText,
}

export default meta
type Story = StoryObj<typeof ListItemText>

export const Basic: Story = {
  render: (args) => (
    <List>
      <ListItem>
        <ListItemText {...args}>List text</ListItemText>
      </ListItem>
    </List>
  ),
}
