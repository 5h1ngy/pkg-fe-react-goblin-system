import { MenuItemRoot } from './MenuItem.style'
import type { MenuItemProps } from './MenuItem.types'

export const MenuItem = ({ disabled, children, ...rest }: MenuItemProps) => (
  <MenuItemRoot role="menuitem" $disabled={disabled} {...rest}>
    {children}
  </MenuItemRoot>
)

MenuItem.displayName = 'MenuItem'
