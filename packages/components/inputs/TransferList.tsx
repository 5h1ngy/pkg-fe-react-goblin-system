import { useState } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { Button } from './Button'
import { TransferListContainer, TransferListPanel } from './TransferList.style'
import type { TransferListItem, TransferListProps } from './TransferList.types'

export const TransferList = ({ left, right, onChange, sx }: TransferListProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx)
  const [leftItems, setLeft] = useState(left)
  const [rightItems, setRight] = useState(right)
  const [selectedLeft, setSelectedLeft] = useState<Set<string>>(new Set())
  const [selectedRight, setSelectedRight] = useState<Set<string>>(new Set())

  const move = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      const moving = leftItems.filter((item) => selectedLeft.has(item.value))
      const remaining = leftItems.filter((item) => !selectedLeft.has(item.value))
      const mergedRight = [...rightItems, ...moving]
      setLeft(remaining)
      setRight(mergedRight)
      setSelectedLeft(new Set())
      onChange?.(remaining, mergedRight)
    } else {
      const moving = rightItems.filter((item) => selectedRight.has(item.value))
      const remaining = rightItems.filter((item) => !selectedRight.has(item.value))
      const mergedLeft = [...leftItems, ...moving]
      setRight(remaining)
      setLeft(mergedLeft)
      setSelectedRight(new Set())
      onChange?.(mergedLeft, remaining)
    }
  }

  const toggleSelection = (set: Set<string>, setter: (set: Set<string>) => void, value: string) => {
    const next = new Set(set)
    if (next.has(value)) {
      next.delete(value)
    } else {
      next.add(value)
    }
    setter(next)
  }

  const renderList = (
    items: TransferListItem[],
    selected: Set<string>,
    setter: (set: Set<string>) => void,
  ) => (
    <ul>
      {items.map((item) => (
        <li
          key={item.value}
          className={selected.has(item.value) ? 'selected' : undefined}
          onClick={() => toggleSelection(selected, setter, item.value)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  )

  return (
    <TransferListContainer style={resolvedStyle}>
      <TransferListPanel>
        <strong style={{ padding: '0.5rem 0.75rem' }}>Available</strong>
        {renderList(leftItems, selectedLeft, setSelectedLeft)}
      </TransferListPanel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Button variant="contained" onClick={() => move('right')}>
          &gt;
        </Button>
        <Button variant="contained" onClick={() => move('left')}>
          &lt;
        </Button>
      </div>
      <TransferListPanel>
        <strong style={{ padding: '0.5rem 0.75rem' }}>Chosen</strong>
        {renderList(rightItems, selectedRight, setSelectedRight)}
      </TransferListPanel>
    </TransferListContainer>
  )
}

TransferList.displayName = 'TransferList'
