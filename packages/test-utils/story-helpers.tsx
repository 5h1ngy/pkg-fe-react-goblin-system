import { ComponentType, ReactElement } from 'react'

export type StoryExports = Record<string, unknown>

export interface StoryContext {
  args: Record<string, unknown>
  globals: Record<string, unknown>
  parameters: Record<string, unknown>
  canvasElement: HTMLElement
}

type DecoratorFn = (
  storyFn: () => ReactElement | null,
  context: StoryContext,
) => ReactElement | null | void

const ensureArray = <T,>(value: T[] | undefined): T[] => (Array.isArray(value) ? value : [])

const createContext = (
  meta: Record<string, unknown>,
  story: Record<string, unknown>,
  args: Record<string, unknown>,
): StoryContext => ({
  args,
  globals: {},
  parameters: {
    ...((meta?.parameters as Record<string, unknown>) ?? {}),
    ...((story?.parameters as Record<string, unknown>) ?? {}),
  },
  canvasElement:
    typeof document !== 'undefined' ? document.createElement('div') : ({} as HTMLElement),
})

const createBaseRenderer = (
  storyExport: unknown,
  meta: Record<string, unknown>,
  args: Record<string, unknown>,
  context: StoryContext,
): (() => ReactElement | null) => {
  if (typeof storyExport === 'function') {
    const storyFn = storyExport as (
      storyArgs: Record<string, unknown>,
      storyContext?: StoryContext,
    ) => ReactElement | null | void
    return () => (storyFn(args, context) as ReactElement | null | undefined) ?? null
  }

  const storyObject = (storyExport as Record<string, unknown>) ?? {}
  const render = (storyObject.render as
    | ((a: Record<string, unknown>, c: StoryContext) => ReactElement | null | void)
    | undefined) ??
    (meta.render as
      | ((a: Record<string, unknown>, c: StoryContext) => ReactElement | null | void)
      | undefined)

  if (render) {
    return () => (render(args, context) as ReactElement | null | undefined) ?? null
  }

  const Component = meta.component as ComponentType<Record<string, unknown>> | undefined
  if (Component) {
    return () => <Component {...args} />
  }

  return () => null
}

const applyDecorators = (
  renderFn: () => ReactElement | null,
  decorators: DecoratorFn[],
  context: StoryContext,
) => {
  let current = renderFn
  const reversed = decorators.slice().reverse()

  reversed.forEach((decorator) => {
    const previous = current
    current = () => {
      const result = decorator(
        () => previous() ?? null,
        context,
      )
      return (result as ReactElement | null | undefined) ?? previous()
    }
  })

  return current
}

export const getStoryRenderers = (
  stories: StoryExports,
  rawMeta: Record<string, unknown> | undefined,
): Array<[string, ComponentType]> => {
  const moduleEntries = Object.entries(stories).filter(([key]) => key !== 'default')
  const meta = (rawMeta ?? (stories.default as Record<string, unknown>) ?? {}) as Record<
    string,
    unknown
  >

  return moduleEntries.map(([name, storyExport]) => {
    const storyObject = (storyExport as Record<string, unknown>) ?? {}
    const args = {
      ...(meta.args as Record<string, unknown> | undefined),
      ...(storyObject.args as Record<string, unknown> | undefined),
    }
    const context = createContext(meta, storyObject, args)
    const baseRenderer = createBaseRenderer(storyExport, meta, args, context)
    const decoratorList = [
      ...ensureArray(meta.decorators as DecoratorFn[] | undefined),
      ...ensureArray(storyObject.decorators as DecoratorFn[] | undefined),
    ]
    const renderer = applyDecorators(baseRenderer, decoratorList, context)

    const StoryComponent = () => renderer() ?? null
    StoryComponent.displayName = `${(meta.component as ComponentType | undefined)?.name ?? 'Story'}:${name}`

    return [name, StoryComponent] as [string, ComponentType]
  })
}
