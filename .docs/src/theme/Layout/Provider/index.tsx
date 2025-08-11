/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { composeProviders, useColorMode } from '@docusaurus/theme-common'
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal'
import { DocsPreferredVersionContextProvider } from '@docusaurus/plugin-content-docs/client'
import type { Props } from '@theme/Layout/Provider'

import { CssBaseline, GoblinThemeProvider } from 'pkg-fe-react-goblin-system'
import type { GoblinThemeOptions, PaletteMode } from 'pkg-fe-react-goblin-system'

const SECONDARY_STORAGE_KEY = 'goblin-docs-secondary-color'

export const SECONDARY_COLOR_OPTIONS = ['#c9971f', '#39ff14', '#ff00f7', '#00f0ff', '#ffe41f']

type SecondaryColorContextValue = {
  secondary: string
  setSecondary: (color: string) => void
}

const SecondaryColorContext = createContext<SecondaryColorContextValue>({
  secondary: SECONDARY_COLOR_OPTIONS[0],
  setSecondary: () => {},
})

export const useSecondaryColor = (): SecondaryColorContextValue => useContext(SecondaryColorContext)

const GoblinThemeBridge = ({ children }: { children: ReactNode }): JSX.Element => {
  const { colorMode } = useColorMode()
  const [secondary, setSecondary] = useState<string>(SECONDARY_COLOR_OPTIONS[0])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const stored = window.localStorage.getItem(SECONDARY_STORAGE_KEY)
    if (stored && SECONDARY_COLOR_OPTIONS.includes(stored)) {
      setSecondary(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(SECONDARY_STORAGE_KEY, secondary)
  }, [secondary])

  const themeOptions = useMemo<GoblinThemeOptions>(() => {
    const paletteMode: PaletteMode = colorMode === 'dark' ? 'dark' : 'light'
    return {
      palette: {
        mode: paletteMode,
        secondary: { main: secondary },
      },
    }
  }, [colorMode, secondary])

  return (
    <SecondaryColorContext.Provider value={{ secondary, setSecondary }}>
      <GoblinThemeProvider theme={themeOptions}>
        <CssBaseline />
        {children}
      </GoblinThemeProvider>
    </SecondaryColorContext.Provider>
  )
}

const Provider = composeProviders([
  ColorModeProvider,
  GoblinThemeBridge,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
])

export default function LayoutProvider({ children }: Props): ReactNode {
  return <Provider>{children}</Provider>
}
