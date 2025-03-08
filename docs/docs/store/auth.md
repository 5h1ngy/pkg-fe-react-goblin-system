Below is the updated `auth.md` that explains the authentication module's features, usage examples, and updated import paths based on your current project structure.

---

# Authentication Module Documentation

This section of the **store** module handles user authentication processes—including registration, login, and token refresh. It leverages Redux Toolkit for state management and asynchronous operations to provide a robust solution for managing authentication state in your application.

## Overview

The authentication module is designed to manage user authentication state through a collection of slices, thunks, and reducers. Its key functionalities include:

- **User Registration**:  
  Sends registration data (including a FormData object and an application ID) to the API and handles responses.

- **User Login**:  
  Authenticates users by sending login credentials, then stores the received tokens.

- **Token Refresh**:  
  Refreshes authentication tokens when needed to maintain user sessions.

- **State Management**:  
  Manages UI states (e.g., loading, success, error) and persists tokens in local storage, ensuring a seamless user experience.

## File Structure

The main files within the authentication module are as follows:

- **`shared.ts`**  
  Defines the `STATUS` enum with values `IDLE`, `LOADING`, `SUCCESS`, and `FAILED` to standardize state indicators.

- **`auth/asyncThunks.ts`**  
  Implements asynchronous actions using Redux Toolkit’s `createAsyncThunk`:
  - **`doRegister`**: Handles registration by sending form data and an application ID.
  - **`doLogin`**: Authenticates users with login credentials.
  - **`doRefresh`**: Refreshes authentication tokens.
  
  Each thunk captures errors via `rejectWithValue`, ensuring consistent error handling.

- **`auth/extraReducers.ts`**  
  Manages state transitions for the asynchronous actions. It updates the state during pending, fulfilled, and rejected phases, and also handles token persistence in `localStorage`.

- **`auth/index.ts`**  
  Combines reducers and extra reducers into a single slice. It exports:
  - **`authSlice`**: The combined reducer.
  - **`authActions`**: Synchronous actions (e.g., clearing error states).
  - **`authAsyncActions`**: The asynchronous thunks for registration, login, and token refresh.

- **`auth/initialState.ts`**  
  Defines the initial state of the authentication module by retrieving tokens from `localStorage` and initializing the login and registration statuses.

- **`auth/reducers.ts`**  
  Provides synchronous reducers to clear error states, allowing the UI to reset error messages.

- **`auth/types.ts`**  
  Contains TypeScript type definitions for the authentication state and API responses, ensuring type safety throughout the module.

## Usage Instructions

### Integrating the Auth Module

To integrate the authentication module into your Redux store, import the `authSlice` reducer from the package and include it in your store configuration:

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'react-goblin-system/store/auth';

const store = configureStore({
  reducer: {
    auth: authSlice,
    // Include other reducers as needed...
  },
});

export default store;
```

### Dispatching Asynchronous Actions

Trigger authentication operations by dispatching the provided asynchronous actions. For example, to dispatch a login action:

```typescript
import { authAsyncActions } from 'react-goblin-system/store/auth';

// Assume formData is already prepared (e.g., instance of FormData)
store.dispatch(authAsyncActions.doLogin(formData))
  .then(response => {
    // Handle successful login, e.g., navigate to dashboard
  })
  .catch(error => {
    // Handle errors, such as displaying error messages
  });
```

### Clearing Error States

After handling errors, clear the error state by dispatching the appropriate synchronous action:

```typescript
import { authActions } from 'react-goblin-system/store/auth';

// Example: Clear login errors
store.dispatch(authActions.clearErrorsLogin());
```

### Token Persistence

On successful login, registration, or token refresh, the module automatically stores the tokens in `localStorage`. When the module initializes, it retrieves these tokens, ensuring that the user's session persists across browser reloads.

## Example: User Registration

Here’s an example of how to dispatch a registration action:

```typescript
import { authAsyncActions } from 'react-goblin-system/store/auth';

// Prepare the payload with form data and application ID
const payload = {
  formData: new FormData(), // Populate formData with registration fields
  appId: 'your-app-id'
};

store.dispatch(authAsyncActions.doRegister(payload))
  .then(response => {
    console.log('Registration successful:', response);
  })
  .catch(error => {
    console.error('Registration error:', error);
  });
```

## Conclusion

The authentication module streamlines user authentication processes within the **store** by combining Redux Toolkit’s state management and asynchronous capabilities. By integrating this module, you can manage user sessions effectively and provide a seamless authentication experience in your application.

For further details or advanced usage, refer to the in-depth documentation of individual files and functions provided in the module.