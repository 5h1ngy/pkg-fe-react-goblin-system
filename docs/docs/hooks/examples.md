# Hooks Examples

This document provides practical examples demonstrating how to use both built-in and custom hooks in the **pkg-fe-react-goblin-system** project. These examples illustrate common scenarios such as state management, data fetching, and context consumption, helping you to integrate hooks effectively in your React components.

## Example 1: Basic State Management with `useState`

The following example shows a simple counter component that uses the `useState` hook to manage its internal state.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

## Example 2: Data Fetching with a Custom `useFetch` Hook

This example demonstrates how to create and use a custom hook, `useFetch`, for handling API requests.

### `useFetch` Hook Implementation

```jsx
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

### Using the `useFetch` Hook

```jsx
import React from 'react';
import useFetch from 'hooks/useFetch';

const UserList = () => {
  const { data, loading, error } = useFetch('https://api.example.com/users');

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

## Example 3: Consuming Context with `useContext`

This example illustrates how to use the `useContext` hook to consume a global theme provided by a React Context.

### Setting Up the Theme Context

```jsx
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    foreground: '#000000',
    background: '#ffffff'
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Using the Theme Context in a Component

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      This component is themed!
    </div>
  );
};

export default ThemedComponent;
```

## Conclusion

These examples demonstrate how hooks can simplify your component logic and promote code reusability. Whether using built-in hooks like `useState` and `useEffect` or creating custom hooks like `useFetch`, integrating these patterns into your project will help you build more modular and maintainable applications.

Happy coding!