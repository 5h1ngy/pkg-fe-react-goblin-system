import { ControlRoot, HiddenInput } from './shared/controlBase'
import { RadioIcon } from './Radio.style'
import type { RadioProps } from './Radio.types'

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

Radio.displayName = 'Radio'
