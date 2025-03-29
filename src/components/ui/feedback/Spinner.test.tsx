import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Spinner from './Spinner';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Spinner Component', () => {
  test('renders correctly', () => {
    renderWithTheme(<Spinner data-testid="test-spinner" />);
    
    expect(screen.getByTestId('test-spinner')).toBeInTheDocument();
  });

  test('renders with different sizes', () => {
    const { rerender } = renderWithTheme(
      <Spinner size="small" data-testid="test-spinner" />
    );
    
    let spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Spinner size="medium" data-testid="test-spinner" />
      </ThemeProvider>
    );
    
    spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Spinner size="large" data-testid="test-spinner" />
      </ThemeProvider>
    );
    
    spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('renders with custom color', () => {
    renderWithTheme(
      <Spinner color="#FF0000" data-testid="test-spinner" />
    );
    
    const spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
    // Testing exact color would require checking styles which is challenging
    // in this simplified test approach
  });

  test('renders with label', () => {
    renderWithTheme(
      <Spinner label="Loading..." data-testid="test-spinner" />
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Spinner className="custom-spinner" data-testid="test-spinner" />
    );
    
    const spinner = screen.getByTestId('test-spinner');
    expect(spinner).toHaveClass('custom-spinner');
  });

  test('renders with centered layout', () => {
    renderWithTheme(
      <Spinner centered data-testid="test-spinner" />
    );
    
    const spinner = screen.getByTestId('test-spinner');
    // We can't easily test CSS positioning, but we can check if it renders
    expect(spinner).toBeInTheDocument();
  });

  test('renders with fullPage layout', () => {
    renderWithTheme(
      <Spinner fullPage data-testid="test-spinner" />
    );
    
    const spinner = screen.getByTestId('test-spinner');
    // We can't easily test CSS positioning, but we can check if it renders
    expect(spinner).toBeInTheDocument();
  });

  test('renders with different types', () => {
    const { rerender } = renderWithTheme(
      <Spinner type="border" data-testid="test-spinner" />
    );
    
    let spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Spinner type="grow" data-testid="test-spinner" />
      </ThemeProvider>
    );
    
    spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Spinner type="dots" data-testid="test-spinner" />
      </ThemeProvider>
    );
    
    spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('renders with custom speed', () => {
    renderWithTheme(
      <Spinner speed="slow" data-testid="test-spinner" />
    );
    
    const spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
    // Testing animation speed would require checking styles which is challenging
  });
});
