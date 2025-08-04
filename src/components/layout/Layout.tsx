import {
  CSSProperties,
  Children,
  ElementType,
  Fragment,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
} from 'react'
import styled, { css } from 'styled-components'

import { SxProps, mergeSx, resolveSx } from '../../system'
import { useMaterialTheme } from '../../foundations'

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  component?: ElementType
  sx?: SxProps
  style?: CSSProperties
}

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(
  { component: Component = 'div', sx, style, ...rest },
  ref
) {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <Component ref={ref} style={resolvedStyle} {...rest} />
})

export interface ContainerProps extends Omit<BoxProps, 'component'> {
  maxWidth?: BreakpointKey | false
  disableGutters?: boolean
  fixed?: boolean
}

export const Container = forwardRef<HTMLElement, ContainerProps>(function Container(
  { maxWidth = 'lg', disableGutters = false, fixed = false, sx, ...rest },
  ref
) {
  const theme = useMaterialTheme()
  const widthValue = maxWidth ? `${theme.breakpoints.values[maxWidth]}px` : undefined
  const baseStyles: CSSProperties = {
    width: '100%',
    marginInline: 'auto',
    paddingInline: disableGutters ? 0 : theme.spacing(2),
  }

  if (widthValue) {
    baseStyles.maxWidth = fixed ? widthValue : `min(${widthValue}, 100%)`
  }

  return <Box ref={ref} component="div" sx={mergeSx(baseStyles, sx)} {...rest} />
})

type GridSize = number | boolean | 'auto'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  component?: ElementType
  container?: boolean
  item?: boolean
  columns?: number
  spacing?: number
  wrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  xs?: GridSize
  sm?: GridSize
  md?: GridSize
  lg?: GridSize
  xl?: GridSize
}

interface GridContextValue {
  spacing: number
  columns: number
}

const GridContext = createContext<GridContextValue>({ spacing: 0, columns: 12 })

interface GridStyleProps {
  $container: boolean
  $item: boolean
  $spacing: number
  $columns: number
  $sizes: Partial<Record<BreakpointKey, GridSize>>
  $wrap: CSSProperties['flexWrap']
  $justifyContent?: CSSProperties['justifyContent']
  $alignItems?: CSSProperties['alignItems']
}

const GridRoot = styled.div<GridStyleProps>`
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
              ${theme.breakpoints.up(breakpoint as BreakpointKey)} {
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
            ${theme.breakpoints.up(breakpoint as BreakpointKey)} {
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
    ...rest
  },
  ref
) {
  const parent = useContext(GridContext)
  const resolvedColumns = container ? columns : parent.columns
  const resolvedSpacing = spacing ?? parent.spacing ?? 0
  const sizes: Partial<Record<BreakpointKey, GridSize>> = {
    xs: xs ?? (item ? true : undefined),
    sm,
    md,
    lg,
    xl,
  }

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

export interface StackProps extends BoxProps {
  direction?: CSSProperties['flexDirection']
  spacing?: number
  divider?: ReactNode
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
}

export const Stack = forwardRef<HTMLElement, StackProps>(function Stack(
  { direction = 'column', spacing = 0, divider, alignItems, justifyContent, sx, children, ...rest },
  ref
) {
  const theme = useMaterialTheme()
  const baseStyles: CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    gap: theme.spacing(spacing),
    alignItems,
    justifyContent,
  }

  const items = Children.toArray(children)
  const content =
    divider && items.length > 1
      ? items.flatMap((child, index) => {
          if (index === items.length - 1) {
            return child
          }

          const dividerNode =
            isValidElement(divider) && !divider.key
              ? cloneElement(divider as ReactElement, { key: `divider-${index}` })
              : divider

          return [
            child,
            <Fragment key={`stack-divider-${index}`}>{dividerNode}</Fragment>,
          ]
        })
      : children

  return (
    <Box ref={ref} component="div" sx={mergeSx(baseStyles, sx)} {...rest}>
      {content}
    </Box>
  )
})

type ImageListVariant = 'standard' | 'masonry' | 'woven' | 'quilted'

interface ImageListContextValue {
  variant: ImageListVariant
}

const ImageListContext = createContext<ImageListContextValue>({ variant: 'standard' })

interface ImageListProps extends Omit<BoxProps, 'component'> {
  cols?: number
  gap?: number
  rowHeight?: number | 'auto'
  variant?: ImageListVariant
}

const ImageListRoot = styled.ul<{
  $gap: string
  $cols: number
  $rowHeight?: number | 'auto'
  $variant: ImageListVariant
}>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${({ $variant, $cols, $gap, $rowHeight }) =>
    $variant === 'masonry'
      ? css`
          column-count: ${$cols};
          column-gap: ${$gap};

          & > li {
            break-inside: avoid;
            margin-bottom: ${$gap};
          }
        `
      : css`
          display: grid;
          grid-template-columns: repeat(${$cols}, minmax(0, 1fr));
          gap: ${$gap};
          ${$rowHeight && $rowHeight !== 'auto'
            ? css`
                grid-auto-rows: ${$rowHeight}px;
              `
            : ''}
        `}
`

export const ImageList = forwardRef<HTMLUListElement, ImageListProps>(function ImageList(
  { cols = 3, gap = 2, rowHeight = 164, variant = 'standard', children, ...rest },
  ref
) {
  const theme = useMaterialTheme()
  const gapValue = theme.spacing(gap)

  const list = (
    <ImageListRoot
      ref={ref}
      $gap={gapValue}
      $cols={cols}
      $rowHeight={rowHeight}
      $variant={variant}
      {...rest}
    >
      {children}
    </ImageListRoot>
  )

  return <ImageListContext.Provider value={{ variant }}>{list}</ImageListContext.Provider>
})

export interface ImageListItemProps extends HTMLAttributes<HTMLLIElement> {
  cols?: number
  rows?: number
}

const ImageListItemRoot = styled.li<{
  $variant: ImageListVariant
  $cols: number
  $rows: number
}>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${({ $variant, $cols, $rows }) =>
    $variant !== 'masonry' &&
    css`
      grid-column: span ${$cols};
      grid-row: span ${$rows};
    `}
`

export const ImageListItem = forwardRef<HTMLLIElement, ImageListItemProps>(function ImageListItem(
  { cols = 1, rows = 1, ...rest },
  ref
) {
  const { variant } = useContext(ImageListContext)

  return <ImageListItemRoot ref={ref} $variant={variant} $cols={cols} $rows={rows} {...rest} />
})

export interface ImageListItemBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  subtitle?: ReactNode
  position?: 'top' | 'bottom'
  actionIcon?: ReactNode
}

const ImageListItemBarRoot = styled.div<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  left: 0;
  right: 0;
  ${({ $position }) => ($position === 'top' ? 'top: 0;' : 'bottom: 0;')}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    ${({ $position }) => ($position === 'top' ? '180deg' : '0deg')},
    rgba(0, 0, 0, 0.6) 0%,
    transparent 100%
  );
  color: #fff;
`

const ImageListItemBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`

export const ImageListItemBar = ({
  title,
  subtitle,
  position = 'bottom',
  actionIcon,
  ...rest
}: ImageListItemBarProps) => (
  <ImageListItemBarRoot $position={position} {...rest}>
    <ImageListItemBarContent>
      <span>{title}</span>
      {subtitle && <small>{subtitle}</small>}
    </ImageListItemBarContent>
    {actionIcon}
  </ImageListItemBarRoot>
)
