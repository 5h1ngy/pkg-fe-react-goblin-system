---
sidebar_position: 1
---

# Theme System

The Goblin System includes a powerful and flexible theming system that allows you to customize the appearance of your application.

## Overview

The theme system provides:

1. **Light and Dark Modes** - Built-in light and dark themes
2. **Color Palettes** - Comprehensive set of color tokens
3. **Typography** - Type scale, font families, and text styles
4. **Spacing** - Consistent spacing scale
5. **Breakpoints** - Responsive design breakpoints
6. **Animation** - Transition and animation settings

## Theme Structure

The Goblin System theme is built with TypeScript and follows this structure:

```typescript
interface Theme {
  mode: 'light' | 'dark';
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  radii: Radii;
  breakpoints: Breakpoints;
}
```

## Using the Theme

### With GoblinProvider

The simplest way to use the theme is with the `GoblinProvider`:

```jsx
import React from 'react';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <GoblinProvider>
      {/* Your application code */}
    </GoblinProvider>
  );
}
```

### Accessing Theme Values in Components

You can access theme values in your styled components:

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.primary.contrastText};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radii.md};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.md};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary.dark};
  }
`;
```

## Theme Tokens

### Colors

The theme includes a comprehensive color system:

```typescript
interface ColorPalette {
  primary: ColorShades;
  secondary: ColorShades;
  tertiary: ColorShades;
  success: ColorShades;
  warning: ColorShades;
  error: ColorShades;
  info: ColorShades;
  neutral: NeutralColors;
  background: {
    default: string;
    paper: string;
    alt: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
}

interface ColorShades {
  lightest: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  darkest: string;
  contrastText: string;
}

interface NeutralColors {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}
```

### Typography

The typography system provides consistent text styles:

```typescript
interface Typography {
  fontFamily: string;
  fontFamilyMono: string;
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
  };
}
```

### Spacing

The spacing system provides consistent spacing values:

```typescript
interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}
```

### Border Radius

The radius system for consistent corner rounding:

```typescript
interface Radii {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  pill: string;
  circle: string;
}
```

### Breakpoints

Breakpoints for responsive design:

```typescript
interface Breakpoints {
  xs: string;  // Extra small devices
  sm: string;  // Small devices
  md: string;  // Medium devices
  lg: string;  // Large devices
  xl: string;  // Extra large devices
}
```

## Customizing the Theme

### Creating a Custom Theme

You can create a custom theme by extending the default themes:

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';
import { lightTheme } from 'pkg-fe-react-goblin-system/theme/theme';

// Customize the theme
const customTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: {
      ...lightTheme.colors.primary,
      main: '#1e88e5', // Custom primary color
      dark: '#0d47a1',
      light: '#64b5f6',
      contrastText: '#ffffff',
    },
    secondary: {
      ...lightTheme.colors.secondary,
      main: '#ff4081', // Custom secondary color
    },
  },
  typography: {
    ...lightTheme.typography,
    fontFamily: "'Poppins', 'SF Pro Display', sans-serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <GoblinProvider disableGlobalStyles={false}>
        {/* Your application code */}
      </GoblinProvider>
    </ThemeProvider>
  );
}
```

### Theme Toggle

You can implement a theme toggle using the `useTheme` hook:

```jsx
import React from 'react';
import { useTheme, ThemeProvider } from 'styled-components';
import { GoblinProvider, Button } from 'pkg-fe-react-goblin-system';
import { lightTheme, darkTheme } from 'pkg-fe-react-goblin-system/theme/theme';

function ThemeToggle() {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(theme.mode === 'dark');
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GoblinProvider>
        <Button onClick={toggleTheme}>
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Button>
        {/* Rest of your application */}
      </GoblinProvider>
    </ThemeProvider>
  );
}
```

## Global Styles

The Goblin System provides global styles through the `GlobalStyles` component, which is automatically included when using the `GoblinProvider`.

### Understanding Global Styles

The Global Styles apply base styling to HTML elements for consistent appearance:

- Reset browser default styles
- Apply base typography settings
- Set up consistent form elements
- Configure focus states for accessibility
- Provide smooth scrolling behavior

### Custom Global Styles

If you need to extend the global styles:

```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GoblinProvider, GlobalStyles } from 'pkg-fe-react-goblin-system';

// Create custom global styles
const CustomGlobalStyles = createGlobalStyle`
  // Your custom global styles here
  ::selection {
    background-color: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrastText};
  }
  
  // Additional custom styles
`;

function App() {
  return (
    <GoblinProvider>
      <CustomGlobalStyles />
      {/* Your application code */}
    </GoblinProvider>
  );
}
```

## Theme Utilities

### Using Media Queries

The theme provides breakpoint utilities for responsive design:

```jsx
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  width: 100%;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 540px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 720px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 960px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 1140px;
  }
`;
```

### Color Utilities

You can use theme colors in various ways:

```jsx
import styled from 'styled-components';

const StatusIndicator = styled.div`
  background-color: ${props => {
    switch (props.status) {
      case 'success':
        return props.theme.colors.success.main;
      case 'warning':
        return props.theme.colors.warning.main;
      case 'error':
        return props.theme.colors.error.main;
      default:
        return props.theme.colors.neutral[300];
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'success':
        return props.theme.colors.success.contrastText;
      case 'warning':
        return props.theme.colors.warning.contrastText;
      case 'error':
        return props.theme.colors.error.contrastText;
      default:
        return props.theme.colors.text.primary;
    }
  }};
`;
```

## Related Components

- [GoblinProvider](../providers/goblin-provider.md) - Main provider for theming
- [ThemeProvider](./theme-provider.md) - Underlying theme provider component
- [GlobalStyles](./global-styles.md) - Global style definitions
