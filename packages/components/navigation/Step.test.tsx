import { describe, it } from 'vitest'
import { renderWithTheme } from '../../test-utils/renderWithTheme'
import { getStoryRenderers } from '../../test-utils/story-helpers'
import meta, * as stories from './Step.stories'

describe('navigation/Step stories', () => {
  const storyRenderers = getStoryRenderers(stories, meta)

  it.each(storyRenderers)('%s renders without crashing', (_, Story) => {
    const { unmount } = renderWithTheme(<Story />)
    unmount()
  })
})
