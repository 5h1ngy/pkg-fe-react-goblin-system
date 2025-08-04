import {
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'
import styled from 'styled-components'

import { SxProps, resolveSx } from '../../system'
import { MaterialTheme, useMaterialTheme } from '../../foundations'

type ChipColor = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'

const getChipColors = (theme: MaterialTheme, color: ChipColor) => {
  if (color === 'default') {
    return {
      main: theme.palette.grey[300],
      contrastText: theme.palette.text.primary,
      border: theme.palette.grey[400],
    }
  }

  const palette = theme.palette[color]
  return {
    main: palette.main,
    contrastText: palette.contrastText,
    border: palette.main,
  }
}
/* Typography */

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline'

const variantMapping: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'span',
  overline: 'span',
}

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  color?: 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  gutterBottom?: boolean
  paragraph?: boolean
  sx?: SxProps
  component?: keyof JSX.IntrinsicElements
}

const TypographyRoot = styled.span<{
  $variant: TypographyVariant
  $color: NonNullable<TypographyProps['color']>
  $align?: TypographyProps['align']
  $gutter?: boolean
  $paragraph?: boolean
}>`
  display: ${({ $paragraph }) => ($paragraph ? 'block' : 'inline')};
  margin: 0;
  margin-bottom: ${({ $gutter }) => ($gutter ? '0.35em' : 0)};
  text-align: ${({ $align }) => $align ?? 'inherit'};
  text-transform: ${({ $variant }) => ($variant === 'overline' ? 'uppercase' : 'inherit')};
  letter-spacing: ${({ theme, $variant }) => theme.typography[$variant].letterSpacing ?? 'normal'};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].fontSize};
  font-weight: ${({ theme, $variant }) => theme.typography[$variant].fontWeight ?? theme.typography.fontWeightRegular};
  line-height: ${({ theme, $variant }) => theme.typography[$variant].lineHeight ?? 1.5};
  color: ${({ theme, $color }) => {
    switch ($color) {
      case 'primary':
        return theme.palette.primary.main
      case 'secondary':
        return theme.palette.secondary.main
      case 'error':
        return theme.palette.error.main
      case 'textSecondary':
        return theme.palette.text.secondary
      case 'textPrimary':
        return theme.palette.text.primary
      default:
        return 'inherit'
    }
  }};
`

export const Typography = ({
  variant = 'body1',
  color = 'initial',
  align = 'inherit',
  gutterBottom,
  paragraph,
  sx,
  style,
  component,
  children,
  ...rest
}: TypographyProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const Component = component ?? variantMapping[variant] ?? 'span'

  return (
    <TypographyRoot
      as={Component}
      $variant={variant}
      $color={color}
      $align={align}
      $gutter={gutterBottom}
      $paragraph={paragraph}
      style={resolvedStyle}
      {...rest}
    >
      {children}
    </TypographyRoot>
  )
}

/* Divider */

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  flexItem?: boolean
  textAlign?: 'left' | 'center' | 'right'
  sx?: SxProps
}

const DividerRoot = styled.hr<{ $orientation: 'horizontal' | 'vertical'; $flex?: boolean }>`
  border: none;
  border-top: ${({ theme, $orientation }) =>
    $orientation === 'horizontal' ? `1px solid ${theme.palette.divider}` : 'none'};
  border-left: ${({ theme, $orientation }) =>
    $orientation === 'vertical' ? `1px solid ${theme.palette.divider}` : 'none'};
  margin: ${({ $orientation }) => ($orientation === 'horizontal' ? '1rem 0' : '0 1rem')};
  align-self: ${({ $flex }) => ($flex ? 'stretch' : 'auto')};
`

export const Divider = ({ orientation = 'horizontal', flexItem, sx, style, ...rest }: DividerProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <DividerRoot $orientation={orientation} $flex={flexItem} style={resolvedStyle} {...rest} />
}

/* Avatar */

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  variant?: 'circular' | 'rounded' | 'square'
  sx?: SxProps
}

