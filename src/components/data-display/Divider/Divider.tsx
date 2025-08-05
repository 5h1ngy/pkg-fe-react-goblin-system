import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { DividerRoot } from './Divider.style'
import type { DividerProps } from './Divider.types'

export const Divider = ({
  orientation = 'horizontal',
  flexItem,
  sx,
  style,
  ...rest
}: DividerProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <DividerRoot $orientation={orientation} $flex={flexItem} style={resolvedStyle} {...rest} />
}

Divider.displayName = 'Divider'
