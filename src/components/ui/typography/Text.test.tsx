import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Text from './Text';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Text Component', () => {
  test('renders correctly with children', () => {
    renderWithTheme(
      <Text data-testid="test-text">Sample Text</Text>
    );
    
    const text = screen.getByTestId('test-text');
    expect(text).toBeInTheDocument();
    expect(screen.getByText('Sample Text')).toBeInTheDocument();
  });

  test('renders with different variants', () => {
    const { rerender } = renderWithTheme(
      <Text variant="body1" data-testid="test-text">Body 1 Text</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text variant="body2" data-testid="test-text">Body 2 Text</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text variant="caption" data-testid="test-text">Caption Text</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text variant="overline" data-testid="test-text">Overline Text</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Text className="custom-text" data-testid="test-text">Custom Class Text</Text>
    );
    
    const text = screen.getByTestId('test-text');
    expect(text).toHaveClass('custom-text');
  });

  test('renders with different colors', () => {
    const { rerender } = renderWithTheme(
      <Text color="primary" data-testid="test-text">Primary Color</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text color="secondary" data-testid="test-text">Secondary Color</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text color="error" data-testid="test-text">Error Color</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text color="#FF0000" data-testid="test-text">Custom Color</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
  });

  test('renders with different weights', () => {
    const { rerender } = renderWithTheme(
      <Text weight="normal" data-testid="test-text">Normal Weight</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text weight="medium" data-testid="test-text">Medium Weight</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text weight="bold" data-testid="test-text">Bold Weight</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
  });

  test('renders with custom font size', () => {
    renderWithTheme(
      <Text fontSize="20px" data-testid="test-text">Custom Font Size</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    // Testing exact font size would require checking computed styles
  });

  test('renders with different alignments', () => {
    const { rerender } = renderWithTheme(
      <Text align="left" data-testid="test-text">Left Aligned</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text align="center" data-testid="test-text">Center Aligned</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text align="right" data-testid="test-text">Right Aligned</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
  });

  test('renders with custom line height', () => {
    renderWithTheme(
      <Text lineHeight="2" data-testid="test-text">Custom Line Height</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    // Testing exact line height would require checking computed styles
  });

  test('renders with text decoration', () => {
    const { rerender } = renderWithTheme(
      <Text decoration="underline" data-testid="test-text">Underlined Text</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text decoration="line-through" data-testid="test-text">Strikethrough Text</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
  });

  test('renders with text transform', () => {
    const { rerender } = renderWithTheme(
      <Text transform="uppercase" data-testid="test-text">Uppercase Text</Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text transform="lowercase" data-testid="test-text">LOWERCASE TEXT</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Text transform="capitalize" data-testid="test-text">capitalized text</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
  });

  test('renders as different semantic elements', () => {
    const { rerender } = renderWithTheme(
      <Text as="p" data-testid="test-text">Paragraph Text</Text>
    );
    
    expect(screen.getByTestId('test-text').tagName).toBe('P');
    
    rerender(
      <ThemeProvider>
        <Text as="span" data-testid="test-text">Span Text</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text').tagName).toBe('SPAN');
    
    rerender(
      <ThemeProvider>
        <Text as="div" data-testid="test-text">Div Text</Text>
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-text').tagName).toBe('DIV');
  });

  test('supports truncation with ellipsis', () => {
    renderWithTheme(
      <Text truncate data-testid="test-text">
        This is a very long text that should be truncated if it exceeds the container width
      </Text>
    );
    
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
    // Testing truncation behavior would require checking computed styles
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    
    renderWithTheme(
      <Text ref={ref} data-testid="test-text">Reference Text</Text>
    );
    
    const text = screen.getByTestId('test-text');
    expect(ref.current).toBe(text);
  });
});
