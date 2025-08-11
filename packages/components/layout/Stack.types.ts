import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react'

import { SxProps } from '../../system'

type StackOwnProps<E extends ElementType = 'div'> = {
  component?: E
  direction?: CSSProperties['flexDirection']
  spacing?: number
  divider?: ReactNode
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  sx?: SxProps
  style?: CSSProperties
}

export type StackProps<E extends ElementType = 'div'> = StackOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof StackOwnProps>

export type StackRef<E extends ElementType> = ComponentPropsWithRef<E>['ref']

export type StackComponent = <E extends ElementType = 'div'>(
  props: StackProps<E> & { ref?: StackRef<E> },
) => ReactElement | null
