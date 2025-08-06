import type { ListProps } from './List.types'
import { ListRoot } from './List.style'

export const List = (props: ListProps) => <ListRoot {...props} />

List.displayName = 'List'
