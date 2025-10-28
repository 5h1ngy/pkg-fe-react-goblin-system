import { HTMLAttributes } from 'react'

import { CardActionsRoot } from './CardActions.style'

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  disableSpacing?: boolean
}

export const CardActions = ({ disableSpacing, children, ...rest }: CardActionsProps) => (
  <CardActionsRoot $disableSpacing={disableSpacing} {...rest}>
    {children}
  </CardActionsRoot>
)

CardActions.displayName = 'CardActions'
