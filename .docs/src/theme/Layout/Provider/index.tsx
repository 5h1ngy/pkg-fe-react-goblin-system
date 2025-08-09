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

const GoblinThemeBridge = ({ children }: { children: ReactNode }): JSX.Element => {
  const { colorMode } = useColorMode()

  const themeOptions = useMemo(
    () => ({
      palette: {
        mode: colorMode === 'dark' ? 'dark' : 'light',
      },
    }),
    [colorMode],
  )

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
