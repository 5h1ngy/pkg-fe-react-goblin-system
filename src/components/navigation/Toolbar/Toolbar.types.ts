import { HTMLAttributes } from "react"

import { SxProps } from '../../../system'

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  disableGutters?: boolean
  sx?: SxProps
}
