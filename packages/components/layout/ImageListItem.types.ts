import { HTMLAttributes } from 'react'

export interface ImageListItemProps extends HTMLAttributes<HTMLLIElement> {
  cols?: number
  rows?: number
}
