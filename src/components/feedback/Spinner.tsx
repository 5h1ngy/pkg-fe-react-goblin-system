/**
 * Spinner component
 * A loading indicator with customizable size and color
 * Styled according to Ant Design principles with modern aesthetics
 * 
 * @module Spinner
 */
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export type SpinnerSize = 'small' | 'medium' | 'large' | number;
export type SpinnerType = 'border' | 'grow' | 'dots';

export interface SpinnerProps {
  /** Size of the spinner */
  size?: SpinnerSize;
  /** Type of spinner animation */
  type?: SpinnerType;
  /** Color of the spinner */
  color?: string;
  /** Label for screen readers */
  label?: string;
  /** Center the spinner in its container */
  centered?: boolean;
  /** Add margin bottom */
  mb?: string;
  /** Add margin top */
  mt?: string;
  /** Add margin left */
  ml?: string;
  /** Add margin right */
  mr?: string;
  /** Additional CSS class */
  className?: string;
}

// Animation keyframes
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const grow = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

// Get size in pixels
const getSize = (size: SpinnerSize): number => {
  if (typeof size === 'number') return size;
  
  switch (size) {
    case 'small': return 16;
    case 'large': return 40;
    case 'medium':
    default: return 24;
  }
};

// Get color from theme or use custom color
const getColor = (color: string | undefined, theme: any): string => {
  if (!color) return theme.colors?.primary || '#1890ff';
  
  // Check if the color is a theme color and theme exists
  if (theme.colors && theme.colors[color as keyof typeof theme.colors]) {
    return theme.colors[color as keyof typeof theme.colors];
  }
  
  // Fallback colors for common names
  const fallbackColors: Record<string, string> = {
    primary: '#1890ff',
    secondary: '#7c4dff',
    success: '#52c41a',
    danger: '#ff4d4f',
    warning: '#faad14',
    info: '#1890ff'
  };
  
  // Return the custom color or fallback if available
  return fallbackColors[color] || color;
};

// Styled container component
const SpinnerContainer = styled.div<{
  $centered?: boolean;
  mb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
}>`
  display: inline-block;
  position: relative;
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
  transition: all 0.3s ease-in-out;
  
  ${props => props.$centered && css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `}
`;

// Border spinner (the classic rotating border style)
const BorderSpinner = styled.div<{
  size: SpinnerSize;
  color?: string;
}>`
  display: inline-block;
  width: ${props => `${getSize(props.size)}px`};
  height: ${props => `${getSize(props.size)}px`};
  border: ${props => `${getSize(props.size) / 8}px solid`};
  border-color: ${props => getColor(props.color, props.theme)};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

// Grow spinner (pulsing circle style)
const GrowSpinner = styled.div<{
  size: SpinnerSize;
  color?: string;
}>`
  display: inline-block;
  width: ${props => `${getSize(props.size)}px`};
  height: ${props => `${getSize(props.size)}px`};
  background-color: ${props => getColor(props.color, props.theme)};
  border-radius: 50%;
  animation: ${grow} 1s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

// Dots spinner (three bouncing dots)
const DotsContainer = styled.div<{
  size: SpinnerSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => `${getSize(props.size) * 3.5}px`};
  height: ${props => `${getSize(props.size)}px`};
`;

const Dot = styled.div<{
  size: SpinnerSize;
  color?: string;
  index: number;
}>`
  width: ${props => `${getSize(props.size) / 2}px`};
  height: ${props => `${getSize(props.size) / 2}px`};
  margin: 0 ${props => `${getSize(props.size) / 4}px`};
  background-color: ${props => getColor(props.color, props.theme)};
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${props => `${props.index * 0.16}s`};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`;

// Hidden text for screen readers
const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

/**
 * Spinner component for indicating loading states
 * 
 * Features:
 * - Multiple sizes (small, medium, large, custom)
 * - Multiple animation types (border, grow, dots)
 * - Custom color support
 * - Accessible labeling
 * - Centered positioning option
 * - Ant Design styling with modern rounded aesthetics
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  type = 'border',
  color,
  label = 'Loading...',
  centered = false,
  mb,
  mt,
  ml,
  mr,
  className,
  ...rest
}) => {
  return (
    <SpinnerContainer
      $centered={centered}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      className={className}
      role="status"
      {...rest}
    >
      {type === 'border' && (
        <BorderSpinner size={size} color={color} />
      )}
      
      {type === 'grow' && (
        <GrowSpinner size={size} color={color} />
      )}
      
      {type === 'dots' && (
        <DotsContainer size={size}>
          <Dot size={size} color={color} index={0} />
          <Dot size={size} color={color} index={1} />
          <Dot size={size} color={color} index={2} />
        </DotsContainer>
      )}
      
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
    </SpinnerContainer>
  );
};

export default Spinner;
