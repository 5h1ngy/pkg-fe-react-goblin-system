import type { TableRowProps } from './TableRow.types'
import { TableRowRoot } from './TableRow.style'

export const TableRow = (props: TableRowProps) => <TableRowRoot {...props} />

TableRow.displayName = 'TableRow'
