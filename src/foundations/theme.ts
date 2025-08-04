import { CSSProperties } from 'react'

type CSSObject = CSSProperties & Record<string, unknown>

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

export interface MaterialTypography {
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
    options?: { duration?: number; easing?: string; delay?: number }
  ) => string
}

export interface MaterialTheme {
  palette: Palette
  typography: MaterialTypography
  shape: Shape
  spacing: Spacing
  shadows: string[]
  breakpoints: Breakpoints
  transitions: Transitions
  zIndex: ZIndex
  mixins: Mixins
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type PaletteOverrides = DeepPartial<Palette> & { mode?: PaletteMode }

export interface MaterialThemeOptions
  extends DeepPartial<Omit<MaterialTheme, 'spacing' | 'breakpoints' | 'transitions'>> {
  palette?: PaletteOverrides
  spacing?: number | Spacing
  breakpoints?: Partial<{ values: Partial<BreakpointValues> }>
  transitions?: DeepPartial<Omit<Transitions, 'create'>>
  shadows?: string[]
}

const lightPaletteBase: Palette = {
  mode: 'light',
  primary: {
    main: '#1976d2',
    light: '#63a4ff',
    dark: '#004ba0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#9c27b0',
    light: '#d05ce3',
    dark: '#6a0080',
    contrastText: '#ffffff',
  },
  error: {
    main: '#d32f2f',
    light: '#ff6659',
    dark: '#9a0007',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#ffffff',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    light: '#60ad5e',
    dark: '#005005',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#1f1f1f',
    secondary: '#4d4d4d',
    disabled: 'rgba(0,0,0,0.38)',
  },
  divider: 'rgba(0,0,0,0.12)',
  action: {
    active: 'rgba(0,0,0,0.54)',
    hover: 'rgba(0,0,0,0.04)',
    selected: 'rgba(0,0,0,0.08)',
    disabled: 'rgba(0,0,0,0.26)',
    disabledBackground: 'rgba(0,0,0,0.12)',
    focus: 'rgba(0,0,0,0.12)',
  },
}

const darkPaletteBase: Palette = {
  ...lightPaletteBase,
  mode: 'dark',
  background: {
    default: '#121212',
    paper: '#1f1f1f',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.7)',
    disabled: 'rgba(255,255,255,0.5)',
  },
  divider: 'rgba(255,255,255,0.12)',
  action: {
    active: 'rgba(255,255,255,0.7)',
    hover: 'rgba(255,255,255,0.08)',
    selected: 'rgba(255,255,255,0.16)',
    disabled: 'rgba(255,255,255,0.3)',
    disabledBackground: 'rgba(255,255,255,0.12)',
    focus: 'rgba(255,255,255,0.12)',
  },
}

const defaultTypography: MaterialTypography = {
  fontFamily:
    'Inter, "Roboto", "Helvetica Neue", "Segoe UI", -apple-system, BlinkMacSystemFont, "Noto Sans", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: '3.5rem',
    fontWeight: 300,
    lineHeight: 1.167,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '3rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontSize: '2.25rem',
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: '0em',
  },
  h4: {
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: 1.235,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
}

const defaultShape: Shape = {
  borderRadius: 8,
}

const defaultBreakpointValues: BreakpointValues = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const defaultShadows = [
  'none',
  '0px 1px 3px rgba(0,0,0,0.12),0px 1px 2px rgba(0,0,0,0.24)',
  '0px 3px 6px rgba(0,0,0,0.16),0px 3px 6px rgba(0,0,0,0.23)',
  '0px 10px 20px rgba(0,0,0,0.19),0px 6px 6px rgba(0,0,0,0.23)',
  '0px 14px 28px rgba(0,0,0,0.25),0px 10px 10px rgba(0,0,0,0.22)',
  '0px 19px 38px rgba(0,0,0,0.3),0px 15px 12px rgba(0,0,0,0.22)',
] as const

const defaultZIndex: ZIndex = {
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}

const defaultTransitionsBase: Omit<Transitions, 'create'> = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
}

const defaultMixins: Mixins = {
  toolbar: {
    minHeight: 56,
    '@media (min-width:600px)': {
      minHeight: 64,
    },
  },
}

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const mergeDeep = <T>(target: T, source?: DeepPartial<T>): T => {
  if (!source) {
    return target
  }

  const result = { ...(target as Record<string, unknown>) }

  Object.entries(source as Record<string, unknown>).forEach(([key, value]) => {
    if (value === undefined) {
      return
    }
    const current = result[key]
    if (isObject(current) && isObject(value)) {
      result[key] = mergeDeep(current, value)
      return
    }

    result[key] = value
  })

  return result as T
}

const createSpacing = (spacing?: number | Spacing): Spacing => {
  if (typeof spacing === 'function') {
    return spacing
  }

  const base = typeof spacing === 'number' ? spacing : 8
  return (factor: number) => `${(factor * base) / 16}rem`
}

const createBreakpoints = (valuesOverride?: Partial<BreakpointValues>): Breakpoints => {
  const values = {
    ...defaultBreakpointValues,
    ...(valuesOverride ?? {}),
  }

  const up = (key: keyof BreakpointValues) => `@media (min-width:${values[key]}px)`
  const down = (key: keyof BreakpointValues) => `@media (max-width:${values[key] - 0.05}px)`
  const between = (start: keyof BreakpointValues, end: keyof BreakpointValues) =>
    `@media (min-width:${values[start]}px) and (max-width:${values[end] - 0.05}px)`

  return { values, up, down, between }
}

const createTransitions = (
  overrides?: DeepPartial<Omit<Transitions, 'create'>>
): Omit<Transitions, 'create'> => ({
  easing: mergeDeep(defaultTransitionsBase.easing, overrides?.easing),
  duration: mergeDeep(defaultTransitionsBase.duration, overrides?.duration),
})

export const createMaterialTheme = (options: MaterialThemeOptions = {}): MaterialTheme => {
  const mode: PaletteMode = options.palette?.mode ?? 'light'

  const paletteBase = mode === 'dark' ? darkPaletteBase : lightPaletteBase
  const palette = mergeDeep(paletteBase, options.palette ?? { mode })
  palette.mode = mode

  const typography = mergeDeep(defaultTypography, options.typography)
  const shape = mergeDeep(defaultShape, options.shape)
  const spacing = createSpacing(options.spacing)
  const breakpoints = createBreakpoints(options.breakpoints?.values)
  const transitionsBase = createTransitions(options.transitions)
  const transitions: Transitions = {
    ...transitionsBase,
    create: (props = 'all', transitionOptions = {}) => {
      const properties = Array.isArray(props) ? props : [props]
      const duration = transitionOptions.duration ?? transitionsBase.duration.standard
      const easing = transitionOptions.easing ?? transitionsBase.easing.easeInOut
      const delay = transitionOptions.delay ?? 0
      return properties
        .map((prop) => `${prop} ${duration}ms ${easing} ${delay}ms`)
        .join(', ')
    },
  }

  const shadows = options.shadows ?? [...defaultShadows]
  const zIndex = mergeDeep(defaultZIndex, options.zIndex)
  const mixins = mergeDeep(defaultMixins, options.mixins)

  return {
    palette,
    typography,
    shape,
    spacing,
    shadows: shadows.slice(),
    breakpoints,
    transitions,
    zIndex,
    mixins,
  }
}

export type { PaletteOverrides as PaletteOptions }
