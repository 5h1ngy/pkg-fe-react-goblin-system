import { HTMLAttributes, ReactNode } from 'react'

import { SxProps } from '../../../system'

export interface ToggleButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string | string[]
  defaultValue?: string | string[]
  exclusive?: boolean
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | string[]) => void
  children: ReactNode
  orientation?: 'horizontal' | 'vertical'
  sx?: SxProps
}
