import { ChangeEvent, InputHTMLAttributes } from 'react'

import type { ColorToken } from './shared/color'

export interface ControlProps {
  color?: ColorToken
  checked?: boolean
  disabled?: boolean
  size?: 'small' | 'medium'
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export interface CheckboxProps extends ControlProps {
  indeterminate?: boolean
}
