import { ButtonHTMLAttributes, ReactNode } from 'react'

import { SxProps } from '../../../system'
import type { ColorToken } from '../shared/color'

export type ButtonVariant = 'text' | 'outlined' | 'contained'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ColorToken
  size?: ButtonSize
  fullWidth?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  disableElevation?: boolean
  sx?: SxProps
}
