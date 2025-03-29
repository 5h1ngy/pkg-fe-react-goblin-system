import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import IconButton from './IconButton';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

// Mock icon component for testing
const MockIcon = () => <svg data-testid="mock-icon" />;

describe('IconButton Component', () => {
  test('renders correctly with icon', () => {
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        onClick={handleClick}
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies disabled state correctly', () => {
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        disabled
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toBeDisabled();
  });

  test('renders with different variants', () => {
    const { rerender } = renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        variant="primary"
        data-testid="test-button"
      />
    );
    
    let button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <IconButton 
          icon={<MockIcon />} 
          aria-label="Test button"
          variant="secondary"
          data-testid="test-button"
        />
      </ThemeProvider>
    );
    
    button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <IconButton 
          icon={<MockIcon />} 
          aria-label="Test button"
          variant="text"
          data-testid="test-button"
        />
      </ThemeProvider>
    );
    
    button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <IconButton 
          icon={<MockIcon />} 
          aria-label="Test button"
          variant="outline"
          data-testid="test-button"
        />
      </ThemeProvider>
    );
    
    button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });

  test('renders with different sizes', () => {
    const { rerender } = renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        size="small"
        data-testid="test-button"
      />
    );
    
    let button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <IconButton 
          icon={<MockIcon />} 
          aria-label="Test button"
          size="medium"
          data-testid="test-button"
        />
      </ThemeProvider>
    );
    
    button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <IconButton 
          icon={<MockIcon />} 
          aria-label="Test button"
          size="large"
          data-testid="test-button"
        />
      </ThemeProvider>
    );
    
    button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        className="custom-button"
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toHaveClass('custom-button');
  });

  test('renders with a custom color', () => {
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        color="#FF0000"
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    // Testing exact color would require checking computed styles
  });

  test('applies aria-label correctly', () => {
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Custom label"
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  test('supports custom attributes', () => {
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        data-testid="test-button"
        data-custom="custom-value"
      />
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('data-custom', 'custom-value');
  });

  test('handles focus events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    
    renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    
    fireEvent.focus(button);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(button);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test('supports data attributes for styling', () => {
    const { container } = renderWithTheme(
      <IconButton 
        icon={<MockIcon />} 
        aria-label="Test button"
        className="test-class"
        data-testid="test-button"
      />
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    expect(container.firstChild).toBeTruthy();
  });
});
