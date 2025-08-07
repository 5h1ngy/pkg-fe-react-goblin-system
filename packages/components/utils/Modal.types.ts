import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  sx?: SxProps
}
