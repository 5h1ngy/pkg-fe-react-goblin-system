import { ListItemRoot } from './ListItem.style'
import type { ListItemProps } from './ListItem.types'

export const ListItem = ({ divider, button, ...rest }: ListItemProps) => (
  <ListItemRoot $divider={divider} $button={button} {...rest} />
)

ListItem.displayName = 'ListItem'
