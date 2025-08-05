import styled from 'styled-components'

interface AvatarStyleProps {
  $variant: 'circular' | 'rounded' | 'square'
}

export const AvatarRoot = styled.div<AvatarStyleProps>`
  width: 40px;
  height: 40px;
  border-radius: ${({ $variant, theme }) =>
    $variant === 'circular' ? '50%' : $variant === 'rounded' ? theme.shape.borderRadius : '0'};
  background: ${({ theme }) => theme.palette.grey[300]};
  color: ${({ theme }) => theme.palette.text.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`
