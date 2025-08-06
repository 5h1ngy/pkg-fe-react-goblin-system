import { useEffect, useState } from "react"

import { useMaterialTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { ModalBackdrop } from './shared/ModalBackdrop'
import { Portal } from './Portal'
import { PopoverSurface } from './Popover.style'
import type { PopoverProps } from './Popover.types'

export const Popover = ({ open, anchorEl, onClose, children, sx, style, ...rest }: PopoverProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  useEffect(() => {
    if (anchorEl && open) {
      const rect = anchorEl.getBoundingClientRect()
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      })
    }
  }, [anchorEl, open])

  if (!open) return null

  return (
    <Portal>
      <ModalBackdrop onClick={onClose}>
        <PopoverSurface
          onClick={(event) => event.stopPropagation()}
          style={{ top: position.top, left: position.left, position: 'absolute', ...resolvedStyle }}
          {...rest}
        >
          {children}
        </PopoverSurface>
      </ModalBackdrop>
    </Portal>
  )
}

Popover.displayName = 'Popover'
