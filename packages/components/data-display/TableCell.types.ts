import { HTMLAttributes } from 'react'

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  variant?: 'head' | 'body' | 'footer'
}
