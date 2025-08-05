import { ControlRoot, HiddenInput } from '../shared/controlBase'
import { SwitchThumb, SwitchTrack } from './Switch.style'
import type { SwitchProps } from './Switch.types'

export const Switch = ({ color = 'primary', checked, disabled, onChange, inputProps }: SwitchProps) => (
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

Switch.displayName = 'Switch'
