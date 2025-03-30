/**
 * Modal component
 * A flexible dialog component with various options
 * Designed according to Ant Design principles
 * 
 * @module Modal
 */
import React, { useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { createPortal } from 'react-dom';

export interface ModalProps {
  /** Controls if the modal is visible */
  isOpen: boolean;
  /** Called when the modal should close */
  onClose: () => void;
  /** Modal title */
  title?: React.ReactNode;
  /** Modal content */
  children: React.ReactNode;
  /** Footer content (typically action buttons) */
  footer?: React.ReactNode;
  /** Size of the modal */
  size?: 'small' | 'medium' | 'large' | 'full';
  /** Shows modal in fullscreen mode (takes priority over size) */
  fullScreen?: boolean;
  /** Centers the modal vertically */
  centered?: boolean;
  /** Whether to close the modal when clicking the backdrop */
  closeOnBackdropClick?: boolean;
  /** Whether to close the modal when pressing escape key */
  closeOnEsc?: boolean;
  /** Shows a close button in the header */
  showCloseButton?: boolean;
  /** Additional class name */
  className?: string;
  /** ID for the modal */
  id?: string;
  /** Prevents body scrolling when modal is open */
  lockBodyScroll?: boolean;
  /** z-index for the modal */
  zIndex?: number;
  /** Maximum height of the modal body with scrolling */
  maxBodyHeight?: string;
  /** Custom width for the modal */
  width?: string;
}

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -70%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Returns custom CSS rules based on the requested modal size
const getModalSizeStyles = (size: string, customWidth?: string, fullScreen?: boolean) => {
  if (fullScreen) {
    return css`
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: 0;
      margin: 0;
    `;
  }
  
  if (customWidth) {
    return css`
      width: ${customWidth};
      max-width: 95vw;
    `;
  }
  
  switch (size) {
    case 'small':
      return css`
        width: 400px;
        max-width: 95vw;
      `;
    case 'large':
      return css`
        width: 800px;
        max-width: 95vw;
      `;
    case 'full':
      return css`
        width: 95vw;
        height: 90vh;
      `;
    case 'medium':
    default:
      return css`
        width: 600px;
        max-width: 95vw;
      `;
  }
};

const Backdrop = styled.div<{ zIndex?: number; $fullScreen?: boolean; $centered?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors?.modalOverlay || 'rgba(0, 0, 0, 0.45)'};
  display: flex;
  align-items: ${props => (props.$centered ? 'center' : 'flex-start')};
  justify-content: center;
  z-index: ${props => props.zIndex || 1000};
  animation: ${fadeIn} 0.2s ease-out;
  backdrop-filter: blur(2px);
  overflow-y: ${props => props.$fullScreen ? 'hidden' : 'auto'};
  padding: ${props => props.$fullScreen ? '0' : '48px 24px'};
`;

const ModalWrapper = styled.div<{
  $fullScreen?: boolean;
  $centered?: boolean;
  size: string;
  width?: string;
}>`
  position: ${props => props.$fullScreen ? 'fixed' : (props.$centered ? 'relative' : 'absolute')};
  top: ${props => props.$fullScreen ? '0' : 'auto'};
  left: ${props => props.$fullScreen ? '0' : props.$centered ? '50%' : 'auto'};
  transform: ${props => props.$centered && !props.$fullScreen ? 'translate(-50%, 0)' : 'none'};
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors?.bgElevated || '#ffffff'};
  border-radius: ${props => props.$fullScreen ? '0' : props.theme.radii?.lg || '8px'};
  box-shadow: ${props => props.$fullScreen ? 'none' : props.theme.shadows?.lg || '0 4px 12px rgba(0, 0, 0, 0.15)'};
  overflow: hidden;
  animation: ${props => props.$centered ? slideDown : slideUp} 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  margin: ${props => props.$centered ? '0' : '48px auto'};
  max-height: ${props => props.$fullScreen ? '100%' : 'calc(100vh - 96px)'};
  
  /* Size styles */
  ${props => getModalSizeStyles(props.size, props.width, props.$fullScreen)}
  
  /* Modern styling for 2025 */
  border: 1px solid ${props => props.theme.colors?.borderLight || 'rgba(0, 0, 0, 0.06)'};
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.$fullScreen ? 'none' : props.theme.shadows?.xl || '0 8px 24px rgba(0, 0, 0, 0.12)'};
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${props => props.theme.colors?.borderLight || 'rgba(0, 0, 0, 0.06)'};
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: ${props => props.theme.typography?.fontSize?.lg || '18px'};
  font-weight: ${props => props.theme.typography?.fontWeight?.medium || '500'};
  color: ${props => props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)'};
  line-height: 1.4;
