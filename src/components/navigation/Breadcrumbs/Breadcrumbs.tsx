import { Children } from "react"

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { BreadcrumbsRoot } from './Breadcrumbs.style'
import type { BreadcrumbsProps } from './Breadcrumbs.types'

export const Breadcrumbs = ({ separator = '/', children, sx, style, ...rest }: BreadcrumbsProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const items = Children.toArray(children)

  return (
    <BreadcrumbsRoot aria-label="breadcrumb" style={resolvedStyle} {...rest}>
      {items.map((item, index) => (
        <span key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          {item}
          {index < items.length - 1 && <span>{separator}</span>}
        </span>
      ))}
    </BreadcrumbsRoot>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'
