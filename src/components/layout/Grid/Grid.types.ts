import { CSSProperties, ElementType, HTMLAttributes } from 'react'

import { SxProps } from '../../../system'

export type GridBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type GridSize = number | boolean | 'auto'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  component?: ElementType
  container?: boolean
  item?: boolean
  columns?: number
  spacing?: number
  wrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  xs?: GridSize
  sm?: GridSize
  md?: GridSize
  lg?: GridSize
  xl?: GridSize
  sx?: SxProps
}
