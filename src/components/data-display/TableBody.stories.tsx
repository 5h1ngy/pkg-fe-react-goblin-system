import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableRow, TableCell } from '../../components'

const meta: Meta<typeof TableBody> = {
  title: 'Data Display/TableBody',
  component: TableBody,
}

export default meta
type Story = StoryObj<typeof TableBody>

export const Basic: Story = {
  render: (args) => (
    <Table>
      <TableBody {...args}>
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
