import styled, { keyframes } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

const ringStroke = (theme: DefaultTheme) =>
  theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(16, 28, 52, 0.4)'

export const OrbitWrapper = styled.div`
  position: relative;
  width: clamp(280px, 40vw, 440px);
  aspect-ratio: 1;
  margin: 0 auto;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 960px) {
    order: -1;
  }
`

export const OrbitRings = styled.div`
  position: absolute;
  inset: 0;
`

export const OrbitRing = styled.span<{ $size: number }>`
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  border: ${({ theme }) => `2px dashed ${ringStroke(theme)}`};
  opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.7 : 0.5)};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
`

export const OrbitCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(120px, 18vw, 180px);
  height: clamp(120px, 18vw, 180px);
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  border: 2px solid ${({ theme }) => ringStroke(theme)};
  box-shadow: ${({ theme }) => theme.shadows.accent}, inset 0 0 48px ${({ theme }) => theme.colors.accentSoft};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`

const orbitSpin = keyframes`
  0% {
    transform: rotate(var(--orbit-angle)) translateX(var(--orbit-distance));
  }
  100% {
    transform: rotate(calc(var(--orbit-angle) + 360deg)) translateX(var(--orbit-distance));
  }
`

const iconCounterSpin = keyframes`
  0% {
    transform: rotate(var(--orbit-angle-negative));
  }
  100% {
    transform: rotate(calc(var(--orbit-angle-negative) - 360deg));
  }
`

export const OrbitItem = styled.div<{
  $radius: number
  $size: number
  $duration: number
  $delay: number
  $angle: number
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  margin: ${({ $size }) => `-${$size / 2}px`};
  --orbit-distance: ${({ $radius }) => `${$radius}px`};
  --orbit-duration: ${({ $duration }) => `${$duration}s`};
  --orbit-delay: ${({ $delay }) => `${$delay}s`};
  --orbit-angle: ${({ $angle }) => `${$angle}deg`};
  --orbit-angle-negative: ${({ $angle }) => `${-$angle}deg`};
  animation: ${orbitSpin} var(--orbit-duration) linear infinite;
  animation-delay: var(--orbit-delay);
  transform-origin: center;
  will-change: transform;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
  pointer-events: none;
`

export const OrbitIcon = styled.span<{ $duration: number; $delay: number }>`
  display: inline-flex;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  border: 2px solid ${({ theme }) => ringStroke(theme)};
  align-items: center;
  justify-content: center;
  padding: 6px;
  animation: ${iconCounterSpin} ${({ $duration }) => `${$duration}s`} linear infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
  will-change: transform;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`



