import { useEffect } from 'react'

import { SnackbarRoot } from './Snackbar.style'
import type { SnackbarProps } from './Snackbar.types'

export const Snackbar = ({
  open,
  message,
  autoHideDuration = 4000,
  onClose,
  action,
  anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
  ...rest
}: SnackbarProps) => {
  useEffect(() => {
    if (!open || !autoHideDuration) return
    const timer = setTimeout(() => onClose?.(), autoHideDuration)
    return () => clearTimeout(timer)
  }, [open, autoHideDuration, onClose])

  if (!open) return null

  return (
    <SnackbarRoot role="status" $anchor={anchorOrigin} {...rest}>
      <span style={{ flex: 1 }}>{message}</span>
      {action}
    </SnackbarRoot>
  )
}

Snackbar.displayName = 'Snackbar'
