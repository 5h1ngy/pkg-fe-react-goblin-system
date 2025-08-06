import { HTMLAttributes } from 'react'

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  divider?: boolean
  button?: boolean
}
