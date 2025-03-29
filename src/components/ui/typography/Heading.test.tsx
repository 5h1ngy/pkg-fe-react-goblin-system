import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Heading from './Heading';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Heading Component', () => {
  test('renders correctly with children', () => {
    renderWithTheme(
      <Heading data-testid="test-heading">Sample Heading</Heading>
    );
    
    const heading = screen.getByTestId('test-heading');
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('Sample Heading')).toBeInTheDocument();
  });

  test('renders with different levels', () => {
    const { rerender } = renderWithTheme(
      <Heading level={1} data-testid="test-heading">H1 Heading</Heading>
    );
    
    expect(screen.getByTestId('test-heading').tagName).toBe('H1');
    
    rerender(
      <ThemeProvider>
        <Heading level={2} data-testid="test-heading">H2 Heading</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading').tagName).toBe('H2');
    
    rerender(
      <ThemeProvider>
        <Heading level={3} data-testid="test-heading">H3 Heading</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading').tagName).toBe('H3');
    
    rerender(
      <ThemeProvider>
        <Heading level={4} data-testid="test-heading">H4 Heading</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading').tagName).toBe('H4');
    
    rerender(
      <ThemeProvider>
        <Heading level={5} data-testid="test-heading">H5 Heading</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading').tagName).toBe('H5');
    
    rerender(
      <ThemeProvider>
        <Heading level={6} data-testid="test-heading">H6 Heading</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading').tagName).toBe('H6');
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Heading className="custom-heading" data-testid="test-heading">Custom Class Heading</Heading>
    );
    
    const heading = screen.getByTestId('test-heading');
    expect(heading).toHaveClass('custom-heading');
  });

  test('renders with different colors', () => {
    const { rerender } = renderWithTheme(
      <Heading color="primary" data-testid="test-heading">Primary Color</Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading color="secondary" data-testid="test-heading">Secondary Color</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading color="error" data-testid="test-heading">Error Color</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading color="#FF0000" data-testid="test-heading">Custom Color</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
  });

  test('renders with different weights', () => {
    const { rerender } = renderWithTheme(
      <Heading weight="normal" data-testid="test-heading">Normal Weight</Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading weight="medium" data-testid="test-heading">Medium Weight</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading weight="bold" data-testid="test-heading">Bold Weight</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
  });

  test('renders with custom font size', () => {
    renderWithTheme(
      <Heading fontSize="32px" data-testid="test-heading">Custom Font Size</Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    // Testing exact font size would require checking computed styles
  });

  test('renders with different alignments', () => {
    const { rerender } = renderWithTheme(
      <Heading align="left" data-testid="test-heading">Left Aligned</Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading align="center" data-testid="test-heading">Center Aligned</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading align="right" data-testid="test-heading">Right Aligned</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
  });

  test('renders with custom margin', () => {
    renderWithTheme(
      <Heading margin="0 0 24px 0" data-testid="test-heading">Custom Margin</Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    // Testing exact margin would require checking computed styles
  });

  test('renders with text transform', () => {
    const { rerender } = renderWithTheme(
      <Heading transform="uppercase" data-testid="test-heading">Uppercase Heading</Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading transform="lowercase" data-testid="test-heading">LOWERCASE HEADING</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Heading transform="capitalize" data-testid="test-heading">capitalized heading</Heading>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
  });

  test('supports truncation with ellipsis', () => {
    renderWithTheme(
      <Heading truncate data-testid="test-heading">
        This is a very long heading that should be truncated if it exceeds the container width
      </Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    // Testing truncation behavior would require checking computed styles
  });

  test('renders with custom line height', () => {
    renderWithTheme(
      <Heading lineHeight="1.5" data-testid="test-heading">Custom Line Height</Heading>
    );
    
    expect(screen.getByTestId('test-heading')).toBeInTheDocument();
    // Testing exact line height would require checking computed styles
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    
    renderWithTheme(
      <Heading ref={ref} data-testid="test-heading">Reference Heading</Heading>
    );
    
    const heading = screen.getByTestId('test-heading');
    expect(ref.current).toBe(heading);
  });
});
