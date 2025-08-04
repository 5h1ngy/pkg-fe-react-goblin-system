import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from 'react'
import styled, { css } from 'styled-components'

import { SxProps, resolveSx } from '../../system'
import { MaterialTheme, useMaterialTheme } from '../../foundations'

type PaletteIntent = 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'

const getIntentColor = (theme: MaterialTheme, color: PaletteIntent) => {
  if (color === 'inherit') {
    return { main: 'inherit', contrastText: 'inherit' }
  }
  if (color === 'default') {
    return {
      main: theme.palette.background.paper,
      contrastText: theme.palette.text.primary,
    }
  }

  const map: Record<
    Exclude<PaletteIntent, 'inherit' | 'default'>,
    'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
  > = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
  }

  const key = map[color as Exclude<PaletteIntent, 'inherit' | 'default'>]
  return theme.palette[key]
}

/* AppBar + Toolbar */

export interface AppBarProps extends HTMLAttributes<HTMLElement> {
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
  color?: PaletteIntent | 'transparent'
  elevation?: number
  sx?: SxProps
}

const AppBarRoot = styled.header<{
  $position: AppBarProps['position']
  $color: AppBarProps['color']
  $elevation: number
}>`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme, $color }) =>
    $color === 'transparent'
      ? 'transparent'
      : getIntentColor(theme, $color ?? 'primary').main};
  color: ${({ theme, $color }) =>
    $color === 'transparent'
      ? theme.palette.text.primary
      : getIntentColor(theme, $color ?? 'primary').contrastText};
  position: ${({ $position }) => $position ?? 'fixed'};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  box-shadow: ${({ theme, $elevation }) =>
    theme.shadows[Math.min($elevation, theme.shadows.length - 1)]};
`

export const AppBar = ({
  position = 'fixed',
  color = 'primary',
  elevation = 4,
  sx,
  style,
  children,
  ...rest
}: AppBarProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <AppBarRoot
      $position={position}
      $color={color}
      $elevation={elevation}
      style={resolvedStyle}
      {...rest}
    >
      {children}
    </AppBarRoot>
  )
}

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  disableGutters?: boolean
  sx?: SxProps
}

const ToolbarRoot = styled.div<{ $disableGutters?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: ${({ $disableGutters }) => ($disableGutters ? '0' : '0 16px')};

  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      min-height: 64px;
    }
  `}
`

export const Toolbar = ({ disableGutters, children, sx, style, ...rest }: ToolbarProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <ToolbarRoot $disableGutters={disableGutters} style={resolvedStyle} {...rest}>
      {children}
    </ToolbarRoot>
  )
}

/* Tabs */

type TabsValue = number | string

interface TabsContextValue {
  value: TabsValue
  onChange: (event: React.MouseEvent<HTMLElement>, newValue: TabsValue) => void
  variant: 'standard' | 'scrollable' | 'fullWidth'
}

const TabsContext = createContext<TabsContextValue | null>(null)

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: TabsValue
  defaultValue?: TabsValue
  onChange?: (event: React.MouseEvent<HTMLElement>, value: TabsValue) => void
  variant?: 'standard' | 'scrollable' | 'fullWidth'
  sx?: SxProps
}

const TabsRoot = styled.div<{ $variant: TabsProps['variant'] }>`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  overflow-x: ${({ $variant }) => ($variant === 'scrollable' ? 'auto' : 'visible')};
`

const TabButton = styled.button<{ $selected?: boolean }>`
  appearance: none;
  border: none;
  background: transparent;
  padding: 0.75rem 1.25rem;
  font: inherit;
  cursor: pointer;
  position: relative;
  color: ${({ theme, $selected }) => ($selected ? theme.palette.text.primary : theme.palette.text.secondary)};
  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    border-radius: 3px 3px 0 0;
    background: ${({ theme }) => theme.palette.primary.main};
    opacity: ${({ $selected }) => ($selected ? 1 : 0)};
    transform: scaleX(${({ $selected }) => ($selected ? 1 : 0.4)});
    transition: ${({ theme }) => theme.transitions.create(['opacity', 'transform'])};
  }
`

