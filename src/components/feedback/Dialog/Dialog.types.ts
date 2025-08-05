import { HTMLAttributes } from 'react'

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  fullWidth?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg'
}
