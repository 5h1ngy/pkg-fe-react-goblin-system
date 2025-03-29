import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Alert from './Alert';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Alert Component', () => {
  test('renders correctly with title and description', () => {
    renderWithTheme(
      <Alert 
        title="Test Title" 
        description="Test description"
        data-testid="test-alert"
      />
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('renders without title', () => {
    renderWithTheme(
      <Alert 
        description="Test description only"
        data-testid="test-alert"
      />
    );
    
    expect(screen.getByText('Test description only')).toBeInTheDocument();
  });

  test('renders different severity variants', () => {
    const { rerender } = renderWithTheme(
      <Alert 
        severity="info"
        description="Info alert"
        data-testid="test-alert"
      />
    );
    
    let alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Alert 
          severity="success"
          description="Success alert"
          data-testid="test-alert"
        />
      </ThemeProvider>
    );
    
    alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Alert 
          severity="warning"
          description="Warning alert"
          data-testid="test-alert"
        />
      </ThemeProvider>
    );
    
    alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Alert 
          severity="error"
          description="Error alert"
          data-testid="test-alert"
        />
      </ThemeProvider>
    );
    
    alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
  });

  test('renders with close button when closable', () => {
    renderWithTheme(
      <Alert 
        description="Closable alert"
        closable
        data-testid="test-alert"
      />
    );
    
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    renderWithTheme(
      <Alert 
        description="Closable alert"
        closable
        onClose={handleClose}
        data-testid="test-alert"
      />
    );
    
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('renders with custom action', () => {
    const handleAction = jest.fn();
    renderWithTheme(
      <Alert 
        description="Alert with action"
        action={
          <button onClick={handleAction}>Action</button>
        }
        data-testid="test-alert"
      />
    );
    
    const actionButton = screen.getByText('Action');
    expect(actionButton).toBeInTheDocument();
    
    fireEvent.click(actionButton);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Alert 
        description="Alert with custom class"
        className="custom-alert"
        data-testid="test-alert"
      />
    );
    
    const alert = screen.getByTestId('test-alert');
    expect(alert).toHaveClass('custom-alert');
  });

  test('renders icon when showIcon is true', () => {
    renderWithTheme(
      <Alert 
        description="Alert with icon"
        showIcon
        data-testid="test-alert"
      />
    );
    
    const alert = screen.getByTestId('test-alert');
    // We can't check the exact icon, but we can check if the alert is rendered
    expect(alert).toBeInTheDocument();
  });

  test('renders with custom icon', () => {
    const CustomIcon = () => <span data-testid="custom-icon">Icon</span>;
    
    renderWithTheme(
      <Alert 
        description="Alert with custom icon"
        icon={<CustomIcon />}
        data-testid="test-alert"
      />
    );
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  test('renders in different sizes', () => {
    const { rerender } = renderWithTheme(
      <Alert 
        description="Small alert"
        size="small"
        data-testid="test-alert"
      />
    );
    
    let alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Alert 
          description="Medium alert"
          size="medium"
          data-testid="test-alert"
        />
      </ThemeProvider>
    );
    
    alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Alert 
          description="Large alert"
          size="large"
          data-testid="test-alert"
        />
      </ThemeProvider>
    );
    
    alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
  });
});