export const Tabs = ({
  value,
  defaultValue = 0,
  onChange,
  variant = 'standard',
  sx,
  style,
  children,
  ...rest
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState<TabsValue>(defaultValue)
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const currentValue = value ?? internalValue

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: TabsValue) => {
    setInternalValue(newValue)
    onChange?.(event, newValue)
  }

  return (
    <TabsContext.Provider value={{ value: currentValue, onChange: handleChange, variant }}>
      <TabsRoot $variant={variant} style={resolvedStyle} {...rest}>
        {children}
      </TabsRoot>
    </TabsContext.Provider>
  )
}

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode
  value?: TabsValue
  icon?: ReactNode
  sx?: SxProps
}

export const Tab = ({ label, value, icon, sx, style, ...rest }: TabProps) => {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    throw new Error('Tab must be rendered inside Tabs')
  }

  const tabValue = value ?? label?.toString() ?? ''
  const selected = ctx.value === tabValue
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <TabButton
      type="button"
      role="tab"
      aria-selected={selected}
      $selected={selected}
      onClick={(event) => ctx.onChange(event, tabValue)}
      style={resolvedStyle}
      {...rest}
    >
      {icon}
      {label}
    </TabButton>
  )
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: TabsValue
  hidden?: boolean
}

export const TabPanel = ({ value, hidden, children, ...rest }: TabPanelProps) => {
  const ctx = useContext(TabsContext)

  if (!ctx) {
    return null
  }

  const active = ctx.value === value
  if (!active && hidden !== false) {
    return null
  }

  return (
    <div role="tabpanel" hidden={!active && hidden !== false} {...rest}>
      {children}
    </div>
  )
}

/* Drawer */

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  anchor?: 'left' | 'right'
  variant?: 'temporary' | 'persistent' | 'permanent'
  width?: number
  sx?: SxProps
}

const DrawerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${({ theme }) => theme.zIndex.drawer - 1};
`

const DrawerPanel = styled.aside<{
  $anchor: 'left' | 'right'
  $open: boolean
  $width: number
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: ${({ $width }) => $width}px;
  ${({ $anchor }) => ($anchor === 'left' ? 'left: 0;' : 'right: 0;')}
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[4]};
  transform: translateX(
    ${({ $anchor, $open }) => {
      if ($open) return '0';
      return $anchor === 'left' ? '-100%' : '100%';
    }}
  );
  transition: ${({ theme }) => theme.transitions.create(['transform'])};
  z-index: ${({ theme }) => theme.zIndex.drawer};
  display: flex;
  flex-direction: column;
`

export const Drawer = ({
  open,
  onClose,
  anchor = 'left',
  variant = 'temporary',
  width = 280,
  sx,
  style,
  children,
  ...rest
}: DrawerProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const panel = (
    <DrawerPanel $anchor={anchor} $open={open} $width={width} style={resolvedStyle} {...rest}>
      {children}
    </DrawerPanel>
  )

  if (variant === 'permanent') {
    return panel
  }

  return (
    <>
      {variant === 'temporary' && open && <DrawerBackdrop onClick={onClose} />}
      {panel}
    </>
  )
}

/* Breadcrumbs */

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  separator?: ReactNode
  maxItems?: number
  itemsAfterCollapse?: number
  itemsBeforeCollapse?: number
  sx?: SxProps
}

