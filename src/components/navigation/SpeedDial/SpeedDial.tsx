import { useState } from "react"

import { SpeedDialActions, SpeedDialButton, SpeedDialRoot } from './SpeedDial.style'
import type { SpeedDialProps } from './SpeedDial.types'

export const SpeedDial = ({ icon, open, defaultOpen = false, direction = 'up', ariaLabel, children, ...rest }: SpeedDialProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isOpen = open ?? internalOpen

  const toggle = () => setInternalOpen((state) => !state)

  return (
    <SpeedDialRoot aria-label={ariaLabel} $direction={direction} {...rest}>
      <SpeedDialActions $open={isOpen}>{children}</SpeedDialActions>
      <SpeedDialButton type="button" onClick={toggle}>
        {icon}
      </SpeedDialButton>
    </SpeedDialRoot>
  )
}

SpeedDial.displayName = 'SpeedDial'
