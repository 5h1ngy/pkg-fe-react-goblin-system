import type { ThemeMode } from '@/styles'

export interface HeaderNavigationItem {
  label: string
  targetId: string
}

export interface HeaderLocaleOption {
  code: string
  label: string
}

export interface HeaderBrandConfig {
  href?: string
  logoSrc?: string
  logoAlt?: string
}

export interface HeaderLabels {
  brandHome: string
  navigation: string
  menuOpen: string
  menuClose: string
  menuOpenLabel: string
  menuCloseLabel: string
  accentFallback: (value: string, index: number) => string
  themeMenuButton: (mode: ThemeMode, accent: string) => string
  themeToggle: (targetMode: ThemeMode) => string
  themeSection: string
  accentSection: string
  accentGroup: string
}

export interface HeaderProps {
  navigation: HeaderNavigationItem[]
  themeMode: ThemeMode
  onThemeChange: (mode: ThemeMode) => void
  accentOptions: string[]
  accentColor: string
  onAccentChange: (color: string) => void
  accentLabels?: Record<string, string>
  locale: string
  locales: HeaderLocaleOption[]
  onLocaleChange: (locale: string) => void
  profileName: string
  brand?: HeaderBrandConfig
  labels?: Partial<HeaderLabels>
}

export const defaultHeaderLabels: HeaderLabels = {
  brandHome: 'Return to hero',
  navigation: 'Primary navigation',
  menuOpen: 'Open navigation menu',
  menuClose: 'Close navigation menu',
  menuOpenLabel: 'Menu',
  menuCloseLabel: 'Close',
  accentFallback: (_value, index) => `Accent ${index + 1}`,
  themeMenuButton: (mode, accent) => `Theme menu. Mode: ${mode}. Accent: ${accent}`,
  themeToggle: (targetMode) => `Switch theme to ${targetMode}`,
  themeSection: 'Theme',
  accentSection: 'Accent',
  accentGroup: 'Accent colors',
}
