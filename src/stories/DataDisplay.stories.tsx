import type { Meta, StoryObj } from '@storybook/react'

import {
  Avatar,
  Badge,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '../components'

const meta: Meta = {
  title: 'Data Display/Overview',
  component: Typography,
}

export default meta

type Story = StoryObj

export const Components: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Avatar>JS</Avatar>
        <Badge badgeContent={4} color="primary">
          <Avatar src="https://picsum.photos/seed/avatar/100/100" />
        </Badge>
        <Chip label="Chip" color="primary" />
      </div>

      <Divider />

      <List>
        <ListItem divider>
          <ListItemIcon>📁</ListItemIcon>
          <ListItemText>List Item</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>⭐</ListItemIcon>
          <ListItemText>Favorite</ListItemText>
        </ListItem>
      </List>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Name</TableCell>
            <TableCell variant="head">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>Designer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Marco</TableCell>
            <TableCell>Engineer</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
