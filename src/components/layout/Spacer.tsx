/**
 * Spacer component
 * Creates empty space between components with configurable size and orientation
 * Styled according to Ant Design principles with modern aesthetics
 * 
 * @module Spacer
 */
import styled from 'styled-components';

export interface SpacerProps {
  /** Size of the spacer (can use any CSS unit) */
  size?: string;
  /** Horizontal orientation if true, vertical if false */
  horizontal?: boolean;
  /** Apply flex grow to fill available space */
  grow?: boolean;
}

/**
 * Spacer component for creating consistent spacing between elements
 * 
 * Features:
 * - Configurable size
 * - Horizontal or vertical orientation
 * - Option to grow and fill available space
 * - Follows Ant Design 2025 spacing standards
 */
const Spacer = styled.div<SpacerProps>`
  display: block;
  transition: all 0.3s ease;
  ${props => props.horizontal
    ? `
      display: inline-block;
      width: ${props.size || props.theme.spacing?.md || '1rem'};
      height: 1px;
      min-width: ${props.size || props.theme.spacing?.md || '1rem'};
    `
    : `
      width: 100%;
      height: ${props.size || props.theme.spacing?.md || '1rem'};
      min-height: ${props.size || props.theme.spacing?.md || '1rem'};
    `
  }
  
  /* Flex grow setting */
  ${props => props.grow && `
    flex-grow: 1;
  `}
`;

export default Spacer;
