import { useId } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { HelperText, InputWrapper } from './shared/fieldBase'
import type { SelectProps } from './Select.types'

export const Select = ({ label, helperText, error, fullWidth, variant = 'outlined', options, sx, style, ...rest }: SelectProps) => {
  const id = useId()
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <InputWrapper htmlFor={id} $variant={variant} $error={error} $fullWidth={fullWidth} style={resolvedStyle}>
      {label && <strong>{label}</strong>}
      <select id={id} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <HelperText $error={error}>{helperText}</HelperText>}
    </InputWrapper>
  )
}

Select.displayName = 'Select'
