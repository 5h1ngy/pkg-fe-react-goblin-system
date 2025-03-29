import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Radio, RadioGroup } from './Radio';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Radio Component', () => {
  test('renders individual radio correctly', () => {
    renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
      />
    );
    
    expect(screen.getByText('Test Radio')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  test('handles selection change', () => {
    const handleChange = jest.fn();
    renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
        onChange={handleChange} 
      />
    );
    
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders in checked state when defaultChecked is true', () => {
    renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
        defaultChecked 
      />
    );
    
    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  test('renders in controlled checked state', () => {
    renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
        checked={true} 
        onChange={() => {}}
      />
    );
    
    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  test('renders disabled state correctly', () => {
    renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
        disabled 
      />
    );
    
    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio).toBeDisabled();
  });

  test('displays error message', () => {
    renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
        error="This is an error message" 
      />
    );
    
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  test('applies custom classNames', () => {
    renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
        className="custom-radio-class" 
      />
    );
    
    const wrapperElement = screen.getByText('Test Radio').parentElement;
    expect(wrapperElement).toHaveClass('custom-radio-class');
  });

  test('renders different sizes', () => {
    const { rerender } = renderWithTheme(
      <Radio 
        id="test-radio" 
        name="test" 
        value="option1" 
        label="Test Radio" 
        size="small" 
      />
    );
    
    let wrapperElement = screen.getByText('Test Radio').parentElement;
    expect(wrapperElement).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Radio 
          id="test-radio" 
          name="test" 
          value="option1" 
          label="Test Radio" 
          size="medium" 
        />
      </ThemeProvider>
    );
    
    wrapperElement = screen.getByText('Test Radio').parentElement;
    expect(wrapperElement).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Radio 
          id="test-radio" 
          name="test" 
          value="option1" 
          label="Test Radio" 
          size="large" 
        />
      </ThemeProvider>
    );
    
    wrapperElement = screen.getByText('Test Radio').parentElement;
    expect(wrapperElement).toBeInTheDocument();
  });
});

describe('RadioGroup Component', () => {
  test('renders group with multiple radio options', () => {
    renderWithTheme(
      <RadioGroup 
        name="test-group" 
        label="Test Group"
      >
        <Radio 
          id="option1" 
          value="option1" 
          label="Option 1" 
        />
        <Radio 
          id="option2" 
          value="option2" 
          label="Option 2" 
        />
        <Radio 
          id="option3" 
          value="option3" 
          label="Option 3" 
        />
      </RadioGroup>
    );
    
    expect(screen.getByText('Test Group')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(3);
  });

  test('handles value changes in the group', () => {
    const handleChange = jest.fn();
    renderWithTheme(
      <RadioGroup 
        name="test-group" 
        label="Test Group"
        onChange={handleChange}
      >
        <Radio 
          id="option1" 
          value="option1" 
          label="Option 1" 
        />
        <Radio 
          id="option2" 
          value="option2" 
          label="Option 2" 
        />
      </RadioGroup>
    );
    
    const secondRadio = screen.getByLabelText('Option 2');
    fireEvent.click(secondRadio);
    
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders with default value selected', () => {
    renderWithTheme(
      <RadioGroup 
        name="test-group" 
        label="Test Group"
        defaultValue="option2"
      >
        <Radio 
          id="option1" 
          value="option1" 
          label="Option 1" 
        />
        <Radio 
          id="option2" 
          value="option2" 
          label="Option 2" 
        />
      </RadioGroup>
    );
    
    const firstRadio = screen.getByLabelText('Option 1') as HTMLInputElement;
    const secondRadio = screen.getByLabelText('Option 2') as HTMLInputElement;
    
    expect(firstRadio.checked).toBe(false);
    expect(secondRadio.checked).toBe(true);
  });

  test('renders with controlled value', () => {
    renderWithTheme(
      <RadioGroup 
        name="test-group" 
        label="Test Group"
        value="option1"
        onChange={() => {}}
      >
        <Radio 
          id="option1" 
          value="option1" 
          label="Option 1" 
        />
        <Radio 
          id="option2" 
          value="option2" 
          label="Option 2" 
        />
      </RadioGroup>
    );
    
    const firstRadio = screen.getByLabelText('Option 1') as HTMLInputElement;
    const secondRadio = screen.getByLabelText('Option 2') as HTMLInputElement;
    
    expect(firstRadio.checked).toBe(true);
    expect(secondRadio.checked).toBe(false);
  });

  test('displays error message in the group', () => {
    renderWithTheme(
      <RadioGroup 
        name="test-group" 
        label="Test Group"
        error="This is a group error"
      >
        <Radio 
          id="option1" 
          value="option1" 
          label="Option 1" 
        />
        <Radio 
          id="option2" 
          value="option2" 
          label="Option 2" 
        />
      </RadioGroup>
    );
    
    expect(screen.getByText('This is a group error')).toBeInTheDocument();
  });
});
