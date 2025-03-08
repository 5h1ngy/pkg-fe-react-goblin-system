# Providers Module Documentation

The **providers** module is responsible for setting up essential contexts and theming across the application. It includes components for global styling using Chakra UI and for managing authentication state through React Context and Redux. This documentation outlines the module’s structure, explains the key components, and provides examples of how to integrate and use them.

## Overview

The providers module comprises two main parts:

1. **Theming**:  
   The `ThemeProvider` component configures global styling and color mode management using Chakra UI. It ensures that a default theme (e.g., "dark") is applied and available throughout the application.

2. **Authentication**:  
   The authentication components create a context for accessing the current user's access token. In addition, specialized route components—`PrivateRoute` and `RedirectPublicRoute`—are provided to secure protected routes and manage redirections based on the user's authentication status.

## File Structure and Components

### Theme Provider

#### `providers/Theme.tsx`
- **Purpose**:  
  Sets up the global theme using Chakra UI.
- **Key Features**:
  - Configures the Chakra UI system using default and custom configurations.
  - Checks local storage and initializes a default theme (e.g., "dark") if none exists.
  - Wraps its children with `ChakraProvider` and a custom `ColorModeProvider` to manage the application's color mode.
- **Usage Example**:
  ```tsx
  import ThemeProvider from 'react-goblin-system/providers/Theme';

  const App = () => (
    <ThemeProvider>
      {/* Your application components */}
    </ThemeProvider>
  );

  export default App;
  ```

### Authentication Provider

#### `providers/Auth/Auth.tsx`
- **Purpose**:  
  Creates an authentication context that provides access to the current user's access token.
- **Implementation Details**:
  - Uses React Context to expose the authentication state.
  - Utilizes Redux's `useSelector` to obtain the `accessToken` from the state managed by the auth slice.
- **Usage**:  
  Wrap your application (or parts of it) with the `Auth` provider to make authentication details available via context.
  ```tsx
  import Auth from 'react-goblin-system/providers/Auth';

  const App = () => (
    <Auth>
      {/* Your application components */}
    </Auth>
  );

  export default App;
  ```

#### `providers/Auth/index.ts`
- **Purpose**:  
  Serves as an aggregator for authentication-related components.
- **Exports**:
  - The default `Auth` provider.
  - The `PrivateRoute` and `RedirectPublicRoute` components for route protection.
- **Usage Example**:
  ```tsx
  import { PrivateRoute, RedirectPublicRoute } from 'react-goblin-system/providers/Auth';

  // Example: Protecting a route
  const ProtectedComponent = () => <div>Protected Content</div>;

  const AppRoutes = () => (
    <Routes>
      <Route path="/dashboard" element={<PrivateRoute render={<ProtectedComponent />} />} />
      <Route path="/auth/login" element={<RedirectPublicRoute render={<LoginComponent />} />} />
    </Routes>
  );
  ```

#### `providers/Auth/shared/hooks.tsx`
- **Purpose**:  
  Provides the custom hook `useAuth` to access the authentication context.
- **Implementation**:
  - Leverages React’s `useContext` to retrieve the current authentication state.
  - Throws an error if used outside of an `Auth` provider to ensure correct usage.
- **Usage Example**:
  ```tsx
  import { useAuth } from 'react-goblin-system/providers/Auth/shared/hooks';

  const UserProfile = () => {
    const { accessToken } = useAuth();
    return <div>User Access Token: {accessToken}</div>;
  };

  export default UserProfile;
  ```

#### `providers/Auth/PrivateRoute.tsx` & `providers/Auth/RedirectPublicRoute.tsx`
- **Purpose**:  
  - `PrivateRoute`: Protects routes that require user authentication by checking for an existing `accessToken` and redirecting unauthenticated users to the login page.
  - `RedirectPublicRoute`: Prevents authenticated users from accessing public routes (e.g., login pages) by redirecting them to a designated page (e.g., dashboard).
- **Usage Example for PrivateRoute**:
  ```tsx
  import { PrivateRoute } from 'react-goblin-system/providers/Auth';

  const Dashboard = () => <div>Dashboard Content</div>;

  const AppRoutes = () => (
    <Routes>
      <Route path="/dashboard" element={<PrivateRoute render={<Dashboard />} />} />
    </Routes>
  );
  ```
- **Usage Example for RedirectPublicRoute**:
  ```tsx
  import { RedirectPublicRoute } from 'react-goblin-system/providers/Auth';

  const LoginComponent = () => <div>Login Form</div>;

  const AppRoutes = () => (
    <Routes>
      <Route path="/auth/login" element={<RedirectPublicRoute render={<LoginComponent />} />} />
    </Routes>
  );
  ```

## Conclusion

The providers module is a foundational part of the application architecture. It centralizes global theming with Chakra UI and manages authentication state seamlessly through React Context and Redux. By using the components and hooks provided in this module, developers can ensure consistent design and secure route protection based on user authentication.

Feel free to expand or modify this documentation to accommodate additional functionalities or project-specific requirements.