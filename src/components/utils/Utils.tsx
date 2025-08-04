
import {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { SxProps, resolveSx } from '../../system'
import { useMaterialTheme } from '../../foundations'

/* ClickAwayListener */

export interface ClickAwayListenerProps {
  children: ReactNode
  onClickAway: (event: MouseEvent | TouchEvent) => void
}

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

/* Collapse */

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  in?: boolean
  timeout?: number
  sx?: SxProps
}

const CollapseWrapper = styled.div<{ $height: number; $in: boolean; $timeout: number }>`
  overflow: hidden;
  transition: height ${({ $timeout }) => $timeout}ms ease;
  height: ${({ $height, $in }) => ($in ? `${$height}px` : '0')};
`

export const Collapse = ({ in: inProp = false, timeout = 300, children, sx, style, ...rest }: CollapseProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight)
    }
  }, [children])

  return (
    <CollapseWrapper $in={inProp} $height={height} $timeout={timeout} style={resolvedStyle} {...rest}>
      <div ref={ref}>{children}</div>
    </CollapseWrapper>
  )
}

/* Portal */

export interface PortalProps {
  children: ReactNode
  container?: Element | null
}

export const Portal = ({ children, container }: PortalProps) => {
  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(children, container ?? document.body)
}

/* Modal */

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  sx?: SxProps
}

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`

const ModalSurface = styled.div`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[24] ?? theme.shadows[theme.shadows.length - 1]};
  padding: 1.5rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
`

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

/* Popover */

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  anchorEl?: HTMLElement | null
  onClose?: () => void
  sx?: SxProps
}

const PopoverSurface = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  box-shadow: ${({ theme }) => theme.shadows[8]};
  z-index: ${({ theme }) => theme.zIndex.modal};
  min-width: 200px;
`

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
