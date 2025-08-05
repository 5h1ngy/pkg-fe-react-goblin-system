import { SelectHTMLAttributes } from 'react'

import { SxProps } from '../../../system'
import type { InputVariant } from '../shared/fieldBase'

export interface SelectOption {
  label: React.ReactNode
  value: string | number
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode
  helperText?: React.ReactNode
  error?: boolean
  fullWidth?: boolean
  variant?: InputVariant
  options: SelectOption[]
  sx?: SxProps
}
