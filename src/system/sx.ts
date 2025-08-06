import { CSSProperties } from 'react'

import type { MaterialTheme } from '../foundations'
import type { SxInput, SxProps } from './sx.types'

export type { SxInput, SxProps } from './sx.types'

const SPACING_KEYS: Array<keyof CSSProperties> = [
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',
  'gap',
  'columnGap',
  'rowGap',
]

const normalizeSpacing = (style: CSSProperties, theme: MaterialTheme) => {
  const normalized: Record<string, unknown> = { ...style }
  SPACING_KEYS.forEach((key) => {
    const value = normalized[key as string]
    if (typeof value === 'number') {
      normalized[key as string] = theme.spacing(value)
    }
  })

  return normalized as CSSProperties
}

const toArray = (value?: SxProps): SxInput[] => {
  if (!value) {
    return []
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => toArray(item as SxProps))
  }

  return [value]
}

export const resolveSx = (
  theme: MaterialTheme,
  sx?: SxProps,
  style?: CSSProperties
): CSSProperties | undefined => {
  const values = toArray(sx).filter(Boolean) as Array<CSSProperties | ((theme: MaterialTheme) => CSSProperties)>

  if (!values.length) {
    return style
  }

  const merged = values.reduce<CSSProperties>((acc, current) => {
    const value = typeof current === 'function' ? current(theme) : current
    return {
      ...acc,
      ...normalizeSpacing(value, theme),
    }
  }, {})

  if (style) {
    return {
      ...merged,
      ...style,
    }
  }

  return merged
}

export const mergeSx = (...inputs: Array<SxProps | undefined>): SxProps => inputs.filter(Boolean) as SxProps

