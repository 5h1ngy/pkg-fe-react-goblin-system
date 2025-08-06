import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  variant?: 'circular' | 'rounded' | 'square'
  sx?: SxProps
}