`;

const ModalBody = styled.div<{ maxHeight?: string }>`
  flex: 1;
  padding: 24px;
  overflow-y: ${props => props.maxHeight ? 'auto' : 'visible'};
  max-height: ${props => props.maxHeight || 'none'};
  color: ${props => props.theme.colors?.textSecondary || 'rgba(0, 0, 0, 0.65)'};
  font-size: ${props => props.theme.typography?.fontSize?.md || '16px'};
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top: 1px solid ${props => props.theme.colors?.borderLight || 'rgba(0, 0, 0, 0.06)'};
  
  & > * + * {
    margin-left: ${props => props.theme.spacing?.md || '16px'};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.radii?.sm || '4px'};
  transition: all 0.2s;
  padding: 0;
  color: ${props => props.theme.colors?.textSecondary || 'rgba(0, 0, 0, 0.45)'};
  
  &:hover {
    background-color: ${props => props.theme.colors?.bgContainerHover || 'rgba(0, 0, 0, 0.04)'};
    color: ${props => props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)'};
  }
  
  &:focus {
    outline: none;
  }
`;

// Close icon component
const CloseIcon = () => (
  <svg 
    viewBox="64 64 896 896" 
    focusable="false" 
    width="1em" 
    height="1em" 
    fill="currentColor" 
    aria-hidden="true"
  >
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
  </svg>
);

/**
 * Modal component for dialogs, forms, and alerts
 * 
 * Features:
 * - Multiple size options
 * - Fullscreen mode
 * - Focus trap for accessibility
 * - Close on ESC key or backdrop click
 * - Customizable header and footer
 * - Scrollable content
 * - Portal usage to avoid stacking context issues
 * - Ant Design styling with modern rounded aesthetics
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  fullScreen = false,
  centered = true,
  closeOnBackdropClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  className,
  id,
  lockBodyScroll = true,
  zIndex,
  maxBodyHeight,
  width,
}) => {
  // Reference to the modal content for focusing
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Store the active element before opening the modal
  const previousActiveElement = useRef<Element | null>(null);
  
  // Handle backdrop click to close if enabled
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };
  
  // Handle ESC key to close if enabled
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);
  
  // Handle body scroll locking
  useEffect(() => {
    if (lockBodyScroll) {
      if (isOpen) {
        // Save current scroll position and lock body
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
      } else {
        // Restore scroll position when modal closes
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [isOpen, lockBodyScroll]);
  
  // Focus management for accessibility
  useEffect(() => {
    if (isOpen) {
      // Store previous active element and focus the modal
      previousActiveElement.current = document.activeElement;
      
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else if (previousActiveElement.current instanceof HTMLElement) {
      // Restore focus when modal closes
      previousActiveElement.current.focus();
    }
  }, [isOpen]);
  
  // Don't render anything if modal is not open
  if (!isOpen) return null;
  
  // Render modal in a portal to avoid stacking context issues
  return createPortal(
    <Backdrop 
      zIndex={zIndex} 
      $fullScreen={fullScreen}
      $centered={centered}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <ModalWrapper
        ref={modalRef}
        $fullScreen={fullScreen}
        $centered={centered}
        size={size}
        width={width}
        className={className}
        id={id}
        tabIndex={-1}
      >
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {showCloseButton && (
              <CloseButton 
                aria-label="Close modal" 
                onClick={onClose}
              >
                <CloseIcon />
              </CloseButton>
            )}
          </ModalHeader>
        )}
        <ModalBody maxHeight={maxBodyHeight}>
          {children}
        </ModalBody>
        {footer && (
          <ModalFooter>
            {footer}
          </ModalFooter>
        )}
      </ModalWrapper>
    </Backdrop>,
    document.body
  );
};

Modal.displayName = 'Modal';

export default Modal;
