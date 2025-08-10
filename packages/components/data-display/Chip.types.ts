import { HTMLAttributes, ReactNode } from 'react'

import { SxProps } from '../../system'

export type ChipColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode
  color?: ChipColor
  variant?: 'filled' | 'outlined'
  onDelete?: () => void
  sx?: SxProps
}
