import { HTMLAttributes } from 'react'

import { BoxProps } from './Box.types'

export interface ContainerProps extends Omit<BoxProps, 'component'>, HTMLAttributes<HTMLElement> {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  disableGutters?: boolean
  fixed?: boolean
}
