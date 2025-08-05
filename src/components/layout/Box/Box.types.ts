import { CSSProperties, ElementType, HTMLAttributes } from 'react'

import { SxProps } from '../../../system'

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  component?: ElementType
  sx?: SxProps
  style?: CSSProperties
}
