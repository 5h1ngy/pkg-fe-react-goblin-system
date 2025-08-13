const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const isHex = (value: string): boolean => /^#?[0-9a-f]{3,8}$/i.test(value.trim())

const expandHex = (value: string): string => {
  const hex = value.trim().replace(/^#/, '')
  if (hex.length === 3) {
    return hex
      .split('')
      .map((char) => char.repeat(2))
      .join('')
      .toLowerCase()
  }
  if (hex.length === 6) {
    return hex.toLowerCase()
  }
  if (hex.length === 8) {
    return hex.slice(0, 6).toLowerCase()
  }
  return hex.toLowerCase()
}

const hexChannel = (value: string, start: number, end: number): number =>
  parseInt(value.slice(start, end), 16)

const parseRgb = (value: string): [number, number, number] | null => {
  const match = value
    .replace(/\s+/g, '')
    .match(/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(?:0|1|0?\.\d+))?\)$/i)
  if (!match) {
    return null
  }
  const [, r, g, b] = match
  return [Number(r), Number(g), Number(b)]
}

export const withAlpha = (color: string, alpha: number): string => {
  const value = color.trim()
  const normalizedAlpha = clamp(alpha, 0, 1)

  if (isHex(value)) {
    const hex = expandHex(value)
    if (hex.length >= 6) {
      const r = hexChannel(hex, 0, 2)
      const g = hexChannel(hex, 2, 4)
      const b = hexChannel(hex, 4, 6)
      return `rgba(${r}, ${g}, ${b}, ${normalizedAlpha})`
    }
  }

  if (value.startsWith('rgb')) {
    const channels = parseRgb(value)
    if (channels) {
      const [r, g, b] = channels.map((channel) => clamp(channel, 0, 255))
      return `rgba(${r}, ${g}, ${b}, ${normalizedAlpha})`
    }
  }

  return value
}

export const blendWithBackground = (foreground: string, background: string, ratio: number): string => {
  const fg = parseRgb(withAlpha(foreground, 1)) ?? parseRgb(foreground) ?? [0, 0, 0]
  const bg = parseRgb(withAlpha(background, 1)) ?? parseRgb(background) ?? [0, 0, 0]
  const clampRatio = clamp(ratio, 0, 1)
  const mixed = fg.map((channel, index) =>
    Math.round(channel * clampRatio + bg[index] * (1 - clampRatio)),
  )
  return `rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`
}
