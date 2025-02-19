# React Context State Management

This document explains how to use React Context within the **pkg-fe-react-goblin-system** project to manage global state. React Context provides a simple yet powerful solution for sharing data such as user information, themes, or configuration settings across your component tree without having to pass props manually at every level.

## Introduction

React Context offers an alternative to prop drilling by enabling components to consume shared state directly. It is best suited for data that needs to be accessed by many components, such as authentication details, locale settings, or UI themes. Using Context can simplify your component hierarchy and improve code maintainability.

## Setting Up a Context

To set up a context in your project, follow these steps:

1. **Create the Context:** Use `React.createContext` to create a new context.
2. **Provide the Context:** Wrap your application or a part of it with a Provider component that supplies the context value.
3. **Consume the Context:** Access the context data using the `useContext` hook or the Consumer component.

### Example: Authentication Context

```jsx
import React, { createContext, useState } from 'react';

// Create a context for user authentication
export const AuthContext = createContext();

// Provider component that supplies authentication state and actions
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

## Consuming Context

Components can consume the context using the `useContext` hook, which provides direct access to the context value.

### Example: Using AuthContext in a Component

```jsx
import React, { useContext } from 'react';
import { AuthContext } from 'state-management/context';

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
```

## Best Practices

- **Modularize Context Providers:** Create separate contexts for different concerns (e.g., authentication, theme, language) to avoid unnecessary re-renders and maintain clear separation of concerns.
- **Memoize Context Values:** Use `useMemo` to memoize context values when they are derived from complex calculations or when their change should be minimized.
- **Keep the Provider Value Stable:** Ensure that the value passed to the Provider does not change on every render unless necessary. This stability helps prevent unwanted re-renders of consuming components.
- **Avoid Overuse:** Reserve React Context for global data that truly needs to be shared widely. For more complex state interactions, consider using Redux or other state management libraries.

## Conclusion

React Context offers a clean and efficient way to manage global state in the **pkg-fe-react-goblin-system** project. By setting up well-structured context providers and following best practices, you can ensure that shared data remains accessible, maintainable, and optimized for performance.

Happy coding!