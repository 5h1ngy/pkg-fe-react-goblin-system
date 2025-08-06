import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { Backdrop } from './shared/Backdrop'
import { DrawerPanel } from './Drawer.style'
import type { DrawerProps } from './Drawer.types'

export const Drawer = ({
  open,
  onClose,
  anchor = 'left',
  variant = 'temporary',
  width = 280,
  sx,
  style,
  children,
  ...rest
}: DrawerProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const panel = (
    <DrawerPanel $anchor={anchor} $open={open} $width={width} style={resolvedStyle} {...rest}>
      {children}
    </DrawerPanel>
  )

  if (variant === 'permanent') {
    return panel
  }

  return (
    <>
      {variant === 'temporary' && open && <Backdrop onClick={onClose} />}
      {panel}
    </>
  )
}

Drawer.displayName = 'Drawer'
