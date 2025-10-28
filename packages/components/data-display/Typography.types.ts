import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline'

export type TypographyColor =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  color?: TypographyColor
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  gutterBottom?: boolean
  paragraph?: boolean
  sx?: SxProps
  component?: keyof JSX.IntrinsicElements
}