const BreadcrumbsRoot = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  font-size: 0.875rem;
`

export const Breadcrumbs = ({
  separator = '/',
  children,
  sx,
  style,
}: BreadcrumbsProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const items = Children.toArray(children)

  return (
    <BreadcrumbsRoot aria-label="breadcrumb" style={resolvedStyle}>
      {items.map((item, index) => (
        <span key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          {item}
          {index < items.length - 1 && <span>{separator}</span>}
        </span>
      ))}
    </BreadcrumbsRoot>
  )
}

/* Pagination */

export interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  count: number
  page?: number
  defaultPage?: number
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void
  siblingCount?: number
  boundaryCount?: number
  sx?: SxProps
}

const PaginationRoot = styled.nav`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
`

const PaginationButton = styled.button<{ $selected?: boolean }>`
  min-width: 36px;
  height: 36px;
  border-radius: 18px;
  border: none;
  background: ${({ $selected, theme }) => ($selected ? theme.palette.primary.main : 'transparent')};
  color: ${({ $selected, theme }) => ($selected ? theme.palette.primary.contrastText : theme.palette.text.primary)};
  cursor: pointer;
  font: inherit;
  padding: 0 0.5rem;

  &:hover {
    background: ${({ $selected, theme }) =>
      $selected ? theme.palette.primary.dark : theme.palette.action.hover};
  }
`

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, index) => start + index)

export const Pagination = ({
  count,
  page,
  defaultPage = 1,
  onChange,
  siblingCount = 1,
  boundaryCount = 1,
  sx,
  style,
}: PaginationProps) => {
  const [internalPage, setInternalPage] = useState(defaultPage)
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const currentPage = page ?? internalPage

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => {
    setInternalPage(newPage)
    onChange?.(event, newPage)
  }

  const siblingsStart = Math.max(
    Math.min(currentPage - siblingCount, count - siblingCount * 2 - 1),
    boundaryCount + 1
  )
  const siblingsEnd = Math.min(
    Math.max(currentPage + siblingCount, siblingCount * 2 + boundaryCount + 2),
    count - boundaryCount
  )

  const pages = [
    ...range(1, boundaryCount),
    ...(siblingsStart > boundaryCount + 1 ? ['ellipsis-start'] : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount ? ['ellipsis-end'] : []),
    ...range(count - boundaryCount + 1, count),
  ]

  return (
    <PaginationRoot role="navigation" style={resolvedStyle}>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={(event) => handleChange(event as React.MouseEvent<HTMLButtonElement>, currentPage - 1)}
      >
        Prev
      </PaginationButton>
      {pages.map((item, index) =>
        typeof item === 'string' ? (
          <span key={`${item}-${index}`}>…</span>
        ) : (
          <PaginationButton
            key={`page-${item}`}
            $selected={item === currentPage}
            onClick={(event) => handleChange(event, item)}
          >
            {item}
          </PaginationButton>
        )
      )}
      <PaginationButton
        disabled={currentPage === count}
        onClick={(event) => handleChange(event as React.MouseEvent<HTMLButtonElement>, currentPage + 1)}
      >
        Next
      </PaginationButton>
    </PaginationRoot>
  )
}

/* Bottom Navigation */

interface BottomNavigationContextValue {
  value: string | number
  onChange: (event: React.MouseEvent<HTMLElement>, value: string | number) => void
}

const BottomNavigationContext = createContext<BottomNavigationContextValue | null>(null)

export interface BottomNavigationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  value?: string | number
  defaultValue?: string | number
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | number) => void
  showLabels?: boolean
  sx?: SxProps
}

const BottomNavigationRoot = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.25rem;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[8]};
`

export const BottomNavigation = ({
  value,
  defaultValue = 0,
  onChange,
  children,
  sx,
  style,
}: BottomNavigationProps) => {
  const [internalValue, setInternalValue] = useState<string | number>(defaultValue)
  const currentValue = value ?? internalValue
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string | number) => {
    setInternalValue(newValue)
    onChange?.(event, newValue)
  }

  return (
    <BottomNavigationContext.Provider value={{ value: currentValue, onChange: handleChange }}>
      <BottomNavigationRoot style={resolvedStyle}>{children}</BottomNavigationRoot>
    </BottomNavigationContext.Provider>
  )
}

