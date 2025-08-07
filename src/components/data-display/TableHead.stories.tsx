import {Meta, StoryObj} from '@storybook/react'

import { Table, TableHead, TableRow, TableCell } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof TableHead> = {
  title: 'Data Display/TableHead',
  component: TableHead,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.TableHead,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TableHead>

export const Basic: Story = {
  render: (args) => (
    <Table>
      <TableHead {...args}>
        <TableRow>
          <TableCell variant="head">Name</TableCell>
          <TableCell variant="head">Role</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  ),
}