import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Checkbox from './Checkbox';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Checkbox Component', () => {
  test('renders correctly', () => {
    renderWithTheme(
      <Checkbox id="test-checkbox" label="Test Checkbox" />
    );
    
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('handles check/uncheck', () => {
    const handleChange = jest.fn();
    renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        onChange={handleChange} 
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders in checked state when defaultChecked is true', () => {
    renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        defaultChecked 
      />
    );
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  test('renders in controlled checked state', () => {
    renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        checked={true} 
        onChange={() => {}}
      />
    );
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  test('renders disabled state correctly', () => {
    renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        disabled 
      />
    );
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox).toBeDisabled();
  });

  test('displays error message', () => {
    renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        error="This is an error message" 
      />
    );
    
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  test('applies custom classNames', () => {
    renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        className="custom-checkbox-class" 
      />
    );
    
    const wrapperElement = screen.getByText('Test Checkbox').parentElement;
    expect(wrapperElement).toHaveClass('custom-checkbox-class');
  });

  test('renders different sizes', () => {
    const { rerender } = renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        size="small" 
      />
    );
    
    let wrapperElement = screen.getByText('Test Checkbox').parentElement;
    expect(wrapperElement).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Checkbox 
          id="test-checkbox" 
          label="Test Checkbox" 
          size="medium" 
        />
      </ThemeProvider>
    );
    
    wrapperElement = screen.getByText('Test Checkbox').parentElement;
    expect(wrapperElement).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Checkbox 
          id="test-checkbox" 
          label="Test Checkbox" 
          size="large" 
        />
      </ThemeProvider>
    );
    
    wrapperElement = screen.getByText('Test Checkbox').parentElement;
    expect(wrapperElement).toBeInTheDocument();
  });

  test('triggers onFocus and onBlur events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    
    renderWithTheme(
      <Checkbox 
        id="test-checkbox" 
        label="Test Checkbox" 
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.focus(checkbox);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(checkbox);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
