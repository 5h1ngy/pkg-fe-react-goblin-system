import styled from "styled-components"

import { getIntentColor } from '../shared/intentColor'
import type { LinkProps } from './Link.types'

export const LinkRoot = styled.a<{ $color: LinkProps['color']; $underline: LinkProps['underline'] }>`
  color: ${({ theme, $color }) => getIntentColor(theme, $color ?? 'primary').main};
  text-decoration: ${({ $underline }) => ($underline === 'always' ? 'underline' : 'none')};

  &:hover {
    text-decoration: ${({ $underline }) => ($underline === 'none' ? 'none' : 'underline')};
  }
`
