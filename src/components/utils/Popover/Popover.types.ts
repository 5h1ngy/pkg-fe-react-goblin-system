import { HTMLAttributes } from 'react'

import { SxProps } from '../../../system'

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  anchorEl?: HTMLElement | null
  onClose?: () => void
  sx?: SxProps
}
