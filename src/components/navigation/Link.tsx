import { useMaterialTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { LinkRoot } from './Link.style'
import type { LinkProps } from './Link.types'

export const Link = ({ color = 'primary', underline = 'hover', sx, style, ...rest }: LinkProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <LinkRoot $color={color} $underline={underline} style={resolvedStyle} {...rest} />
}

Link.displayName = 'Link'
