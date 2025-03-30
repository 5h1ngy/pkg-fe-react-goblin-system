/**
 * Checkbox component
 * A styled checkbox input with label support
 * Designed according to Ant Design principles
 * 
 * @module Checkbox
 */
import React, { forwardRef, useId } from 'react';
import styled, { css } from 'styled-components';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text for the checkbox */
  label?: string | React.ReactNode;
  /** Error state */
  error?: boolean;
  /** Text to show when error is true */
  errorText?: string;
  /** Size of the checkbox */
  size?: 'small' | 'medium' | 'large';
  /** Add margin bottom */
  mb?: string;
  /** Add margin top */
  mt?: string;
  /** Add margin left */
  ml?: string;
  /** Add margin right */
  mr?: string;
  /** Controls checked state */
  checked?: boolean;
  /** Default checked state for uncontrolled components */
  defaultChecked?: boolean;
  /** Indeterminate state (partially checked) */
  indeterminate?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
}

// Size variant styles
const getCheckboxSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        width: 14px;
        height: 14px;
      `;
    case 'large':
      return css`
        width: 20px;
        height: 20px;
      `;
    case 'medium':
    default:
      return css`
        width: 16px;
        height: 16px;
      `;
  }
};

const CheckboxContainer = styled.div<{
  mb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
}>`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const StyledCheckbox = styled.div<{
  checked: boolean;
  disabled: boolean;
  error: boolean;
  indeterminate: boolean;
  size: string;
}>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${props => props.checked || props.indeterminate
    ? props.theme.colors?.primary || '#1890ff'
    : props.theme.colors?.bgElevated || '#ffffff'
  };
  border: 1px solid ${props => props.checked || props.indeterminate
    ? props.theme.colors?.primary || '#1890ff'
    : props.theme.colors?.borderBase || '#d9d9d9'
  };
  border-radius: ${props => props.theme.radii?.sm || '2px'};
  transition: all 0.2s ease-in-out;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  /* Size variant */
  ${props => getCheckboxSizeStyles(props.size)}
  
  /* Error state */
  ${props => props.error && css`
    border-color: ${props => props.theme.colors?.danger || '#ff4d4f'};
  `}
  
  /* Disabled state */
  ${props => props.disabled && css`
    opacity: 0.5;
    background-color: ${props => props.theme.colors?.bgContainer || '#f5f5f5'};
  `}
  
  /* Focus style applied when parent is focused */
  input:focus + & {
    box-shadow: 0 0 0 2px ${props => `${props.theme.colors?.primary || '#1890ff'}33`};
  }
  
  /* Check/indeterminate mark */
  &::after {
    content: '';
    display: ${props => (props.checked || props.indeterminate) ? 'block' : 'none'};
    width: ${props => props.indeterminate ? '8px' : '5px'};
    height: ${props => props.indeterminate ? '2px' : '8px'};
    border-style: solid;
    border-color: white;
    
    ${props => props.indeterminate
      ? css`
          border-width: 0 0 2px 0;
          transform: rotate(0deg);
        `
      : css`
          border-width: 0 2px 2px 0;
          transform: rotate(45deg) translate(-1px, -1px);
        `
    }
  }
`;

const CheckboxLabel = styled.label<{
  disabled: boolean;
  size: string;
}>`
  display: inline-flex;
  align-items: center;
  margin-left: ${props => {
    switch (props.size) {
      case 'small': return '6px';
      case 'large': return '10px';
      default: return '8px';
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return props.theme.typography?.fontSize?.xs || '12px';
      case 'large': return props.theme.typography?.fontSize?.md || '16px';
      default: return props.theme.typography?.fontSize?.sm || '14px';
    }
  }};
  color: ${props => props.disabled 
    ? props.theme.colors?.textDisabled || '#bfbfbf' 
    : props.theme.colors?.textPrimary || '#000000'
  };
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
`;

const ErrorText = styled.div`
  color: ${props => props.theme.colors?.danger || '#ff4d4f'};
  font-size: ${props => props.theme.typography?.fontSize?.xs || '12px'};
  margin-top: ${props => props.theme.spacing?.xs || '4px'};
  margin-left: 24px;
`;

/**
 * Checkbox component for boolean selections
 * 
 * Features:
 * - Multiple size options (small, medium, large)
 * - Error state and message
 * - Indeterminate state support
 * - Accessible labeling
 * - Controlled and uncontrolled modes
 * - Ant Design styling with modern rounded aesthetics
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error = false,
  errorText,
  size = 'medium',
  mb,
  mt,
  ml,
  mr,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  className,
  onChange,
  ...rest
}, ref) => {
  // Generate unique ID for input-label connection
  const id = useId();
  
  // Create a ref that syncs with the forwarded ref
  const handleRef = (element: HTMLInputElement | null) => {
    // Handle the ref (either callback or object)
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
    
    // Set indeterminate prop (not available in HTML attributes)
    if (element) {
      element.indeterminate = indeterminate;
    }
  };
  
  return (
    <div>
      <CheckboxContainer mb={mb} mt={mt} ml={ml} mr={mr} className={className}>
        <HiddenCheckbox
          id={id}
          ref={handleRef}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          {...rest}
        />
        <StyledCheckbox
          checked={!!checked}
          disabled={disabled}
          error={error}
          indeterminate={indeterminate}
          size={size}
        />
        {label && (
          <CheckboxLabel 
            htmlFor={id}
            disabled={disabled}
            size={size}
          >
            {label}
          </CheckboxLabel>
        )}
      </CheckboxContainer>
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
