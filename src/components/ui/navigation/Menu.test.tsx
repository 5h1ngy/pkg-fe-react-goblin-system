import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { Menu, MenuItem, MenuDivider, MenuTitle } from './Menu';

// Helper function to render components with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe('Menu Component', () => {
  test('renders correctly with items', () => {
    renderWithTheme(
      <Menu data-testid="test-menu">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    );
    
    expect(screen.getByTestId('test-menu')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  test('renders with title', () => {
    renderWithTheme(
      <Menu title="Menu Title" data-testid="test-menu">
        <MenuItem>Item 1</MenuItem>
      </Menu>
    );
    
    expect(screen.getByText('Menu Title')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithTheme(
      <Menu className="custom-menu" data-testid="test-menu">
        <MenuItem>Item 1</MenuItem>
      </Menu>
    );
    
    const menu = screen.getByTestId('test-menu');
    expect(menu).toHaveClass('custom-menu');
  });

  test('renders with different sizes', () => {
    const { rerender } = renderWithTheme(
      <Menu size="small" data-testid="test-menu">
        <MenuItem>Item 1</MenuItem>
      </Menu>
    );
    
    let menu = screen.getByTestId('test-menu');
    expect(menu).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Menu size="medium" data-testid="test-menu">
          <MenuItem>Item 1</MenuItem>
        </Menu>
      </ThemeProvider>
    );
    
    menu = screen.getByTestId('test-menu');
    expect(menu).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Menu size="large" data-testid="test-menu">
          <MenuItem>Item 1</MenuItem>
        </Menu>
      </ThemeProvider>
    );
    
    menu = screen.getByTestId('test-menu');
    expect(menu).toBeInTheDocument();
  });

  test('renders with borders', () => {
    renderWithTheme(
      <Menu bordered data-testid="test-menu">
        <MenuItem>Item 1</MenuItem>
      </Menu>
    );
    
    const menu = screen.getByTestId('test-menu');
    expect(menu).toBeInTheDocument();
    // Testing border styles would require checking computed styles
  });
});

describe('MenuItem Component', () => {
  test('renders correctly', () => {
    renderWithTheme(
      <MenuItem data-testid="test-menu-item">Test Item</MenuItem>
    );
    
    const menuItem = screen.getByTestId('test-menu-item');
    expect(menuItem).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    
    renderWithTheme(
      <MenuItem onClick={handleClick} data-testid="test-menu-item">
        Clickable Item
      </MenuItem>
    );
    
    const menuItem = screen.getByTestId('test-menu-item');
    fireEvent.click(menuItem);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders as link with href', () => {
    renderWithTheme(
      <MenuItem href="/test" data-testid="test-menu-item">
        Link Item
      </MenuItem>
    );
    
    const menuItemLink = screen.getByTestId('test-menu-item');
    expect(menuItemLink).toHaveAttribute('href', '/test');
  });

  test('renders with icon', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    
    renderWithTheme(
      <MenuItem 
        icon={<TestIcon />}
        data-testid="test-menu-item"
      >
        Item with Icon
      </MenuItem>
    );
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  test('renders in disabled state', () => {
    renderWithTheme(
      <MenuItem disabled data-testid="test-menu-item">
        Disabled Item
      </MenuItem>
    );
    
    const menuItem = screen.getByTestId('test-menu-item');
    expect(menuItem).toHaveAttribute('disabled');
  });

  test('renders with active state', () => {
    renderWithTheme(
      <MenuItem active data-testid="test-menu-item">
        Active Item
      </MenuItem>
    );
    
    const menuItem = screen.getByTestId('test-menu-item');
    expect(menuItem).toBeInTheDocument();
    // Testing active styles would be easier with a more sophisticated testing approach
  });

  test('renders with submenu', () => {
    renderWithTheme(
      <MenuItem data-testid="test-menu-item">
        Parent Item
        <Menu data-testid="submenu">
          <MenuItem>Submenu Item 1</MenuItem>
          <MenuItem>Submenu Item 2</MenuItem>
        </Menu>
      </MenuItem>
    );
    
    expect(screen.getByText('Parent Item')).toBeInTheDocument();
    expect(screen.getByTestId('submenu')).toBeInTheDocument();
    expect(screen.getByText('Submenu Item 1')).toBeInTheDocument();
    expect(screen.getByText('Submenu Item 2')).toBeInTheDocument();
  });
});

describe('MenuDivider Component', () => {
  test('renders correctly', () => {
    renderWithTheme(
      <Menu data-testid="test-menu">
        <MenuItem>Item 1</MenuItem>
        <MenuDivider data-testid="test-divider" />
        <MenuItem>Item 2</MenuItem>
      </Menu>
    );
    
    expect(screen.getByTestId('test-divider')).toBeInTheDocument();
  });
});

describe('MenuTitle Component', () => {
  test('renders correctly', () => {
    renderWithTheme(
      <Menu data-testid="test-menu">
        <MenuTitle data-testid="test-title">Section Title</MenuTitle>
        <MenuItem>Item 1</MenuItem>
      </Menu>
    );
    
    const menuTitle = screen.getByTestId('test-title');
    expect(menuTitle).toBeInTheDocument();
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });
});
