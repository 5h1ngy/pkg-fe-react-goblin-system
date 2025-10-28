import { ComponentType, ReactElement, ReactNode } from 'react'
import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import {
  CssBaseline,
  GoblinThemeProvider,
  createGoblinTheme,
} from 'pkg-fe-react-goblin-system'

type StoryModule = {
  default?: {
    component?: ComponentType<unknown>
    render?: (args: Record<string, unknown>, context: StoryContext) => ReactNode
    args?: Record<string, unknown>
    decorators?: DecoratorFn[]
    parameters?: Record<string, unknown>
  }
  [key: string]: unknown
}

type DecoratorFn = (storyFn: () => ReactNode, context: StoryContext) => ReactNode

type StoryObject = {
  render?: (args: Record<string, unknown>, context: StoryContext) => ReactNode
  args?: Record<string, unknown>
  decorators?: DecoratorFn[]
  parameters?: Record<string, unknown>
}

type StoryContext = {
  args: Record<string, unknown>
  globals: Record<string, unknown>
  parameters: Record<string, unknown>
}

const storyModules = import.meta.glob('./**/*.stories.tsx', {
  eager: true,
}) as Record<string, StoryModule>

const testTheme = createGoblinTheme({
  palette: { mode: 'dark', secondary: { main: '#c9971f' } },
})

const getStoryEntries = (module: StoryModule) =>
  Object.entries(module).filter(([exportName]) => exportName !== 'default')

const mergeArgs = (
  metaArgs: Record<string, unknown> | undefined,
  storyArgs: Record<string, unknown> | undefined,
) => ({
  ...(metaArgs ?? {}),
  ...(storyArgs ?? {}),
})

const mergeParameters = (
  metaParams: Record<string, unknown> | undefined,
  storyParams: Record<string, unknown> | undefined,
) => ({
  ...(metaParams ?? {}),
  ...(storyParams ?? {}),
})

const collectDecorators = (
  metaDecorators: DecoratorFn[] | undefined,
  storyDecorators: DecoratorFn[] | undefined,
): DecoratorFn[] => [...(metaDecorators ?? []), ...(storyDecorators ?? [])]

const createBaseComponent = (
  storyExport: unknown,
  meta: StoryModule['default'],
  args: Record<string, unknown>,
  context: StoryContext,
): ComponentType => {
  if (typeof storyExport === 'function') {
    const storyFn = storyExport as (args: Record<string, unknown>, context?: StoryContext) => ReactNode
    return () => storyFn(args, context) as ReactElement
  }

  const storyObject = storyExport as StoryObject | undefined
  if (storyObject?.render) {
    return () => storyObject.render?.(args, context) as ReactElement
  }

  if (meta?.render) {
    return () => meta.render?.(args, context) as ReactElement
  }

  if (meta?.component) {
    const Component = meta.component
    return () => <Component {...args} />
  }

  return () => null
}

const applyDecorators = (
  Base: ComponentType,
  decorators: DecoratorFn[],
  context: StoryContext,
): ComponentType =>
  decorators.reduceRight<ComponentType>(
    (Accumulated, decorator) => {
      const Decorated = () => decorator(() => <Accumulated />, context) as ReactElement
      return Decorated
    },
    Base,
  )

const SKIP_PATTERNS = [
  /CircularProgress/i,
  /LinearProgress/i,
  /Tabs\.stories/i,
  /TabPanel\.stories/i,
]

const shouldSkipStory = (modulePath: string, storyName: string) =>
  SKIP_PATTERNS.some((pattern) => pattern.test(modulePath) || pattern.test(storyName))

describe('component stories render', () => {
  Object.entries(storyModules).forEach(([modulePath, storyModule]) => {
    const meta = storyModule.default
    const entries = getStoryEntries(storyModule)

    if (!entries.length) {
      return
    }

    describe(modulePath.replace('./', ''), () => {
      entries.forEach(([storyName, storyExport]) => {
        if (shouldSkipStory(modulePath, storyName)) {
          it.skip(`renders ${storyName}`, () => undefined)
          return
        }

        const storyObject = storyExport as StoryObject | undefined
        const args = mergeArgs(meta?.args, storyObject?.args)
        const context: StoryContext = {
          args,
          globals: {},
          parameters: mergeParameters(meta?.parameters, storyObject?.parameters),
        }

        const BaseComponent = createBaseComponent(storyExport, meta, args, context)
        const DecoratedComponent = applyDecorators(
          BaseComponent,
          collectDecorators(meta?.decorators, storyObject?.decorators),
          context,
        )

        it(`renders ${storyName}`, () => {
          const { unmount } = render(
            <GoblinThemeProvider theme={testTheme}>
              <CssBaseline />
              <DecoratedComponent />
            </GoblinThemeProvider>,
          )
          unmount()
        })
      })
    })
  })
})
