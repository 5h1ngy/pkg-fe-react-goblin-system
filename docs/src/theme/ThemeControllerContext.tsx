import { createContext, useContext } from 'react'
import type { ThemeMode } from 'pkg-fe-react-goblin-system/styles'

export interface ThemeControllerValue {
  mode: ThemeMode
  accent: string
  setMode: (mode: ThemeMode) => void
  setAccent: (accent: string) => void
}

export const ThemeControllerContext = createContext<ThemeControllerValue | null>(null)

export const useThemeController = () => {
  const ctx = useContext(ThemeControllerContext)
  if (!ctx) {
    throw new Error('useThemeController must be used within ThemeControllerContext.Provider')
  }
  return ctx
}
