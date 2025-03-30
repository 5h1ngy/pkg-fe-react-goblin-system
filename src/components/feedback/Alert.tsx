/**
 * Alert component
 * Displays important messages with different severity levels
 * Styled according to Ant Design principles with modern aesthetics
 * 
 * @module Alert
 */
import React from 'react';
import styled, { css } from 'styled-components';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  /** Alert type/severity */
  type?: AlertType;
  /** Alert title (optional) */
  title?: string;
  /** Main message content */
  children: React.ReactNode;
  /** Whether the alert can be closed/dismissed */
  closable?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Icon to display before the alert content */
  icon?: React.ReactNode;
  /** Add margin bottom */
  mb?: string;
  /** Add margin top */
  mt?: string;
  /** Make alert take full width of its container */
  fullWidth?: boolean;
  /** Add box shadow to the alert */
  withShadow?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Action buttons or links to display */
  action?: React.ReactNode;
}

// Get type-specific styles
const getTypeStyles = (type: AlertType) => {
  switch (type) {
    case 'success':
      return css`
        background-color: ${props => `${props.theme.colors?.success || '#52c41a'}11`};
        border-color: ${props => props.theme.colors?.success || '#52c41a'};
        color: ${props => props.theme.colors?.success || '#52c41a'};
      `;
    case 'error':
      return css`
        background-color: ${props => `${props.theme.colors?.danger || '#ff4d4f'}11`};
        border-color: ${props => props.theme.colors?.danger || '#ff4d4f'};
        color: ${props => props.theme.colors?.danger || '#ff4d4f'};
      `;
    case 'warning':
      return css`
        background-color: ${props => `${props.theme.colors?.warning || '#faad14'}11`};
        border-color: ${props => props.theme.colors?.warning || '#faad14'};
        color: ${props => props.theme.colors?.warning || '#faad14'};
      `;
    default:
      return css`
        background-color: ${props => `${props.theme.colors?.info || '#1890ff'}11`};
        border-color: ${props => props.theme.colors?.info || '#1890ff'};
        color: ${props => props.theme.colors?.info || '#1890ff'};
      `;
  }
};

const AlertContainer = styled.div<{
  type: AlertType;
  mb?: string;
  mt?: string;
  fullWidth?: boolean;
  withShadow?: boolean;
}>`
  display: flex;
  position: relative;
  padding: ${props => props.theme.spacing?.md || '1rem'};
  border-radius: ${props => props.theme.radii?.md || '8px'};
  border-left: 4px solid;
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  box-shadow: ${props => props.withShadow ? (props.theme.shadows?.sm || '0 2px 8px rgba(0, 0, 0, 0.15)') : 'none'};
  transition: all 0.3s ease;
  
  /* Apply type-specific styles */
  ${props => getTypeStyles(props.type)}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: ${props => props.theme.spacing?.sm || '0.5rem'};
  flex-shrink: 0;
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const AlertTitle = styled.div`
  font-weight: ${props => props.theme.typography?.fontWeight?.bold || '600'};
  margin-bottom: ${props => props.theme.spacing?.xs || '0.25rem'};
  letter-spacing: -0.01em;
`;

const AlertMessage = styled.div`
  color: ${props => props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)'};
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing?.xs || '0.25rem'};
  border-radius: ${props => props.theme.radii?.sm || '4px'};
  color: inherit;
  opacity: 0.6;
  transition: all 0.2s ease;
  margin-left: ${props => props.theme.spacing?.sm || '0.5rem'};
  
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => `${props.theme.colors?.primary || '#1890ff'}33`};
  }
`;

const ActionWrapper = styled.div`
  margin-top: ${props => props.theme.spacing?.sm || '0.5rem'};
  display: flex;
  gap: ${props => props.theme.spacing?.sm || '0.5rem'};
`;

/**
 * Simple "X" icon for the close button
 */
const CloseIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Default icons for each alert type
 */
const getDefaultIcon = (type: AlertType) => {
  switch (type) {
    case 'success':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'error':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'warning':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.29 3.86L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.6415 19.6871 1.81442 19.9905C1.98734 20.2939 2.23637 20.5467 2.53748 20.7238C2.83858 20.9009 3.1808 20.9961 3.53 21H20.47C20.8192 20.9961 21.1614 20.9009 21.4625 20.7238C21.7636 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'info':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

/**
 * Alert component for displaying important messages with different severity levels
 * 
 * Features:
 * - Four severity types: success, error, warning, info
 * - Optional title and close button
 * - Custom icon support
 * - Action buttons or links
 * - Ant Design styling with modern rounded aesthetics
 */
const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  closable = false,
  onClose,
  icon,
  mb,
  mt,
  fullWidth = false,
  withShadow = false,
  className,
  action,
}) => {
  // Use provided icon or default for the alert type
  const alertIcon = icon || getDefaultIcon(type);
  
  return (
    <AlertContainer
      type={type}
      mb={mb}
      mt={mt}
      fullWidth={fullWidth}
      withShadow={withShadow}
      className={className}
      role="alert"
    >
      {alertIcon && <IconWrapper>{alertIcon}</IconWrapper>}
      
      <ContentWrapper>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertMessage>{children}</AlertMessage>
        
        {action && <ActionWrapper>{action}</ActionWrapper>}
      </ContentWrapper>
      
      {closable && (
        <CloseButton
          onClick={onClose}
          aria-label="Close alert"
          type="button"
        >
          <CloseIcon />
        </CloseButton>
      )}
    </AlertContainer>
  );
};

export default Alert;
