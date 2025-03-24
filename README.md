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

## URLs 🌐

| Key       | Value                                                                           |
|-----------|---------------------------------------------------------------------------------|
| Website   | https://5h1ngy.github.io/pkg-fe-react-goblin-system/                            |
| Storybook | https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook                   |

## Overview 🚀

**pkg-fe-react-goblin-system** (also known as **React Goblin System**) is a **TypeScript** and **React** package that provides reusable UI components, context providers (e.g., Auth and Theme), layouts, services, and Redux store modules. It streamlines the development of modular, scalable applications by leveraging modern libraries and best practices such as **Chakra UI**, **React Router**, and **Redux Toolkit**.

## Features ✨

- **UI components** ready to use (buttons, alerts, accordions, dialogs...) based on [Chakra UI](https://chakra-ui.com) 🪄  
- **Integrated Context Providers** (for example, `AuthProvider` and `Theme`) to simplify authentication and theme management.  
- **Modular layouts** like `Error`, `Loading`, `Transformer` for better code organization.  
- **Redux Store** with preconfigured slices (`auth`, `shared`, etc.) and **services** such as `auth`.  
- **Development tools**:  
  - **Vite** for development and library builds.  
  - **Storybook** for interactive component exploration.  
  - **Jest** & **Testing Library** for tests.  
  - **Docusaurus** for comprehensive documentation (in the `docs` folder).  

In short, this project aims to provide a robust front-end architecture with many “ready-to-go” solutions to speed up development.

## Requirements 🏁

Before using or building the package, make sure you have:

- **Node.js**: >= 20.18.0  
- **Yarn**: >= 4.7.0 (or npm, if you prefer)  
- **React**: 18.x (peer dependency)  
- Other peer dependencies specified in `package.json` (e.g., Chakra UI, Redux Toolkit…)

## Project Structure 🏗

```
pkg-fe-react-goblin-system/
├─ .storybook/           # Storybook configurations (addons, preview, main.ts, etc.)
├─ docs/                 # Docusaurus documentation
├─ src/
│  ├─ components/        # React components (Chakra-based, forms, tables, etc.)
│  ├─ hocs/              # Higher-Order Components
│  ├─ layouts/           # Top-level layouts (Error, Loading, etc.)
│  ├─ providers/         # Providers for Auth, Theme, etc.
│  ├─ services/          # Service modules (e.g., auth)
│  └─ store/             # Redux store and slices
├─ package.json          # Project info, dependencies, and scripts
├─ tsconfig.json         # Main TypeScript config (references for app, node, types)
├─ tsconfig.app.json     # TS config for the application
├─ tsconfig.node.json    # TS config for Node environments
├─ tsconfig.types.json   # TS config for generating .d.ts
├─ vite.config.ts        # Main Vite config (development)
├─ vite.config.lib.ts    # Vite config for library builds
├─ jest.config.js        # Jest test configuration
└─ ... (other configs)
```

## Installation 📦

### Local Development Setup 🛠

1. **Install dependencies**:

   ```bash
   yarn install
   ```
   > Alternatively, use `npm install`.

2. **Start the development environment**:
   - **Storybook**:
     ```bash
     yarn start:storybook
     ```
     By default, it runs on port `6006`.
   - **Docs (Docusaurus)**:
     ```bash
     yarn start:docs
     ```
     Usually runs locally on port `3000`.

### Local Installation from Tarball 🍂

After building the library, a tarball is generated that can be used as a local development dependency:

1. **Build the library** (see Build Process below).
2. Locate the generated tarball in the `build-lib/` folder.
3. Install the `.tgz` file as a dev dependency in your project:

   ```bash
   yarn add file:./build-lib/<tarball-file-name>.tgz --dev
   ```

## Build Process 🏭

This process compiles the library, generates declaration files, and creates a tarball:

1. **Build the library**:
   ```bash
   yarn build:lib
   ```
   Uses Vite (`vite.config.lib.ts`) to compile into `dist/`, generates `.d.ts` in `dist/types`, runs `npm pack`, moves the tarball to `build-lib/`, and cleans `dist/`.

2. **Build declarations**:
   ```bash
   yarn build:types
   ```
   Generates `.d.ts` (also handled by `build:lib`).

3. **Build Storybook**:
   ```bash
   yarn build:storybook
   ```
   Outputs a static Storybook in `build-storybook/`.

4. **Build documentation**:
   ```bash
   yarn build:docs
   ```
   Produces a static Docusaurus site in `build-docusaurus/`.

5. **Clean**:
   ```bash
   yarn clean
   ```
   Removes `node_modules`, `dist`, `build-docusaurus`, `build-storybook`, and `build-lib`.

## Usage Example 💻

Once installed or built locally:

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

Then wrap your app with the **Theme** and **Auth** providers:

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

## Scripts from `package.json` 🚀

- **`start:storybook`** – Start Storybook in dev mode (port `6006`).  
- **`start:docs`** – Start Docusaurus locally (port `3000`).  
- **`test`** – Run tests with Jest.  
- **`build:storybook`** – Build a static Storybook into `build-storybook/`.  
- **`build:docs`** – Build static documentation in `build-docusaurus/`.  
- **`build:lib`** – Build the library with Vite and package it as a tarball.  
- **`build:types`** – Generate `.d.ts` declaration files.  
- **`clean`** – Remove build directories (`dist`, `build-docusaurus`, `build-storybook`, `build-lib`) and `node_modules`.

## Contributing 🤝

1. **Fork** the repository or create a new branch in your clone.
2. **Install** dependencies and develop your feature/fix in `src/`.
3. **Open a pull request** describing your changes and improvements.

## License 📜

This project is released under the **MIT** License. For details, see the `LICENSE` file or the `package.json`.

## References 📚

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Docusaurus](https://docusaurus.io/)
- [Vite](https://vitejs.dev/)
- [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/)