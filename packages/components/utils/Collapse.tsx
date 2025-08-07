import { useEffect, useRef, useState } from "react"

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { CollapseWrapper } from './Collapse.style'
import type { CollapseProps } from './Collapse.types'

export const Collapse = ({ in: inProp = false, timeout = 300, children, sx, style, ...rest }: CollapseProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight)
    }
  }, [children])

  return (
    <CollapseWrapper $in={inProp} $height={height} $timeout={timeout} style={resolvedStyle} {...rest}>
      <div ref={ref}>{children}</div>
    </CollapseWrapper>
  )
}

Collapse.displayName = 'Collapse'
