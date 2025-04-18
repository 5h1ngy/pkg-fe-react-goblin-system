/**
 * Select component
 * A styled select dropdown component
 * Designed according to Ant Design principles
 * 
 * @module Select
 */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  /** Option value */
  value: string | number;
  /** Option label to display */
  label: string;
  /** Disables this option */
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Options to display in the select dropdown */
  options: SelectOption[];
  /** Select size variant */
  size?: SelectSize;
  /** Shows error styling */
  error?: boolean;
  /** Success state styling */
  success?: boolean;
  /** Text to show when error is true */
  errorText?: string;
  /** Makes select take full width of container */
  fullWidth?: boolean;
  /** Add margin bottom */
  mb?: string;
  /** Add margin top */
  mt?: string;
  /** Add margin left */
  ml?: string;
  /** Add margin right */
  mr?: string;
  /** Disables the select */
  disabled?: boolean;
  /** Makes the select read-only */
  readOnly?: boolean;
  /** If true, shows a required asterisk */
  required?: boolean;
  /** Label for the select */
  label?: string;
  /** Placeholder text (shown as first disabled option) */
  placeholder?: string;
}

// Size variant styles
const getSelectSizeStyles = (size: SelectSize) => {
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
        padding: ${props => props.theme.spacing?.sm || '8px'} ${props => props.theme.spacing?.lg || '24px'};
        height: 48px;
      `;
    case 'medium':
    default:
      return css`
        font-size: ${props => props.theme.typography?.fontSize?.sm || '14px'};
        padding: ${props => props.theme.spacing?.xs || '4px'} ${props => props.theme.spacing?.md || '16px'};
        height: 40px;
      `;
  }
};

const SelectWrapper = styled.div<{ fullWidth?: boolean; mb?: string; mt?: string; ml?: string; mr?: string }>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
`;

const SelectLabel = styled.label<{ required?: boolean }>`
  display: block;
  margin-bottom: ${props => props.theme.spacing?.xs || '4px'};
  font-size: ${props => props.theme.typography?.fontSize?.sm || '14px'};
  font-weight: ${props => props.theme.typography?.fontWeight?.medium || '500'};
  color: ${props => props.theme.colors?.textPrimary || '#000000'};
  
  ${props => props.required && css`
    &::after {
      content: '*';
      color: ${props => props.theme.colors?.danger || '#ff4d4f'};
      margin-left: ${props => props.theme.spacing?.xs || '4px'};
    }
  `}
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  
  /* Custom arrow indicator for select */
  &::after {
    content: '';
    position: absolute;
    right: ${props => props.theme.spacing?.md || '16px'};
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${props => props.theme.colors?.textSecondary || '#8c8c8c'};
    pointer-events: none;
  }
`;

const StyledSelect = styled.select<Omit<SelectProps, 'options' | 'errorText' | 'label' | 'placeholder'>>`
  /* Base styles */
  display: block;
  width: 100%;
  appearance: none;
  border-radius: ${props => props.theme.radii?.md || '6px'};
  border: 1px solid ${props => props.theme.colors?.borderBase || '#d9d9d9'};
  background-color: ${props => props.theme.colors?.bgElevated || '#ffffff'};
  color: ${props => props.theme.colors?.textPrimary || '#000000'};
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  padding-right: ${props => props.theme.spacing?.xl || '32px'}; /* Space for custom arrow */
  
  /* Size variants */
  ${props => getSelectSizeStyles(props.size || 'medium')}
  
  /* Focus state */
  &:focus {
    border-color: ${props => props.theme.colors?.primary || '#1890ff'};
    box-shadow: 0 0 0 2px ${props => `${props.theme.colors?.primary || '#1890ff'}33`};
  }
  
  /* Error state */
  ${props => props.error && css`
    border-color: ${props => props.theme.colors?.danger || '#ff4d4f'};
    
    &:focus {
      box-shadow: 0 0 0 2px ${props => `${props.theme.colors?.danger || '#ff4d4f'}33`};
    }
  `}
  
  /* Success state */
  ${props => props.success && css`
    border-color: ${props => props.theme.colors?.success || '#52c41a'};
    
    &:focus {
      box-shadow: 0 0 0 2px ${props => `${props.theme.colors?.success || '#52c41a'}33`};
    }
  `}
  
  /* Disabled state */
  &:disabled {
    background-color: ${props => props.theme.colors?.bgContainer || '#f5f5f5'};
    border-color: ${props => props.theme.colors?.borderLight || '#e8e8e8'};
    color: ${props => props.theme.colors?.textDisabled || '#bfbfbf'};
    cursor: not-allowed;
  }
  
  /* Style for option elements */
  & option {
    background-color: ${props => props.theme.colors?.bgElevated || '#ffffff'};
    color: ${props => props.theme.colors?.textPrimary || '#000000'};
    padding: ${props => props.theme.spacing?.sm || '8px'};
  }
  
  & option:disabled {
    color: ${props => props.theme.colors?.textDisabled || '#bfbfbf'};
  }
`;

const ErrorText = styled.div`
  color: ${props => props.theme.colors?.danger || '#ff4d4f'};
  font-size: ${props => props.theme.typography?.fontSize?.xs || '12px'};
  margin-top: ${props => props.theme.spacing?.xs || '4px'};
`;

/**
 * Select component for dropdowns
 * 
 * Features:
 * - Multiple size options (small, medium, large)
 * - Error and success states
 * - Customizable options
 * - Placeholder support
 * - Disabled options
 * - Label support
 * - Ant Design styling with modern rounded aesthetics
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  options,
  size = 'medium',
  error = false,
  success = false,
  errorText,
  fullWidth = false,
  mb,
  mt,
  ml,
  mr,
  disabled = false,
  readOnly = false,
  required = false,
  label,
  placeholder,
  ...rest
}, ref) => {
  return (
    <SelectWrapper fullWidth={fullWidth} mb={mb} mt={mt} ml={ml} mr={mr}>
      {label && (
        <SelectLabel required={required}>
          {label}
        </SelectLabel>
      )}
      <SelectContainer>
        <StyledSelect
          ref={ref}
          size={size}
          error={error}
          success={success}
          disabled={disabled || readOnly}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </SelectContainer>
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </SelectWrapper>
  );
});

Select.displayName = 'Select';

export default Select;
