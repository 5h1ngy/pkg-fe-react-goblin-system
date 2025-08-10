import { HTMLAttributes, ReactNode } from 'react'

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  message: ReactNode
  autoHideDuration?: number
  onClose?: () => void
  action?: ReactNode
  anchorOrigin?: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'center' | 'right'
  }
}
