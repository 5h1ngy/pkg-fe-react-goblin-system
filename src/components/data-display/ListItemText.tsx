import type { ListItemTextProps } from './ListItemText.types'
import { ListItemTextRoot } from './ListItemText.style'

export const ListItemText = (props: ListItemTextProps) => <ListItemTextRoot {...props} />

ListItemText.displayName = 'ListItemText'
