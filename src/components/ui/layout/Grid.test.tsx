import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Row, Column } from './Grid';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Row Component', () => {
  test('renders correctly with children', () => {
    renderWithTheme(
      <Row data-testid="test-row">
        <div>Row Content</div>
      </Row>
    );
    
    const row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
    expect(screen.getByText('Row Content')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Row className="custom-row" data-testid="test-row">
        <div>Row Content</div>
      </Row>
    );
    
    const row = screen.getByTestId('test-row');
    expect(row).toHaveClass('custom-row');
  });

  test('renders with custom gutter', () => {
    renderWithTheme(
      <Row gutter={16} data-testid="test-row">
        <div>Row Content</div>
      </Row>
    );
    
    const row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
    // Testing exact gutter spacing would require checking computed styles
  });

  test('renders with different alignments', () => {
    const { rerender } = renderWithTheme(
      <Row align="start" data-testid="test-row">
        <div>Row Content</div>
      </Row>
    );
    
    let row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Row align="center" data-testid="test-row">
          <div>Row Content</div>
        </Row>
      </ThemeProvider>
    );
    
    row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Row align="end" data-testid="test-row">
          <div>Row Content</div>
        </Row>
      </ThemeProvider>
    );
    
    row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
  });

  test('renders with different justifications', () => {
    const { rerender } = renderWithTheme(
      <Row justify="start" data-testid="test-row">
        <div>Row Content</div>
      </Row>
    );
    
    let row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Row justify="center" data-testid="test-row">
          <div>Row Content</div>
        </Row>
      </ThemeProvider>
    );
    
    row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Row justify="end" data-testid="test-row">
          <div>Row Content</div>
        </Row>
      </ThemeProvider>
    );
    
    row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Row justify="space-between" data-testid="test-row">
          <div>Row Content</div>
        </Row>
      </ThemeProvider>
    );
    
    row = screen.getByTestId('test-row');
    expect(row).toBeInTheDocument();
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>();
    
    renderWithTheme(
      <Row ref={ref} data-testid="test-row">
        <div>Row Content</div>
      </Row>
    );
    
    const row = screen.getByTestId('test-row');
    expect(ref.current).toBe(row);
  });
});

describe('Column Component', () => {
  test('renders correctly with children', () => {
    renderWithTheme(
      <Column data-testid="test-column">
        <div>Column Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('test-column');
    expect(column).toBeInTheDocument();
    expect(screen.getByText('Column Content')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Column className="custom-column" data-testid="test-column">
        <div>Column Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('test-column');
    expect(column).toHaveClass('custom-column');
  });

  test('renders with span property', () => {
    renderWithTheme(
      <Column span={6} data-testid="test-column">
        <div>Column Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('test-column');
    expect(column).toBeInTheDocument();
    // Testing exact span width would require checking computed styles
  });

  test('renders with offset property', () => {
    renderWithTheme(
      <Column offset={2} data-testid="test-column">
        <div>Column Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('test-column');
    expect(column).toBeInTheDocument();
    // Testing exact offset would require checking computed styles
  });

  test('renders with responsive span properties', () => {
    renderWithTheme(
      <Column 
        xs={12}
        sm={8}
        md={6}
        lg={4}
        xl={3}
        data-testid="test-column"
      >
        <div>Column Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('test-column');
    expect(column).toBeInTheDocument();
    // Testing responsive spans would require checking computed styles
  });

  test('renders with custom order', () => {
    renderWithTheme(
      <Column order={2} data-testid="test-column">
        <div>Column Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('test-column');
    expect(column).toBeInTheDocument();
    // Testing exact order would require checking computed styles
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>();
    
    renderWithTheme(
      <Column ref={ref} data-testid="test-column">
        <div>Column Content</div>
      </Column>
    );
    
    const column = screen.getByTestId('test-column');
    expect(ref.current).toBe(column);
  });
});
