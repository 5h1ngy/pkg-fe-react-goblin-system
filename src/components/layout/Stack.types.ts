import { CSSProperties, HTMLAttributes, ReactNode } from 'react'

import { SxProps } from '../../system'

export interface StackProps extends HTMLAttributes<HTMLElement> {
  direction?: CSSProperties['flexDirection']
  spacing?: number
  divider?: ReactNode
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  sx?: SxProps
}
