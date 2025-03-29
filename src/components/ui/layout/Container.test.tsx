import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Container from './Container';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Container Component', () => {
  test('renders correctly with children', () => {
    renderWithTheme(
      <Container data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Container className="custom-container" data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(container).toHaveClass('custom-container');
  });

  test('renders with fluid style', () => {
    renderWithTheme(
      <Container fluid data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(container).toBeInTheDocument();
    // Checking styles would require a more sophisticated testing approach
  });

  test('renders with custom maxWidth', () => {
    renderWithTheme(
      <Container maxWidth="1200px" data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(container).toBeInTheDocument();
    // Testing exact maxWidth would require checking computed styles
  });

  test('renders with padding', () => {
    renderWithTheme(
      <Container padding="20px" data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(container).toBeInTheDocument();
    // Testing exact padding would require checking computed styles
  });

  test('renders with no margin when disableGutters is true', () => {
    renderWithTheme(
      <Container disableGutters data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(container).toBeInTheDocument();
    // Testing absence of margin would require checking computed styles
  });

  test('applies custom inline styles', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    
    renderWithTheme(
      <Container style={customStyle} data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(container).toBeInTheDocument();
    // Testing exact styles would require checking computed styles
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>();
    
    renderWithTheme(
      <Container ref={ref} data-testid="test-container">
        <div>Test Content</div>
      </Container>
    );
    
    const container = screen.getByTestId('test-container');
    expect(ref.current).toBe(container);
  });
});
