import { HTMLAttributes, ReactNode } from "react"

export interface BottomNavigationActionProps extends HTMLAttributes<HTMLButtonElement> {
  label?: ReactNode
  icon?: ReactNode
  value?: string | number
  showLabel?: boolean
}
