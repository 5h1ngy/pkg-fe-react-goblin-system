import type { ReactNode } from 'react'

import type { GoblinTheme, GoblinThemeOptions } from './theme'

export interface GoblinThemeProviderProps {
  children: ReactNode
  theme?: GoblinThemeOptions | GoblinTheme
}
