import { describe, expect, it, vi } from 'vitest'
import type { MouseEvent } from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '../../test-utils/renderWithTheme'
import { Tabs } from './Tabs'
import { Tab } from './Tab'
import type { TabsValue } from './Tabs.context'

const renderTabsExample = (
  onChange?: (event: MouseEvent<HTMLElement>, value: TabsValue) => void,
) =>
  renderWithTheme(
    <Tabs defaultValue="one" onChange={onChange}>
      <Tab value="one" label="First" />
      <Tab value="two" label="Second" />
    </Tabs>,
  )

describe('Tabs', () => {
  it('renders tabs with the first item selected by default', () => {
    renderTabsExample()

    const firstTab = screen.getByRole('tab', { name: /first/i })
    const secondTab = screen.getByRole('tab', { name: /second/i })

    expect(firstTab.getAttribute('aria-selected')).toBe('true')
    expect(secondTab.getAttribute('aria-selected')).toBe('false')
  })

  it('invokes onChange when a different tab is selected', () => {
    const handleChange = vi.fn()

    renderTabsExample(handleChange)

    const secondTab = screen.getByRole('tab', { name: /second/i })
    fireEvent.click(secondTab)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange.mock.calls[0][1]).toBe('two')
  })

  it('updates the selected tab when clicked', () => {
    renderTabsExample()

    const secondTab = screen.getByRole('tab', { name: /second/i })
    fireEvent.click(secondTab)

    expect(secondTab.getAttribute('aria-selected')).toBe('true')
  })
})
