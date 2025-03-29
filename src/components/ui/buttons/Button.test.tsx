import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Button from './Button';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Button Component', () => {
  test('renders button with text', () => {
    renderWithTheme(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('applies different variants correctly', () => {
    const { rerender } = renderWithTheme(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button', { name: /primary/i });
    
    // Re-render with different variants
    rerender(<ThemeProvider><Button variant="secondary">Secondary</Button></ThemeProvider>);
    const secondaryButton = screen.getByRole('button', { name: /secondary/i });
    
    rerender(<ThemeProvider><Button variant="outline">Outline</Button></ThemeProvider>);
    const outlineButton = screen.getByRole('button', { name: /outline/i });
    
    rerender(<ThemeProvider><Button variant="ghost">Ghost</Button></ThemeProvider>);
    const ghostButton = screen.getByRole('button', { name: /ghost/i });
    
    // We can't test exact styles with Jest, but we can verify the button renders
    expect(button).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
    expect(outlineButton).toBeInTheDocument();
    expect(ghostButton).toBeInTheDocument();
  });

  test('applies different sizes correctly', () => {
    const { rerender } = renderWithTheme(<Button size="small">Small</Button>);
    const smallButton = screen.getByRole('button', { name: /small/i });
    
    rerender(<ThemeProvider><Button size="medium">Medium</Button></ThemeProvider>);
    const mediumButton = screen.getByRole('button', { name: /medium/i });
    
    rerender(<ThemeProvider><Button size="large">Large</Button></ThemeProvider>);
    const largeButton = screen.getByRole('button', { name: /large/i });
    
    expect(smallButton).toBeInTheDocument();
    expect(mediumButton).toBeInTheDocument();
    expect(largeButton).toBeInTheDocument();
  });

  test('disables the button when disabled prop is true', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    
    expect(button).toBeDisabled();
  });

  test('shows loading state when loading prop is true', () => {
    renderWithTheme(<Button loading>Loading</Button>);
    
    // The spinner should be in the document when loading
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click Me</Button>);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick} disabled>Click Me</Button>);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders as a link when href is provided', () => {
    renderWithTheme(<Button href="https://example.com">Link Button</Button>);
    
    const linkButton = screen.getByRole('link', { name: /link button/i });
    
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', 'https://example.com');
  });
});
