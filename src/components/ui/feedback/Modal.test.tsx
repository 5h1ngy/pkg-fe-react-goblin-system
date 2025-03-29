import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Modal from './Modal';

// Mock ReactDOM createPortal
jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (node: React.ReactNode) => node,
  };
});

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Modal Component', () => {
  test('renders modal when isOpen is true', () => {
    renderWithTheme(
      <Modal isOpen={true} onClose={() => {}}>
        Modal Content
      </Modal>
    );
    
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });
  
  test('does not render modal when isOpen is false', () => {
    renderWithTheme(
      <Modal isOpen={false} onClose={() => {}}>
        Modal Content
      </Modal>
    );
    
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });
  
  test('renders title when provided', () => {
    renderWithTheme(
      <Modal isOpen={true} onClose={() => {}} title="Modal Title">
        Modal Content
      </Modal>
    );
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });
  
  test('renders close button when showCloseButton is true', () => {
    renderWithTheme(
      <Modal isOpen={true} onClose={() => {}} showCloseButton={true}>
        Modal Content
      </Modal>
    );
    
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });
  
  test('does not render close button when showCloseButton is false', () => {
    renderWithTheme(
      <Modal isOpen={true} onClose={() => {}} showCloseButton={false}>
        Modal Content
      </Modal>
    );
    
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });
  
  test('renders footer when provided', () => {
    renderWithTheme(
      <Modal 
        isOpen={true} 
        onClose={() => {}} 
        footer={<button>Footer Button</button>}
      >
        Modal Content
      </Modal>
    );
    
    expect(screen.getByText('Footer Button')).toBeInTheDocument();
  });
  
  test('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    
    renderWithTheme(
      <Modal isOpen={true} onClose={handleClose} showCloseButton={true}>
        Modal Content
      </Modal>
    );
    
    fireEvent.click(screen.getByLabelText('Close modal'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  
  test('calls onClose when backdrop is clicked and closeOnBackdropClick is true', () => {
    const handleClose = jest.fn();
    
    renderWithTheme(
      <Modal 
        isOpen={true} 
        onClose={handleClose} 
        closeOnBackdropClick={true}
      >
        Modal Content
      </Modal>
    );
    
    fireEvent.click(screen.getByTestId('modal-backdrop'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  
  test('does not call onClose when backdrop is clicked and closeOnBackdropClick is false', () => {
    const handleClose = jest.fn();
    
    renderWithTheme(
      <Modal 
        isOpen={true} 
        onClose={handleClose} 
        closeOnBackdropClick={false}
      >
        Modal Content
      </Modal>
    );
    
    fireEvent.click(screen.getByTestId('modal-backdrop'));
    expect(handleClose).not.toHaveBeenCalled();
  });
  
  test('applies correct size classes', () => {
    // Small size
    const { rerender } = renderWithTheme(
      <Modal 
        isOpen={true} 
        onClose={() => {}} 
        size="small"
      >
        Small Modal
      </Modal>
    );
    
    let modalElement = screen.getByTestId('modal-container');
    expect(modalElement).toBeInTheDocument();
    
    // Medium size
    rerender(
      <ThemeProvider>
        <Modal 
          isOpen={true} 
          onClose={() => {}} 
          size="medium"
        >
          Medium Modal
        </Modal>
      </ThemeProvider>
    );
    
    modalElement = screen.getByTestId('modal-container');
    expect(modalElement).toBeInTheDocument();
    
    // Large size
    rerender(
      <ThemeProvider>
        <Modal 
          isOpen={true} 
          onClose={() => {}} 
          size="large"
        >
          Large Modal
        </Modal>
      </ThemeProvider>
    );
    
    modalElement = screen.getByTestId('modal-container');
    expect(modalElement).toBeInTheDocument();
  });
});
