import { ReactNode, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import { createMaterialTheme, MaterialTheme, MaterialThemeOptions } from './theme'

export interface MaterialThemeProviderProps {
  children: ReactNode
  theme?: MaterialThemeOptions | MaterialTheme
}

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
