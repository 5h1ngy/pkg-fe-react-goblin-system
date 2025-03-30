---
sidebar_position: 2
---

# Getting Started

This guide will help you set up the Goblin System in your React application.

## Installation

You can install Goblin System using npm, yarn, or pnpm:

```bash
# Using npm
npm install pkg-fe-react-goblin-system

# Using yarn
yarn add pkg-fe-react-goblin-system

# Using pnpm
pnpm add pkg-fe-react-goblin-system
```

## Setup

### Using GoblinProvider

The simplest way to use Goblin System is by wrapping your application with the `GoblinProvider`. This automatically sets up the theme, global styles, and fonts.

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

### GoblinProvider Options

The `GoblinProvider` accepts several props to customize its behavior:

```jsx
<GoblinProvider
  initialTheme="light" // 'light' or 'dark'
  useSystemPreference={true} // Use system color scheme preference
  disableGlobalStyles={false} // Set to true to disable global styles
  disableGlobalFonts={false} // Set to true to disable global font styles
>
  {/* Your application code */}
</GoblinProvider>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialTheme` | `'light' \| 'dark'` | `'light'` | Initial theme to use |
| `useSystemPreference` | `boolean` | `false` | Whether to use system preference for theme |
| `disableGlobalStyles` | `boolean` | `false` | Disable global styles |
| `disableGlobalFonts` | `boolean` | `false` | Disable global fonts |

## Using Components

After setting up the `GoblinProvider`, you can start using Goblin System components:

```jsx
import React from 'react';
import {
  GoblinProvider,
  Container,
  Grid,
  Col,
  Text,
  Button
} from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <GoblinProvider>
      <Container>
        <Grid>
          <Col xs={12} md={6}>
            <Text variant="h1">Welcome to my app</Text>
            <Text>Built with Goblin System</Text>
            <Button variant="primary">Get Started</Button>
          </Col>
        </Grid>
      </Container>
    </GoblinProvider>
  );
}
```

## Advanced Configuration

### Custom Theme

You can customize the theme by extending the default theme:

```jsx
import React from 'react';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'pkg-fe-react-goblin-system/theme/theme';

// Create a custom theme by extending the default theme
const customTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: {
      ...lightTheme.colors.primary,
      main: '#1a73e8', // Custom primary color
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

### Using with Redux

If your application uses Redux, you can combine Goblin System with your Redux store:

```jsx
import React from 'react';
import { Provider } from 'react-redux';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GoblinProvider>
        {/* Your application code */}
      </GoblinProvider>
    </Provider>
  );
}
```

### Using with React Router

Goblin System works seamlessly with React Router:

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <GoblinProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </GoblinProvider>
    </BrowserRouter>
  );
}
```

## Next Steps

Once you've set up Goblin System, you can explore the following resources:

- [Component Documentation](./components/index.md): Learn about available components
- [Theming Guide](./theming/index.md): Learn how to customize the look and feel
- [Authentication](./providers/auth.md): Learn about authentication features
