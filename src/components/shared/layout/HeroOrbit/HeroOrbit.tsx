import type { ReactNode } from 'react'

import { OrbitCore, OrbitHalo, OrbitItem, OrbitLabel, OrbitRing, OrbitRoot } from './HeroOrbit.style'

const RING_RADII = [62, 82, 95]
const RING_DISTANCE = [28, 38, 48]

export interface HeroOrbitItem {
  icon: ReactNode
  label: string
  ring?: 0 | 1 | 2
  angle?: number
}

export interface HeroOrbitProps {
  center: ReactNode
  accentColor?: string
  items: HeroOrbitItem[]
}

export const HeroOrbit = ({ center, accentColor = '#ffb422', items }: HeroOrbitProps) => {
  const computed = items.map((item, index) => {
    const total = items.length
    const ringIndex = item.ring ?? (index % RING_DISTANCE.length)
    const angleDeg = item.angle ?? (index / total) * 360
    const radius = RING_DISTANCE[ringIndex]
    const radians = (angleDeg * Math.PI) / 180
    const left = 50 + radius * Math.cos(radians)
    const top = 50 + radius * Math.sin(radians)

    return {
      ...item,
      top,
      left,
    }
  })

  return (
    <OrbitRoot>
      {RING_RADII.map((size, index) => (
        <OrbitRing key={size} $size={size} style={{ opacity: 0.7 - index * 0.15 }} />
      ))}
      <OrbitHalo $accent={accentColor} />
      <OrbitCore $accent={accentColor}>
        {center}
        <OrbitLabel>Focus</OrbitLabel>
      </OrbitCore>

      {computed.map((item, index) => (
        <OrbitItem key={`${item.label}-${index}`} $top={item.top} $left={item.left} aria-label={item.label}>
          {item.icon}
        </OrbitItem>
      ))}
    </OrbitRoot>
  )
}
