import { HTMLAttributes, ReactNode } from 'react'

export interface ImageListItemBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  subtitle?: ReactNode
  position?: 'top' | 'bottom'
  actionIcon?: ReactNode
}
