import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableRow, TableCell } from '../../components'

const meta: Meta<typeof TableRow> = {
  title: 'Data Display/TableRow',
  component: TableRow,
}

export default meta
type Story = StoryObj<typeof TableRow>

export const Basic: Story = {
  render: (args) => (
    <Table>
      <TableBody>
        <TableRow {...args}>
          <TableCell>Jane</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
