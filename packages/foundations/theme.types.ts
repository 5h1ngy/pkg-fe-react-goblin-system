import { CSSProperties } from 'react'

export type CSSObject = CSSProperties & Record<string, unknown>

export type PaletteMode = 'light' | 'dark'

export interface PaletteColor {
  main: string
  light: string
  dark: string
  contrastText: string
}

export interface Palette {
  mode: PaletteMode
  primary: PaletteColor
  secondary: PaletteColor
  error: PaletteColor
  warning: PaletteColor
  info: PaletteColor
  success: PaletteColor
  grey: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>
  background: {
    default: string
    paper: string
  }
  text: {
    primary: string
    secondary: string
    disabled: string
  }
  divider: string
  action: {
    active: string
    hover: string
    selected: string
    disabled: string
    disabledBackground: string
    focus: string
  }
}

export interface TypographyVariant {
  fontFamily?: string
  fontWeight?: number
  fontSize?: string
  lineHeight?: number | string
  letterSpacing?: string
  textTransform?: string
}

export interface GoblinTypography {
  fontFamily: string
  fontSize: number
  fontWeightLight: number
  fontWeightRegular: number
  fontWeightMedium: number
  fontWeightBold: number
  h1: TypographyVariant
  h2: TypographyVariant
  h3: TypographyVariant
  h4: TypographyVariant
  h5: TypographyVariant
  h6: TypographyVariant
  subtitle1: TypographyVariant
  subtitle2: TypographyVariant
  body1: TypographyVariant
  body2: TypographyVariant
  button: TypographyVariant
  caption: TypographyVariant
  overline: TypographyVariant
}

export interface Shape {
  borderRadius: number
}

export interface BreakpointValues {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface Breakpoints {
  values: BreakpointValues
  up: (key: keyof BreakpointValues) => string
  down: (key: keyof BreakpointValues) => string
  between: (start: keyof BreakpointValues, end: keyof BreakpointValues) => string
}

export type Spacing = (factor: number) => string

export interface ZIndex {
  appBar: number
  drawer: number
  modal: number
  snackbar: number
  tooltip: number
}

export interface Mixins {
  toolbar: CSSObject
}

export interface TransitionEasing {
  easeInOut: string
  easeOut: string
  easeIn: string
  sharp: string
}

export interface TransitionDuration {
  shortest: number
  shorter: number
  short: number
  standard: number
  complex: number
  enteringScreen: number
  leavingScreen: number
}

export interface Transitions {
  easing: TransitionEasing
  duration: TransitionDuration
  create: (
    props?: string | string[],
    options?: { duration?: number; easing?: string; delay?: number },
  ) => string
}

export interface GoblinTheme {
  palette: Palette
  typography: GoblinTypography
  shape: Shape
  spacing: Spacing
  shadows: string[]
  breakpoints: Breakpoints
  transitions: Transitions
  zIndex: ZIndex
  mixins: Mixins
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

export type PaletteOverrides = DeepPartial<Palette> & { mode?: PaletteMode }

export interface GoblinThemeOptions
  extends DeepPartial<Omit<GoblinTheme, 'spacing' | 'breakpoints' | 'transitions'>> {
  palette?: PaletteOverrides
  spacing?: number | Spacing
  breakpoints?: Partial<{ values: Partial<BreakpointValues> }>
  transitions?: DeepPartial<Omit<Transitions, 'create'>>
  shadows?: string[]
}

export type { PaletteOverrides as PaletteOptions }
