# Local Installation from Tarball

This guide explains how to build the **pkg-fe-react-goblin-system** project, generate a tarball from the library build, and install it locally. This process is ideal for testing package changes before publishing a new version.

## Prerequisites

Before proceeding, ensure your development environment meets these requirements:

- **Node.js**: >= 20.18.0  
- **Yarn**: >= 4.7.0 (or use npm if preferred)
- **Git**

## Building the Package

Follow these steps to build the project and generate a tarball:

1. **Clone the Repository** (if not already done):

   ```bash
   git clone https://github.com/5h1ngy/pkg-fe-react-goblin-system.git
   cd pkg-fe-react-goblin-system
   ```

2. **Install Dependencies**:

   With Yarn:

   ```bash
   yarn install
   ```

3. **Build the Library**:

   The library build process compiles the code using Vite (with `vite.config.lib.ts`), generates TypeScript declaration files, creates a tarball via `npm pack`, and moves the tarball into the `build-lib/` folder. To start this process, run:

   ```bash
   yarn build:lib
   ```

   After the build completes, locate the generated tarball in the `build-lib/` folder (for example, it may be named `react-goblin-system-0.3.58.tgz`).

## Installing the Tarball Locally

Once the tarball is generated, follow these steps to install it as a local development dependency in another project:

1. **Navigate to Your Local Project**:

   Change directory to the project where you want to test the package:

   ```bash
   cd /path/to/your/local-project
   ```

2. **Install the Tarball**:

   With Yarn, run:

   ```bash
   yarn add file:/path/to/pkg-fe-react-goblin-system/build-lib/react-goblin-system-0.3.58.tgz --dev
   ```

   Replace `/path/to/pkg-fe-react-goblin-system/` with the actual path to your cloned repository and ensure the tarball file name matches the generated file.

3. **Verify the Installation**:

   Check your project's `package.json` or the `node_modules` directory to confirm that the package is installed correctly.

## Troubleshooting

- **Build Issues**:  
  If the build fails, verify that all dependencies are installed correctly and that your Node.js version meets the requirements.

- **Installation Errors**:  
  Ensure the tarball path is accurate. If errors persist, try deleting the `node_modules` folder and reinstalling the dependencies.

## Conclusion

By following these steps, you can build the **pkg-fe-react-goblin-system** project into a tarball and install it locally. This method is ideal for testing new changes before releasing an updated version of the package.

For additional details, refer to other sections of the documentation.