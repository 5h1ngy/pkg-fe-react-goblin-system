---
sidebar_position: 1
---

# Authentication Store

The Authentication Store is a Redux-based state management solution for handling authentication in your application.

## Overview

The Auth Store provides:

1. **Authentication State** - Track user authentication status
2. **User Information** - Store and access user data
3. **Login/Logout Actions** - Redux actions for authentication operations
4. **Token Management** - Handle authentication tokens in sync with Redux state
5. **Selectors** - Easy access to authentication state

## Installation

The Auth Store is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

### Setting Up the Store

First, add the auth reducer to your Redux store:

```jsx
// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'pkg-fe-react-goblin-system/store/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers...
  },
});

export default store;
```

### Using Auth Actions

Import and dispatch auth actions:

```jsx
import { useDispatch } from 'react-redux';
import { 
  loginUser,
  logoutUser,
  registerUser
} from 'pkg-fe-react-goblin-system/store/auth';

function LoginButton() {
  const dispatch = useDispatch();
  
  const handleLogin = async () => {
    try {
      await dispatch(loginUser({
        email: 'user@example.com',
        password: 'password123'
      }));
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };
  
  return <button onClick={handleLogin}>Login</button>;
}
```

### Accessing Auth State

Access authentication state using selectors:

```jsx
import { useSelector } from 'react-redux';
import { 
  selectIsAuthenticated,
  selectCurrentUser,
  selectAuthLoading,
  selectAuthError
} from 'pkg-fe-react-goblin-system/store/auth';

function AuthStatus() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  
  if (loading) {
    return <div>Loading authentication status...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h3>Welcome, {currentUser.name}!</h3>
          <p>Email: {currentUser.email}</p>
        </div>
      ) : (
        <div>Please log in to continue</div>
      )}
    </div>
  );
}
```

## API Reference

### Auth Slice State

The auth slice contains the following state:

```typescript
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: Error | null;
}
```

### Actions

#### `loginUser(credentials)`

Authenticates a user with the provided credentials:

```js
import { useDispatch } from 'react-redux';
import { loginUser } from 'pkg-fe-react-goblin-system/store/auth';

function LoginForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = async (formData) => {
    try {
      const resultAction = await dispatch(loginUser({
        email: formData.email,
        password: formData.password
      }));
      
      // Check if login was successful
      if (loginUser.fulfilled.match(resultAction)) {
        console.log('Login successful!', resultAction.payload);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  // Form component
}
```

#### `registerUser(userData)`

Registers a new user with the provided data:

```js
import { useDispatch } from 'react-redux';
import { registerUser } from 'pkg-fe-react-goblin-system/store/auth';

function RegisterForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = async (formData) => {
    try {
      const resultAction = await dispatch(registerUser({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        // Other user data
      }));
      
      if (registerUser.fulfilled.match(resultAction)) {
        console.log('Registration successful!', resultAction.payload);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  
  // Form component
}
```

#### `logoutUser()`

Logs out the current user:

```js
import { useDispatch } from 'react-redux';
import { logoutUser } from 'pkg-fe-react-goblin-system/store/auth';

function LogoutButton() {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  
  return <button onClick={handleLogout}>Logout</button>;
}
```

#### `refreshAuthToken()`

Refreshes the authentication token:

```js
import { useDispatch } from 'react-redux';
import { refreshAuthToken } from 'pkg-fe-react-goblin-system/store/auth';

// Automatic token refresh
useEffect(() => {
  const refreshInterval = setInterval(() => {
    dispatch(refreshAuthToken());
  }, 15 * 60 * 1000); // Refresh every 15 minutes
  
  return () => clearInterval(refreshInterval);
}, [dispatch]);
```

### Selectors

#### `selectIsAuthenticated(state)`

Returns whether the user is authenticated:

```js
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'pkg-fe-react-goblin-system/store/auth';

function ProtectedComponent() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  if (!isAuthenticated) {
    return <div>Please log in to view this content</div>;
  }
  
  return <div>Protected content here</div>;
}
```

#### `selectCurrentUser(state)`

Returns the current authenticated user:

```js
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'pkg-fe-react-goblin-system/store/auth';

function UserProfile() {
  const user = useSelector(selectCurrentUser);
  
  if (!user) {
    return null;
  }
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Other user properties */}
    </div>
  );
}
```

#### `selectAuthToken(state)`

Returns the current authentication token:

```js
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'pkg-fe-react-goblin-system/store/auth';

function useAuthHeader() {
  const token = useSelector(selectAuthToken);
  
  return {
    Authorization: token ? `Bearer ${token}` : '',
  };
}
```

#### `selectAuthLoading(state)`

Returns whether an authentication operation is in progress:

```js
import { useSelector } from 'react-redux';
import { selectAuthLoading } from 'pkg-fe-react-goblin-system/store/auth';

function AuthButton() {
  const isLoading = useSelector(selectAuthLoading);
  
  return (
    <button disabled={isLoading}>
      {isLoading ? 'Processing...' : 'Login'}
    </button>
  );
}
```

#### `selectAuthError(state)`

Returns any authentication error:

```js
import { useSelector } from 'react-redux';
import { selectAuthError } from 'pkg-fe-react-goblin-system/store/auth';

function AuthErrorDisplay() {
  const error = useSelector(selectAuthError);
  
  if (!error) {
    return null;
  }
  
  return (
    <div className="error-message">
      {error.message}
    </div>
  );
}
```

## Examples

### Complete Login Form with Redux

```jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  loginUser, 
  selectAuthLoading, 
  selectAuthError 
} from 'pkg-fe-react-goblin-system/store/auth';
import { 
  Container, 
  Input, 
  Button, 
  Text 
} from 'pkg-fe-react-goblin-system';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      // Redirect or show success message
    } catch (err) {
      // Error is handled by the Redux slice
    }
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

### Protected Routes with Redux

```jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  selectIsAuthenticated, 
  selectAuthLoading 
} from 'pkg-fe-react-goblin-system/store/auth';
import { Spinner } from 'pkg-fe-react-goblin-system';

function ProtectedRoutes() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectAuthLoading);
  
  if (isLoading) {
    return (
      <Container>
        <Spinner size="lg" />
        <Text>Checking authentication...</Text>
      </Container>
    );
  }
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

// Usage with React Router
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

## Integration with Auth Service

The Auth Store integrates with the Auth Service to handle API calls and token management:

```jsx
// Simplified example of how the auth slice works internally
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, logout } from 'pkg-fe-react-goblin-system/services/auth';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await login(credentials.email, credentials.password);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Similar implementations for registerUser and logoutUser

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,
    refreshToken: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Synchronous reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
    // Similar cases for registerUser and logoutUser
  },
});
```

## Related Components

- [Auth Provider](../providers/auth-provider.md) - React context provider for authentication
- [Auth Service](../services/auth-service.md) - Authentication service APIs
