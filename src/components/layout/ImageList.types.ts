import { HTMLAttributes, ReactNode } from 'react'

export type ImageListVariant = 'standard' | 'masonry' | 'woven' | 'quilted'

export interface ImageListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'cols'> {
  cols?: number
  gap?: number
  rowHeight?: number | 'auto'
  variant?: ImageListVariant
}

export interface ImageListItemProps extends HTMLAttributes<HTMLLIElement> {
  cols?: number
  rows?: number
}

export interface ImageListItemBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  subtitle?: ReactNode
  position?: 'top' | 'bottom'
  actionIcon?: ReactNode
}
