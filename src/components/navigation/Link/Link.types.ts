import { AnchorHTMLAttributes } from "react"

import { SxProps } from '../../../system'
import type { PaletteIntent } from '../shared/intentColor'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: PaletteIntent
  underline?: 'none' | 'hover' | 'always'
  sx?: SxProps
}