export interface BottomNavigationActionProps extends HTMLAttributes<HTMLButtonElement> {
  label?: ReactNode
  icon?: ReactNode
  value?: string | number
  showLabel?: boolean
}

const BottomNavigationButton = styled.button<{ $selected?: boolean }>`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  color: ${({ theme, $selected }) => ($selected ? theme.palette.primary.main : theme.palette.text.secondary)};
`

export const BottomNavigationAction = ({
  label,
  icon,
  value,
  showLabel,
  ...rest
}: BottomNavigationActionProps) => {
  const ctx = useContext(BottomNavigationContext)
  if (!ctx) {
    throw new Error('BottomNavigationAction must be inside BottomNavigation')
  }

  const actionValue = value ?? label?.toString() ?? ''
  const selected = ctx.value === actionValue

  return (
    <BottomNavigationButton
      type="button"
      $selected={selected}
      onClick={(event) => ctx.onChange(event, actionValue)}
      {...rest}
    >
      {icon}
      {(showLabel || selected) && label}
    </BottomNavigationButton>
  )
}

/* Stepper */

interface StepperContextValue {
  activeStep: number
  alternativeLabel?: boolean
}

const StepperContext = createContext<StepperContextValue | null>(null)

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  activeStep?: number
  alternativeLabel?: boolean
}

const StepperRoot = styled.div<{ $alternative?: boolean }>`
  display: flex;
  gap: 1rem;
  position: relative;
  ${({ $alternative }) =>
    $alternative &&
    css`
      align-items: flex-end;
    `}
`

export const Stepper = ({
  activeStep = 0,
  alternativeLabel,
  children,
  ...rest
}: StepperProps) => (
  <StepperContext.Provider value={{ activeStep, alternativeLabel }}>
    <StepperRoot $alternative={alternativeLabel} {...rest}>
      {children}
    </StepperRoot>
  </StepperContext.Provider>
)

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  completed?: boolean
  index: number
}

const StepRoot = styled.div<{ $completed?: boolean; $active?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    right: -50%;
    height: 2px;
    background: ${({ theme }) => theme.palette.divider};
  }

  &:last-child::after {
    display: none;
  }
`

export const Step = ({ index, completed, children, ...rest }: StepProps) => {
  const ctx = useContext(StepperContext)
  const active = ctx ? ctx.activeStep === index : false
  const derivedCompleted = completed ?? (ctx ? ctx.activeStep > index : false)

  const content =
    isValidElement(children) && (children as ReactElement).type === StepLabel
      ? cloneElement(children as ReactElement<StepLabelProps>, {
          completed: derivedCompleted,
          active,
        })
      : children

  return (
    <StepRoot $completed={derivedCompleted} $active={active} {...rest}>
      {content}
    </StepRoot>
  )
}

export interface StepLabelProps {
  optional?: ReactNode
  children: ReactNode
  completed?: boolean
  active?: boolean
  icon?: ReactNode
}

const StepLabelRoot = styled.div<{ $completed?: boolean; $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme, $active, $completed }) =>
    $active || $completed ? theme.palette.primary.main : theme.palette.text.secondary};
`

