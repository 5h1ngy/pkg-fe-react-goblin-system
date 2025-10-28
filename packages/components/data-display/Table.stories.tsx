import { Meta, StoryObj } from '@storybook/react'

import { Table, TableHead, TableRow, TableCell, TableBody } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Table,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Basic: Story = {
  render: () => (
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
  ),
}
