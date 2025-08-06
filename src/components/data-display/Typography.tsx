import { useMemo } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { TypographyRoot } from './Typography.style'
import type { TypographyProps, TypographyVariant } from './Typography.types'

const defaultMapping: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'span',
  overline: 'span',
}

export const Typography = ({
  variant = 'body1',
  color = 'initial',
  align = 'inherit',
  gutterBottom,
  paragraph,
  sx,
  style,
  component,
  children,
  ...rest
}: TypographyProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const Component = useMemo(() => component ?? defaultMapping[variant] ?? 'span', [component, variant])

  return (
    <TypographyRoot
      as={Component}
      $variant={variant}
      $color={color}
      $align={align}
      $gutter={gutterBottom}
      $paragraph={paragraph}
      style={resolvedStyle}
      {...rest}
    >
      {children}
    </TypographyRoot>
  )
}

Typography.displayName = 'Typography'
