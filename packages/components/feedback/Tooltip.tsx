import { cloneElement, useState } from 'react'

import { TooltipBubble } from './Tooltip.style'
import type { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ title, placement = 'top', children }: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const trigger = cloneElement(children, {
    onMouseEnter: (event: React.MouseEvent) => {
      children.props.onMouseEnter?.(event)
      setOpen(true)
    },
    onMouseLeave: (event: React.MouseEvent) => {
      children.props.onMouseLeave?.(event)
      setOpen(false)
    },
  })

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      {trigger}
      {open && (
        <TooltipBubble $placement={placement} role="tooltip">
          {title}
        </TooltipBubble>
      )}
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
