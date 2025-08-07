import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, Ref, useId } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { Adornment, HelperText, InputField, InputWrapper } from './shared/fieldBase'
import type { TextFieldProps } from './TextField.types'

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
  ref,
) {
  const id = useId()
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const inputProps = rest as InputHTMLAttributes<HTMLInputElement>
  const textareaProps = rest as TextareaHTMLAttributes<HTMLTextAreaElement>

  return (
    <InputWrapper
      htmlFor={id}
      $variant={variant}
      $error={error}
      $fullWidth={fullWidth}
      $disabled={rest.disabled}
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
            {...textareaProps}
          />
        ) : (
          <input
            id={id}
            ref={ref as Ref<HTMLInputElement>}
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

TextField.displayName = 'TextField'
