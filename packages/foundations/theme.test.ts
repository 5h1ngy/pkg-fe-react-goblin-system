import { describe, expect, it } from 'vitest'

import { createGoblinTheme } from './theme'

describe('createGoblinTheme', () => {
  it('returns a light theme by default', () => {
    const theme = createGoblinTheme()

    expect(theme.palette.mode).toBe('light')
    expect(theme.spacing(2)).toBe('1.25rem')
    expect(theme.typography.fontFamily).toContain('Inter')
  })

  it('merges palette overrides and computes contrast colors', () => {
    const theme = createGoblinTheme({
      palette: {
        mode: 'dark',
        secondary: { main: '#39ff14' },
      },
    })

    expect(theme.palette.mode).toBe('dark')
    expect(theme.palette.secondary.main).toBe('#39ff14')
    expect(theme.palette.secondary.contrastText).toBe('#0b1220')
  })

  it('creates transitions helper with defaults', () => {
    const theme = createGoblinTheme()
    const transition = theme.transitions.create('opacity')

    expect(transition).toContain('opacity')
    expect(transition).toContain(`${theme.transitions.duration.standard}ms`)
  })
})
