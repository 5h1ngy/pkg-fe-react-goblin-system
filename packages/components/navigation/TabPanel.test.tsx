import { describe, expect, it } from 'vitest'

import { renderWithTheme } from '../../test-utils/renderWithTheme'
import { TabsContext } from './Tabs.context'
import { TabPanel } from './TabPanel'

const createContextValue = (value: string | number) => ({
  value,
  onChange: () => undefined,
  variant: 'standard' as const,
})

describe('TabPanel', () => {
  it('renders children when value matches the active tab', () => {
    const { getByText } = renderWithTheme(
      <TabsContext.Provider value={createContextValue('one')}>
        <TabPanel value="one">Visible content</TabPanel>
      </TabsContext.Provider>,
    )

    const element = getByText('Visible content')
    expect(element).toBeTruthy()
  })

  it('returns null when value does not match and hidden flag is truthy', () => {
    const { queryByText } = renderWithTheme(
      <TabsContext.Provider value={createContextValue('two')}>
        <TabPanel value="one">Hidden content</TabPanel>
      </TabsContext.Provider>,
    )

    expect(queryByText('Hidden content')).toBeNull()
  })

  it('keeps content in the DOM when hidden is explicitly false', () => {
    const { getByText } = renderWithTheme(
      <TabsContext.Provider value={createContextValue('two')}>
        <TabPanel value="one" hidden={false}>
          Accessible content
        </TabPanel>
      </TabsContext.Provider>,
    )

    const element = getByText('Accessible content')
    expect(element).toBeTruthy()
    expect(element.hasAttribute('hidden')).toBe(false)
  })
})
