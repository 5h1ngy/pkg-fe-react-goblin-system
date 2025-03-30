---
sidebar_position: 4
---

# Theme Customization

Goblin System offers a powerful and flexible theming system that allows you to easily customize the appearance of all components.

## Theming Core Concepts

The Goblin System theming system is based on:

1. **Theme Provider**: A context provider component that wraps your application
2. **Theme Object**: A JavaScript object that defines all theme values
3. **Styled Components**: The underlying library that manages component styles

## Theme Provider

The `ThemeProvider` must wrap your application to ensure that all components have access to the theme:

```jsx
import { ThemeProvider } from 'pkg-fe-react-goblin-system';
import App from './App';

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
```

## Using the Default Theme

By default, Goblin System uses a modern and professional theme that suits most applications. You don't need to configure anything to use this theme.

## Theme Customization

### Custom Complete Theme

You can provide a custom theme to the `ThemeProvider`:

```jsx
import { ThemeProvider, createTheme } from 'pkg-fe-react-goblin-system';

// Create a custom theme
const customTheme = createTheme({
  colors: {
    primary: '#1E88E5',
    secondary: '#6C757D',
    success: '#43A047',
    error: '#E53935',
    warning: '#FFB300',
    info: '#039BE5',
    bgDefault: '#F8F9FA',
    bgElevated: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#757575',
    border: '#DFE3E8',
  },
  // Other customizations...
});

const App = () => (
  <ThemeProvider theme={customTheme}>
    <YourApplication />
  </ThemeProvider>
);
```

### Extending the Default Theme

You can extend the default theme by modifying only specific parts:

```jsx
import { ThemeProvider, defaultTheme } from 'pkg-fe-react-goblin-system';

// Extend the default theme
const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF5722',
    secondary: '#9C27B0',
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    <YourApplication />
  </ThemeProvider>
);
```

## Complete Theme Structure

The Goblin System theme is organized into logical sections:

```jsx
const themeStructure = {
  // Color palette
  colors: {
    primary: '#1976D2',
    secondary: '#6C757D',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
    info: '#03A9F4',
    bgDefault: '#F5F5F5',
    bgElevated: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#757575',
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    // ... other colors
  },
  
  // Typography
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      xs: 1.1,
      sm: 1.25,
      md: 1.5,
      lg: 1.75,
      xl: 2,
    },
    variants: {
      h1: { /* specific styles for h1 */ },
      h2: { /* specific styles for h2 */ },
      // ... other variants
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  // Breakpoints
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  
  // Borders and radius
  radii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    round: '50%',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    lg: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
    xl: '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
  },
  
  // Transitions
  transitions: {
    duration: {
      short: '150ms',
      medium: '300ms',
      long: '500ms',
    },
    timing: {
      ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
      easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
  },
  
  // Grid
  grid: {
    columns: 12,
    gutters: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
  },
  
  // Component-specific styles
  components: {
    Button: {
      // Button-specific customizations
    },
    Modal: {
      // Modal-specific customizations
    },
    // ... other components
  },
};
```

## Component-Specific Customization

Each component can be customized individually through the theme's `components` property:

```jsx
const customTheme = createTheme({
  // General theme...
  
  components: {
    Button: {
      borderRadius: '8px',
      fontWeight: 500,
      variants: {
        primary: {
          backgroundColor: '#1E88E5',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1976D2',
          },
        },
        secondary: {
          // ... customizations for secondary variant
        },
        // ... other variants
      },
      sizes: {
        small: {
          padding: '4px 8px',
          fontSize: '0.85rem',
        },
        medium: {
          // ... customizations for medium size
        },
        large: {
          // ... customizations for large size
        },
      },
    },
    
    Modal: {
      borderRadius: '12px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05)',
      // ... other customizations
    },
    
    // ... other components
  },
});
```

## Using Theme Values in Your Components

You can access theme values in your custom components using the `useTheme` hook:

```jsx
import React from 'react';
import { useTheme } from 'pkg-fe-react-goblin-system';

const MyCustomComponent = () => {
  const theme = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.bgElevated,
      padding: theme.spacing.md,
      borderRadius: theme.radii.md,
      boxShadow: theme.shadows.md,
      color: theme.colors.textPrimary,
    }}>
      <h3 style={{ 
        fontSize: theme.typography.fontSizes.lg,
        fontWeight: theme.typography.fontWeights.medium,
      }}>
        My Custom Component
      </h3>
      <p>This component uses Goblin System theme values</p>
    </div>
  );
};

export default MyCustomComponent;
```

## Predefined Themes

Goblin System includes several predefined themes that you can use as starting points:

```jsx
import { 
  ThemeProvider, 
  lightTheme,
  darkTheme,
  contrastTheme 
} from 'pkg-fe-react-goblin-system';

// Light theme (default)
const App1 = () => (
  <ThemeProvider theme={lightTheme}>
    <YourApplication />
  </ThemeProvider>
);

// Dark theme
const App2 = () => (
  <ThemeProvider theme={darkTheme}>
    <YourApplication />
  </ThemeProvider>
);

// High contrast theme (for improved accessibility)
const App3 = () => (
  <ThemeProvider theme={contrastTheme}>
    <YourApplication />
  </ThemeProvider>
);
```

## Dynamic Dark Mode

You can implement a toggle for dark mode using a custom hook:

```jsx
import React, { useState, useMemo } from 'react';
import { ThemeProvider, lightTheme, darkTheme } from 'pkg-fe-react-goblin-system';

const ThemeToggleContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useThemeToggle = () => React.useContext(ThemeToggleContext);

export const ThemeToggleProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);
  
  const contextValue = useMemo(() => {
    return { isDarkMode, toggleTheme };
  }, [isDarkMode]);
  
  return (
    <ThemeToggleContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

// Usage
const App = () => (
  <ThemeToggleProvider>
    <RootComponent />
  </ThemeToggleProvider>
);

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();
  
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};
```

## Theming Best Practices

1. **Consistency**: Use theme values consistently throughout the application
2. **Accessibility**: Ensure that the colors you choose meet accessibility requirements (adequate contrast)
3. **Modularity**: Define common values in the theme to promote reuse and maintainability
4. **Flexibility**: Design your theme to support different use cases and preferences
5. **Semantics**: Use semantic naming for color variables (e.g., `primary`, `success`) rather than visual names (e.g., `blue`, `green`)
