import { useEffect, useMemo, useState } from 'react'

import { useColorMode } from '@docusaurus/theme-common'

import type { GoblinThemeOptions, PaletteMode } from 'pkg-fe-react-goblin-system'

import { SECONDARY_COLOR_OPTIONS, SECONDARY_STORAGE_KEY } from './LayoutProvider.types'

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
    return {
      palette: {
        mode: paletteMode,
        secondary: { main: secondary },
      },
    }
  }, [colorMode, secondary])
}
