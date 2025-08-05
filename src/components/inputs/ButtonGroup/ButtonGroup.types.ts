import { HTMLAttributes, ReactNode } from 'react'

import { SxProps } from '../../../system'
import type { ButtonProps, ButtonVariant, ButtonSize } from '../Button/Button.types'

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: ButtonVariant
  color?: ButtonProps['color']
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
  sx?: SxProps
}
