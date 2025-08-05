import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { ModalBackdrop } from '../shared/ModalBackdrop'
import { Portal } from '../Portal/Portal'
import { ModalSurface } from './Modal.style'
import type { ModalProps } from './Modal.types'

export const Modal = ({ open, onClose, children, sx, style, ...rest }: ModalProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  if (!open) return null

  return (
    <Portal>
      <ModalBackdrop onClick={onClose}>
        <ModalSurface onClick={(event) => event.stopPropagation()} style={resolvedStyle} {...rest}>
          {children}
        </ModalSurface>
      </ModalBackdrop>
    </Portal>
  )
}

Modal.displayName = 'Modal'