const StepIcon = styled.span<{ $completed?: boolean; $active?: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid ${({ theme, $active }) => ($active ? theme.palette.primary.main : theme.palette.divider)};
  display: grid;
  place-items: center;
  background: ${({ theme, $completed }) => ($completed ? theme.palette.primary.main : 'transparent')};
  color: ${({ theme, $completed }) => ($completed ? theme.palette.primary.contrastText : theme.palette.text.secondary)};
`

export const StepLabel = ({ children, optional, completed, active, icon }: StepLabelProps) => (
  <StepLabelRoot $completed={completed} $active={active}>
    <StepIcon $completed={completed} $active={active}>{icon ?? (completed ? '✓' : '•')}</StepIcon>
    <span>{children}</span>
    {optional && <small>{optional}</small>}
  </StepLabelRoot>
)

/* Link */

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: PaletteIntent
  underline?: 'none' | 'hover' | 'always'
  sx?: SxProps
}

const LinkRoot = styled.a<{ $color: PaletteIntent; $underline: LinkProps['underline'] }>`
  color: ${({ theme, $color }) => getIntentColor(theme, $color ?? 'primary').main};
  text-decoration: ${({ $underline }) => ($underline === 'always' ? 'underline' : 'none')};

  &:hover {
    text-decoration: ${({ $underline }) => ($underline === 'none' ? 'none' : 'underline')};
  }
`

export const Link = ({ color = 'primary', underline = 'hover', sx, style, ...rest }: LinkProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return <LinkRoot $color={color} $underline={underline} style={resolvedStyle} {...rest} />
}

/* Menu */

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  anchorEl?: HTMLElement | null
  open: boolean
  onClose?: () => void
  sx?: SxProps
}

const MenuRoot = styled.ul`
  position: absolute;
  min-width: 180px;
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[6]};
  z-index: ${({ theme }) => theme.zIndex.modal};
`

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  disabled?: boolean
}

const MenuItemRoot = styled.li<{ $disabled?: boolean }>`
  padding: 0.5rem 1rem;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  &:hover {
    background: ${({ theme, $disabled }) => ($disabled ? 'inherit' : theme.palette.action.hover)};
  }
`

export const MenuItem = ({ disabled, children, ...rest }: MenuItemProps) => (
  <MenuItemRoot role="menuitem" $disabled={disabled} {...rest}>
    {children}
  </MenuItemRoot>
)

export const Menu = ({ anchorEl, open, onClose, children, sx, style }: MenuProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  useEffect(() => {
    if (anchorEl && open) {
      const rect = anchorEl.getBoundingClientRect()
      setPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX })
    }
  }, [anchorEl, open])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    if (open) {
      window.addEventListener('keydown', handleKey)
    }

    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <>
      <DrawerBackdrop onClick={onClose} />
      <MenuRoot role="menu" style={{ top: position.top, left: position.left, ...resolvedStyle, position: 'absolute' }}>
        {children}
      </MenuRoot>
    </>
  )
}

/* Speed Dial */

export interface SpeedDialProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  open?: boolean
  defaultOpen?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  ariaLabel: string
}

export interface SpeedDialActionProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  tooltipTitle: ReactNode
}

const SpeedDialRoot = styled.div<{ $direction: SpeedDialProps['direction'] }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`

const SpeedDialButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows[6]};
`

const SpeedDialActions = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transform: ${({ $open }) => ($open ? 'scale(1)' : 'scale(0.9)')};
  transition: ${({ theme }) => theme.transitions.create(['opacity', 'transform'])};
`

const SpeedDialActionButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  cursor: pointer;
`

export const SpeedDialAction = ({ icon, tooltipTitle, ...rest }: SpeedDialActionProps) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <span style={{ background: '#000', color: '#fff', padding: '0.25rem 0.5rem', borderRadius: 4 }}>
      {tooltipTitle}
    </span>
    <SpeedDialActionButton {...rest}>{icon}</SpeedDialActionButton>
  </div>
)

export const SpeedDial = ({
  icon,
  open,
  defaultOpen = false,
  direction = 'up',
  ariaLabel,
  children,
  ...rest
}: SpeedDialProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isOpen = open ?? internalOpen

  const toggle = () => setInternalOpen((state) => !state)

  return (
    <SpeedDialRoot aria-label={ariaLabel} $direction={direction} {...rest}>
      <SpeedDialActions $open={isOpen}>{children}</SpeedDialActions>
      <SpeedDialButton type="button" onClick={toggle}>
        {icon}
      </SpeedDialButton>
    </SpeedDialRoot>
  )
}

/* Navigation exports */
