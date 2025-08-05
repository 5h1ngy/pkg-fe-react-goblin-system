import { ChangeEvent } from 'react'

import type { TextFieldProps } from '../TextField/TextField.types'

export interface AutocompleteOption {
  label: string
  value: string
}

export interface AutocompleteProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  options: AutocompleteOption[]
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: AutocompleteOption | null) => void
}
