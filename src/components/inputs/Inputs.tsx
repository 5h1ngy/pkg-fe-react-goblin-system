import {
  ChangeEvent,
  Children,
  CSSProperties,
  HTMLAttributes,
  Ref,
  MouseEvent,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
  useMemo,
  useState,
} from 'react'
import styled, { css } from 'styled-components'

import { SxProps, mergeSx, resolveSx } from '../../system'
import { MaterialTheme, useMaterialTheme } from '../../foundations'

type ColorToken = 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
type ActiveColor = Exclude<ColorToken, 'inherit' | 'default'>
type ColorSwatch = { main: string; contrastText: string; dark: string }

const getColor = (theme: MaterialTheme, color: ColorToken): ColorSwatch => {
  if (color === 'inherit') {
    return {
      main: 'inherit',
      contrastText: 'inherit',
      dark: 'inherit',
    }
  }

  if (color === 'default') {
    return {
      main: theme.palette.grey[500],
      contrastText: theme.palette.text.primary,
      dark: theme.palette.grey[700],
    }
  }

  const paletteMap: Record<ActiveColor, 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'> = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
  }

  const palette = theme.palette[paletteMap[color as ActiveColor]]
  return {
    main: palette.main,
    contrastText: palette.contrastText,
    dark: palette.dark,
  }
}

/* Buttons */

type ButtonVariant = 'text' | 'outlined' | 'contained'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonStyleProps {
  $variant: ButtonVariant
  $color: ColorToken
  $size: ButtonSize
  $fullWidth?: boolean
  $disableElevation?: boolean
}

const buttonPadding: Record<ButtonSize, string> = {
  small: '0.25rem 0.75rem',
  medium: '0.5rem 1.25rem',
  large: '0.75rem 1.5rem',
}

const ButtonRoot = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid transparent;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ $size }) =>
    $size === 'small' ? '0.8125rem' : $size === 'large' ? '0.9375rem' : '0.875rem'};
  padding: ${({ $size }) => buttonPadding[$size]};
  text-transform: ${({ theme }) => theme.typography.button.textTransform};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.create(['background-color', 'box-shadow', 'transform'])};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme, $color }) => {
    const palette = getColor(theme, $color)

    switch ($variant) {
      case 'outlined':
        return css`
          border-color: ${palette.main};
          color: ${palette.main};
          background: transparent;

          &:hover {
            background: ${palette.main}14;
          }
        `
      case 'contained':
        return css`
          background: ${palette.main};
          color: ${palette.contrastText};
          border-color: ${palette.main};

          &:hover {
            background: ${palette.dark};
            transform: translateY(-1px);
          }
        `
      default:
        return css`
          background: transparent;
          color: ${palette.main};

          &:hover {
            background: ${palette.main}14;
          }
        `
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ $variant, $disableElevation, theme }) =>
    $variant === 'contained' &&
    css`
      box-shadow: ${$disableElevation ? 'none' : theme.shadows[2]};

      &:hover {
        box-shadow: ${$disableElevation ? 'none' : theme.shadows[3]};
      }
    `}
`

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ColorToken
  size?: ButtonSize
  fullWidth?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  disableElevation?: boolean
  sx?: SxProps
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'text',
    color = 'primary',
    size = 'medium',
    fullWidth,
    startIcon,
    endIcon,
    disableElevation,
    sx,
    style,
    ...rest
  },
  ref
) {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <ButtonRoot
      ref={ref}
      $variant={variant}
      $color={color}
      $size={size}
      $fullWidth={fullWidth}
      $disableElevation={disableElevation}
      style={resolvedStyle}
      {...rest}
    >
      {startIcon}
      {rest.children}
      {endIcon}
    </ButtonRoot>
  )
})

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(function IconButton(
  { sx, variant = 'text', ...rest },
  ref
) {
  return (
    <Button
      ref={ref}
      variant={variant}
      sx={mergeSx({ width: 40, height: 40, borderRadius: '50%', padding: 0 }, sx)}
      {...rest}
    />
  )
})

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: ButtonVariant
  color?: ColorToken
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
  sx?: SxProps
}

const ButtonGroupRoot = styled.div<{ $orientation: 'horizontal' | 'vertical'; $fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  & > button {
    border-radius: 0;
  }

  & > button:first-child {
    border-top-left-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : theme.shape.borderRadius}px;
    border-bottom-left-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? 0 : theme.shape.borderRadius}px;
    border-top-right-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : 0}px;
  }

  & > button:last-child {
    border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
    border-bottom-right-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : theme.shape.borderRadius}px;
    border-bottom-left-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : 0}px;
  }
`

