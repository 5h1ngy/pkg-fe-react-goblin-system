import { useEffect, useMemo, useState } from 'react'

import { useColorMode } from '@docusaurus/theme-common'

import {
  darkenHex,
  getContrastText,
  lightenHex,
  normalizeHex,
  type GoblinThemeOptions,
  type PaletteMode,
} from 'pkg-fe-react-goblin-system'

import { SECONDARY_COLOR_OPTIONS, SECONDARY_STORAGE_KEY } from './LayoutProvider.types'

const ACCENT_LIGHTEN_AMOUNT = 0.24
const ACCENT_DARKEN_AMOUNT = 0.28
const FALLBACK_SECONDARY = SECONDARY_COLOR_OPTIONS[0]

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
