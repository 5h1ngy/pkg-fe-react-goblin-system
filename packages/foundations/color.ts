const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value))

export const normalizeHex = (value?: string | null): string | null => {
  if (!value) {
    return null
  }

  const trimmed = value.trim()
  if (!trimmed) {
    return null
  }

  const withoutHash = trimmed.replace(/^#/, '')
  if (/^[0-9a-fA-F]{3}$/.test(withoutHash)) {
    return `#${withoutHash
      .split('')
      .map((char) => char.repeat(2))
      .join('')
      .toLowerCase()}`
  }

  if (/^[0-9a-fA-F]{6}$/.test(withoutHash)) {
    return `#${withoutHash.toLowerCase()}`
  }

  if (/^[0-9a-fA-F]{8}$/.test(withoutHash)) {
    return `#${withoutHash.slice(0, 6).toLowerCase()}`
  }

  return null
}

const toHex = (channel: number): string => clamp(channel, 0, 255).toString(16).padStart(2, '0')

const hexToRgb = (value: string): [number, number, number] | null => {
  const normalized = normalizeHex(value)
  if (!normalized) {
    return null
  }

  const hex = normalized.slice(1)
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
    return null
  }

  return [r, g, b]
}

const rgbToHex = (r: number, g: number, b: number): string => `#${toHex(r)}${toHex(g)}${toHex(b)}`

const mixChannel = (channel: number, target: number, amount: number): number =>
  clamp(channel + (target - channel) * amount, 0, 255)

export const lightenHex = (value: string, amount: number): string | null => {
  const rgb = hexToRgb(value)
  if (!rgb) {
    return null
  }

  const [r, g, b] = rgb
  return rgbToHex(mixChannel(r, 255, amount), mixChannel(g, 255, amount), mixChannel(b, 255, amount))
}

export const darkenHex = (value: string, amount: number): string | null => {
  const rgb = hexToRgb(value)
  if (!rgb) {
    return null
  }

  const [r, g, b] = rgb
  return rgbToHex(mixChannel(r, 0, amount), mixChannel(g, 0, amount), mixChannel(b, 0, amount))
}

export const getContrastText = (value: string): string => {
  const rgb = hexToRgb(value)
  if (!rgb) {
    return '#0b1220'
  }

  const [r, g, b] = rgb.map((channel) => clamp(channel, 0, 255))

  const channel = (component: number) => {
    const normalized = component / 255
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4)
  }

  const luminance = 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
  return luminance > 0.45 ? '#0b1220' : '#f8fafc'
}

const RGB_MATCH =
  /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i

const parseRgbString = (value: string): [number, number, number] | null => {
  const match = value.match(RGB_MATCH)
  if (!match) {
    return null
  }

  const [, r, g, b] = match.map((part) => Number(part))
  if ([r, g, b].some((component) => Number.isNaN(component))) {
    return null
  }

  return [r, g, b]
}

export const withAlpha = (value: string, alpha: number): string => {
  const normalizedAlpha = clamp(alpha, 0, 1)
  const normalizedHex = normalizeHex(value)
  if (normalizedHex) {
    const [r, g, b] = hexToRgb(normalizedHex) ?? [0, 0, 0]
    return `rgba(${r}, ${g}, ${b}, ${normalizedAlpha})`
  }

  const rgb = parseRgbString(value)
  if (rgb) {
    const [r, g, b] = rgb
    return `rgba(${clamp(r, 0, 255)}, ${clamp(g, 0, 255)}, ${clamp(b, 0, 255)}, ${normalizedAlpha})`
  }

  return value
}