export const ButtonGroup = ({
  orientation = 'horizontal',
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  fullWidth,
  children,
  sx,
  style,
  ...rest
}: ButtonGroupProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child
    }

    return cloneElement(child as ReactElement<ButtonProps>, {
      variant,
      color,
      size,
      fullWidth,
    })
  })

  return (
    <ButtonGroupRoot
      $orientation={orientation}
      $fullWidth={fullWidth}
      style={resolvedStyle}
      {...rest}
    >
      {enhancedChildren}
    </ButtonGroupRoot>
  )
}

export interface FabProps extends ButtonProps {
  size?: 'small' | 'medium' | 'large'
}

export const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { size = 'medium', sx, color = 'secondary', variant = 'contained', disableElevation, ...rest },
  ref
) {
  const dimension = size === 'small' ? 40 : size === 'large' ? 72 : 56
  const theme = useMaterialTheme()
  const elevationStyle = disableElevation ? {} : { boxShadow: theme.shadows[4] }

  return (
    <Button
      ref={ref}
      variant={variant}
      color={color}
      sx={mergeSx({ width: dimension, height: dimension, borderRadius: '50%', padding: 0 }, elevationStyle, sx)}
      {...rest}
    />
  )
})

/* Selection Controls */

interface ControlProps {
  color?: ColorToken
  checked?: boolean
  disabled?: boolean
  size?: 'small' | 'medium'
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const ControlRoot = styled.span<{ $size: 'small' | 'medium'; $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => ($size === 'small' ? 32 : 40)}px;
  height: ${({ $size }) => ($size === 'small' ? 32 : 40)}px;
  position: relative;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
`

const CheckboxIcon = styled.span<{ $checked?: boolean; $color: ColorToken }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.palette.divider};
  transition: ${({ theme }) => theme.transitions.create(['background-color', 'border-color'])};
  background: ${({ $checked, theme, $color }) => ($checked ? getColor(theme, $color).main : 'transparent')};
  border-color: ${({ $checked, theme, $color }) => ($checked ? getColor(theme, $color).main : theme.palette.divider)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $color }) => getColor(theme, $color).contrastText};

  &::after {
    content: '';
    width: 6px;
    height: 12px;
    border: 2px solid currentColor;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`

export interface CheckboxProps extends ControlProps {
  indeterminate?: boolean
}

export const Checkbox = ({
  color = 'primary',
  size = 'medium',
  checked,
  disabled,
  onChange,
  indeterminate,
  inputProps,
}: CheckboxProps) => (
  <ControlRoot $size={size} $disabled={disabled}>
    <CheckboxIcon $checked={indeterminate ? true : checked} $color={color} />
    <HiddenInput
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(event) => onChange?.(event, event.target.checked)}
      aria-checked={indeterminate ? 'mixed' : checked}
      {...inputProps}
    />
  </ControlRoot>
)

const RadioIcon = styled.span<{ $checked?: boolean; $color: ColorToken }>`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.palette.divider};
  display: grid;
  place-items: center;
  transition: ${({ theme }) => theme.transitions.create(['border-color'])};
  border-color: ${({ $checked, theme, $color }) => ($checked ? getColor(theme, $color).main : theme.palette.divider)};

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme, $color }) => getColor(theme, $color).main};
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`

export interface RadioProps extends ControlProps {
  value: string
  name?: string
}

export const Radio = ({
  color = 'primary',
  size = 'medium',
  checked,
  disabled,
  onChange,
  inputProps,
  value,
  name,
}: RadioProps) => (
  <ControlRoot $size={size} $disabled={disabled}>
    <RadioIcon $checked={checked} $color={color} />
    <HiddenInput
      type="radio"
      checked={checked}
      disabled={disabled}
      onChange={(event) => onChange?.(event, event.target.checked)}
      value={value}
      name={name}
      {...inputProps}
    />
  </ControlRoot>
)

const SwitchTrack = styled.span<{ $checked?: boolean; $color: ColorToken }>`
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: ${({ $checked, theme, $color }) =>
    $checked ? getColor(theme, $color).main : theme.palette.grey[400]};
  position: relative;
  transition: ${({ theme }) => theme.transitions.create(['background-color'])};
`

