import styled from "styled-components"

import type { TabsProps } from './Tabs.types'

export const TabsRoot = styled.div<{ $variant: TabsProps['variant'] }>`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  overflow-x: ${({ $variant }) => ($variant === 'scrollable' ? 'auto' : 'visible')};
`
