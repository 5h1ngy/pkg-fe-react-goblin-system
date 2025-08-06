import { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import { createMaterialTheme } from './theme'
import type { MaterialTheme, MaterialThemeOptions } from './theme'
import type { MaterialThemeProviderProps } from './MaterialThemeProvider.types'

const isMaterialTheme = (value: MaterialThemeOptions | MaterialTheme | undefined): value is MaterialTheme =>
  typeof value === 'object' && value !== null && 'palette' in value && 'typography' in value

export const MaterialThemeProvider = ({ children, theme }: MaterialThemeProviderProps) => {
  const materialTheme = useMemo(() => {
    if (isMaterialTheme(theme)) {
      return theme
    }

    return createMaterialTheme(theme)
  }, [theme])

  return <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>
}

MaterialThemeProvider.displayName = 'MaterialThemeProvider'
