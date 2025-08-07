import styled, { css } from 'styled-components'

export type InputVariant = 'outlined' | 'filled' | 'standard'

export const InputWrapper = styled.label<{
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

export const HelperText = styled.small<{ $error?: boolean }>`
  color: ${({ $error, theme }) => ($error ? theme.palette.error.main : theme.palette.text.secondary)};
`

export const Adornment = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const InputField = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`
