import { forwardRef } from 'react'

import { useMaterialTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { GridContext, useGridContext } from './Grid.hooks'
import { GridRoot } from './Grid.style'
import type { GridBreakpoint, GridProps, GridSize } from './Grid.types'

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  {
    component: Component = 'div',
    container = false,
    item = false,
    columns = 12,
    spacing,
    wrap = 'wrap',
    justifyContent,
    alignItems,
    xs,
    sm,
    md,
    lg,
    xl,
    sx,
    style,
    ...rest
  },
  ref,
) {
  const theme = useMaterialTheme()
  const parent = useGridContext()
  const resolvedColumns = container ? columns : parent.columns
  const resolvedSpacing = spacing ?? parent.spacing ?? 0
  const sizes: Partial<Record<GridBreakpoint, GridSize>> = {
    xs: xs ?? (item ? true : undefined),
    sm,
    md,
    lg,
    xl,
  }

  const resolvedStyle = resolveSx(theme, sx, style)

  const element = (
    <GridRoot
      as={Component}
      ref={ref}
      $container={container}
      $item={item}
      $columns={resolvedColumns}
      $spacing={resolvedSpacing}
      $sizes={sizes}
      $wrap={wrap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      style={resolvedStyle}
      {...rest}
    />
  )

  if (container) {
    return (
      <GridContext.Provider value={{ spacing: resolvedSpacing, columns: resolvedColumns }}>
        {element}
      </GridContext.Provider>
    )
  }

  return element
})

Grid.displayName = 'Grid'
