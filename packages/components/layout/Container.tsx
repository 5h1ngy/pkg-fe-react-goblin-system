import { forwardRef } from 'react'

import { useGoblinTheme } from '../../foundations'
import { mergeSx, resolveSx } from '../../system'

import { ContainerRoot } from './Container.style'
import type { ContainerProps } from './Container.types'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { maxWidth = 'lg', disableGutters = false, fixed = false, sx, style, ...rest },
  ref
) {
  const theme = useGoblinTheme()
  const widthValue = maxWidth ? `${theme.breakpoints.values[maxWidth]}px` : undefined
  const baseStyles = {
    width: '100%',
    marginInline: 'auto',
    paddingInline: disableGutters ? 0 : theme.spacing(2),
    maxWidth: widthValue ? (fixed ? widthValue : `min(${widthValue}, 100%)`) : undefined,
  }

  const resolvedStyle = resolveSx(theme, mergeSx(baseStyles, sx), style)

  return <ContainerRoot ref={ref} style={resolvedStyle} {...rest} />
})

Container.displayName = 'Container'
