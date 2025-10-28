import { ComponentType, ReactElement } from 'react'

type DecoratorFn = (
  storyFn: () => ReactElement | null,
  context: StoryContext,
) => ReactElement | null | void

type StoryObject = {
  render?: (args: Record<string, unknown>, context: StoryContext) => ReactElement | null | void
  args?: Record<string, unknown>
  decorators?: DecoratorFn[]
  parameters?: Record<string, unknown>
}

type MetaObject = {
  component?: ComponentType<unknown>
  render?: (args: Record<string, unknown>, context: StoryContext) => ReactElement | null | void
  args?: Record<string, unknown>
  decorators?: DecoratorFn[]
  parameters?: Record<string, unknown>
}

export type StoryExports = Record<string, unknown> & { default?: MetaObject }

export interface StoryContext {
  args: Record<string, unknown>
  globals: Record<string, unknown>
  parameters: Record<string, unknown>
  canvasElement: HTMLElement
}

const createContext = (
  meta: MetaObject | undefined,
  story: StoryObject | undefined,
  args: Record<string, unknown>,
): StoryContext => ({
  args,
  globals: {},
  parameters: {
    ...(meta?.parameters ?? {}),
    ...(story?.parameters ?? {}),
  },
  canvasElement:
    typeof document !== 'undefined' ? document.createElement('div') : ({} as HTMLElement),
})

const applyDecorators = (
  renderFn: () => ReactElement | null,
  decorators: DecoratorFn[],
  context: StoryContext,
): (() => ReactElement | null) =>
  decorators.reduceRight(
    (acc, decorator) => () => {
      const result = decorator(
        () => acc() ?? null,
        context,
      )
      return (result as ReactElement | null | undefined) ?? acc()
    },
    renderFn,
  )

const createBaseRenderer = (
  storyExport: unknown,
  meta: MetaObject | undefined,
  args: Record<string, unknown>,
  context: StoryContext,
) => {
  if (typeof storyExport === 'function') {
    const storyFn = storyExport as (
      storyArgs: Record<string, unknown>,
      storyContext?: StoryContext,
    ) => ReactElement | null | void
    return () => (storyFn(args, context) as ReactElement | null | undefined) ?? null
  }

  const storyObject = storyExport as StoryObject | undefined

  if (storyObject?.render) {
    return () => (storyObject.render?.(args, context) as ReactElement | null | undefined) ?? null
  }

  if (meta?.render) {
    return () => (meta.render?.(args, context) as ReactElement | null | undefined) ?? null
  }

  if (meta?.component) {
    const Component = meta.component as ComponentType<Record<string, unknown>>
    return () => <Component {...args} />
  }

  return () => null
}

const ensureArray = <T,>(value: T[] | undefined): T[] => (Array.isArray(value) ? value : [])

export const getStoryRenderers = (
  stories: StoryExports,
  meta: MetaObject | undefined,
): Array<[string, ComponentType]> => {
  const entries = Object.entries(stories).filter(([key]) => key !== 'default')

  return entries.map(([name, storyExport]) => {
    const storyObject = storyExport as StoryObject | undefined
    const args = {
      ...(meta?.args ?? {}),
      ...(storyObject?.args ?? {}),
    }
    const context = createContext(meta, storyObject, args)
    const renderBase = createBaseRenderer(storyExport, meta, args, context)
    const decorators = [
      ...ensureArray(meta?.decorators),
      ...ensureArray(storyObject?.decorators),
    ]

    const renderer = applyDecorators(renderBase, decorators, context)

    const StoryComponent = () => renderer() ?? null

    StoryComponent.displayName = `${meta?.component?.name ?? 'Story'}:${name}`

    return [name, StoryComponent] as [string, ComponentType]
  })
}
