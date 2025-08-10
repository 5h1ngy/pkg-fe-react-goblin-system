import { useEffect, useState } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { Backdrop } from './shared/Backdrop'
import { MenuRoot } from './Menu.style'
import type { MenuProps } from './Menu.types'

export const Menu = ({ anchorEl, open, onClose, children, sx, style, ...rest }: MenuProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  useEffect(() => {
    if (anchorEl && open) {
      const rect = anchorEl.getBoundingClientRect()
      setPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX })
    }
  }, [anchorEl, open])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    if (open) {
      window.addEventListener('keydown', handleKey)
    }

    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      <MenuRoot
        role="menu"
        style={{ top: position.top, left: position.left, position: 'absolute', ...resolvedStyle }}
        {...rest}
      >
        {children}
      </MenuRoot>
    </>
  )
}

Menu.displayName = 'Menu'
