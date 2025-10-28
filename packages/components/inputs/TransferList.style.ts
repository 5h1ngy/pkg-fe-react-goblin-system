import styled from 'styled-components'

export const TransferListContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const TransferListPanel = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 220px;
  min-height: 200px;
  display: flex;
  flex-direction: column;

  ul {
    flex: 1;
    margin: 0;
    padding: 0.5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  li {
    padding: 0.35rem 0.5rem;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    cursor: pointer;

    &.selected {
      background: ${({ theme }) => theme.palette.action?.selected ?? theme.palette.grey[100]};
    }
  }
`
