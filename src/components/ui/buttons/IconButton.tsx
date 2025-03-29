/**
 * IconButton component
 * A button designed specifically for icons without text
 * 
 * @module IconButton
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonVariant } from './Button';

export type IconButtonSize = 'small' | 'medium' | 'large';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display */
  icon: React.ReactNode;
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: IconButtonSize;
  /** Show loading spinner */
  loading?: boolean;
  /** Make button appear disabled */
  disabled?: boolean;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Makes the button circular */
  circular?: boolean;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** Add margin bottom */
  mb?: string;
  /** Add margin top */
  mt?: string;
  /** Add margin left */
  ml?: string;
  /** Add margin right */
  mr?: string;
}

// Size variant styles
const getSizeStyles = (size: IconButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        font-size: ${props => props.theme.typography.fontSize.xs};
        width: 32px;
        height: 32px;
        min-width: 32px;
        min-height: 32px;
      `;
    case 'large':
      return css`
        font-size: ${props => props.theme.typography.fontSize.md};
        width: 48px;
        height: 48px;
        min-width: 48px;
        min-height: 48px;
      `;
    case 'medium':
    default:
      return css`
        font-size: ${props => props.theme.typography.fontSize.sm};
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
      `;
  }
};

// Variant styles
const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border: 1px solid ${props => props.theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: ${props => `${props.theme.colors.primary}dd`};
          border-color: ${props => `${props.theme.colors.primary}dd`};
        }
        
        &:active:not(:disabled) {
          background-color: ${props => `${props.theme.colors.primary}bb`};
          border-color: ${props => `${props.theme.colors.primary}bb`};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${props => props.theme.colors.secondary};
        color: white;
        border: 1px solid ${props => props.theme.colors.secondary};
        
        &:hover:not(:disabled) {
          background-color: ${props => `${props.theme.colors.secondary}dd`};
          border-color: ${props => `${props.theme.colors.secondary}dd`};
        }
        
        &:active:not(:disabled) {
          background-color: ${props => `${props.theme.colors.secondary}bb`};
          border-color: ${props => `${props.theme.colors.secondary}bb`};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.primary};
        
        &:hover:not(:disabled) {
          background-color: ${props => `${props.theme.colors.primary}11`};
        }
        
        &:active:not(:disabled) {
          background-color: ${props => `${props.theme.colors.primary}22`};
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${props => `${props.theme.colors.primary}11`};
        }
        
        &:active:not(:disabled) {
          background-color: ${props => `${props.theme.colors.primary}22`};
        }
      `;
    case 'link':
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
        border: none;
        padding: 0;
        height: auto;
        text-decoration: none;
        
        &:hover:not(:disabled) {
          text-decoration: underline;
        }
      `;
    default:
      return '';
  }
};

/**
 * Base styled IconButton component
 */
const StyledIconButton = styled.button<Omit<IconButtonProps, 'icon'>>`
  /* Base button styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: none;
  border-radius: ${props => props.circular ? '50%' : props.theme.radii.md};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0;
  
  /* Size variants */
  ${props => getSizeStyles(props.size || 'medium')}
  
  /* Style variants */
  ${props => getVariantStyles(props.variant || 'primary')}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Margin */
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
  
  /* Loading state */
  ${props => props.loading && css`
    pointer-events: none;
    opacity: 0.7;
    
    &::before {
      content: '';
      position: absolute;
      left: calc(50% - 0.75em);
      top: calc(50% - 0.75em);
      display: block;
      width: 1.5em;
      height: 1.5em;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.75s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Hide content when loading */
    & > * {
      visibility: hidden;
    }
  `}
  
  /* Icon styles */
  & > svg {
    width: 1em;
    height: 1em;
  }
`;

/**
 * IconButton component for displaying button with only an icon
 * 
 * Features:
 * - Multiple style variants (primary, secondary, outline, text, link)
 * - Three size options (small, medium, large)
 * - Loading state
 * - Disabled state
 * - Circular or square shape
 */
const IconButton: React.FC<IconButtonProps> = ({ 
  icon,
  type = 'button',
  disabled = false,
  loading = false,
  'aria-label': ariaLabel,
  ...rest 
}) => {
  // Ensure icon button has an accessible name
  if (!ariaLabel) {
    console.warn('IconButton: You should provide an aria-label prop for accessibility');
  }
  
  return (
    <StyledIconButton
      type={type}
      disabled={disabled || loading}
      loading={loading}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
