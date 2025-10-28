import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  anchorEl?: HTMLElement | null
  open: boolean
  onClose?: () => void
  sx?: SxProps
}
