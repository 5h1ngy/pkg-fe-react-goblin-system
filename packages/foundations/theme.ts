import {
  BreakpointValues,
  Breakpoints,
  DeepPartial,
  GoblinTheme,
  GoblinThemeOptions,
  GoblinTypography,
  Mixins,
  Palette,
  PaletteMode,
  Shape,
  Spacing,
  Transitions,
  ZIndex,
} from './theme.types'

const lightPaletteBase: Palette = {
  mode: 'light',
  primary: {
    main: '#1677ff',
    light: '#69b1ff',
    dark: '#0958d9',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#722ed1',
    light: '#b37feb',
    dark: '#531dab',
    contrastText: '#ffffff',
  },
  error: {
    main: '#ff4d4f',
    light: '#ff7875',
    dark: '#a8071a',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#faad14',
    light: '#ffd666',
    dark: '#d48806',
    contrastText: '#141414',
  },
  info: {
    main: '#36cfc9',
    light: '#5cdbd3',
    dark: '#08979c',
    contrastText: '#083c4a',
  },
  success: {
    main: '#52c41a',
    light: '#73d13d',
    dark: '#237804',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#f6f8fb',
    100: '#eef2f8',
    200: '#dbe3f1',
    300: '#c0cde4',
    400: '#a6b6d4',
    500: '#8c9fc1',
    600: '#7384a6',
    700: '#5b6886',
    800: '#424a63',
    900: '#2b3142',
  },
  background: {
    default: '#f7f9fc',
    paper: '#ffffff',
  },
  text: {
    primary: '#1f2333',
    secondary: '#5c6273',
    disabled: 'rgba(31,35,51,0.35)',
  },
  divider: 'rgba(34,41,57,0.12)',
  action: {
    active: 'rgba(17,25,40,0.65)',
    hover: 'rgba(22,119,255,0.08)',
    selected: 'rgba(114,46,209,0.12)',
    disabled: 'rgba(31,35,51,0.3)',
    disabledBackground: 'rgba(31,35,51,0.1)',
    focus: 'rgba(22,119,255,0.18)',
  },
}

const darkPaletteBase: Palette = {
  ...lightPaletteBase,
  mode: 'dark',
  primary: {
    main: '#4096ff',
    light: '#69b1ff',
    dark: '#165996',
    contrastText: '#0b1220',
  },
  secondary: {
    main: '#a871ff',
    light: '#c8a8ff',
    dark: '#6c3cd4',
    contrastText: '#0b1220',
  },
  error: {
    main: '#ff7875',
    light: '#ffa39e',
    dark: '#a8071a',
    contrastText: '#2a0608',
  },
  warning: {
    main: '#ffc53d',
    light: '#ffd666',
    dark: '#ad6800',
    contrastText: '#1f1604',
  },
  info: {
    main: '#5cdbd3',
    light: '#87e8de',
    dark: '#08979c',
    contrastText: '#0a1f24',
  },
  success: {
    main: '#73d13d',
    light: '#95de64',
    dark: '#3f8618',
    contrastText: '#051b11',
  },
  background: {
    default: '#0e1116',
    paper: '#151b24',
  },
  text: {
    primary: 'rgba(244,247,255,0.92)',
    secondary: 'rgba(244,247,255,0.65)',
    disabled: 'rgba(244,247,255,0.4)',
  },
  divider: 'rgba(86,99,125,0.22)',
  action: {
    active: 'rgba(244,247,255,0.74)',
    hover: 'rgba(64,150,255,0.12)',
    selected: 'rgba(64,150,255,0.18)',
    disabled: 'rgba(244,247,255,0.4)',
    disabledBackground: 'rgba(244,247,255,0.12)',
    focus: 'rgba(64,150,255,0.24)',
  },
}

const defaultTypography: GoblinTypography = {
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
  borderRadius: 12,
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
  '0 6px 14px rgba(15,23,42,0.05)',
  '0 12px 24px rgba(15,23,42,0.08)',
  '0 16px 32px rgba(15,23,42,0.1)',
  '0 20px 40px rgba(15,23,42,0.12)',
  '0 24px 48px rgba(15,23,42,0.14)',
  '0 28px 56px rgba(15,23,42,0.16)',
  '0 32px 64px rgba(15,23,42,0.18)',
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
    minHeight: 60,
    padding: '0 1.5rem',
    '@media (min-width:600px)': {
      minHeight: 72,
      padding: '0 2rem',
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

  const base = typeof spacing === 'number' ? spacing : 10
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
  overrides?: DeepPartial<Omit<Transitions, 'create'>>,
): Omit<Transitions, 'create'> => ({
  easing: mergeDeep(defaultTransitionsBase.easing, overrides?.easing),
  duration: mergeDeep(defaultTransitionsBase.duration, overrides?.duration),
})

export const createGoblinTheme = (options: GoblinThemeOptions = {}): GoblinTheme => {
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
      return properties.map((prop) => `${prop} ${duration}ms ${easing} ${delay}ms`).join(', ')
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

export * from './theme.types'
