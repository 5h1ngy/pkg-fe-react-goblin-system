---
sidebar_position: 1
slug: /
---

# Introduction to Goblin System

**Goblin System** is a modern and flexible React component library designed to create elegant and functional user interfaces with ease.

## Key Features

- **Modern, responsive components** - All components are designed to be responsive and work across all devices.
- **Fully typed** - Built with TypeScript for an excellent development experience.
- **Customizable** - Flexible theming system to adapt components to your brand.
- **Accessible** - WAI-ARIA compatibility and focus on the best user experience for everyone.
- **Performant** - Optimized for high performance with minimal footprint.
- **Global Provider** - Easy application of themes and fonts across your entire application.

## Installation

```bash
# Using npm
npm install pkg-fe-react-goblin-system

# Using yarn
yarn add pkg-fe-react-goblin-system

# Using pnpm
pnpm add pkg-fe-react-goblin-system
```

## Quick Setup

### Basic Usage

Wrap your application with the `GoblinProvider` to enable theming and global styles:

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

### Using Components

```jsx
import React from 'react';
import { 
  GoblinProvider,
  Container, 
  Grid, 
  Col, 
  Button, 
  Text 
} from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <GoblinProvider>
      <Container>
        <Grid>
          <Col xs={12} md={6}>
            <Text variant="h1">Welcome to Goblin System</Text>
            <Text>A modern React component library for building beautiful UIs</Text>
            <Button variant="primary">Get Started</Button>
          </Col>
        </Grid>
      </Container>
    </GoblinProvider>
  );
}
```

## Architecture Overview

Goblin System is organized into several key modules:

### Components
Reusable UI elements organized by function:
- **buttons**: Button, IconButton
- **feedback**: Modal, Spinner, Alert
- **form**: Input, Checkbox, RadioButton
- **layout**: Container, Grid, Spacer
- **navigation**: Tabs, Pagination
- **typography**: Text, Heading

### Providers
Context providers that manage global state and functionality:
- **GoblinProvider**: Main provider that applies theme, global styles, and fonts
- **ThemeProvider**: Manages theme state with light/dark mode support
- **Auth**: Authentication provider for user flows

### Services
Utility services for common application needs:
- **auth**: Authentication services
- **handlers**: Common HTTP request handlers

### Store
Redux slices for state management:
- **auth**: Authentication state management

### Theme
Comprehensive theming system:
- **theme.ts**: Theme definitions and tokens
- **GlobalStyles**: Global style definitions

## Next Steps

- Learn about [components](./components/index.md)
- Explore [theming options](./theming/index.md)
- Check out the [getting started guide](./getting-started.md)
