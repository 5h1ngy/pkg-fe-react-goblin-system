---
sidebar_position: 1
---

# Authentication Service

The Authentication Service provides a set of utility functions for handling user authentication, including login, registration, token management, and API requests.

## Overview

The Auth Service module offers a comprehensive set of utilities for implementing authentication in your application:

1. **Authentication APIs** - Functions for login, registration, and logout
2. **Token Management** - JWT token handling, including storage and parsing
3. **HTTP Client** - Configured Axios instance with authentication headers
4. **Error Handling** - Standardized error handling for authentication operations

## Installation

The Auth Service is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

Import the Auth Service in your components or services:

```jsx
import { 
  login,
  register,
  logout,
  getCurrentUser,
  isAuthenticated
} from 'pkg-fe-react-goblin-system/services/auth';

// Log in a user
const handleLogin = async (email, password) => {
  try {
    const user = await login(email, password);
    console.log('Logged in successfully:', user);
    return user;
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};
```

## API Reference

### Authentication Functions

#### `login(email: string, password: string): Promise<User>`

Authenticates a user with their email and password.

```js
import { login } from 'pkg-fe-react-goblin-system/services/auth';

const handleLogin = async () => {
  try {
    const user = await login('user@example.com', 'password123');
    // Handle successful login
  } catch (error) {
    // Handle login failure
  }
};
```

#### `register(userData: RegisterData): Promise<User>`

Registers a new user with the provided data.

```js
import { register } from 'pkg-fe-react-goblin-system/services/auth';

const handleRegister = async () => {
  try {
    const user = await register({
      email: 'newuser@example.com',
      password: 'securepassword',
      name: 'New User',
      // Other registration fields
    });
    // Handle successful registration
  } catch (error) {
    // Handle registration failure
  }
};
```

#### `logout(): Promise<void>`

Logs out the current user, clearing tokens and state.

```js
import { logout } from 'pkg-fe-react-goblin-system/services/auth';

const handleLogout = async () => {
  try {
    await logout();
    // Handle successful logout
  } catch (error) {
    // Handle logout failure
  }
};
```

### Token Management

#### `getToken(): string | null`

Retrieves the current authentication token from storage.

```js
import { getToken } from 'pkg-fe-react-goblin-system/services/auth';

const token = getToken();
if (token) {
  // User has a valid token
} else {
  // No token found
}
```

#### `setToken(token: string): void`

Stores an authentication token.

```js
import { setToken } from 'pkg-fe-react-goblin-system/services/auth';

setToken('your-jwt-token-here');
```

#### `removeToken(): void`

Removes the authentication token from storage.

```js
import { removeToken } from 'pkg-fe-react-goblin-system/services/auth';

removeToken(); // Clear the token (e.g., during logout)
```

### User Management

#### `getCurrentUser(): User | null`

Gets the current authenticated user based on the stored token.

```js
import { getCurrentUser } from 'pkg-fe-react-goblin-system/services/auth';

const user = getCurrentUser();
if (user) {
  console.log('Current user:', user.name);
} else {
  console.log('No user is currently authenticated');
}
```

#### `isAuthenticated(): boolean`

Checks if a user is currently authenticated.

```js
import { isAuthenticated } from 'pkg-fe-react-goblin-system/services/auth';

if (isAuthenticated()) {
  // User is authenticated
} else {
  // User is not authenticated
}
```

## HTTP Client

The Auth Service includes a pre-configured Axios instance that automatically handles authentication headers.

```js
import { authHttpClient } from 'pkg-fe-react-goblin-system/services/auth';

// Making an authenticated API request
const fetchUserData = async (userId) => {
  try {
    const response = await authHttpClient.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
```

## Examples

### Login Form with Auth Service

```jsx
import React, { useState } from 'react';
import { login } from 'pkg-fe-react-goblin-system/services/auth';
import { Input, Button, Text } from 'pkg-fe-react-goblin-system';

function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const user = await login(email, password);
      onSuccess(user);
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Text color="error">{error}</Text>}
      
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
  );
}
```

### Authentication Check in Routes

```jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from 'pkg-fe-react-goblin-system/services/auth';

function ProtectedRoute({ children }) {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  
  useEffect(() => {
    const checkAuth = () => {
      const authed = isAuthenticated();
      setIsAuthed(authed);
      setAuthChecked(true);
    };
    
    checkAuth();
  }, []);
  
  if (!authChecked) {
    return <div>Checking authentication...</div>;
  }
  
  if (!isAuthed) {
    return <Navigate to="/login" />;
  }
  
  return children;
}
```

## Configuration

You can configure the Auth Service by setting environment variables:

```js
// In your app's entry point (e.g., index.js)
import { configureAuthService } from 'pkg-fe-react-goblin-system/services/auth';

configureAuthService({
  apiBaseUrl: 'https://api.example.com',
  tokenStorage: 'localStorage', // or 'sessionStorage', 'memory'
  tokenKey: 'custom_token_key', // Default is 'auth_token'
  refreshTokenKey: 'custom_refresh_token_key', // Default is 'refresh_token'
});
```

## Related Components

- [Auth Provider](../providers/auth-provider.md) - React context provider for authentication
- [Auth Store](../store/auth-store.md) - Redux state management for authentication
