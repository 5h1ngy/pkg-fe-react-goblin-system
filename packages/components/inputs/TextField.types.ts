import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

import { SxProps } from '../../system'
import type { InputVariant } from './shared/fieldBase'

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  label?: ReactNode
  helperText?: ReactNode
  error?: boolean
  fullWidth?: boolean
  variant?: InputVariant
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  multiline?: boolean
  rows?: number
  sx?: SxProps
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
