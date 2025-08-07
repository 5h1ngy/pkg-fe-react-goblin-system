import styled from "styled-components"

export const DrawerPanel = styled.aside<{
  $anchor: 'left' | 'right'
  $open: boolean
  $width: number
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: ${({ $width }) => $width}px;
  ${({ $anchor }) => ($anchor === 'left' ? 'left: 0;' : 'right: 0;')}
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[4]};
  transform: translateX(
    ${({ $anchor, $open }) => {
      if ($open) return '0';
      return $anchor === 'left' ? '-100%' : '100%';
    }}
  );
  transition: ${({ theme }) => theme.transitions.create(['transform'])};
  z-index: ${({ theme }) => theme.zIndex.drawer};
  display: flex;
  flex-direction: column;
`
