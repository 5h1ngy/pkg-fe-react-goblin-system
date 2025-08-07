import styled, { css } from 'styled-components'

import type { GoblinTheme } from '../../foundations'
import { getColor } from './shared/color'
import type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types'

export interface ButtonStyleProps {
  $variant: ButtonVariant
  $color: ButtonProps['color']
  $size: ButtonSize
  $fullWidth?: boolean
  $disableElevation?: boolean
}

const buttonFontSize: Record<ButtonSize, string> = {
  small: '0.8125rem',
  medium: '0.875rem',
  large: '0.9375rem',
}

const paddingScale: Record<ButtonSize, [number, number]> = {
  small: [1.1, 2.6],
  medium: [1.4, 3.2],
  large: [1.7, 3.8],
}

const getPadding = (theme: GoblinTheme, size: ButtonSize) => {
  const [vertical, horizontal] = paddingScale[size]
  return `${theme.spacing(vertical)} ${theme.spacing(horizontal)}`
}

export const ButtonRoot = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1.4)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid transparent;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ $size }) => buttonFontSize[$size]};
  padding: ${({ theme, $size }) => getPadding(theme, $size)};
  text-transform: ${({ theme }) => theme.typography.button.textTransform};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.create(['background-color', 'box-shadow', 'transform'])};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme, $color }) => {
    const palette = getColor(theme, $color ?? 'primary')

    switch ($variant) {
      case 'outlined':
        return css`
          border-color: ${palette.main};
          color: ${palette.main};
          background: transparent;

          &:hover {
            background: ${theme.palette.action.hover};
            color: ${palette.dark};
            border-color: ${palette.dark};
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
            background: ${theme.palette.action.hover};
            color: ${palette.dark};
          }
        `
    }
  }}

  ${({ $variant, $disableElevation, theme }) =>
    $variant === 'contained' &&
    css`
      box-shadow: ${$disableElevation ? 'none' : theme.shadows[Math.min(2, theme.shadows.length - 1)]};

      &:hover {
        box-shadow: ${$disableElevation ? 'none' : theme.shadows[Math.min(3, theme.shadows.length - 1)]};
      }
    `}

  &:disabled {
    background: ${({ theme }) => theme.palette.action.disabledBackground};
    border-color: ${({ theme }) => theme.palette.action.disabledBackground};
    color: ${({ theme }) => theme.palette.action.disabled};
    opacity: 1;
    cursor: not-allowed;
    pointer-events: none;
  }
`
