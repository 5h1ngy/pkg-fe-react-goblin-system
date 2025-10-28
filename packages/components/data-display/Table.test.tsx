import { describe, it } from 'vitest'
import { renderWithTheme } from '../../test-utils/renderWithTheme'
import { getStoryRenderers } from '../../test-utils/story-helpers'
import meta, * as stories from './Table.stories'

describe('data-display/Table stories', () => {
  const storyRenderers = getStoryRenderers(stories, meta)

  it.each(storyRenderers)('%s renders without crashing', (_, Story) => {
    const { unmount } = renderWithTheme(<Story />)
    unmount()
  })
})
