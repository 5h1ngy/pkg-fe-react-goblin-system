import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'rectangular' | 'circular'
  width?: number | string
  height?: number | string
  sx?: SxProps
}
