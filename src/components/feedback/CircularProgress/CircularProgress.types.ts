import { HTMLAttributes } from 'react'

import { SxProps } from '../../../system'

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  thickness?: number
  value?: number
  variant?: 'indeterminate' | 'determinate'
  sx?: SxProps
}
