import { ReactElement, ReactNode } from 'react'

export interface BadgeProps {
  badgeContent: ReactNode
  color?: 'default' | 'primary' | 'secondary' | 'error'
  max?: number
  children: ReactElement
}
