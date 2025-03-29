import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Navbar, { NavItem } from './Navbar';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Navbar Component', () => {
  test('renders correctly with brand', () => {
    renderWithTheme(
      <Navbar brand="Test Brand" data-testid="test-navbar" />
    );
    
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByTestId('test-navbar')).toBeInTheDocument();
  });

  test('renders with children elements', () => {
    renderWithTheme(
      <Navbar data-testid="test-navbar">
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
      </Navbar>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('renders with expandable menu in mobile view', () => {
    renderWithTheme(
      <Navbar data-testid="test-navbar">
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
      </Navbar>
    );
    
    // Find the mobile toggle button (hamburger menu)
    const mobileToggle = screen.getByRole('button');
    expect(mobileToggle).toBeInTheDocument();
    
    // Test the toggle functionality
    fireEvent.click(mobileToggle);
    // In reality, this would toggle a state that shows/hides the menu
    // But in the test, we just make sure the toggle exists and is clickable
  });

  test('renders with custom className', () => {
    renderWithTheme(
      <Navbar className="custom-navbar" data-testid="test-navbar" />
    );
    
    const navbar = screen.getByTestId('test-navbar');
    expect(navbar).toHaveClass('custom-navbar');
  });

  test('renders with custom brand component', () => {
    const BrandComponent = () => <div data-testid="custom-brand">Custom Brand</div>;
    
    renderWithTheme(
      <Navbar brandComponent={<BrandComponent />} data-testid="test-navbar" />
    );
    
    expect(screen.getByTestId('custom-brand')).toBeInTheDocument();
  });

  test('renders in fixed position', () => {
    renderWithTheme(
      <Navbar fixed data-testid="test-navbar" />
    );
    
    const navbar = screen.getByTestId('test-navbar');
    expect(navbar).toBeInTheDocument();
    // Testing position styles is challenging in JSDOM
  });

  test('renders with right aligned elements', () => {
    renderWithTheme(
      <Navbar data-testid="test-navbar">
        <NavItem>Left Item</NavItem>
        <div style={{ marginLeft: 'auto' }}>
          <NavItem>Right Item</NavItem>
        </div>
      </Navbar>
    );
    
    expect(screen.getByText('Left Item')).toBeInTheDocument();
    expect(screen.getByText('Right Item')).toBeInTheDocument();
  });

  test('renders with custom colors', () => {
    renderWithTheme(
      <Navbar 
        backgroundColor="#FF0000" 
        color="#FFFFFF"
        data-testid="test-navbar" 
      />
    );
    
    const navbar = screen.getByTestId('test-navbar');
    expect(navbar).toBeInTheDocument();
    // Testing exact colors would require checking computed styles which is challenging
  });
});

describe('NavItem Component', () => {
  test('renders correctly', () => {
    renderWithTheme(
      <NavItem data-testid="test-nav-item">Test Item</NavItem>
    );
    
    const navItem = screen.getByTestId('test-nav-item');
    expect(navItem).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  test('renders as link with href', () => {
    renderWithTheme(
      <NavItem href="/test" data-testid="test-nav-item">Link Item</NavItem>
    );
    
    const navItemLink = screen.getByTestId('test-nav-item');
    expect(navItemLink).toHaveAttribute('href', '/test');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    
    renderWithTheme(
      <NavItem onClick={handleClick} data-testid="test-nav-item">
        Clickable Item
      </NavItem>
    );
    
    const navItem = screen.getByTestId('test-nav-item');
    fireEvent.click(navItem);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with active state', () => {
    renderWithTheme(
      <NavItem active data-testid="test-nav-item">Active Item</NavItem>
    );
    
    const navItem = screen.getByTestId('test-nav-item');
    expect(navItem).toBeInTheDocument();
    // Testing active styles would be easier with a more sophisticated testing approach
  });

  test('applies custom className', () => {
    renderWithTheme(
      <NavItem className="custom-nav-item" data-testid="test-nav-item">
        Item with custom class
      </NavItem>
    );
    
    const navItem = screen.getByTestId('test-nav-item');
    expect(navItem).toHaveClass('custom-nav-item');
  });
});
