/**
 * Toaster component
 * Displays toast notifications in the application
 * 
 * @module Toaster
 */
import React from 'react';
import styled from 'styled-components';

export interface ToasterProps {
  /** Optional custom position */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** Optional custom z-index */
  zIndex?: number;
  /** Additional CSS class */
  className?: string;
}

const ToasterContainer = styled.div<{
  position: ToasterProps['position'];
  zIndex: number;
}>`
  position: fixed;
  z-index: ${props => props.zIndex};
  display: flex;
  flex-direction: column;
  pointer-events: none;
  
  ${props => {
    switch (props.position) {
      case 'top-left':
        return `
          top: 1rem;
          left: 1rem;
          align-items: flex-start;
        `;
      case 'top-center':
        return `
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;
      case 'bottom-left':
        return `
          bottom: 1rem;
          left: 1rem;
          align-items: flex-start;
        `;
      case 'bottom-right':
        return `
          bottom: 1rem;
          right: 1rem;
          align-items: flex-end;
        `;
      case 'bottom-center':
        return `
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;
      case 'top-right':
      default:
        return `
          top: 1rem;
          right: 1rem;
          align-items: flex-end;
        `;
    }
  }}
  
  > * {
    margin-bottom: 0.5rem;
    pointer-events: auto;
  }
`;

/**
 * Toaster component for displaying toast notifications
 * 
 * Features:
 * - Customizable position
 * - Stacked notifications
 * - Non-intrusive design
 */
export const Toaster: React.FC<ToasterProps> = ({
  position = 'top-right',
  zIndex = 9999,
  className
}) => {
  // In un'implementazione reale, qui gestiremmo lo stato delle notifiche
  // Per ora è solo un contenitore vuoto
  return (
    <ToasterContainer 
      position={position} 
      zIndex={zIndex} 
      className={className}
    />
  );
};

export default Toaster;
