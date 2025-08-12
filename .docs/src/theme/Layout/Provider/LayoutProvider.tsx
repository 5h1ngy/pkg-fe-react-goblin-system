import { createContext, useContext } from 'react'
import type { JSX } from 'react'

import { CssBaseline, GoblinThemeProvider } from 'pkg-fe-react-goblin-system'

import type { LayoutProviderProps, SecondaryColorContextValue } from './LayoutProvider.types'
import { SECONDARY_COLOR_OPTIONS } from './LayoutProvider.types'
import { composeLayoutProviders } from './LayoutProvider.style'
import { useGoblinThemeOptions, useSecondaryColorState } from './LayoutProvider.hooks'

const SecondaryColorContext = createContext<SecondaryColorContextValue>({
  secondary: SECONDARY_COLOR_OPTIONS[0],
  setSecondary: () => {},
})

const Providers = composeLayoutProviders

export const useSecondaryColor = (): SecondaryColorContextValue =>
  useContext(SecondaryColorContext)

const GoblinThemeBridge = ({ children }: LayoutProviderProps): JSX.Element => {
  const [secondary, setSecondary] = useSecondaryColorState()
  const themeOptions = useGoblinThemeOptions(secondary)

  return (
    <SecondaryColorContext.Provider value={{ secondary, setSecondary }}>
      <GoblinThemeProvider theme={themeOptions}>
        <CssBaseline />
        {children}
      </GoblinThemeProvider>
    </SecondaryColorContext.Provider>
  )
}

export default function LayoutProvider({ children }: LayoutProviderProps): JSX.Element {
  return (
    <Providers>
      <GoblinThemeBridge>{children}</GoblinThemeBridge>
    </Providers>
  )
}
