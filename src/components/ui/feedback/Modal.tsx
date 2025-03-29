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

const slideIn = keyframes`
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
`;

const fullScreenAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/**
 * Ritorna un blocco di regole CSS personalizzate
 * in base alle dimensioni del Modal richieste.
 */
const getModalSizeStyles = (size: string, customWidth?: string, fullScreen?: boolean) => {
  if (fullScreen) {
    return css`
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      border-radius: 0;
      animation: ${fullScreenAnimation} 0.3s ease-out;
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
        height: 95vh;
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
  background-color: ${props =>
    props.$fullScreen ? props.theme.colors.bgDefault : 'rgba(0, 0, 0, 0.5)'};
  display: flex;
  justify-content: center;
  align-items: ${props => (props.$centered ? 'center' : 'flex-start')};
  overflow-y: auto;
  z-index: ${props => props.zIndex || 1050};
  animation: ${fadeIn} 0.2s ease-out;
  padding: ${props =>
    props.$fullScreen ? '0' : props.$centered ? '0' : '80px 0'};
`;

const ModalContainer = styled.div<{
  size?: string;
  $fullScreen?: boolean;
  width?: string;
  maxBodyHeight?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.bgElevated};
  border-radius: ${props => (props.$fullScreen ? '0' : '8px')};
  box-shadow: ${props =>
    props.$fullScreen ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.15)'};
  max-height: ${props => (props.$fullScreen ? '100%' : '90vh')};
  overflow: hidden;
  animation: ${slideIn} 0.2s ease-out;

  /* Se è fullscreen, applichiamo le regole da fullscreen.
     Altrimenti inseriamo il blocco di regole generato da getModalSizeStyles */
  ${props =>
    props.$fullScreen
      ? css`
          width: 100vw;
          height: 100vh;
          max-width: 100vw;
          max-height: 100vh;
          border-radius: 0;
          animation: ${fullScreenAnimation} 0.3s ease-out;
        `
      : getModalSizeStyles(props.size || 'medium', props.width)}
`;

const ModalHeader = styled.div<{ $fullScreen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => (props.$fullScreen ? '24px 32px' : '16px 24px')};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const ModalTitle = styled.h2`
  margin: 0;
font-size: ${props => props.theme.fontSizes.lg}; // <-- QUI
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textPrimary};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -8px;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }

  &:focus {
    outline: none;
    color: ${props => props.theme.colors.textPrimary};
  }
`;

const ModalBody = styled.div<{ maxBodyHeight?: string; $fullScreen?: boolean }>`
  padding: ${props => (props.$fullScreen ? '32px' : '24px')};
  flex: 1;
  overflow-y: auto;
  max-height: ${props => props.maxBodyHeight || 'none'};
`;

const ModalFooter = styled.div<{ $fullScreen?: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding: ${props => (props.$fullScreen ? '24px 32px' : '16px 24px')};
  border-top: 1px solid ${props => props.theme.colors.border};
  gap: 12px;
`;

// Close icon component
const CloseIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === 'Escape') {
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

  // Lock body scroll
  useEffect(() => {
    if (lockBodyScroll) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    return () => {
      if (lockBodyScroll) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen, lockBodyScroll]);

  // Focus the modal when it opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <Backdrop
      onClick={handleBackdropClick}
      zIndex={zIndex}
      $centered={!fullScreen && centered}
      $fullScreen={fullScreen}
      data-testid="modal-backdrop"
    >
      <ModalContainer
        ref={modalRef}
        size={size}
        width={width}
        className={className}
        id={id}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        $fullScreen={fullScreen}
        data-testid="modal-container"
      >
        {(title || showCloseButton) && (
          <ModalHeader $fullScreen={fullScreen} data-testid="modal-header">
            {title && (
              <ModalTitle id="modal-title" data-testid="modal-title">
                {title}
              </ModalTitle>
            )}
            {showCloseButton && (
              <CloseButton
                onClick={onClose}
                aria-label="Close modal"
                data-testid="modal-close-btn"
              >
                <CloseIcon />
              </CloseButton>
            )}
          </ModalHeader>
        )}

        <ModalBody
          maxBodyHeight={maxBodyHeight}
          $fullScreen={fullScreen}
          data-testid="modal-body"
        >
          {children}
        </ModalBody>

        {footer && (
          <ModalFooter $fullScreen={fullScreen} data-testid="modal-footer">
            {footer}
          </ModalFooter>
        )}
      </ModalContainer>
    </Backdrop>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
