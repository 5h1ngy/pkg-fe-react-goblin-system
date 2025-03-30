/**
 * Radio component
 * A styled radio input with label support
 * Designed according to Ant Design principles
 * 
 * @module Radio
 */
import React, { forwardRef, useId } from 'react';
import styled, { css } from 'styled-components';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
  background-color: ${props => props.theme.colors?.bgElevated || '#ffffff'};
  border: 1px solid ${props => props.checked
    ? props.theme.colors?.primary || '#1890ff'
    : props.theme.colors?.borderBase || '#d9d9d9'
  };
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  /* Size variant */
  ${props => getRadioSizeStyles(props.size)}
  
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
    background-color: ${props => props.theme.colors?.primary || '#1890ff'};
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
    ? props.theme.colors?.textDisabled || '#bfbfbf'
    : props.theme.colors?.textPrimary || '#000000'
  };
  margin-left: ${props => props.theme.spacing?.sm || '8px'};
  
  /* Size variant */
  font-size: ${props => {
    switch (props.size) {
      case 'small': return props.theme.typography?.fontSize?.xs || '12px';
      case 'large': return props.theme.typography?.fontSize?.md || '16px';
      default: return props.theme.typography?.fontSize?.sm || '14px';
    }
  }};
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const ErrorText = styled.div`
  color: ${props => props.theme.colors?.danger || '#ff4d4f'};
  font-size: ${props => props.theme.typography?.fontSize?.xs || '12px'};
  margin-top: ${props => props.theme.spacing?.xs || '4px'};
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
      margin-right: ${props => props.theme.spacing?.md || '16px'};
      
      &:last-child {
        margin-right: 0;
      }
    }
  `}
  
  ${props => props.layout === 'vertical' && css`
    & > * {
      margin-bottom: ${props => props.theme.spacing?.sm || '8px'};
      
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
 * - Ant Design styling with modern rounded aesthetics
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
  onChange,
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
          onChange={onChange}
          {...rest}
        />
        <StyledRadio
          checked={checked}
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
 * - Ant Design styling with modern rounded aesthetics
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
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
  // State for uncontrolled component
  const [selectedValue, setSelectedValue] = React.useState<string | number | undefined>(defaultValue);
  
  // Use either controlled or uncontrolled value
  const currentValue = value !== undefined ? value : selectedValue;
  
  // Handle change events
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    // Update internal state for uncontrolled component
    if (value === undefined) {
      setSelectedValue(newValue);
    }
    
    // Call external onChange handler
    if (onChange) {
      onChange(newValue);
    }
  };
  
  // Clone children to add props
  const radioButtons = React.Children.map(children, (child) => {
    if (React.isValidElement<RadioProps>(child)) {
      return React.cloneElement(child, {
        name,
        checked: child.props.value === currentValue,
        size,
        disabled: disabled || child.props.disabled,
        onChange: handleChange,
      });
    }
    return child;
  });
  
  return (
    <div>
      <RadioGroupContainer 
        layout={layout}
        mb={mb}
        mt={mt}
        ml={ml}
        mr={mr}
      >
        {radioButtons}
      </RadioGroupContainer>
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

Radio.displayName = 'Radio';

// Define the Radio component with Group property
type RadioWithGroup = typeof Radio & {
  Group: typeof RadioGroup;
};

// Attach the Group component
(Radio as RadioWithGroup).Group = RadioGroup;

export default Radio as RadioWithGroup;
