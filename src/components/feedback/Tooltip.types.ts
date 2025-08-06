import { ReactElement, ReactNode } from 'react'

export interface TooltipProps {
  title: ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  children: ReactElement
}
