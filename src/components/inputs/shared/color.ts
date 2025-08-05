import type { MaterialTheme } from '../../../foundations'

export type ColorToken = 'inherit' | 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
export type ActiveColor = Exclude<ColorToken, 'inherit' | 'default'>

export interface ColorSwatch {
  main: string
  contrastText: string
  dark: string
}

export const getColor = (theme: MaterialTheme, color: ColorToken): ColorSwatch => {
  if (color === 'inherit') {
    return {
      main: 'inherit',
      contrastText: 'inherit',
      dark: 'inherit',
    }
  }

  if (color === 'default') {
    return {
      main: theme.palette.grey[500],
      contrastText: theme.palette.text.primary,
      dark: theme.palette.grey[700],
    }
  }

  const paletteMap: Record<ActiveColor, 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'> = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
  }

  const palette = theme.palette[paletteMap[color as ActiveColor]]
  return {
    main: palette.main,
    contrastText: palette.contrastText,
    dark: palette.dark,
  }
}
