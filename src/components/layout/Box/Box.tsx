import { forwardRef } from 'react'

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { BoxRoot } from './Box.style'
import type { BoxProps } from './Box.types'

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(
  { component: Component = 'div', sx, style, ...rest },
  ref
) {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <BoxRoot as={Component} ref={ref} style={resolvedStyle} {...rest} />
})

Box.displayName = 'Box'
