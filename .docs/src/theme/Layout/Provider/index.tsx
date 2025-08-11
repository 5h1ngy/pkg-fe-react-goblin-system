import type { ReactNode } from 'react'
import { useMemo } from 'react'

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

const GoblinThemeBridge = ({ children }: { children: ReactNode }): JSX.Element => {
  const { colorMode } = useColorMode()

  const themeOptions = useMemo<GoblinThemeOptions>(() => {
    const paletteMode: PaletteMode = colorMode === 'dark' ? 'dark' : 'light'
    return {
      palette: {
        mode: paletteMode,
      },
    }
  }, [colorMode])

  return (
    <GoblinThemeProvider theme={themeOptions}>
      <CssBaseline />
      {children}
    </GoblinThemeProvider>
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
