import { BoxProps } from './Box.types'

export interface ContainerProps extends BoxProps<'div'> {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  disableGutters?: boolean
  fixed?: boolean
}
