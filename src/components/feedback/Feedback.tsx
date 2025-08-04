import {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useState,
} from 'react'
import styled, { css, keyframes } from 'styled-components'

import { SxProps, resolveSx } from '../../system'
import { MaterialTheme, useMaterialTheme } from '../../foundations'

type Severity = 'success' | 'info' | 'warning' | 'error'

const severityColor = (theme: MaterialTheme, severity: Severity) => theme.palette[severity]

/* Alert */

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  severity?: Severity
  variant?: 'standard' | 'outlined' | 'filled'
  action?: ReactNode
  icon?: ReactNode
  onClose?: () => void
  sx?: SxProps
}

const AlertRoot = styled.div<{
  $severity: Severity
  $variant: NonNullable<AlertProps['variant']>
}>`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid transparent;
  background: ${({ theme, $severity, $variant }) => {
    const color = severityColor(theme, $severity)
    if ($variant === 'filled') return color.main
    if ($variant === 'outlined') return 'transparent'
    return `${color.main}22`
  }};
  color: ${({ theme, $severity, $variant }) => {
    const color = severityColor(theme, $severity)
    return $variant === 'filled' ? color.contrastText : color.main
  }};
  border-color: ${({ theme, $severity, $variant }) =>
    $variant === 'outlined' ? severityColor(theme, $severity).main : 'transparent'};
`

export const Alert = ({
  severity = 'success',
  variant = 'standard',
  action,
  icon,
  onClose,
  children,
  sx,
  style,
  ...rest
}: AlertProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <AlertRoot $severity={severity} $variant={variant} role="alert" style={resolvedStyle} {...rest}>
      {icon}
      <div style={{ flex: 1 }}>{children}</div>
      {action}
      {onClose && (
        <button onClick={onClose} style={{ border: 'none', background: 'transparent', color: 'inherit' }}>
          ×
        </button>
      )}
    </AlertRoot>
  )
}

/* Backdrop */

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  sx?: SxProps
}

const BackdropRoot = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal - 1};
`

export const Backdrop = ({ open, children, sx, style, ...rest }: BackdropProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  if (!open) return null
  return (
    <BackdropRoot style={resolvedStyle} {...rest}>
      {children}
    </BackdropRoot>
  )
}

/* Dialog */

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  fullWidth?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg'
}

const DialogContainer = styled.div<{ $fullWidth?: boolean; $maxWidth: NonNullable<DialogProps['maxWidth']> }>`
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  max-width: ${({ theme, $maxWidth }) => `${theme.breakpoints.values[$maxWidth]}px`};
  box-shadow: ${({ theme }) => theme.shadows[24] ?? theme.shadows[theme.shadows.length - 1]};
  display: flex;
  flex-direction: column;
`

export const Dialog = ({ open, onClose, fullWidth, maxWidth = 'sm', children, ...rest }: DialogProps) => {
  if (!open) return null

  return (
    <BackdropRoot onClick={onClose}>
      <DialogContainer
        $fullWidth={fullWidth}
        $maxWidth={maxWidth}
        onClick={(event) => event.stopPropagation()}
        {...rest}
      >
        {children}
      </DialogContainer>
    </BackdropRoot>
  )
}

export const DialogTitle = styled.h2`
  margin: 0;
  padding: 1rem 1.5rem 0;
`

export const DialogContent = styled.div`
  padding: 1rem 1.5rem;
  flex: 1;
`

export const DialogActions = styled.div`
  padding: 0.75rem 1.5rem 1.25rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`

/* Progress */

export interface LinearProgressProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'determinate' | 'indeterminate'
  value?: number
  sx?: SxProps
}

const LinearProgressRoot = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme }) => theme.palette.grey[200]};
  overflow: hidden;
`

const indeterminateKey = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(100%); }
`

const LinearProgressBar = styled.span<{ $value?: number; $variant: NonNullable<LinearProgressProps['variant']> }>`
  display: block;
  height: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  transform-origin: left;
  ${({ $variant, $value }) =>
    $variant === 'determinate'
      ? css`
          width: ${$value ?? 0}%;
        `
      : css`
          width: 50%;
          animation: ${indeterminateKey} 1.2s infinite;
        `}
`

export const LinearProgress = ({
  variant = 'indeterminate',
  value,
  sx,
  style,
  ...rest
}: LinearProgressProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <LinearProgressRoot style={resolvedStyle} {...rest}>
      <LinearProgressBar $variant={variant} $value={value} />
    </LinearProgressRoot>
  )
}

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  thickness?: number
  value?: number
  variant?: 'indeterminate' | 'determinate'
  sx?: SxProps
}

const rotateKey = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const CircularProgressSvg = styled.svg<{ $variant: NonNullable<CircularProgressProps['variant']> }>`
  animation: ${({ $variant }) => ($variant === 'indeterminate' ? rotateKey : 'none')} 1.4s linear infinite;
