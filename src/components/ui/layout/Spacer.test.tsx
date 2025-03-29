import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Spacer from './Spacer';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Spacer Component', () => {
  test('renders correctly', () => {
    renderWithTheme(
      <Spacer data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Spacer className="custom-spacer" data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toHaveClass('custom-spacer');
  });

  test('renders with size property', () => {
    renderWithTheme(
      <Spacer size="md" data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toBeInTheDocument();
    
    // Test different sizes
    const { rerender } = renderWithTheme(
      <Spacer size="xs" data-testid="test-spacer" />
    );
    
    expect(screen.getByTestId('test-spacer')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Spacer size="sm" data-testid="test-spacer" />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-spacer')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Spacer size="lg" data-testid="test-spacer" />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-spacer')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Spacer size="xl" data-testid="test-spacer" />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('test-spacer')).toBeInTheDocument();
  });

  test('renders with exact size in pixels', () => {
    renderWithTheme(
      <Spacer size={24} data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toBeInTheDocument();
    // Testing exact size would require checking computed styles
  });

  test('renders with horizontal orientation', () => {
    renderWithTheme(
      <Spacer orientation="horizontal" data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toBeInTheDocument();
    // Testing orientation would require checking computed styles
  });

  test('renders with vertical orientation', () => {
    renderWithTheme(
      <Spacer orientation="vertical" data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toBeInTheDocument();
    // Testing orientation would require checking computed styles
  });

  test('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    renderWithTheme(
      <Spacer style={customStyle} data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toBeInTheDocument();
    // Testing custom style would require checking computed styles
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>();
    
    renderWithTheme(
      <Spacer ref={ref} data-testid="test-spacer" />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(ref.current).toBe(spacer);
  });

  test('renders responsive sizes', () => {
    renderWithTheme(
      <Spacer 
        size={{ 
          xs: 'sm', 
          sm: 'md', 
          md: 'lg', 
          lg: 'xl',
          xl: 'xl'
        }} 
        data-testid="test-spacer" 
      />
    );
    
    const spacer = screen.getByTestId('test-spacer');
    expect(spacer).toBeInTheDocument();
    // Testing responsive sizes would require checking computed styles at different breakpoints
  });
});
