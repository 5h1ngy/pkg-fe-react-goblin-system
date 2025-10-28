import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  anchor?: 'left' | 'right'
  variant?: 'temporary' | 'persistent' | 'permanent'
  width?: number
  sx?: SxProps
}