const SwitchThumb = styled.span<{ $checked?: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ $checked }) => ($checked ? '18px' : '2px')};
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  transition: ${({ theme }) => theme.transitions.create(['left'])};
`

export const Switch = ({
  color = 'primary',
  checked,
  disabled,
  onChange,
  inputProps,
}: ControlProps) => (
  <ControlRoot $size="medium" $disabled={disabled}>
    <SwitchTrack $checked={checked} $color={color}>
      <SwitchThumb $checked={checked} />
    </SwitchTrack>
    <HiddenInput
      type="checkbox"
      role="switch"
      checked={checked}
      disabled={disabled}
      onChange={(event) => onChange?.(event, event.target.checked)}
      {...inputProps}
    />
  </ControlRoot>
)

/* Text Inputs */

type InputVariant = 'outlined' | 'filled' | 'standard'

const InputWrapper = styled.label<{
  $variant: InputVariant
  $error?: boolean
  $disabled?: boolean
  $fullWidth?: boolean
}>`
  display: inline-flex;
  flex-direction: column;
  gap: 0.35rem;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  color: ${({ theme }) => theme.palette.text.primary};

  input,
  select,
  textarea {
    font: inherit;
  }

  ${({ $variant, theme, $error, $disabled }) => {
    const borderColor = $error ? theme.palette.error.main : theme.palette.divider

    switch ($variant) {
      case 'filled':
        return css`
          input,
          select,
          textarea {
            background: ${theme.palette.grey[100]};
            border: none;
            border-radius: ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid ${borderColor};
            opacity: ${$disabled ? 0.6 : 1};
          }
        `
      case 'standard':
        return css`
          input,
          select,
          textarea {
            border: none;
            border-bottom: 1px solid ${borderColor};
            padding: 0.5rem 0;
            opacity: ${$disabled ? 0.6 : 1};
          }
        `
      default:
        return css`
          input,
          select,
          textarea {
            border-radius: ${theme.shape.borderRadius}px;
            border: 1px solid ${borderColor};
            padding: 0.75rem 1rem;
            opacity: ${$disabled ? 0.6 : 1};
          }
        `
    }
  }}
`

const HelperText = styled.small<{ $error?: boolean }>`
  color: ${({ $error, theme }) => ($error ? theme.palette.error.main : theme.palette.text.secondary)};
`

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  label?: ReactNode
  helperText?: ReactNode
  error?: boolean
  fullWidth?: boolean
  variant?: InputVariant
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  multiline?: boolean
  rows?: number
  sx?: SxProps
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Adornment = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};
`

const InputField = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`

export const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(function TextField(
  {
    label,
    helperText,
    error,
    fullWidth,
    variant = 'outlined',
    startAdornment,
    endAdornment,
    multiline,
    rows = 3,
    sx,
    style,
    onChange,
    ...rest
  },
  ref
) {
  const id = useId()
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const { type = 'text', ...inputProps } = rest

  return (
    <InputWrapper
      htmlFor={id}
      $variant={variant}
      $error={error}
      $fullWidth={fullWidth}
      style={resolvedStyle}
    >
      {label && <strong>{label}</strong>}
      <InputField $disabled={rest.disabled}>
        {startAdornment && <Adornment>{startAdornment}</Adornment>}
        {multiline ? (
          <textarea
            id={id}
            rows={rows}
            ref={ref as Ref<HTMLTextAreaElement>}
            onChange={(event) => onChange?.(event)}
            {...(inputProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={id}
            ref={ref as Ref<HTMLInputElement>}
            type={type}
            onChange={(event) => onChange?.(event)}
            {...inputProps}
          />
        )}
        {endAdornment && <Adornment>{endAdornment}</Adornment>}
      </InputField>
      {helperText && <HelperText $error={error}>{helperText}</HelperText>}
    </InputWrapper>
  )
})

export interface SelectOption {
  label: ReactNode
  value: string | number
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode
  helperText?: ReactNode
  error?: boolean
  fullWidth?: boolean
  variant?: InputVariant
  options: SelectOption[]
  sx?: SxProps
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, helperText, error, fullWidth, variant = 'outlined', options, sx, style, ...rest },
  ref
) {
  const id = useId()
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <InputWrapper
      htmlFor={id}
      $variant={variant}
      $error={error}
      $fullWidth={fullWidth}
      style={resolvedStyle}
    >
      {label && <strong>{label}</strong>}
      <select id={id} ref={ref} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <HelperText $error={error}>{helperText}</HelperText>}
    </InputWrapper>
  )
})

/* Slider */

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
  step?: number
  valueLabelDisplay?: 'auto' | 'on' | 'off'
  sx?: SxProps
}

const SliderRoot = styled.input`
  width: 100%;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.palette.primary.main};
