---
sidebar_position: 2
---

# HTTP Request Handlers

The HTTP Request Handlers module provides a set of utility functions for handling API requests, responses, and errors in a consistent way across your application.

## Overview

The HTTP Handlers service offers:

1. **Request Interceptors** - Automatically add authentication tokens and headers
2. **Response Handlers** - Standardized processing of API responses
3. **Error Handling** - Consistent error processing with proper error messages
4. **Request Utilities** - Helper functions for common API operations

## Installation

The HTTP Handlers service is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

Import the handlers in your service or component files:

```jsx
import { 
  createApiClient,
  handleApiError,
  handleApiResponse
} from 'pkg-fe-react-goblin-system/services/handlers';

// Create a configured API client
const apiClient = createApiClient({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// Making a request with error handling
const fetchData = async () => {
  try {
    const response = await apiClient.get('/data');
    return handleApiResponse(response);
  } catch (error) {
    throw handleApiError(error);
  }
};
```

## API Reference

### API Client Setup

#### `createApiClient(config): AxiosInstance`

Creates and configures an Axios instance with interceptors for handling authentication and errors.

```js
import { createApiClient } from 'pkg-fe-react-goblin-system/services/handlers';

const apiClient = createApiClient({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Use the configured client for API requests
const response = await apiClient.get('/users');
```

### Response Handlers

#### `handleApiResponse(response): any`

Processes an API response, extracting and validating the data.

```js
import { handleApiResponse } from 'pkg-fe-react-goblin-system/services/handlers';

const fetchUsers = async () => {
  const response = await apiClient.get('/users');
  return handleApiResponse(response);
};
```

### Error Handlers

#### `handleApiError(error): Error`

Processes API errors into standardized error objects with helpful messages.

```js
import { handleApiError } from 'pkg-fe-react-goblin-system/services/handlers';

const fetchData = async () => {
  try {
    const response = await apiClient.get('/data');
    return handleApiResponse(response);
  } catch (error) {
    // Transforms the error into a standardized format
    const standardError = handleApiError(error);
    console.error(standardError.message);
    throw standardError;
  }
};
```

### Authentication Helpers

#### `addAuthHeader(config, token): AxiosRequestConfig`

Adds an authentication token to a request configuration.

```js
import { addAuthHeader } from 'pkg-fe-react-goblin-system/services/handlers';
import { getToken } from 'pkg-fe-react-goblin-system/services/auth';

const makeAuthenticatedRequest = async () => {
  const token = getToken();
  const config = addAuthHeader({
    url: '/protected-resource',
    method: 'GET',
  }, token);
  
  return apiClient(config);
};
```

## Examples

### Creating a Custom API Service

```js
// src/services/userService.js
import { 
  createApiClient, 
  handleApiResponse, 
  handleApiError 
} from 'pkg-fe-react-goblin-system/services/handlers';

// Create an API client for user-related endpoints
const userApiClient = createApiClient({
  baseURL: 'https://api.example.com/users',
});

// User service functions
export const getUser = async (userId) => {
  try {
    const response = await userApiClient.get(`/${userId}`);
    return handleApiResponse(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await userApiClient.put(`/${userId}`, userData);
    return handleApiResponse(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await userApiClient.delete(`/${userId}`);
    return handleApiResponse(response);
  } catch (error) {
    throw handleApiError(error);
  }
};
```

### Using with React Hooks

```jsx
import React, { useState, useEffect } from 'react';
import { createApiClient, handleApiResponse, handleApiError } from 'pkg-fe-react-goblin-system/services/handlers';

// Create API client
const apiClient = createApiClient({
  baseURL: 'https://api.example.com',
});

// Custom hook for data fetching
function useApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(url);
        const processedData = handleApiResponse(response);
        setData(processedData);
        setError(null);
      } catch (err) {
        const processedError = handleApiError(err);
        setError(processedError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

// Usage in a component
function UserProfile({ userId }) {
  const { data: user, error, loading } = useApi(`/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

## Configuration

You can configure the default behavior of the handlers:

```js
// In your app's entry point
import { configureHandlers } from 'pkg-fe-react-goblin-system/services/handlers';

configureHandlers({
  defaultTimeout: 15000,
  defaultHeaders: {
    'Content-Type': 'application/json',
    'X-App-Version': '1.0.0',
  },
  errorMessages: {
    404: 'The requested resource was not found',
    500: 'An unexpected server error occurred',
    // Override default error messages
  },
});
```

## Error Handling Strategy

The HTTP Handlers service implements a comprehensive error handling strategy:

1. **Network Errors**: Catches and formats network-related issues
2. **API Errors**: Processes error responses from the API, including status codes
3. **Validation Errors**: Handles API validation errors with field-specific messages
4. **Timeout Handling**: Provides clear messages for request timeouts
5. **Unauthorized Access**: Special handling for 401/403 responses

When an error occurs, the `handleApiError` function returns a standardized error object with:

- A user-friendly message
- The original error
- HTTP status code (if applicable)
- Error details from the API (if available)

## Related Components

- [Auth Service](./auth-service.md) - Authentication utilities that use these handlers
- **State Management** - Redux store and state handlers that integrates with these services
