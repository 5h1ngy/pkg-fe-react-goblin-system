import { describe, expect, it } from 'vitest'

import { darkenHex, getContrastText, lightenHex, normalizeHex, withAlpha } from './color'

describe('color utilities', () => {
  it('normalizes short and long hex values', () => {
    expect(normalizeHex('#fff')).toBe('#ffffff')
    expect(normalizeHex('1677FF')).toBe('#1677ff')
    expect(normalizeHex('')).toBeNull()
    expect(normalizeHex('hello')).toBeNull()
  })

  it('lightens and darkens a color', () => {
    expect(lightenHex('#000000', 0.5)).toBe('#808080')
    expect(darkenHex('#ffffff', 0.5)).toBe('#808080')
  })

  it('derives contrast text for accessibility', () => {
    expect(getContrastText('#ffffff')).toBe('#0b1220')
    expect(getContrastText('#000000')).toBe('#f8fafc')
  })

  it('applies alpha channel to hex and rgb colors', () => {
    expect(withAlpha('#1677ff', 0.5)).toBe('rgba(22, 119, 255, 0.5)')
    expect(withAlpha('rgb(0, 0, 0)', 0.25)).toBe('rgba(0, 0, 0, 0.25)')
    expect(withAlpha('transparent', 0.2)).toBe('transparent')
  })
})
