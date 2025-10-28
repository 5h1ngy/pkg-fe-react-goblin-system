import type { ButtonProps } from './Button.types'

export interface ToggleButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  selected?: boolean
  value: string
}
