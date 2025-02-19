# Redux State Management

This document outlines the integration and usage of Redux within the **pkg-fe-react-goblin-system** project. Redux serves as a predictable state container that centralizes application state management, making it easier to maintain, debug, and scale complex applications.

## Introduction

Redux is built on a few core principles:

- **Single Source of Truth:** The entire application state is stored in a single store, providing a unified view of the state.
- **State is Read-Only:** The state can only be modified by dispatching actions, ensuring predictable changes.
- **Pure Functions for Updates:** Reducers, which are pure functions, define how the state is updated in response to actions.

These principles help maintain a predictable data flow and make the application easier to reason about.

## Core Concepts

### Actions
Actions are plain JavaScript objects that describe an event or change within the application. Each action must have a `type` property, and it can include additional data in a `payload`.

Example:
```javascript
{
  type: 'ADD_TODO',
  payload: { text: 'Learn Redux' }
}
```

### Reducers
Reducers are pure functions that take the current state and an action as arguments and return a new state. They determine how the state should change in response to an action.

Example:
```javascript
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};
```

### Store
The store holds the entire state of the application. It is created using the root reducer and can be enhanced with middleware for additional functionality.

Example:
```javascript
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
export default store;
```

### Middleware
Middleware extends Redux with custom functionality. It intercepts dispatched actions before they reach the reducer, enabling asynchronous operations, logging, and more. Common middleware includes Redux Thunk and Redux Saga.

## Setting Up Redux in the Project

1. **Installation:**
   If Redux and related libraries are not yet installed, add them via npm:
   ```bash
   npm install redux react-redux redux-thunk
   ```

2. **Creating the Store:**
   Configure the Redux store by combining reducers and applying middleware:
   ```javascript
   import { createStore, applyMiddleware } from 'redux';
   import thunk from 'redux-thunk';
   import rootReducer from './reducers';

   const store = createStore(rootReducer, applyMiddleware(thunk));
   export default store;
   ```

3. **Providing the Store:**
   Use the `<Provider>` component from `react-redux` to supply the Redux store to your application:
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import App from './App';
   import store from './state-management/store';

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );
   ```

## Folder Structure

Redux-related code is typically organized within the `src/state-management` directory:
- **actions:** Contains action creators for dispatching actions.
- **reducers:** Houses individual reducers and a root reducer that combines them.
- **store:** Contains the store configuration and middleware setup.
- **selectors (optional):** Includes functions to derive and extract specific data from the state.

## Using Redux in Components

Components can interact with the Redux store using hooks or higher-order components.

### Using Hooks
The `useSelector` and `useDispatch` hooks provided by `react-redux` allow you to access state and dispatch actions:

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: { text: 'New Todo' } });
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
```

### Using Higher-Order Components
Alternatively, you can connect components using the `connect` function from `react-redux` to map state and dispatch to props.

## Best Practices

- **Keep Reducers Pure:** Ensure reducers are pure functions without side effects.
- **Normalize State:** Structure state to avoid deeply nested objects, making updates easier and more efficient.
- **Immutable Updates:** Always return new state objects rather than mutating the existing state.
- **Modularize Code:** Organize actions, reducers, and selectors into logical modules for clarity and scalability.

## Conclusion

Redux provides a structured and predictable approach to managing application state in the **pkg-fe-react-goblin-system** project. By centralizing state, enforcing immutability, and using middleware for enhanced functionality, Redux enables the development of scalable and maintainable applications.

Happy coding!