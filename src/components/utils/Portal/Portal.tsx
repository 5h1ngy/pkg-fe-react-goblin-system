import { createPortal } from "react-dom"

import type { PortalProps } from './Portal.types'

export const Portal = ({ children, container }: PortalProps) => {
  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(children, container ?? document.body)
}

Portal.displayName = 'Portal'
