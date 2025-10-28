import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
  CSSProperties,
} from 'react'

import { SxProps } from '../../system'

type BoxOwnProps<E extends ElementType = 'div'> = {
  component?: E
  sx?: SxProps
  style?: CSSProperties
}

export type BoxProps<E extends ElementType = 'div'> = BoxOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof BoxOwnProps>

export type BoxRef<E extends ElementType> = ComponentPropsWithRef<E>['ref']

export type BoxComponent = <E extends ElementType = 'div'>(
  props: BoxProps<E> & { ref?: BoxRef<E> },
) => ReactElement | null
