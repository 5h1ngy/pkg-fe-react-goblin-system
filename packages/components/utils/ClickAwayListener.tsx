import { useEffect, useRef } from 'react'

import type { ClickAwayListenerProps } from './ClickAwayListener.types'

export const ClickAwayListener = ({ children, onClickAway }: ClickAwayListenerProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handle = (event: MouseEvent | TouchEvent) => {
      if (!nodeRef.current || nodeRef.current.contains(event.target as Node)) {
        return
      }
      onClickAway(event)
    }

    document.addEventListener('mousedown', handle)
    document.addEventListener('touchstart', handle)
    return () => {
      document.removeEventListener('mousedown', handle)
      document.removeEventListener('touchstart', handle)
    }
  }, [onClickAway])

  return <div ref={nodeRef}>{children}</div>
}

ClickAwayListener.displayName = 'ClickAwayListener'
