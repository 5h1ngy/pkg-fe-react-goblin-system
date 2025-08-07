import styled, { css } from "styled-components"

export const ToolbarRoot = styled.div<{ $disableGutters?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: ${({ $disableGutters }) => ($disableGutters ? '0' : '0 16px')};

  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      min-height: 64px;
    }
  `}
`
