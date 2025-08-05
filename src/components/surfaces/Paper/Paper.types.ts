import { ElementType, HTMLAttributes } from "react"

import { SxProps } from '../../../system'

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: number
  variant?: 'elevation' | 'outlined'
  square?: boolean
  sx?: SxProps
  as?: ElementType
}