const AvatarRoot = styled.div<{ $variant: NonNullable<AvatarProps['variant']> }>`
  width: 40px;
  height: 40px;
  border-radius: ${({ $variant, theme }) =>
    $variant === 'circular' ? '50%' : $variant === 'rounded' ? theme.shape.borderRadius : '0'};
  background: ${({ theme }) => theme.palette.grey[300]};
  color: ${({ theme }) => theme.palette.text.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Avatar = ({ src, alt, variant = 'circular', children, sx, style, ...rest }: AvatarProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <AvatarRoot $variant={variant} style={resolvedStyle} {...rest}>
      {src ? <img src={src} alt={alt} /> : children}
    </AvatarRoot>
  )
}

/* Badge */

export interface BadgeProps {
  badgeContent: ReactNode
  color?: 'default' | 'primary' | 'secondary' | 'error'
  max?: number
  children: ReactElement
}

const BadgeWrapper = styled.span`
  position: relative;
  display: inline-flex;
`

const BadgeDot = styled.span<{ $color: NonNullable<BadgeProps['color']> }>`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  background: ${({ theme, $color }) => {
    switch ($color) {
      case 'primary':
        return theme.palette.primary.main
      case 'secondary':
        return theme.palette.secondary.main
      case 'error':
        return theme.palette.error.main
      default:
        return theme.palette.grey[500]
    }
  }};
  color: #fff;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
`

export const Badge = ({ badgeContent, max = 99, color = 'default', children }: BadgeProps) => {
  const displayContent =
    typeof badgeContent === 'number' && badgeContent > max ? `${max}+` : badgeContent

  return (
    <BadgeWrapper>
      {children}
      <BadgeDot $color={color}>{displayContent}</BadgeDot>
    </BadgeWrapper>
  )
}

/* Chip */

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode
  color?: ChipColor
  variant?: 'filled' | 'outlined'
  onDelete?: () => void
  sx?: SxProps
}

const ChipRoot = styled.div<{
  $color: ChipColor
  $variant: NonNullable<ChipProps['variant']>
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  border: 1px solid transparent;
  background: ${({ theme, $color, $variant }) => {
    const palette = getChipColors(theme, $color)
    return $variant === 'filled' ? palette.main : 'transparent'
  }};
  color: ${({ theme, $color, $variant }) => {
    const palette = getChipColors(theme, $color)
    return $variant === 'filled' ? palette.contrastText : palette.main
  }};
  border-color: ${({ theme, $color, $variant }) =>
    $variant === 'outlined' ? getChipColors(theme, $color).border : 'transparent'};
`

export const Chip = ({ label, onDelete, color = 'default', variant = 'filled', sx, style, ...rest }: ChipProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <ChipRoot $color={color} $variant={variant} style={resolvedStyle} {...rest}>
      {label}
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer' }}
        >
          ×
        </button>
      )}
    </ChipRoot>
  )
}

/* List */

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItemRoot = styled.li<{ $divider?: boolean; $button?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: ${({ $divider, theme }) => ($divider ? `1px solid ${theme.palette.divider}` : 'none')};
  cursor: ${({ $button }) => ($button ? 'pointer' : 'default')};

  &:hover {
    background: ${({ $button, theme }) => ($button ? theme.palette.action.hover : 'transparent')};
  }
`

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  divider?: boolean
  button?: boolean
}

export const ListItem = ({ divider, button, ...rest }: ListItemProps) => (
  <ListItemRoot $divider={divider} $button={button} {...rest} />
)

export const ListItemIcon = styled.span`
  display: inline-flex;
  min-width: 32px;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const ListItemText = styled.span`
  flex: 1;
  color: ${({ theme }) => theme.palette.text.primary};
`

/* Table */

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHead = styled.thead`
  background: ${({ theme }) => theme.palette.grey[100]};
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`

const TableCellRoot = styled.td<{ $variant?: 'head' | 'body' | 'footer' }>`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: ${({ $variant }) => ($variant === 'head' ? 600 : 400)};
`

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  variant?: 'head' | 'body' | 'footer'
}

export const TableCell = ({ variant, ...rest }: TableCellProps) => (
  <TableCellRoot $variant={variant} {...rest} />
)
