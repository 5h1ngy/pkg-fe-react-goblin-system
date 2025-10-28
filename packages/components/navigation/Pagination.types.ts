import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  count: number
  page?: number
  defaultPage?: number
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void
  siblingCount?: number
  boundaryCount?: number
  sx?: SxProps
}
