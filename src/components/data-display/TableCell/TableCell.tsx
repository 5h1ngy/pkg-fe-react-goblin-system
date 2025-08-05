import type { TableCellProps } from './TableCell.types'
import { TableCellRoot } from './TableCell.style'

export const TableCell = ({ variant, ...rest }: TableCellProps) => (
  <TableCellRoot $variant={variant} {...rest} />
)

TableCell.displayName = 'TableCell'

