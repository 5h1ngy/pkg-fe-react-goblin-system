/**
 * Button component
 * A versatile button component with various styles and states
 * Designed according to Ant Design principles
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
        font-size: ${props => props.theme.typography?.fontSize?.xs || '12px'};
        padding: ${props => props.theme.spacing?.xs || '4px'} ${props => props.theme.spacing?.sm || '8px'};
        height: 32px;
      `;
    case 'large':
      return css`
        font-size: ${props => props.theme.typography?.fontSize?.md || '16px'};
        padding: ${props => props.theme.spacing?.sm || '8px'} ${props => props.theme.spacing?.md || '16px'};
        height: 48px;
      `;
    case 'medium':
    default:
      return css`
        font-size: ${props => props.theme.typography?.fontSize?.sm || '14px'};
        padding: ${props => props.theme.spacing?.sm || '8px'} ${props => props.theme.spacing?.md || '16px'};
        height: 40px;
      `;
  }
};

// Variant styles
const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${props => props.theme.colors?.primary || '#1890ff'};
        color: ${props => props.theme.colors?.white || '#ffffff'};
        border: 1px solid ${props => props.theme.colors?.primary || '#1890ff'};
        
        &:hover:not(:disabled) {
          background-color: ${props => props.theme.colors?.primaryHover || '#40a9ff'};
          border-color: ${props => props.theme.colors?.primaryHover || '#40a9ff'};
        }
        
        &:active:not(:disabled) {
          background-color: ${props => props.theme.colors?.primaryActive || '#096dd9'};
          border-color: ${props => props.theme.colors?.primaryActive || '#096dd9'};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${props => props.theme.colors?.secondary || '#7c4dff'};
        color: ${props => props.theme.colors?.white || '#ffffff'};
        border: 1px solid ${props => props.theme.colors?.secondary || '#7c4dff'};
        
        &:hover:not(:disabled) {
          background-color: ${props => props.theme.colors?.secondaryHover || '#9370ff'};
          border-color: ${props => props.theme.colors?.secondaryHover || '#9370ff'};
        }
        
        &:active:not(:disabled) {
          background-color: ${props => props.theme.colors?.secondaryActive || '#651fff'};
          border-color: ${props => props.theme.colors?.secondaryActive || '#651fff'};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors?.primary || '#1890ff'};
        border: 1px solid ${props => props.theme.colors?.primary || '#1890ff'};
        
        &:hover:not(:disabled) {
          color: ${props => props.theme.colors?.primaryHover || '#40a9ff'};
          border-color: ${props => props.theme.colors?.primaryHover || '#40a9ff'};
          background-color: ${props => `${props.theme.colors?.primary || '#1890ff'}10`};
        }
        
        &:active:not(:disabled) {
          color: ${props => props.theme.colors?.primaryActive || '#096dd9'};
          border-color: ${props => props.theme.colors?.primaryActive || '#096dd9'};
          background-color: ${props => `${props.theme.colors?.primary || '#1890ff'}20`};
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors?.textPrimary || '#000000'};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${props => props.theme.colors?.bgContainer || '#f5f5f5'};
        }
        
        &:active:not(:disabled) {
          background-color: ${props => props.theme.colors?.bgContainerActive || '#e0e0e0'};
        }
      `;
    case 'link':
      return css`
        background-color: transparent;
        color: ${props => props.theme.colors?.primary || '#1890ff'};
        border: 1px solid transparent;
        padding: 0;
        height: auto;
        
        &:hover:not(:disabled) {
          color: ${props => props.theme.colors?.primaryHover || '#40a9ff'};
          text-decoration: underline;
        }
        
        &:active:not(:disabled) {
          color: ${props => props.theme.colors?.primaryActive || '#096dd9'};
        }
      `;
    default:
      return css``;
  }
};

/**
 * Base styled button component with variants
 */
const StyledButton = styled.button<ButtonProps>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.rounded 
    ? '50px' 
    : props.theme.radii?.md || '6px'
  };
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-family: ${props => props.theme.typography?.fontFamily || 'inherit'};
  font-weight: ${props => props.theme.typography?.fontWeight?.medium || '500'};
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
  
  /* Apply size styles */
  ${props => getSizeStyles(props.size || 'medium')}
  
  /* Apply variant styles */
  ${props => getVariantStyles(props.variant || 'primary')}
  
  /* Block style */
  ${props => props.block && css`
    width: 100%;
    display: flex;
  `}
  
  /* Margin styles */
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }
  
  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.variant === 'primary' || props.variant === 'secondary'
      ? `${props.theme.colors?.white || '#ffffff'}33`
      : `${props.theme.colors?.primary || '#1890ff'}33`
    };
  }
  
  /* Icon spacing */
  .left-icon {
    margin-right: ${props => props.theme.spacing?.xs || '4px'};
  }
  
  .right-icon {
    margin-left: ${props => props.theme.spacing?.xs || '4px'};
  }
  
  /* Loading styles */
  .button-loader {
    margin-right: ${props => props.theme.spacing?.xs || '4px'};
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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
 * - Ant Design styling with modern rounded aesthetics
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
  // Create loader element
  const loader = loading ? (
    <span className="button-loader" aria-hidden="true">
      ◠
    </span>
  ) : null;
  
  // Handle left icon
  const leftIconElement = leftIcon ? (
    <span className="left-icon">
      {leftIcon}
    </span>
  ) : null;
  
  // Handle right icon
  const rightIconElement = rightIcon ? (
    <span className="right-icon">
      {rightIcon}
    </span>
  ) : null;
  
  return (
    <StyledButton
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && loader}
      {!loading && leftIconElement}
      {children}
      {!loading && rightIconElement}
    </StyledButton>
  );
};

export default Button;
