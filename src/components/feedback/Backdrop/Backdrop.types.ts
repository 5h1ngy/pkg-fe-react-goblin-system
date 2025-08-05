import { HTMLAttributes } from "react"

import { SxProps } from '../../../system'

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  sx?: SxProps
}
