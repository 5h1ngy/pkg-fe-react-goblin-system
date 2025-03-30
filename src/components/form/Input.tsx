/**
 * Input component
 * A styled text input field with various state variations
 * 
 * @module Input
 */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> {
  /** Input size variant */
  size?: InputSize;
  /** Shows error styling */
  error?: boolean;
  /** Success state styling */
  success?: boolean;
  /** Text to show when error is true */
  errorText?: string;
  /** Prefix content before input */
  prefix?: React.ReactNode;
  /** Suffix content after input */
  suffix?: React.ReactNode;
  /** Makes input take full width of container */
  fullWidth?: boolean;
  /** Add margin bottom */
  mb?: string;
  /** Add margin top */
  mt?: string;
  /** Add margin left */
  ml?: string;
  /** Add margin right */
  mr?: string;
  /** Optional value for controlled inputs */
  value?: string;
  /** Default value for uncontrolled inputs */
  defaultValue?: string;
  /** Disables the input */
  disabled?: boolean;
  /** Makes the input read-only */
  readOnly?: boolean;
  /** If true, shows a required asterisk */
  required?: boolean;
  /** Label for the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
}

// Size variant styles
const getInputSizeStyles = (size: InputSize) => {
  switch (size) {
    case 'small':
      return css`
        font-size: ${props => props.theme.typography.fontSize.xs};
        padding: ${props => props.theme.spacing.xs};
        height: 32px;
      `;
    case 'large':
      return css`
        font-size: ${props => props.theme.typography.fontSize.md};
        padding: ${props => props.theme.spacing.sm};
        height: 48px;
      `;
    case 'medium':
    default:
      return css`
        font-size: ${props => props.theme.typography.fontSize.sm};
        padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
        height: 40px;
      `;
  }
};

const InputWrapper = styled.div<{ fullWidth?: boolean; mb?: string; mt?: string; ml?: string; mr?: string }>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
`;

const InputLabel = styled.label<{ required?: boolean }>`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.textPrimary};
  
  ${props => props.required && css`
    &::after {
      content: '*';
      color: ${props => props.theme.colors.danger};
      margin-left: ${props => props.theme.spacing.xs};
    }
  `}
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Prefix = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${props => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.textSecondary};
  pointer-events: none;
`;

const Suffix = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: ${props => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.textSecondary};
  pointer-events: none;
  
  /* Allow clicking if it's a button or interactive element */
  button, a, [role="button"] {
    pointer-events: auto;
  }
`;

const StyledInput = styled.input<{
  size?: InputSize; 
  error?: boolean;
  success?: boolean;
  fullWidth?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}>`
  /* Base styles */
  display: block;
  width: 100%;
  border-radius: ${props => props.theme.radii.md};
  border: 1px solid ${props => props.theme.colors.borderBase};
  background-color: ${props => props.theme.colors.bgElevated};
  color: ${props => props.theme.colors.textPrimary};
  transition: all 0.2s ease-in-out;
  outline: none;
  
  /* Size variants */
  ${props => getInputSizeStyles(props.size || 'medium')}
  
  /* Adjust padding if has prefix/suffix */
  ${props => props.prefix && css`
    padding-left: 2.5rem;
  `}
  
  ${props => props.suffix && css`
    padding-right: 2.5rem;
  `}
  
  /* Focus state */
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => `${props.theme.colors.primary}33`};
  }
  
  /* Error state */
  ${props => props.error && css`
    border-color: ${props => props.theme.colors.danger};
    
    &:focus {
      box-shadow: 0 0 0 2px ${props => `${props.theme.colors.danger}33`};
    }
  `}
  
  /* Success state */
  ${props => props.success && css`
    border-color: ${props => props.theme.colors.success};
    
    &:focus {
      box-shadow: 0 0 0 2px ${props => `${props.theme.colors.success}33`};
    }
  `}
  
  /* Disabled state */
  &:disabled {
    background-color: ${props => props.theme.colors.bgContainer};
    border-color: ${props => props.theme.colors.borderLight};
    color: ${props => props.theme.colors.textDisabled};
    cursor: not-allowed;
  }
  
  /* Placeholder styling */
  &::placeholder {
    color: ${props => props.theme.colors.textDisabled};
  }
`;

const ErrorText = styled.div`
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.typography.fontSize.xs};
  margin-top: ${props => props.theme.spacing.xs};
`;

/**
 * Input component for text-based form inputs
 * 
 * Features:
 * - Multiple size options (small, medium, large)
 * - Error and success states
 * - Prefix and suffix support
 * - Fully controlled or uncontrolled usage
 * - Label and error text support
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = 'medium',
  error = false,
  success = false,
  errorText,
  prefix,
  suffix,
  fullWidth = false,
  mb,
  mt,
  ml,
  mr,
  disabled = false,
  readOnly = false,
  required = false,
  label,
  ...rest
}, ref) => {
  return (
    <InputWrapper fullWidth={fullWidth} mb={mb} mt={mt} ml={ml} mr={mr}>
      {label && (
        <InputLabel required={required}>
          {label}
        </InputLabel>
      )}
      <InputContainer>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput
          ref={ref}
          size={size}
          error={error}
          success={success}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          prefix={!!prefix}
          suffix={!!suffix}
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        />
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
