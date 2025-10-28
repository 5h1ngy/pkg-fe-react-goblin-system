import type { TableProps } from './Table.types'
import { TableRoot } from './Table.style'

export const Table = (props: TableProps) => <TableRoot {...props} />

Table.displayName = 'Table'
