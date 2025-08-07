import { Paper } from './Paper'
import type { CardProps } from './Card.types'

export const Card = ({ raised, elevation = raised ? 8 : 1, children, ...rest }: CardProps) => (
  <Paper as="article" elevation={elevation} {...rest}>
    {children}
  </Paper>
)

Card.displayName = 'Card'
