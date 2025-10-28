import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { setProjectAnnotations } from '@storybook/preview-api'
import { CssBaseline, GoblinThemeProvider, createGoblinTheme } from 'pkg-fe-react-goblin-system'

const DEFAULT_MODE: 'light' | 'dark' = 'dark'
const DEFAULT_PRIMARY = '#1677ff'
const DEFAULT_SECONDARY = '#c9971f'

setProjectAnnotations({
  globals: {
    mode: DEFAULT_MODE,
    primary: DEFAULT_PRIMARY,
  },
  decorators: [
    (Story, context) => {
      const mode = (context.globals.mode as 'light' | 'dark') ?? DEFAULT_MODE
      const primary = (context.globals.primary as string) ?? DEFAULT_PRIMARY

      const theme = createGoblinTheme({
        palette: {
          mode,
          primary: { main: primary },
          secondary: { main: DEFAULT_SECONDARY },
        },
      })

      return (
        <GoblinThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </GoblinThemeProvider>
      )
    },
  ],
})

afterEach(() => cleanup())

class VitestResizeObserver implements ResizeObserver {
  private callback: ResizeObserverCallback

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback
  }

  observe(target: Element): void {
    this.callback(
      [
        {
          target,
          contentRect: target.getBoundingClientRect(),
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        } as ResizeObserverEntry,
      ],
      this,
    )
  }

  unobserve(): void {
    // noop
  }

  disconnect(): void {
    // noop
  }
}

if (typeof window !== 'undefined') {
  if (!('ResizeObserver' in window)) {
    // @ts-expect-error injecting test stub
    window.ResizeObserver = VitestResizeObserver
  }

  if (!window.matchMedia) {
    window.matchMedia = (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    })
  }

  if (!HTMLCanvasElement.prototype.getContext) {
    HTMLCanvasElement.prototype.getContext = () => null
  }
}

// Helps React Testing Library detect act environment.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true
