# Hooks Usage

This document details how to use both built-in and custom hooks in the **pkg-fe-react-goblin-system** project. It provides guidelines, examples, and best practices to help you integrate hooks seamlessly into your components.

## Using Built-in Hooks

React's built-in hooks allow you to manage state, side effects, and context directly within functional components. Here are a few common hooks and how to use them:

### useState

Manage local component state with ease.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

### useEffect

Perform side effects such as data fetching or subscriptions.

```jsx
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []); // Empty dependency array runs once after mount

  return <div>{data ? JSON.stringify(data) : 'Loading data...'}</div>;
};

export default DataFetcher;
```

### useContext

Access global data by consuming React context.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return <div style={{ backgroundColor: theme.background, color: theme.foreground }}>Themed Component</div>;
};

export default ThemedComponent;
```

## Using Custom Hooks

Custom hooks encapsulate complex logic into reusable functions, keeping your components clean and focused on presentation. Below is an example of a custom hook for handling API requests.

### Example: useFetch

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

### Using the Custom Hook

```jsx
import React from 'react';
import useFetch from 'hooks/useFetch';

const UserList = () => {
  const { data, loading, error } = useFetch('https://api.example.com/users');

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

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

## Best Practices

- **Encapsulation:** Keep the hook focused on a single piece of functionality.
- **Naming Conventions:** Always start custom hook names with `use` to follow React's hook rules.
- **Dependency Management:** Ensure proper dependency arrays in `useEffect` to avoid unnecessary re-renders or missed updates.
- **Testing:** Write tests for your hooks to confirm they behave as expected under various scenarios.

## Conclusion

Integrating hooks effectively can greatly simplify your component logic and enhance code reusability. Whether you’re using built-in hooks or developing your own, following best practices will ensure that your code remains clean, maintainable, and scalable.

Happy coding!