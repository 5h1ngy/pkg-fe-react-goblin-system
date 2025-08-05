import { HTMLAttributes } from 'react'

import { SxProps } from '../../../system'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  flexItem?: boolean
  textAlign?: 'left' | 'center' | 'right'
  sx?: SxProps
}
