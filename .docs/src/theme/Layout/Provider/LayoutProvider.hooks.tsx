import { useEffect, useMemo, useState } from 'react'

import { useColorMode } from '@docusaurus/theme-common'

import type { GoblinThemeOptions, PaletteMode } from 'pkg-fe-react-goblin-system'

import { SECONDARY_COLOR_OPTIONS, SECONDARY_STORAGE_KEY } from './LayoutProvider.types'

const ACCENT_LIGHTEN_AMOUNT = 0.24
const ACCENT_DARKEN_AMOUNT = 0.28
const FALLBACK_SECONDARY = SECONDARY_COLOR_OPTIONS[0]

const clampChannel = (value: number): number => Math.min(255, Math.max(0, Math.round(value)))

const normalizeHex = (value: string): string | null => {
  if (!value) {
    return null
  }
  const trimmed = value.trim().replace(/^#/, '')
  if (/^[0-9a-fA-F]{3}$/.test(trimmed)) {
    return `#${trimmed
      .split('')
      .map((char) => char.repeat(2))
      .join('')
      .toLowerCase()}`
  }
  if (/^[0-9a-fA-F]{6}$/.test(trimmed)) {
    return `#${trimmed.toLowerCase()}`
  }
  return null
}

const hexToRgb = (value: string): [number, number, number] | null => {
  const normalized = normalizeHex(value)
  if (!normalized) {
    return null
  }
  const hex = normalized.slice(1)
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
    return null
  }
  return [r, g, b]
}

const toHex = (channel: number): string => clampChannel(channel).toString(16).padStart(2, '0')

const rgbToHex = (r: number, g: number, b: number): string => `#${toHex(r)}${toHex(g)}${toHex(b)}`

const mixChannel = (channel: number, target: number, amount: number): number =>
  clampChannel(channel + (target - channel) * amount)

const lightenHex = (value: string, amount: number): string | null => {
  const rgb = hexToRgb(value)
  if (!rgb) {
    return null
  }
  const [r, g, b] = rgb
  return rgbToHex(mixChannel(r, 255, amount), mixChannel(g, 255, amount), mixChannel(b, 255, amount))
}

const darkenHex = (value: string, amount: number): string | null => {
  const rgb = hexToRgb(value)
  if (!rgb) {
    return null
  }
  const [r, g, b] = rgb
  return rgbToHex(mixChannel(r, 0, amount), mixChannel(g, 0, amount), mixChannel(b, 0, amount))
}

const getContrastText = (value: string): string => {
  const rgb = hexToRgb(value)
  if (!rgb) {
    return '#0b1220'
  }
  const [r, g, b] = rgb
  const channel = (component: number) => {
    const normalized = component / 255
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4)
  }
  const luminance = 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
  return luminance > 0.45 ? '#0b1220' : '#f8fafc'
}

const FALLBACK_SECONDARY_MAIN = normalizeHex(FALLBACK_SECONDARY) ?? '#c9971f'
const FALLBACK_SECONDARY_PALETTE = {
  main: FALLBACK_SECONDARY_MAIN,
  light: lightenHex(FALLBACK_SECONDARY_MAIN, ACCENT_LIGHTEN_AMOUNT) ?? FALLBACK_SECONDARY_MAIN,
  dark: darkenHex(FALLBACK_SECONDARY_MAIN, ACCENT_DARKEN_AMOUNT) ?? FALLBACK_SECONDARY_MAIN,
  contrastText: getContrastText(FALLBACK_SECONDARY_MAIN),
}

const createSecondaryPalette = (value: string) => {
  const main = normalizeHex(value) ?? FALLBACK_SECONDARY_PALETTE.main
  return {
    main,
    light: lightenHex(main, ACCENT_LIGHTEN_AMOUNT) ?? FALLBACK_SECONDARY_PALETTE.light,
    dark: darkenHex(main, ACCENT_DARKEN_AMOUNT) ?? FALLBACK_SECONDARY_PALETTE.dark,
    contrastText: getContrastText(main),
  }
}

export const useSecondaryColorState = (): [string, (color: string) => void] => {
  const [secondary, setSecondary] = useState<string>(SECONDARY_COLOR_OPTIONS[0])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const stored = window.localStorage.getItem(SECONDARY_STORAGE_KEY)
    if (stored && SECONDARY_COLOR_OPTIONS.includes(stored as (typeof SECONDARY_COLOR_OPTIONS)[number])) {
      setSecondary(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(SECONDARY_STORAGE_KEY, secondary)
  }, [secondary])

  return [secondary, setSecondary]
}

export const useGoblinThemeOptions = (secondary: string): GoblinThemeOptions => {
  const { colorMode } = useColorMode()

  return useMemo(() => {
    const paletteMode: PaletteMode = colorMode === 'dark' ? 'dark' : 'light'
    const secondaryPalette = createSecondaryPalette(secondary)
    return {
      palette: {
        mode: paletteMode,
        secondary: secondaryPalette,
      },
    }
  }, [colorMode, secondary])
}
