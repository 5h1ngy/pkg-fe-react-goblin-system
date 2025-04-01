---
sidebar_position: 2
---

# Auth Provider

The Auth Provider in Goblin System provides a complete authentication solution for your React applications. It handles user authentication flows, token management, and protected routes.

## Overview

The Auth Provider offers these key features:

1. **User Authentication** - Login, registration, and logout functionality
2. **Token Management** - Handling of JWT tokens, including storage and refresh
3. **Protected Routes** - Route protection based on authentication status
4. **Auth State** - Global authentication state management
5. **Integration with Redux** - Built-in Redux store for auth state

## Installation

The Auth Provider is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

Wrap your application with the Auth Provider:

```jsx
import React from 'react';
import { AuthProvider } from 'pkg-fe-react-goblin-system/providers/Auth';
import { GoblinProvider } from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <GoblinProvider>
      <AuthProvider
        authEndpoint="https://api.example.com/auth"
        onLoginSuccess={(user) => console.log('User logged in:', user)}
        onLogout={() => console.log('User logged out')}
      >
        {/* Your application code */}
      </AuthProvider>
    </GoblinProvider>
  );
}

export default App;
```

## API Reference

### AuthProvider Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Child components |
| `authEndpoint` | `string` | Required | Base URL for authentication API |
| `tokenStorage` | `'localStorage' \| 'sessionStorage' \| 'memory'` | `'localStorage'` | Where to store authentication tokens |
| `onLoginSuccess` | `(user: User) => void` | `undefined` | Callback function called after successful login |
| `onLoginFailure` | `(error: Error) => void` | `undefined` | Callback function called after login failure |
| `onLogout` | `() => void` | `undefined` | Callback function called after logout |
| `autoRefresh` | `boolean` | `true` | Whether to automatically refresh tokens |
| `refreshInterval` | `number` | `300000` (5 min) | Time in milliseconds between token refresh attempts |

### useAuth Hook

The `useAuth` hook provides access to authentication functionality and state:

```jsx
import { useAuth } from 'pkg-fe-react-goblin-system/providers/Auth';

function MyComponent() {
  const { 
    user,           // Current user object, null if not logged in
    isAuthenticated, // Boolean indicating if user is authenticated
    login,          // Function to log in
    logout,         // Function to log out
    register,       // Function to register a new user
    isLoading,      // Boolean indicating if an auth operation is in progress
    error           // Any authentication error
  } = useAuth();
  
  // Use these values and functions in your component
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <button onClick={() => login('user@example.com', 'password')}>
          Log in
        </button>
      )}
    </div>
  );
}
```

## Examples

### Login Form

```jsx
import React, { useState } from 'react';
import { useAuth } from 'pkg-fe-react-goblin-system/providers/Auth';
import { 
  Container, 
  Input, 
  Button, 
  Text 
} from 'pkg-fe-react-goblin-system';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Text variant="h2">Login</Text>
        
        {error && <Text color="error">{error.message}</Text>}
        
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Container>
  );
}
```

### Protected Route

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'pkg-fe-react-goblin-system/providers/Auth';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

// Usage with React Router
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}
```

## Integration with Redux

The Auth Provider automatically integrates with Redux. If you're using Redux in your application, you can access the auth state from your Redux store:

```jsx
import { useSelector } from 'react-redux';

function MyComponent() {
  const authState = useSelector((state) => state.auth);
  
  return (
    <div>
      {authState.isAuthenticated ? (
        <p>Welcome, {authState.user.name}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

## Advanced Configuration

### Custom Token Storage

```jsx
import React from 'react';
import { AuthProvider } from 'pkg-fe-react-goblin-system/providers/Auth';

function App() {
  return (
    <AuthProvider
      authEndpoint="https://api.example.com/auth"
      tokenStorage="sessionStorage" // Use session storage instead of local storage
    >
      {/* Your application code */}
    </AuthProvider>
  );
}
```

### Custom Auth Endpoints

If your API has different endpoints than the defaults, you can customize them:

```jsx
import React from 'react';
import { AuthProvider } from 'pkg-fe-react-goblin-system/providers/Auth';

function App() {
  return (
    <AuthProvider
      authEndpoint="https://api.example.com"
      endpoints={{
        login: '/custom/login',          // Default: '/auth/login'
        register: '/custom/register',    // Default: '/auth/register'
        logout: '/custom/logout',        // Default: '/auth/logout'
        refresh: '/custom/refresh-token' // Default: '/auth/refresh'
      }}
    >
      {/* Your application code */}
    </AuthProvider>
  );
}
```

## Related Components

- **Form Components** - Pre-built login and registration form components
- [Auth Store](../store/auth-store.md) - Redux store for authentication
