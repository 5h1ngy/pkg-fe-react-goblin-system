import { ControlRoot, HiddenInput } from '../shared/controlBase'
import { CheckboxIcon } from './Checkbox.style'
import type { CheckboxProps } from './Checkbox.types'

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
      aria-checked={indeterminate ? 'mixed' : checked}
      onChange={(event) => onChange?.(event, event.target.checked)}
      {...inputProps}
    />
  </ControlRoot>
)

Checkbox.displayName = 'Checkbox'
