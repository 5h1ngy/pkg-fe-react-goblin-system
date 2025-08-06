import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { ToolbarRoot } from './Toolbar.style'
import type { ToolbarProps } from './Toolbar.types'

export const Toolbar = ({ disableGutters, children, sx, style, ...rest }: ToolbarProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <ToolbarRoot $disableGutters={disableGutters} style={resolvedStyle} {...rest}>
      {children}
    </ToolbarRoot>
  )
}

Toolbar.displayName = 'Toolbar'
