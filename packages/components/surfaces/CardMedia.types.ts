import { HTMLAttributes } from 'react'

export interface CardMediaProps extends HTMLAttributes<HTMLElement> {
  image?: string
  component?: 'div' | 'img' | 'video'
}
