import { describe, expect, it } from 'vitest'

import { createGoblinTheme } from '../foundations'

import { mergeSx, resolveSx } from './sx'

const theme = createGoblinTheme({
  palette: {
    mode: 'dark',
  },
})

describe('resolveSx', () => {
  it('returns undefined when sx is not provided', () => {
    expect(resolveSx(theme)).toBeUndefined()
  })

  it('merges object values and normalizes spacing tokens', () => {
    const style = resolveSx(
      theme,
      { padding: 2, backgroundColor: 'red' },
      { borderRadius: '4px' },
    )

    expect(style).toMatchObject({
      padding: theme.spacing(2),
      backgroundColor: 'red',
      borderRadius: '4px',
    })
  })

  it('supports functional resolvers', () => {
    const style = resolveSx(theme, [
      (currentTheme) => ({
        padding: currentTheme.spacing(1),
      }),
      {
        marginTop: 1,
      },
    ])

    expect(style).toMatchObject({
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
    })
  })
})

describe('mergeSx', () => {
  it('filters falsy values and concatenates sx props', () => {
    const merged = mergeSx({ padding: 1 }, null, undefined, { margin: 2 })

    expect(merged).toHaveLength(2)
  })
})
