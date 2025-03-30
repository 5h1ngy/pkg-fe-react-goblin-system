/**
 * Button component
 * A versatile button component with various styles and states
 * 
 * @module Button
 */
import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Set button to full width of container */
  block?: boolean;
  /** Show loading spinner */
  loading?: boolean;
  /** Make button appear disabled */
  disabled?: boolean;
  /** Icon to display before button text */
  leftIcon?: React.ReactNode;
  /** Icon to display after button text */
  rightIcon?: React.ReactNode;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Makes button have a rounded shape */
  rounded?: boolean;
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
const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        font-size: ${props => props.theme.typography.fontSize.xs};
        padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
        height: 32px;
      `;
    case 'large':
      return css`
        font-size: ${props => props.theme.typography.fontSize.md};
        padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
        height: 48px;
      `;
    case 'medium':
    default:
      return css`
        font-size: ${props => props.theme.typography.fontSize.sm};
        padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
        height: 40px;
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
 * Base styled button component with variants
 */
const StyledButton = styled.button<ButtonProps>`
  /* Base button styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: none;
  white-space: nowrap;
  text-align: center;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  border-radius: ${props => props.rounded ? '9999px' : props.theme.radii.md};
  cursor: pointer;
  line-height: 1.5;
  width: ${props => (props.block ? '100%' : 'auto')};
  
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
  
  /* Icon spacing */
  & > svg:first-child:not(:last-child) {
    margin-right: ${props => props.theme.spacing.xs};
  }
  
  & > svg:last-child:not(:first-child) {
    margin-left: ${props => props.theme.spacing.xs};
  }
  
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
`;

/**
 * Button component with various style options
 * 
 * Features:
 * - Multiple style variants (primary, secondary, outline, text, link)
 * - Three size options (small, medium, large)
 * - Loading state
 * - Disabled state
 * - Block (full-width) option
 * - Left and right icon support
 */
const Button: React.FC<ButtonProps> = ({ 
  children, 
  leftIcon, 
  rightIcon, 
  type = 'button',
  disabled = false,
  loading = false,
  ...rest 
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled || loading}
      loading={loading}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

export default Button;
