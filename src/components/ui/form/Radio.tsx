/**
 * Radio component
 * A styled radio input with label support
 * 
 * @module Radio
 */
import React, { forwardRef, useId } from 'react';
import styled, { css } from 'styled-components';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text for the radio button */
  label?: string | React.ReactNode;
  /** Error state */
  error?: boolean;
  /** Text to show when error is true */
  errorText?: string;
  /** Size of the radio button */
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
  /** Disables the radio button */
  disabled?: boolean;
  /** Value of the radio button */
  value?: string | number;
  /** Name attribute to group radio buttons */
  name?: string;
}

export interface RadioGroupProps {
  /** Children radio buttons */
  children: React.ReactNode;
  /** Name attribute to group radio buttons */
  name: string;
  /** Default value for uncontrolled group */
  defaultValue?: string | number;
  /** Current value for controlled group */
  value?: string | number;
  /** Callback fired when value changes */
  onChange?: (value: string | number) => void;
  /** Radio buttons layout - horizontal or vertical */
  layout?: 'horizontal' | 'vertical';
  /** Error state */
  error?: boolean;
  /** Text to show when error is true */
  errorText?: string;
  /** Size of all radio buttons in the group */
  size?: 'small' | 'medium' | 'large';
  /** Disables all radio buttons in the group */
  disabled?: boolean;
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
const getRadioSizeStyles = (size: string) => {
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

const RadioContainer = styled.div<{
  mb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
}>`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const StyledRadio = styled.div<{
  checked: boolean;
  disabled: boolean;
  error: boolean;
  size: string;
}>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${props => props.theme.colors.bgElevated};
  border: 1px solid ${props => props.checked
    ? props.theme.colors.primary
    : props.theme.colors.borderBase
  };
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  /* Size variant */
  ${props => getRadioSizeStyles(props.size)}
  
  /* Error state */
  ${props => props.error && css`
    border-color: ${props => props.theme.colors.danger};
  `}
  
  /* Disabled state */
  ${props => props.disabled && css`
    opacity: 0.5;
    background-color: ${props => props.theme.colors.bgContainer};
  `}
  
  /* Focus style applied when parent is focused */
  input:focus + & {
    box-shadow: 0 0 0 2px ${props => `${props.theme.colors.primary}33`};
  }
  
  /* Inner circle when checked */
  &::after {
    content: '';
    display: ${props => props.checked ? 'block' : 'none'};
    width: ${props => {
      switch (props.size) {
        case 'small': return '6px';
        case 'large': return '10px';
        case 'medium':
        default: return '8px';
      }
    }};
    height: ${props => {
      switch (props.size) {
        case 'small': return '6px';
        case 'large': return '10px';
        case 'medium':
        default: return '8px';
      }
    }};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const RadioLabel = styled.label<{
  disabled: boolean;
  size: string;
}>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  color: ${props => props.disabled
    ? props.theme.colors.textDisabled
    : props.theme.colors.textPrimary
  };
  margin-left: ${props => props.theme.spacing.sm};
  
  /* Size variant */
  font-size: ${props => {
    switch (props.size) {
      case 'small': return props.theme.typography.fontSize.xs;
      case 'large': return props.theme.typography.fontSize.md;
      default: return props.theme.typography.fontSize.sm;
    }
  }};
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const ErrorText = styled.div`
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.typography.fontSize.xs};
  margin-top: ${props => props.theme.spacing.xs};
`;

const RadioGroupContainer = styled.div<{
  layout: 'horizontal' | 'vertical';
  mb?: string;
  mt?: string;
  ml?: string;
  mr?: string;
}>`
  display: flex;
  flex-direction: ${props => props.layout === 'horizontal' ? 'row' : 'column'};
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};
  
  ${props => props.layout === 'horizontal' && css`
    & > * {
      margin-right: ${props => props.theme.spacing.md};
      
      &:last-child {
        margin-right: 0;
      }
    }
  `}
  
  ${props => props.layout === 'vertical' && css`
    & > * {
      margin-bottom: ${props => props.theme.spacing.sm};
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`;

/**
 * Radio component for selecting single items in a list
 * 
 * Features:
 * - Multiple size options (small, medium, large)
 * - Error state with error message
 * - Disabled state
 * - Label support
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  label,
  error = false,
  errorText,
  size = 'medium',
  mb,
  mt,
  ml,
  mr,
  checked = false,
  defaultChecked,
  disabled = false,
  className,
  ...rest
}, ref) => {
  const id = useId();
  
  return (
    <div>
      <RadioContainer mb={mb} mt={mt} ml={ml} mr={mr} className={className}>
        <HiddenRadio
          id={id}
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          {...rest}
        />
        <StyledRadio
          checked={checked || !!defaultChecked}
          disabled={disabled}
          error={error}
          size={size}
        />
        {label && (
          <RadioLabel
            htmlFor={id}
            disabled={disabled}
            size={size}
          >
            {label}
          </RadioLabel>
        )}
      </RadioContainer>
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
});

/**
 * RadioGroup component for grouping multiple radio buttons
 * 
 * Features:
 * - Horizontal or vertical layout
 * - Controlled and uncontrolled usage
 * - Error state with error message
 * - Propagates size and disabled state to children
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  defaultValue,
  value,
  onChange,
  layout = 'vertical',
  error = false,
  errorText,
  size = 'medium',
  disabled = false,
  mb,
  mt,
  ml,
  mr,
}) => {
  // Handler for radio change events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  // Clone children with additional props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        name,
        size,
        disabled: child.props.disabled || disabled,
        checked: value !== undefined ? child.props.value === value : undefined,
        defaultChecked: defaultValue !== undefined ? child.props.value === defaultValue : undefined,
        onChange: handleChange,
      });
    }
    return child;
  });
  
  return (
    <div>
      <RadioGroupContainer layout={layout} mb={mb} mt={mt} ml={ml} mr={mr}>
        {enhancedChildren}
      </RadioGroupContainer>
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

Radio.displayName = 'Radio';

export default Radio;
