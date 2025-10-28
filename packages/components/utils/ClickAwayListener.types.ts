import { ReactNode } from 'react'

export interface ClickAwayListenerProps {
  children: ReactNode
  onClickAway: (event: MouseEvent | TouchEvent) => void
}
