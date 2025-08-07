import type { GoblinTheme } from '../../../foundations'

export type PaletteIntent = 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'

export const getIntentColor = (theme: GoblinTheme, color: PaletteIntent) => {
  if (color === 'inherit') {
    return { main: 'inherit', contrastText: 'inherit' }
  }

  if (color === 'default') {
    return {
      main: theme.palette.background.paper,
      contrastText: theme.palette.text.primary,
    }
  }

  const map: Record<Exclude<PaletteIntent, 'inherit' | 'default'>, 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'> = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
  }

  const key = map[color as Exclude<PaletteIntent, 'inherit' | 'default'>]
  return theme.palette[key]
}
