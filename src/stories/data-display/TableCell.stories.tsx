import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableRow, TableCell } from '../../components'

const meta: Meta<typeof TableCell> = {
  title: 'Data Display/TableCell',
  component: TableCell,
  args: {
    children: 'Cell content',
  },
}

export default meta
type Story = StoryObj<typeof TableCell>

export const BodyCell: Story = {
  render: (args) => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell {...args} />
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const HeadCell: Story = {
  args: {
    variant: 'head',
    children: 'Header',
  },
}
