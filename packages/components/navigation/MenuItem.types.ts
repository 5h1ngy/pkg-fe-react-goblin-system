import { HTMLAttributes } from 'react'

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  disabled?: boolean
}
