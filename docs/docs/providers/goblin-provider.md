---
sidebar_position: 1
---

# GoblinProvider

The `GoblinProvider` is the main provider component for the Goblin System library. It automatically applies theme, global styles, and modern fonts to your application.

## Overview

The GoblinProvider simplifies the setup process for Goblin System by combining three key functionalities:

1. **Theme application** - Applies light or dark theme based on configuration
2. **Global styles** - Sets up base styling for consistent appearance
3. **Font loading** - Loads and applies modern typography

## Installation

The GoblinProvider is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

Wrap your application with the GoblinProvider:

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

export default App;
```

## API Reference

### Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Child components that will have access to the provider |
| `initialTheme` | `'light' \| 'dark'` | `'light'` | Initial theme to use |
| `useSystemPreference` | `boolean` | `false` | When true, uses system color scheme preference |
| `disableGlobalStyles` | `boolean` | `false` | When true, disables global styles |
| `disableGlobalFonts` | `boolean` | `false` | When true, disables global fonts |

## Examples

### With System Theme Preference

```jsx
import React from 'react';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <GoblinProvider 
      initialTheme="light"
      useSystemPreference={true}
    >
      {/* Your application code */}
    </GoblinProvider>
  );
}
```

### Without Global Styles

If you want to use only the theme without applying global styles:

```jsx
import React from 'react';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <GoblinProvider disableGlobalStyles={true}>
      {/* Your application code */}
    </GoblinProvider>
  );
}
```

### Custom Theme Configuration

For more advanced theming, you can use the GoblinProvider with a custom theme:

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';
import { lightTheme } from 'pkg-fe-react-goblin-system/theme/theme';

// Create your custom theme by extending the light theme
const customTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: {
      ...lightTheme.colors.primary,
      main: '#3498db', // Custom primary color
    },
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

## Implementation Details

The GoblinProvider internally uses:

- `styled-components` ThemeProvider for theme management
- Dynamic theme switching based on system preferences (if enabled)
- Global style application for consistent base styling
- Modern font loading with fallbacks

## Related Components

- [ThemeProvider](../theme/theme-provider.md) - The underlying theme provider
- [GlobalStyles](../theme/global-styles.md) - Global CSS styles
- [GlobalFonts](../components/typography/global-fonts.md) - Typography and font management
