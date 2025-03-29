import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Input from './Input';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Input Component', () => {
  test('renders correctly', () => {
    renderWithTheme(<Input placeholder="Test placeholder" />);
    
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  test('handles value changes', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Input value="test" onChange={handleChange} data-testid="test-input" />);
    
    const input = screen.getByTestId('test-input');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  test('applies disabled state correctly', () => {
    renderWithTheme(<Input disabled data-testid="test-input" />);
    
    const input = screen.getByTestId('test-input');
    expect(input).toBeDisabled();
  });

  test('displays error state correctly', () => {
    renderWithTheme(
      <Input 
        error="This is an error message" 
        data-testid="test-input" 
      />
    );
    
    const input = screen.getByTestId('test-input');
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  test('handles focus and blur events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    
    renderWithTheme(
      <Input 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        data-testid="test-input" 
      />
    );
    
    const input = screen.getByTestId('test-input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test('renders with different sizes', () => {
    const { rerender } = renderWithTheme(
      <Input size="small" data-testid="test-input" />
    );
    
    let input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Input size="medium" data-testid="test-input" />
      </ThemeProvider>
    );
    
    input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Input size="large" data-testid="test-input" />
      </ThemeProvider>
    );
    
    input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Input className="custom-class" data-testid="test-input" />
    );
    
    const input = screen.getByTestId('test-input');
    expect(input.parentElement).toHaveClass('custom-class');
  });

  test('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    renderWithTheme(<Input ref={ref} data-testid="test-input" />);
    
    const input = screen.getByTestId('test-input');
    expect(ref.current).toBe(input);
  });
});
