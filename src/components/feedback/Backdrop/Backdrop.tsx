import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { BackdropRoot } from './Backdrop.style'
import type { BackdropProps } from './Backdrop.types'

export const Backdrop = ({ open, children, sx, style, ...rest }: BackdropProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  if (!open) return null
  return (
    <BackdropRoot style={resolvedStyle} {...rest}>
      {children}
    </BackdropRoot>
  )
}

Backdrop.displayName = 'Backdrop'
