import styled from 'styled-components'

import type { TypographyColor, TypographyProps, TypographyVariant } from './Typography.types'

interface TypographyStyleProps {
  $variant: TypographyVariant
  $color: TypographyColor
  $align?: TypographyProps['align']
  $gutter?: boolean
  $paragraph?: boolean
}

export const TypographyRoot = styled.span<TypographyStyleProps>`
  display: ${({ $paragraph }) => ($paragraph ? 'block' : 'inline')};
  margin: 0;
  margin-bottom: ${({ $gutter }) => ($gutter ? '0.35em' : 0)};
  text-align: ${({ $align }) => $align ?? 'inherit'};
  text-transform: ${({ $variant }) => ($variant === 'overline' ? 'uppercase' : 'inherit')};
  letter-spacing: ${({ theme, $variant }) => theme.typography[$variant].letterSpacing ?? 'normal'};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].fontSize};
  font-weight: ${({ theme, $variant }) =>
    theme.typography[$variant].fontWeight ?? theme.typography.fontWeightRegular};
  line-height: ${({ theme, $variant }) => theme.typography[$variant].lineHeight ?? 1.5};
  color: ${({ theme, $color }) => {
    switch ($color) {
      case 'primary':
        return theme.palette.primary.main
      case 'secondary':
        return theme.palette.secondary.main
      case 'error':
        return theme.palette.error.main
      case 'textSecondary':
        return theme.palette.text.secondary
      case 'textPrimary':
        return theme.palette.text.primary
      default:
        return 'inherit'
    }
  }};
`
