import type { TableBodyProps } from './TableBody.types'
import { TableBodyRoot } from './TableBody.style'

export const TableBody = (props: TableBodyProps) => <TableBodyRoot {...props} />

TableBody.displayName = 'TableBody'
