import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface LinearProgressProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'determinate' | 'indeterminate'
  value?: number
  sx?: SxProps
}
