import { HTMLAttributes } from "react"

import { SxProps } from '../../../system'
import type { PaletteIntent } from '../shared/intentColor'

export interface AppBarProps extends HTMLAttributes<HTMLElement> {
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
  color?: PaletteIntent | 'transparent'
  elevation?: number
  sx?: SxProps
}
