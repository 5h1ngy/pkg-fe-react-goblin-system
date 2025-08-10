import styled, { css } from 'styled-components'

import type { GridBreakpoint, GridSize } from './Grid.types'

interface GridStyleProps {
  $container: boolean
  $item: boolean
  $spacing: number
  $columns: number
  $sizes: Partial<Record<GridBreakpoint, GridSize>>
  $wrap: string
  $justifyContent?: string
  $alignItems?: string
}

export const GridRoot = styled.div<GridStyleProps>`
  box-sizing: border-box;

  ${({ $container, $wrap }) =>
    $container &&
    css`
      display: flex;
      flex-wrap: ${$wrap};
    `}

  ${({ $container, $spacing, theme }) =>
    $container &&
    css`
      margin: calc(-1 * ${theme.spacing($spacing / 2)});
    `}

  ${({ $item, $spacing, theme }) =>
    $item &&
    css`
      padding: ${theme.spacing($spacing / 2)};
      flex-basis: 100%;
      max-width: 100%;
    `}

  ${({ $sizes, $columns, theme }) =>
    Object.entries($sizes).map(([breakpoint, size]) => {
      if (size === undefined || size === false) {
        return ''
      }

      if (size === 'auto') {
        const autoStyles = css`
          flex: 0 0 auto;
          max-width: none;
        `
        return breakpoint === 'xs'
          ? autoStyles
          : css`
              ${theme.breakpoints.up(breakpoint as GridBreakpoint)} {
                ${autoStyles}
              }
            `
      }

      const span = typeof size === 'number' ? Math.min(Math.max(size, 0), $columns) : $columns
      const width = `${(span / $columns) * 100}%`
      const spanStyles = css`
        flex-basis: ${width};
        max-width: ${width};
      `

      return breakpoint === 'xs'
        ? spanStyles
        : css`
            ${theme.breakpoints.up(breakpoint as GridBreakpoint)} {
              ${spanStyles}
            }
          `
    })}

  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}

  ${({ $alignItems }) =>
    $alignItems &&
    css`
      align-items: ${$alignItems};
    `}
`
