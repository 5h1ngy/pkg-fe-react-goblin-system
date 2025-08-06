import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { AppBarRoot } from './AppBar.style'
import type { AppBarProps } from './AppBar.types'

export const AppBar = ({
  position = 'fixed',
  color = 'primary',
  elevation = 4,
  sx,
  style,
  children,
  ...rest
}: AppBarProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <AppBarRoot $position={position} $color={color} $elevation={elevation} style={resolvedStyle} {...rest}>
      {children}
    </AppBarRoot>
  )
}

AppBar.displayName = 'AppBar'
