import { forwardRef, useState } from 'react'

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { SliderTrack } from './Slider.style'
import type { SliderProps } from './Slider.types'

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { sx, style, valueLabelDisplay = 'auto', ...rest },
  ref,
) {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const [hover, setHover] = useState(false)

  return (
    <div style={resolvedStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <SliderTrack type="range" ref={ref} {...rest} />
      {valueLabelDisplay !== 'off' && hover && <small>{rest.value}</small>}
    </div>
  )
})

Slider.displayName = 'Slider'
