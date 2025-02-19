# pkg-fe-react-goblin-system

<div align="center">
  <!-- Logo (from assets/logo.png) centered -->
  <img src="assets/logo.png" alt="pkg-fe-react-goblin-system Logo" width="500">
</div>

<!-- Example badges from img.shields.io (customize as desired) -->
<div align="start">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License MIT">
  </a>
  <a href="package.json">
    <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Version 0.1.0">
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

**pkg-fe-react-goblin-system** (also referred to as **React Goblin System**) is a **TypeScript** and **React**-based front-end package that provides reusable UI components, context providers (e.g., Auth and Theme), layouts, services, and Redux store modules. It aims to streamline the development of modular, scalable applications by leveraging modern libraries and best practices, including **Chakra UI**, **React Router**, and **Redux Toolkit**.

### Key Features

- **Rich UI Components** powered by [Chakra UI](https://chakra-ui.com) (buttons, alerts, accordions, dialogs, and more).  
- **Providers** for theme (`Theme`) and authentication (`AuthProvider`) to simplify overall integration.  
- **Layouts** (e.g., `Error`, `Loading`, `Transformer`) for structured and maintainable code.  
- **Ready-made Auth Services** (`services/auth`) and **Redux Store** slices (`store/auth`, `store/shared`).  
- **Preconfigured** with:
  - **Vite** (development server and library build).
  - **Storybook** for component development and interactive demos.
  - **Jest** & **Testing Library** for unit/integration tests.
  - **Docusaurus** for extensive documentation (`docs` folder).

## Project Structure

A simplified structure example:

```
pkg-fe-react-goblin-system/
├─ .storybook/           # Storybook configuration (addons, preview, main.ts, etc.)
├─ docs/                 # Docusaurus documentation
├─ src/
│  ├─ components/        # React components (Chakra-based, forms, tables, etc.)
│  ├─ hocs/              # Higher-Order Components
│  ├─ layouts/           # Top-level layouts (Error, Loading, etc.)
│  ├─ providers/         # Providers for Auth, Theme, etc.
│  ├─ services/          # Service modules (e.g. auth)
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

1. **Install dependencies**:

   ```bash
   yarn install
   ```
   > Or use `npm install`, depending on your preference and setup.

2. **Start developing**:
   - **Storybook**:
     ```bash
     yarn start:storybook
     ```
     Storybook will run at port `6006`.
   - **Docs (Docusaurus)**:
     ```bash
     yarn start:docs
     ```
     Documentation will run locally (usually on port `3000`).

3. **Build**:
   - **Build the Library**:
     ```bash
     yarn build:lib
     ```
     Compiles the library into the `dist/` folder.
   - **Type Declarations**:
     ```bash
     yarn build:types
     ```
     Emits `.d.ts` files in `dist/types`.
   - **Storybook**:
     ```bash
     yarn build:storybook
     ```
     Outputs a static Storybook in `build-storybook/`.
   - **Docs**:
     ```bash
     yarn build:docs
     ```
     Generates a static Docusaurus site in `build-docusaurus/`.

4. **Clean**:
   ```bash
   yarn clean
   ```
   Removes `node_modules` and `dist`.

## Usage Example

Once the library is built (or used as an internal workspace), you can import its components, services, or providers. For example:

```jsx
import { Button } from "react-goblin-system/components/Factory/Chakra/button";
import { useAuthStore } from "react-goblin-system/store/auth";

function MyComponent() {
  const { login } = useAuthStore(); // Custom Redux hook for authentication

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

Wrapping your root application in the **Theme** and **Auth** providers is also straightforward:

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

- **`start:storybook`** – Start Storybook in dev mode (default at port 6006).  
- **`start:docs`** – Start local Docusaurus docs (default at port 3000).  
- **`test`** – Run tests with Jest (and Vitest if configured).  
- **`build:storybook`** – Build static Storybook in `build-storybook/`.  
- **`build:docs`** – Build static docs in `build-docusaurus/`.  
- **`build:lib`** – Build library with Vite (`vite.config.lib.ts`).  
- **`build:types`** – Generate `.d.ts` TypeScript declarations.  
- **`clean`** – Remove `node_modules` and `dist`.

## Contributing

1. **Fork** the repository or create a new branch in your clone.  
2. **Install** dependencies, then work on your feature or fix inside `src/`.  
3. **Open a pull request** describing your changes and improvements.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file or reference the information within the `package.json` for details.

## References

- [React](https://reactjs.org/)  
- [Chakra UI](https://chakra-ui.com/)  
- [Storybook](https://storybook.js.org/)  
- [Docusaurus](https://docusaurus.io/)  
- [Vite](https://vitejs.dev/)  
- [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/)  