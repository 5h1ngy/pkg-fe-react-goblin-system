import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    opacity: 0.55;
    transform: scale(0.9);
  }
  70% {
    opacity: 0;
    transform: scale(1.35);
  }
  100% {
    opacity: 0;
    transform: scale(1.45);
  }
`

export const OrbitRoot = styled.div`
  position: relative;
  width: clamp(240px, 35vw, 380px);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OrbitCore = styled.div<{ $accent: string }>`
  position: relative;
  width: 45%;
  aspect-ratio: 1;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 2px solid ${({ theme }) => theme.colors.accentOutline};
  box-shadow: ${({ theme }) => theme.shadows.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 15%;
    border-radius: inherit;
    background: ${({ $accent }) => $accent};
    filter: blur(30px);
    opacity: 0.45;
  }
`

export const OrbitHalo = styled.span<{ $accent: string }>`
  position: absolute;
  width: 80%;
  aspect-ratio: 1;
  border-radius: 999px;
  background: ${({ $accent }) => $accent};
  filter: blur(40px);
  opacity: 0.28;
  animation: ${pulse} 4s ease-out infinite;
`

export const OrbitRing = styled.span<{ $size: number }>`
  position: absolute;
  width: ${({ $size }) => `${$size}%`};
  aspect-ratio: 1;
  border-radius: 999px;
  border: 1px dashed ${({ theme }) => theme.colors.accentOutlineMuted};
  opacity: 0.7;
`

export const OrbitItem = styled.span<{ $top: number; $left: number }>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  transform: translate(-50%, -50%);
  width: 54px;
  height: 54px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.85rem;
`

export const OrbitLabel = styled.span`
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`
