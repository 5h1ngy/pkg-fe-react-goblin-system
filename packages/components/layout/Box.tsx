import { forwardRef } from 'react'
import type { ElementType, ForwardRefRenderFunction } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { BoxRoot } from './Box.style'
import type { BoxComponent, BoxProps, BoxRef } from './Box.types'

function InnerBox<E extends ElementType = 'div'>(
  { component, sx, style, ...rest }: BoxProps<E>,
  ref: BoxRef<E>,
) {
  const Component = component ?? ('div' as ElementType)
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <BoxRoot as={Component} ref={ref} style={resolvedStyle} {...rest} />
}

export const Box = forwardRef(
  InnerBox as unknown as ForwardRefRenderFunction<unknown>,
) as BoxComponent & {
  displayName?: string
}

Box.displayName = 'Box'