`

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { sx, style, valueLabelDisplay = 'auto', ...rest },
  ref
) {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const [hover, setHover] = useState(false)

  return (
    <div
      style={resolvedStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <SliderRoot
        type="range"
        ref={ref}
        {...rest}
      />
      {valueLabelDisplay !== 'off' && hover && (
        <small>
          {rest.value}
        </small>
      )}
    </div>
  )
})

/* Rating */

export interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  max?: number
  precision?: number
  value?: number
  defaultValue?: number
  readOnly?: boolean
  onChange?: (event: MouseEvent<HTMLButtonElement>, value: number) => void
  size?: ButtonSize
  icon?: ReactNode
  emptyIcon?: ReactNode
  sx?: SxProps
}

const RatingRoot = styled.div<{ $size: ButtonSize }>`
  display: inline-flex;
  gap: 0.25rem;
  font-size: ${({ $size }) =>
    $size === 'small' ? '1.25rem' : $size === 'large' ? '2rem' : '1.5rem'};
  color: ${({ theme }) => theme.palette.warning.main};
`

export const Rating = ({
  max = 5,
  precision = 1,
  value,
  defaultValue = 0,
  readOnly,
  onChange,
  size = 'medium',
  icon = '★',
  emptyIcon = '☆',
  sx,
  style,
  className,
}: RatingProps) => {
  const [internal, setInternal] = useState(defaultValue)
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const currentValue = value ?? internal

  const handleClick = (event: MouseEvent<HTMLButtonElement>, index: number) => {
    if (readOnly) return

    const newValue = (index + 1) * precision
    setInternal(newValue)
    onChange?.(event, newValue)
  }

  return (
    <RatingRoot $size={size} style={resolvedStyle} className={className}>
      {Array.from({ length: max }).map((_, index) => {
        const filled = index + 1 <= currentValue
        return (
          <button
            key={index}
            type="button"
            onClick={(event) => handleClick(event, index)}
            disabled={readOnly}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: readOnly ? 'default' : 'pointer',
              color: filled ? theme.palette.warning.main : theme.palette.action?.disabled ?? theme.palette.grey[400],
            }}
          >
            {filled ? icon : emptyIcon}
          </button>
        )
      })}
    </RatingRoot>
  )
}

/* Toggle Buttons */

export interface ToggleButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  selected?: boolean
  value: string
}

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(function ToggleButton(
  { selected, value, sx, variant = 'outlined', color = 'primary', ...rest },
  ref
) {
  const theme = useMaterialTheme()
  const selectedStyles = selected
    ? {
        background: theme.palette.action.selected,
        borderColor: theme.palette.primary.main,
      }
    : undefined

  return (
    <Button
      ref={ref}
      variant={variant}
      color={color}
      data-value={value}
      aria-pressed={selected}
      value={value}
      sx={mergeSx({ borderRadius: '999px' }, selectedStyles, sx)}
      {...rest}
    />
  )
})

export interface ToggleButtonGroupProps {
  value?: string | string[]
  defaultValue?: string | string[]
  exclusive?: boolean
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | string[]) => void
  children: ReactNode
  orientation?: 'horizontal' | 'vertical'
  className?: string
  style?: CSSProperties
}

export const ToggleButtonGroup = ({
  value,
  defaultValue,
  exclusive = true,
  onChange,
  children,
  orientation = 'horizontal',
  className,
  style,
}: ToggleButtonGroupProps) => {
  const [internalValue, setInternalValue] = useState<string | string[] | undefined>(defaultValue)

  const currentValue = value ?? internalValue

  const handleSelect = (event: React.MouseEvent<HTMLElement>, itemValue: string) => {
    if (exclusive) {
      setInternalValue(itemValue)
      onChange?.(event, itemValue)
      return
    }

    const arrayValue = Array.isArray(currentValue) ? currentValue : []
    const exists = arrayValue.includes(itemValue)
    const next = exists ? arrayValue.filter((val) => val !== itemValue) : [...arrayValue, itemValue]
    setInternalValue(next)
    onChange?.(event, next)
  }

  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child
    const childValue = child.props.value
    const selected = exclusive
      ? currentValue === childValue
      : Array.isArray(currentValue) && currentValue.includes(childValue)

    return cloneElement(child as ReactElement<ToggleButtonProps>, {
      selected,
      onClick: (event: React.MouseEvent<HTMLElement>) => handleSelect(event, childValue),
    })
  })

  return (
    <ButtonGroupRoot className={className} style={style} $orientation={orientation}>
      {enhancedChildren}
    </ButtonGroupRoot>
  )
}

/* Autocomplete */

export interface AutocompleteOption {
  label: string
  value: string
}

export interface AutocompleteProps extends Omit<TextFieldProps, 'onChange'> {
  options: AutocompleteOption[]
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: AutocompleteOption | null) => void
}

const AutocompleteMenu = styled.ul`
  list-style: none;
  margin: 0.25rem 0 0;
  padding: 0;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  max-height: 220px;
  overflow-y: auto;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;

  li {
    padding: 0.5rem 0.75rem;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.palette.action?.hover ?? theme.palette.grey[100]};
    }
  }
