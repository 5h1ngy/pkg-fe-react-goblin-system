import type { ReactNode } from 'react'

import type { MaterialTheme, MaterialThemeOptions } from './theme'

export interface MaterialThemeProviderProps {
  children: ReactNode
  theme?: MaterialThemeOptions | MaterialTheme
}
