import { promises as fs } from 'fs'
import path from 'path'

const componentsRoot = path.resolve('packages/components')
const testUtilsDir = path.resolve('packages/test-utils')

const STORY_SUFFIX = '.stories.tsx'
const TEST_SUFFIX = '.test.tsx'

const header = `import { describe, it } from 'vitest'
import { renderWithTheme } from '__TEST_UTILS__/renderWithTheme'
import { getStoryRenderers } from '__TEST_UTILS__/story-helpers'
`

const createImportBlock = (storiesImportPath) =>
  `${header.replace(/__TEST_UTILS__/g, storiesImportPath.testUtils)}import meta, * as stories from '${storiesImportPath.stories}'
`

const createBody = (componentLabel) => `
describe('${componentLabel} stories', () => {
  const storyRenderers = getStoryRenderers(stories, meta)

  it.each(storyRenderers)('%s renders without crashing', (_, Story) => {
    const { unmount } = renderWithTheme(<Story />)
    unmount()
  })
})
`

const ensurePosix = (value) => value.split(path.sep).join('/')

const getRelativeImportPath = (from, to) => {
  const relative = path.relative(from, to)
  return ensurePosix(relative || '.')
}

const gatherStories = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = await gatherStories(entryPath)
      results.push(...nested)
    } else if (entry.isFile() && entry.name.endsWith(STORY_SUFFIX)) {
      results.push(entryPath)
    }
  }

  return results
}

const main = async () => {
  const stories = await gatherStories(componentsRoot)
  stories.sort((a, b) => a.localeCompare(b, 'en'))

  await Promise.all(
    stories.map(async (storyPath) => {
      const testPath = storyPath.replace(STORY_SUFFIX, TEST_SUFFIX)
      const dir = path.dirname(testPath)
      await fs.mkdir(dir, { recursive: true })

      const testUtilsImport = getRelativeImportPath(dir, testUtilsDir)
      const storiesImport = './' + path.basename(storyPath, '.tsx')
      const componentLabel = path
        .relative(componentsRoot, storyPath)
        .replace(STORY_SUFFIX, '')
        .replace(/\\/g, '/')

      const importBlock = createImportBlock({
        testUtils: testUtilsImport,
        stories: storiesImport,
      })

      const content = `${importBlock}${createBody(componentLabel)}`

      await fs.writeFile(testPath, content)
    }),
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
