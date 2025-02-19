# HOC Example

This document provides a practical example of implementing and using a Higher-Order Component (HOC) in a React application. The example demonstrates how to wrap a base component with a HOC that adds additional functionality, such as logging props, without modifying the original component.

## Example: withLogger HOC

In this example, we create a `withLogger` HOC that logs the props received by the wrapped component each time it renders. This pattern is especially useful for debugging and tracking data flow in your application.

### Implementation

Create a file named `withLogger.js`:

```jsx
import React from 'react';

const withLogger = (WrappedComponent) => {
  return function WithLogger(props) {
    console.log('Props received:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
```

### Using the HOC

Now, wrap a simple component with the `withLogger` HOC:

```jsx
import React from 'react';
import withLogger from './withLogger';

const SimpleComponent = ({ message }) => {
  return <div>{message}</div>;
};

const EnhancedComponent = withLogger(SimpleComponent);

export default EnhancedComponent;
```

### Rendering the Enhanced Component

When you render `EnhancedComponent` in your application and pass it props, the HOC will log those props to the console:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import EnhancedComponent from './EnhancedComponent';

ReactDOM.render(
  <EnhancedComponent message="Hello, world!" />,
  document.getElementById('root')
);
```

## Explanation

- **withLogger HOC:** This HOC accepts a component (`WrappedComponent`) and returns a new component that logs its props before rendering the original component. This allows you to add debugging behavior without modifying the component's internal logic.
- **Enhanced Component:** By wrapping `SimpleComponent` with `withLogger`, you create `EnhancedComponent`, which inherits the functionality of `SimpleComponent` and adds logging as an extra behavior.
- **Debugging Aid:** Logging props on each render can be invaluable during development, helping you understand how data flows through your components and catch potential issues early.

## Conclusion

This example illustrates a simple yet effective use of Higher-Order Components in React. By encapsulating additional behaviors such as logging within HOCs, you can enhance your components while keeping their core logic clean and focused.

Happy coding!