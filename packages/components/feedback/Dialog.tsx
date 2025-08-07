import { Backdrop } from './Backdrop'
import { DialogContainer } from './Dialog.style'
import type { DialogProps } from './Dialog.types'

export const Dialog = ({ open, onClose, fullWidth, maxWidth = 'sm', children, ...rest }: DialogProps) => {
  if (!open) return null

  return (
    <Backdrop open={open} onClick={onClose}>
      <DialogContainer
        $fullWidth={fullWidth}
        $maxWidth={maxWidth}
        onClick={(event) => event.stopPropagation()}
        {...rest}
      >
        {children}
      </DialogContainer>
    </Backdrop>
  )
}

Dialog.displayName = 'Dialog'
