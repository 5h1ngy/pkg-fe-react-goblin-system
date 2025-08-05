import { Children, Fragment, ReactElement, cloneElement, forwardRef, isValidElement } from 'react'

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { StackRoot } from './Stack.style'
import type { StackProps } from './Stack.types'

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { direction = 'column', spacing = 0, divider, alignItems, justifyContent, sx, style, children, ...rest },
  ref,
) {
  const theme = useMaterialTheme()
  const gapValue = theme.spacing(spacing)
  const resolvedStyle = resolveSx(theme, sx, style)

  const items = Children.toArray(children)
  const content =
    divider && items.length > 1
      ? items.flatMap((child, index) => {
          if (index === items.length - 1) {
            return child
          }

          const dividerNode =
            isValidElement(divider) && !(divider as ReactElement).key
              ? cloneElement(divider as ReactElement, { key: `divider-${index}` })
              : divider

          return [
            child,
            <Fragment key={`stack-divider-${index}`}>{dividerNode}</Fragment>,
          ]
        })
      : children

  return (
    <StackRoot
      ref={ref}
      $direction={direction}
      $gap={gapValue}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      style={resolvedStyle}
      {...rest}
    >
      {content}
    </StackRoot>
  )
})

Stack.displayName = 'Stack'
