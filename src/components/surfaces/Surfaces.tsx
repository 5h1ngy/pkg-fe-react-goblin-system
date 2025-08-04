
import {
  ElementType,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
  createContext,
  useContext,
  useState,
} from 'react'
import styled, { css } from 'styled-components'

import { SxProps, resolveSx } from '../../system'
import { useMaterialTheme } from '../../foundations'

/* Paper */

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: number
  variant?: 'elevation' | 'outlined'
  square?: boolean
  sx?: SxProps
  as?: ElementType
}

const PaperRoot = styled.div<{
  $elevation: number
  $variant: PaperProps['variant']
  $square?: boolean
}>`
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme, $square }) => ($square ? 0 : theme.shape.borderRadius)}px;
  padding: 1rem;
  border: ${({ $variant, theme }) => ($variant === 'outlined' ? `1px solid ${theme.palette.divider}` : 'none')};
  box-shadow: ${({ $variant, theme, $elevation }) =>
    $variant === 'elevation' ? theme.shadows[Math.min($elevation, theme.shadows.length - 1)] : 'none'};
  transition: ${({ theme }) => theme.transitions.create(['box-shadow'])};
`

export const Paper = ({ elevation = 1, variant = 'elevation', square, sx, style, ...rest }: PaperProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <PaperRoot $elevation={elevation} $variant={variant} $square={square} style={resolvedStyle} {...rest} />
  )
}

/* Card */

export interface CardProps extends PaperProps {
  raised?: boolean
}

export const Card = ({ raised, elevation = raised ? 8 : 1, children, ...rest }: CardProps) => (
  <Paper as="article" elevation={elevation} {...rest}>
    {children}
  </Paper>
)

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CardActions = styled.div<{ $disableSpacing?: boolean }>`
  display: flex;
  gap: ${({ $disableSpacing }) => ($disableSpacing ? 0 : '0.5rem')};
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  avatar?: ReactNode
  title: ReactNode
  subheader?: ReactNode
  action?: ReactNode
}

const CardHeaderRoot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

export const CardHeader = ({ avatar, title, subheader, action, ...rest }: CardHeaderProps) => (
  <CardHeaderRoot {...rest}>
    {avatar}
    <div style={{ flex: 1 }}>
      <strong>{title}</strong>
      {subheader && <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.875rem' }}>{subheader}</div>}
    </div>
    {action}
  </CardHeaderRoot>
)

const CardMediaRoot = styled.div<{ $image?: string }>`
  width: 100%;
  min-height: 200px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  ${({ $image }) =>
    $image &&
    css`
      background-image: url(${$image});
    `}
`

export interface CardMediaProps extends HTMLAttributes<HTMLElement> {
  image?: string
  component?: 'div' | 'img' | 'video'
}

export const CardMedia = ({ image, component = 'div', children, ...rest }: CardMediaProps) => {
  if (component === 'img' || component === 'video') {
    const Component = component
    return (
      <Component
        src={image}
        style={{ width: '100%', borderRadius: 8, display: 'block' }}
        {...(component === 'video' ? { controls: true } : {})}
        {...(rest as Record<string, unknown>)}
      />
    )
  }

  return (
    <CardMediaRoot $image={image} {...rest}>
      {children}
    </CardMediaRoot>
  )
}

/* Accordion */

interface AccordionContextValue {
  expanded: boolean
  toggle: (event: SyntheticEvent) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  expanded?: boolean
  defaultExpanded?: boolean
  onChange?: (event: SyntheticEvent, expanded: boolean) => void
  disabled?: boolean
}

const AccordionRoot = styled.div<{ $disabled?: boolean; $expanded?: boolean }>`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background: ${({ theme }) => theme.palette.background.paper};
  overflow: hidden;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`

export const Accordion = ({
  expanded,
  defaultExpanded = false,
  onChange,
  disabled,
  children,
  ...rest
}: AccordionProps) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  const isExpanded = expanded ?? internalExpanded

  const toggle = (event: SyntheticEvent) => {
    if (disabled) return
    const next = !isExpanded
    setInternalExpanded(next)
    onChange?.(event, next)
  }

  return (
    <AccordionContext.Provider value={{ expanded: isExpanded, toggle }}>
      <AccordionRoot $disabled={disabled} $expanded={isExpanded} {...rest}>
        {children}
      </AccordionRoot>
    </AccordionContext.Provider>
  )
}

export interface AccordionSummaryProps extends HTMLAttributes<HTMLButtonElement> {
  expandIcon?: ReactNode
}

const AccordionSummaryRoot = styled.button<{ $expanded?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
  padding: 1rem;
  cursor: pointer;
  font: inherit;

  svg {
    transition: ${({ theme }) => theme.transitions.create(['transform'])};
    transform: rotate(${({ $expanded }) => ($expanded ? 180 : 0)}deg);
  }
`

export const AccordionSummary = ({ expandIcon = '⌄', children, ...rest }: AccordionSummaryProps) => {
  const ctx = useContext(AccordionContext)
  if (!ctx) {
    throw new Error('AccordionSummary must be inside Accordion')
  }

  return (
    <AccordionSummaryRoot
      type="button"
      aria-expanded={ctx.expanded}
      $expanded={ctx.expanded}
      onClick={(event) => {
        event.preventDefault()
        ctx.toggle(event)
      }}
      {...rest}
    >
      <span>{children}</span>
      <span>{expandIcon}</span>
    </AccordionSummaryRoot>
  )
}

export const AccordionDetails = styled.div`
  padding: 0 1rem 1rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`
