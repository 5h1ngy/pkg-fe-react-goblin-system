import { HTMLAttributes, MouseEvent, ReactNode } from 'react'

import { SxProps } from '../../../system'
import type { ButtonSize } from '../Button/Button.types'

export interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  max?: number
  precision?: number
  value?: number
  defaultValue?: number
  readOnly?: boolean
  onChange?: (event: MouseEvent<HTMLButtonElement>, value: number) => void
  size?: ButtonSize
  icon?: ReactNode
  emptyIcon?: ReactNode
  sx?: SxProps
}
