import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Select from './Select';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Select Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  test('renders correctly with options', () => {
    renderWithTheme(
      <Select 
        options={options} 
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const select = screen.getByTestId('test-select');
    expect(select).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(3);
  });

  test('renders with placeholder', () => {
    renderWithTheme(
      <Select 
        options={options} 
        placeholder="Select an option"
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const placeholderOption = screen.getByText('Select an option');
    expect(placeholderOption).toBeInTheDocument();
  });

  test('handles selection changes', () => {
    const handleChange = jest.fn();
    renderWithTheme(
      <Select 
        options={options} 
        onChange={handleChange}
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const select = screen.getByTestId('test-select');
    fireEvent.change(select, { target: { value: 'option2' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders with default value', () => {
    renderWithTheme(
      <Select 
        options={options} 
        defaultValue="option2"
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const select = screen.getByTestId('test-select') as HTMLSelectElement;
    expect(select.value).toBe('option2');
  });

  test('renders in controlled mode', () => {
    renderWithTheme(
      <Select 
        options={options} 
        value="option3"
        onChange={() => {}}
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const select = screen.getByTestId('test-select') as HTMLSelectElement;
    expect(select.value).toBe('option3');
  });

  test('renders in disabled state', () => {
    renderWithTheme(
      <Select 
        options={options} 
        disabled
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const select = screen.getByTestId('test-select') as HTMLSelectElement;
    expect(select).toBeDisabled();
  });

  test('displays error message', () => {
    renderWithTheme(
      <Select 
        options={options} 
        error="This is an error message"
        id="test-select"
        data-testid="test-select"
      />
    );
    
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  test('handles required attribute', () => {
    renderWithTheme(
      <Select 
        options={options} 
        required
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const select = screen.getByTestId('test-select') as HTMLSelectElement;
    expect(select).toHaveAttribute('required');
  });

  test('renders with different sizes', () => {
    const { rerender } = renderWithTheme(
      <Select 
        options={options} 
        size="small"
        id="test-select"
        data-testid="test-select"
      />
    );
    
    let select = screen.getByTestId('test-select');
    expect(select).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Select 
          options={options} 
          size="medium"
          id="test-select"
          data-testid="test-select"
        />
      </ThemeProvider>
    );
    
    select = screen.getByTestId('test-select');
    expect(select).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Select 
          options={options} 
          size="large"
          id="test-select"
          data-testid="test-select"
        />
      </ThemeProvider>
    );
    
    select = screen.getByTestId('test-select');
    expect(select).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Select 
        options={options} 
        className="custom-select"
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const selectWrapper = screen.getByTestId('test-select').parentElement;
    expect(selectWrapper).toHaveClass('custom-select');
  });

  test('handles focus and blur events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    
    renderWithTheme(
      <Select 
        options={options} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        id="test-select"
        data-testid="test-select"
      />
    );
    
    const select = screen.getByTestId('test-select');
    fireEvent.focus(select);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(select);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test('renders with group options', () => {
    const groupedOptions = [
      { 
        label: 'Group 1', 
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ] 
      },
      { 
        label: 'Group 2', 
        options: [
          { value: 'option3', label: 'Option 3' },
          { value: 'option4', label: 'Option 4' }
        ] 
      }
    ];
    
    renderWithTheme(
      <Select 
        options={groupedOptions} 
        id="test-select"
        data-testid="test-select"
      />
    );
    
    expect(screen.getByText('Group 1')).toBeInTheDocument();
    expect(screen.getByText('Group 2')).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(4);
  });
});