`

export const CircularProgress = ({
  size = 48,
  thickness = 4,
  value = 0,
  variant = 'indeterminate',
  sx,
  style,
  ...rest
}: CircularProgressProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div style={{ width: size, height: size, ...resolvedStyle }} {...rest}>
      <CircularProgressSvg $variant={variant} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={theme.palette.grey[200]}
          strokeWidth={thickness}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={theme.palette.primary.main}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={variant === 'determinate' ? offset : circumference * 0.75}
          strokeLinecap="round"
        />
      </CircularProgressSvg>
    </div>
  )
}

/* Skeleton */

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'rectangular' | 'circular'
  width?: number | string
  height?: number | string
  sx?: SxProps
}

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`

const SkeletonRoot = styled.span<{
  $variant: NonNullable<SkeletonProps['variant']>
  $width?: number | string
  $height?: number | string
}>`
  display: block;
  background: linear-gradient(90deg, rgba(0,0,0,0.08) 25%, rgba(0,0,0,0.15) 37%, rgba(0,0,0,0.08) 63%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.4s ease infinite;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width ?? '100%')};
  height: ${({ $height, $variant }) =>
    $variant === 'text' ? '1em' : typeof $height === 'number' ? `${$height}px` : $height ?? '100px'};
  border-radius: ${({ $variant }) => ($variant === 'circular' ? '50%' : '4px')};
`

export const Skeleton = ({ variant = 'text', width, height, sx, style }: SkeletonProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <SkeletonRoot $variant={variant} $width={width} $height={height} style={resolvedStyle} />
}

/* Snackbar */

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  message: ReactNode
  autoHideDuration?: number
  onClose?: () => void
  action?: ReactNode
  anchorOrigin?: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'center' | 'right'
  }
}

const SnackbarRoot = styled.div<{ $anchor: NonNullable<SnackbarProps['anchorOrigin']> }>`
  position: fixed;
  ${({ $anchor }) => `${$anchor.vertical}: 1rem; ${$anchor.horizontal}: 1rem;`}
  min-width: 288px;
  max-width: 560px;
  background: ${({ theme }) => theme.palette.grey[900]};
  color: #fff;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows[16]};
  z-index: ${({ theme }) => theme.zIndex.snackbar};
`

export const Snackbar = ({
  open,
  message,
  autoHideDuration = 4000,
  onClose,
  action,
  anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
}: SnackbarProps) => {
  useEffect(() => {
    if (!open || !autoHideDuration) return
    const timer = setTimeout(() => onClose?.(), autoHideDuration)
    return () => clearTimeout(timer)
  }, [open, autoHideDuration, onClose])

  if (!open) return null

  return (
    <SnackbarRoot role="status" $anchor={anchorOrigin}>
      <span style={{ flex: 1 }}>{message}</span>
      {action}
    </SnackbarRoot>
  )
}

/* Tooltip */

export interface TooltipProps {
  title: ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  children: ReactElement
}

const TooltipBubble = styled.span<{ $placement: NonNullable<TooltipProps['placement']> }>`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.35rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  ${({ $placement }) => {
    switch ($placement) {
      case 'bottom':
        return css`
          top: calc(100% + 0.25rem);
          left: 50%;
          transform: translateX(-50%);
        `
      case 'left':
        return css`
          right: calc(100% + 0.25rem);
          top: 50%;
          transform: translateY(-50%);
        `
      case 'right':
        return css`
          left: calc(100% + 0.25rem);
          top: 50%;
          transform: translateY(-50%);
        `
      case 'top':
      default:
        return css`
          bottom: calc(100% + 0.25rem);
          left: 50%;
          transform: translateX(-50%);
        `
    }
  }}
`

export const Tooltip = ({ title, placement = 'top', children }: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const trigger = cloneElement(children, {
    onMouseEnter: (event: React.MouseEvent) => {
      children.props.onMouseEnter?.(event)
      setOpen(true)
    },
    onMouseLeave: (event: React.MouseEvent) => {
      children.props.onMouseLeave?.(event)
      setOpen(false)
    },
  })

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      {trigger}
      {open && <TooltipBubble $placement={placement} role="tooltip">{title}</TooltipBubble>}
    </span>
  )
}
