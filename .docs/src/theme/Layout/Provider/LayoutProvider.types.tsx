import type { ReactNode } from 'react'

export type SecondaryColorContextValue = {
  secondary: string
  setSecondary: (color: string) => void
}

export type LayoutProviderProps = {
  children: ReactNode
}

export const SECONDARY_COLOR_OPTIONS = ['#c9971f', '#39ff14', '#ff00f7', '#00f0ff', '#ffe41f'] as const

export const SECONDARY_STORAGE_KEY = 'goblin-docs-secondary-color'
