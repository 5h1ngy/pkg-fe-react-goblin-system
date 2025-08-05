import { HTMLAttributes, ReactNode } from "react"

export interface SpeedDialProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  open?: boolean
  defaultOpen?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  ariaLabel: string
}

export interface SpeedDialActionProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  tooltipTitle: ReactNode
}
