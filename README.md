# pkg-fe-react-goblin-system

<div align="center">
  <img src="assets/logo.png" alt="pkg-fe-react-goblin-system Logo" width="500">
</div>

<div align="start">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License MIT">
  </a>
  <a href="package.json">
    <img src="https://img.shields.io/badge/version-0.3.58-blue" alt="Version 0.3.58">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/node-%3E%3D20.18.0-blue" alt="Node >=20.18.0">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/react-18.x-blue" alt="React 18.x">
  </a>
</div>

## URLs

| Key       | Value                                                                           |
|-----------|---------------------------------------------------------------------------------|
| Website   | https://5h1ngy.github.io/pkg-fe-react-goblin-system/                            |
| Storybook | https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook                   |

## Overview

**pkg-fe-react-goblin-system** (also referred to as **React Goblin System**) is a **TypeScript** and **React**-based front-end package that provides reusable UI components, context providers (e.g., Auth and Theme), layouts, services, and Redux store modules. It streamlines the development of modular, scalable applications by leveraging modern libraries and best practices, including **Chakra UI**, **React Router**, and **Redux Toolkit**.

### Key Features

- **Rich UI Components** powered by [Chakra UI](https://chakra-ui.com) (buttons, alerts, accordions, dialogs, and more).
- **Providers** for theme (`Theme`) and authentication (`AuthProvider`) for seamless integration.
- **Layouts** (e.g., `Error`, `Loading`, `Transformer`) for structured and maintainable code.
- **Pre-built Auth Services** (`services/auth`) and **Redux Store** slices (`store/auth`, `store/shared`).
- **Preconfigured** with:
  - **Vite** for development and library builds.
  - **Storybook** for component development and interactive demos.
  - **Jest** & **Testing Library** for unit/integration tests.
  - **Docusaurus** for comprehensive documentation (`docs` folder).

## Requirements

Before building or using the package, ensure your development environment meets these requirements:

- **Node.js**: >= 20.18.0
- **Yarn**: >= 4.7.0 (or npm, if preferred)
- **React**: 18.x (peer dependency)
- Other peer dependencies as specified in the package.json (e.g., Chakra UI, Redux Toolkit, etc.)

## Project Structure

```
pkg-fe-react-goblin-system/
├─ .storybook/           # Storybook configuration (addons, preview, main.ts, etc.)
├─ docs/                 # Docusaurus documentation
├─ src/
│  ├─ components/        # React components (Chakra-based, forms, tables, etc.)
│  ├─ hocs/              # Higher-Order Components
│  ├─ layouts/           # Top-level layouts (Error, Loading, etc.)
│  ├─ providers/         # Providers for Auth, Theme, etc.
│  ├─ services/          # Service modules (e.g., auth)
│  └─ store/             # Redux store setup and slices
├─ package.json          # Project info, dependencies, and scripts
├─ tsconfig.json         # Main TypeScript config (references to app, node, types)
├─ tsconfig.app.json     # TS config for the application
├─ tsconfig.node.json    # TS config for Node environments
├─ tsconfig.types.json   # TS config for .d.ts generation
├─ vite.config.ts        # Main Vite config (development)
├─ vite.config.lib.ts    # Vite config for library builds
├─ jest.config.js        # Jest test configuration
└─ ... (other configs)
```

## Installation

### Local Development Setup

1. **Install Dependencies**:

   ```bash
   yarn install
   ```
   > Alternatively, use `npm install` based on your preference.

2. **Start Developing**:
   - **Storybook**:
     ```bash
     yarn start:storybook
     ```
     Storybook will run on port `6006`.
   - **Docs (Docusaurus)**:
     ```bash
     yarn start:docs
     ```
     Documentation will run locally (usually on port `3000`).

### Local Installation from Tarball

After building the library, a tarball is generated which can be used as a local development dependency:

1. **Build the Library** (see Build Process below).
2. Locate the generated tarball in the `build-lib/` folder.
3. Install the tarball as a development dependency in your project:

   ```bash
   yarn add file:./build-lib/<tarball-file-name>.tgz --dev
   ```
   Replace `<tarball-file-name>` with the actual tarball name (e.g., `react-goblin-system-0.3.58.tgz`).

## Build Process

The build process compiles the library, generates type declarations, and packages the library into a tarball. Follow these steps:

1. **Build the Library**:
   ```bash
   yarn build:lib
   ```
   This command uses Vite with `vite.config.lib.ts` to compile the library into the `dist/` folder, generates TypeScript declaration files in `dist/types`, creates a tarball using `npm pack`, moves the tarball to the `build-lib/` folder, and cleans up the `dist/` directory.

2. **Build Type Declarations**:
   ```bash
   yarn build:types
   ```
   Generates `.d.ts` files in `dist/types` (this is also handled by the `build:lib` script).

3. **Build Storybook**:
   ```bash
   yarn build:storybook
   ```
   Outputs a static Storybook site in `build-storybook/`.

4. **Build Documentation**:
   ```bash
   yarn build:docs
   ```
   Generates a static Docusaurus site in `build-docusaurus/`.

5. **Clean Build Artifacts**:
   ```bash
   yarn clean
   ```
   Removes `node_modules`, `dist`, `build-docusaurus`, `build-storybook`, and `build-lib` to ensure a clean build environment.

## Usage Example

Once the library is built or installed locally, you can import its components, services, or providers. For example:

```jsx
import { Button } from "react-goblin-system/components/Factory/Chakra/button";
import { useAuthStore } from "react-goblin-system/store/auth";

function MyComponent() {
  const { login } = useAuthStore();

  return (
    <div>
      <Button onClick={() => login("user", "password")}>
        Login
      </Button>
    </div>
  );
}

export default MyComponent;
```

Wrap your root application with the **Theme** and **Auth** providers:

```jsx
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-goblin-system/providers/Auth";
import { Theme } from "react-goblin-system/providers/Theme";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <Theme>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Theme>
);
```

## Scripts from `package.json`

- **`start:storybook`** – Start Storybook in development mode (default on port 6006).  
- **`start:docs`** – Start local Docusaurus documentation (default on port 3000).  
- **`test`** – Run tests with Jest (and Vitest if configured).  
- **`build:storybook`** – Build a static Storybook site in `build-storybook/`.  
- **`build:docs`** – Build static documentation in `build-docusaurus/`.  
- **`build:lib`** – Build the library with Vite (`vite.config.lib.ts`) and package it into a tarball.  
- **`build:types`** – Generate `.d.ts` TypeScript declaration files.  
- **`clean`** – Remove `node_modules` and build directories (`dist`, `build-docusaurus`, `build-storybook`, `build-lib`).

## Contributing

1. **Fork** the repository or create a new branch in your clone.
2. **Install** dependencies and work on your feature or fix in the `src/` folder.
3. **Open a pull request** describing your changes and improvements.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file or refer to the `package.json` for details.

## References

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Docusaurus](https://docusaurus.io/)
- [Vite](https://vitejs.dev/)
- [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/)