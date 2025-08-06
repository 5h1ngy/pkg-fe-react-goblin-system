import { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import { createGoblinTheme } from './theme'
import type { GoblinTheme, GoblinThemeOptions } from './theme'
import type { GoblinThemeProviderProps } from './GoblinThemeProvider.types'

const isGoblinTheme = (value: GoblinThemeOptions | GoblinTheme | undefined): value is GoblinTheme =>
  typeof value === 'object' && value !== null && 'palette' in value && 'typography' in value

export const GoblinThemeProvider = ({ children, theme }: GoblinThemeProviderProps) => {
  const goblinTheme = useMemo(() => {
    if (isGoblinTheme(theme)) {
      return theme
    }

    return createGoblinTheme(theme)
  }, [theme])

  return <ThemeProvider theme={goblinTheme}>{children}</ThemeProvider>
}

GoblinThemeProvider.displayName = 'GoblinThemeProvider'
