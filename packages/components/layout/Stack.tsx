import {
  Children,
  Fragment,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  type ElementType,
  type ForwardRefRenderFunction,
} from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { StackRoot } from './Stack.style'
import type { StackComponent, StackProps, StackRef } from './Stack.types'

function InnerStack<E extends ElementType = 'div'>(
  {
    component,
    direction = 'column',
    spacing = 0,
    divider,
    alignItems,
    justifyContent,
    sx,
    style,
    children,
    ...rest
  }: StackProps<E>,
  ref: StackRef<E>,
) {
  const Component = component ?? ('div' as ElementType)
  const theme = useGoblinTheme()
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

          return [child, <Fragment key={`stack-divider-${index}`}>{dividerNode}</Fragment>]
        })
      : children

  return (
    <StackRoot
      as={Component}
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
}

export const Stack = forwardRef(
  InnerStack as unknown as ForwardRefRenderFunction<unknown>,
) as StackComponent & { displayName?: string }

Stack.displayName = 'Stack'
