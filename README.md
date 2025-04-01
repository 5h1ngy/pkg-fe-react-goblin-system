# 🧙‍♂️ pkg-fe-react-goblin-system

<div align="center">
  <img src="assets/logo.png" alt="pkg-fe-react-goblin-system Logo" width="500">
</div>

<div align="start">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License MIT">
  </a>
  <a href="package.json">
    <img src="https://img.shields.io/badge/version-1.7.0-blue" alt="Version 1.7.0">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/node-%3E%3D20.18.0-blue" alt="Node >=20.18.0">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/react-18.x-blue" alt="React 18.x">
  </a>
</div>

## 🔗 URLs

| Resource  | URL                                                             |
|-----------|------------------------------------------------------------------|
| Website   | https://5h1ngy.github.io/pkg-fe-react-goblin-system/             |
| Storybook | https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook    |
| Docs      | https://5h1ngy.github.io/pkg-fe-react-goblin-system/docs         |

## 🔍 Overview

**pkg-fe-react-goblin-system** (also known as **React Goblin System**) is a comprehensive UI library for React and TypeScript that provides reusable, accessible, and highly customizable components. Built with Styled Components, the library offers a modern component system with a flexible architecture and a powerful theming system.

## ✨ Key Features

- **🎨 Fully customizable UI components** - Buttons, modals, grids, layouts, and more
- **🎭 Advanced theming system** - Customize the complete look and feel of your application
- **📱 Responsive design** - Interfaces optimized for every screen size
- **♿ Built-in accessibility** - WCAG compliance and support for assistive technologies
- **🧩 Consistent APIs** - Uniform design patterns across all components
- **📚 Comprehensive documentation** - Detailed guides and examples for each component
- **🔒 TypeScript** - Complete type definitions for a better developer experience
- **🌐 Global Provider** - Easy application of themes and fonts across your entire application

## 🏗️ Core Architecture

The library is organized into several key modules:

### 🧱 Components
Reusable UI elements organized by function (buttons, feedback, layout, etc.)

### 🛡️ Providers
Context providers that manage global state and functionality:
- **🧙‍♂️ GoblinProvider**: Main provider that applies theme, global styles, and fonts
- **🎨 ThemeProvider**: Manages theme state with light/dark mode support
- **🔑 Auth**: Authentication provider for user authentication flows

### ⚙️ Services
Utility services for common application needs:
- **🔐 auth**: Authentication services with JWT support
- **🔄 handlers**: Common HTTP request handlers

### 🗄️ Store
Redux slices for state management:
- **👤 auth**: Authentication state management
- **🔄 shared**: Shared state utilities

### 🎨 Theme
Comprehensive theming system:
- **🎭 theme.ts**: Theme definitions and tokens
- **🌐 GlobalStyles**: Global style definitions
- **🌓 ThemeProvider**: Theme context provider

## 📚 Documentation

Complete documentation is available in the [docs directory](./docs/docs/intro.md) of the repository.

### 📖 Main Guides

- [🚀 Introduction](./docs/docs/intro.md)
- [💻 Installation Guide](./docs/docs/getting-started.md)
- [🧩 Component List](./docs/docs/components/index.md)
- [🎨 Theme Customization](./docs/docs/theming/index.md)

### 🧱 Components

#### 📐 Layout
- [📦 Container](./docs/docs/components/layout/container.md) - Container to limit and center content
- [📏 Grid](./docs/docs/components/layout/grid.md) - Flexible grid system for responsive layouts

#### 🔘 Buttons
- [👆 Button](./docs/docs/components/buttons/button.md) - Standard buttons with variants and states
- [🔣 IconButton](./docs/docs/components/buttons/iconbutton.md) - Buttons with integrated icons

#### 💬 Feedback
- [🪟 Modal](./docs/docs/components/feedback/modal.md) - Modal windows for dialogs and overlaid content
- [🔄 Spinner](./docs/docs/components/feedback/spinner.md) - Animated loading indicators

#### 📝 Typography
- [📄 Text](./docs/docs/components/typography/text.md) - Text management components
- [📑 Heading](./docs/docs/components/typography/heading.md) - Heading components with various levels

## 📥 Installation

```bash
# With npm
npm install pkg-fe-react-goblin-system

# With Yarn
yarn add pkg-fe-react-goblin-system

# With pnpm
pnpm add pkg-fe-react-goblin-system
```

## 🚀 Quick Usage

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

## 📂 Project Structure

```
src/
├── assets/           # Static assets (images, fonts)
├── components/       # UI components
│   ├── buttons/      # Button components
│   ├── feedback/     # Feedback components (modals, alerts)
│   ├── form/         # Form components and inputs
│   ├── graphics/     # Visual and graphic components
│   ├── layout/       # Layout components (grid, container)
│   ├── navigation/   # Navigation components
│   └── typography/   # Typography components
├── hocs/             # Higher-order components
├── pages/            # Page layouts and templates
│   ├── Error/        # Error page templates
│   ├── Loading/      # Loading page templates
│   └── Transformer/  # Data transformation views
├── providers/        # Context providers
│   └── Auth/         # Authentication provider
├── services/         # Service utilities
│   └── auth/         # Authentication services
├── store/            # State management
│   └── auth/         # Authentication state
└── theme/            # Theming system
    ├── GlobalStyles.tsx  # Global styles
    ├── ThemeProvider.tsx # Theme provider
    └── theme.ts      # Theme definitions
```

## 🛠️ Development

```bash
# Start Storybook development server
npm run start:storybook

# Start documentation site
npm run start:docs

# Build the library
npm run build:lib

# Build Storybook
npm run build:storybook

# Build documentation site
npm run build:docs
```

## 👥 Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.