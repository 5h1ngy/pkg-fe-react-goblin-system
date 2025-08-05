import { InputHTMLAttributes } from 'react'

import { SxProps } from '../../../system'

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
  step?: number
  valueLabelDisplay?: 'auto' | 'on' | 'off'
  sx?: SxProps
}