`

export const Autocomplete = ({
  options,
  onChange,
  ...rest
}: AutocompleteProps) => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const filtered = useMemo(
    () =>
      options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase())),
    [options, query]
  )

  const handleSelect = (option: AutocompleteOption) => {
    setQuery(option.label)
    setOpen(false)
    const event = { target: { value: option.label } } as ChangeEvent<HTMLInputElement>
    onChange?.(event, option)
  }

  return (
    <div style={{ position: 'relative' }}>
      <TextField
        {...rest}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
      />
      {open && filtered.length > 0 && (
        <AutocompleteMenu>
          {filtered.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </AutocompleteMenu>
      )}
    </div>
  )
}

/* Transfer List */

export interface TransferListItem {
  label: string
  value: string
}

export interface TransferListProps {
  left: TransferListItem[]
  right: TransferListItem[]
  onChange?: (left: TransferListItem[], right: TransferListItem[]) => void
  sx?: SxProps
}

const TransferListContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const TransferListPanel = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 220px;
  min-height: 200px;
  display: flex;
  flex-direction: column;

  ul {
    flex: 1;
    margin: 0;
    padding: 0.5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  li {
    padding: 0.35rem 0.5rem;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    cursor: pointer;

    &.selected {
      background: ${({ theme }) => theme.palette.action?.selected ?? theme.palette.grey[100]};
    }
  }
`

export const TransferList = ({ left, right, onChange, sx }: TransferListProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx)
  const [leftItems, setLeft] = useState(left)
  const [rightItems, setRight] = useState(right)
  const [selectedLeft, setSelectedLeft] = useState<Set<string>>(new Set())
  const [selectedRight, setSelectedRight] = useState<Set<string>>(new Set())

  const move = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      const moving = leftItems.filter((item) => selectedLeft.has(item.value))
      const remaining = leftItems.filter((item) => !selectedLeft.has(item.value))
      const mergedRight = [...rightItems, ...moving]
      setLeft(remaining)
      setRight(mergedRight)
      setSelectedLeft(new Set())
      onChange?.(remaining, mergedRight)
    } else {
      const moving = rightItems.filter((item) => selectedRight.has(item.value))
      const remaining = rightItems.filter((item) => !selectedRight.has(item.value))
      const mergedLeft = [...leftItems, ...moving]
      setRight(remaining)
      setLeft(mergedLeft)
      setSelectedRight(new Set())
      onChange?.(mergedLeft, remaining)
    }
  }

  return (
    <TransferListContainer style={resolvedStyle}>
      <TransferListPanel>
        <strong style={{ padding: '0.5rem 0.75rem' }}>Available</strong>
        <ul>
          {leftItems.map((item) => (
            <li
              key={item.value}
              className={selectedLeft.has(item.value) ? 'selected' : undefined}
              onClick={() => {
                const next = new Set(selectedLeft)
                if (next.has(item.value)) {
                  next.delete(item.value)
                } else {
                  next.add(item.value)
                }
                setSelectedLeft(next)
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </TransferListPanel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Button variant="contained" onClick={() => move('right')}>
          &gt;
        </Button>
        <Button variant="contained" onClick={() => move('left')}>
          &lt;
        </Button>
      </div>
      <TransferListPanel>
        <strong style={{ padding: '0.5rem 0.75rem' }}>Chosen</strong>
        <ul>
          {rightItems.map((item) => (
            <li
              key={item.value}
              className={selectedRight.has(item.value) ? 'selected' : undefined}
              onClick={() => {
                const next = new Set(selectedRight)
                if (next.has(item.value)) {
                  next.delete(item.value)
                } else {
                  next.add(item.value)
                }
                setSelectedRight(next)
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </TransferListPanel>
    </TransferListContainer>
  )
}
