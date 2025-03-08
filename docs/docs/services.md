# Services Module Documentation

The **services** module is responsible for managing API communication, error handling, and providing type definitions for API responses across the application. It supports both real API calls and mock responses, making it ideal for both development and production environments.

## Overview

The module is organized into several key components:

- **Error Handling**:  
  A generic error handler (`errorHandler`) in `services/handlers.ts` wraps API calls to provide consistent error management across all services.

- **Type Definitions**:  
  The `services/types.ts` file contains generic types for paginated responses and standard API responses, ensuring type safety and consistency.

- **Authentication Services**:  
  The authentication services are implemented within the `services/auth` folder. These files provide functions for user registration, login, and token refresh using Axios for HTTP requests, while utilizing the error handler to manage exceptions.

- **Mock Responses**:  
  The `services/auth/mock.ts` file offers predefined responses for authentication operations, enabling seamless testing and development without the need for real API calls.

## Error Handling

### `services/handlers.ts`

The `errorHandler` function standardizes error management for API calls. It intercepts errors thrown during Axios requests and converts them into a consistent format containing `status` and `message` properties. Special cases include:

- When a response contains error data.
- When the service is unreachable or an unknown error occurs.

**Example Usage**:
```typescript
import { errorHandler } from 'react-goblin-system/services/handlers';

const response = await errorHandler(async () => {
  // Your API call here
});
```

## Type Definitions

### `services/types.ts`

This file defines the core types used in API communications:

- **`ResponsePaginated<T>`**:  
  Represents a paginated response containing an array of items along with pagination metadata.
  
- **`Response<T>`**:  
  A generic wrapper for API responses.
  
- **`RequestPaginated`**:  
  Specifies the structure for making paginated API requests.

## Authentication Services

The authentication services are located in the `services/auth` folder and consist of several key files:

### `services/auth/index.ts`

This file implements three key asynchronous functions using Axios:

- **`register`**:  
  Sends user registration data (including a `FormData` object and an application ID) to the API.
- **`login`**:  
  Authenticates a user by sending login credentials.
- **`refresh`**:  
  Refreshes authentication tokens using a provided refresh token.

Each function checks the environment variable `VITE_USE_MOCK` to determine whether to return a mocked response (with a simulated delay) or perform a real API call.

**Example**:
```typescript
import { login } from 'react-goblin-system/services/auth';

login(formData)
  .then(response => {
    // Handle successful login
  })
  .catch(error => {
    // Handle error
  });
```

### `services/auth/mock.ts`

For development and testing, mock responses are provided:
- **`registerResponse`**
- **`loginResponse`**
- **`refreshResponse`**

These constants simulate successful responses by returning an object with a mocked `accessToken` and `refreshToken`.

### `services/auth/types.ts`

This file contains specific type definitions for the authentication processes:

- **`ResponseRegister`** & **`ResponseLogin`**:  
  Define the structure of successful authentication responses.
  
- **`ResponseRegisterError`** & **`ResponseLoginError`**:  
  Define the error structure for authentication failures.
  
- **`RequestRefresh`**:  
  Outlines the structure for a token refresh request.
  
- **`ResponseRefresh`** & **`ResponseRefreshError`**:  
  Define the response and error types for the token refresh operation.

## Conclusion

The **services** module is critical for ensuring robust API communication and consistent error handling within the application. By centralizing error management and type definitions, it provides a unified interface for API interactions. Additionally, the integration of mock responses simplifies development and testing, making the module versatile for various environments.

Integrate these services into your project to streamline API calls, maintain reliable error handling, and build a resilient application architecture.