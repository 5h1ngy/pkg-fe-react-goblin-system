# HOCs Module Documentation

The **hocs** module provides higher-order components (HOCs) to enhance your React components with additional functionality. Currently, this module includes the `withRouter` HOC, which injects routing properties into a component for seamless integration with React Router.

## withRouter HOC

### Overview

The `withRouter` HOC is designed to add routing capabilities to any component. It wraps a component and passes a `router` prop that contains:

- **location**: The current location object from React Router, obtained via the `useLocation` hook.
- **navigate**: A function for programmatic navigation, provided by the `useNavigate` hook.

### File Details

#### `hocs/withRouter.tsx`
- **Purpose**:  
  Enhances a component by providing routing properties (`location` and `navigate`) without modifying the component's internal logic.
- **Implementation**:
  - Uses React Router's `useLocation` and `useNavigate` hooks to gather routing data.
  - Wraps the provided component and supplies it with a `router` prop containing the routing information.

### Usage Example

Below is an example of how to use the `withRouter` HOC:

```tsx
import React from 'react';
import withRouter, { WithRouterProps } from 'react-goblin-system/hocs/withRouter';

interface MyComponentProps extends WithRouterProps {
  // Additional props for your component can be defined here
}

const MyComponent: React.FC<MyComponentProps> = ({ router }) => {
  const { location, navigate } = router;

  return (
    <div>
      <h1>Current Path: {location.pathname}</h1>
      <button onClick={() => navigate('/home')}>Go Home</button>
    </div>
  );
};

export default withRouter(MyComponent);
```

### Benefits

- **Encapsulation**:  
  Separates routing logic from core component logic, keeping components clean and focused.
- **Reusability**:  
  Easily apply routing enhancements to any component without rewriting routing code.
- **Flexibility**:  
  Integrates seamlessly with existing components, enhancing them with minimal changes.

## Conclusion

The `withRouter` HOC in the **hocs** module is a straightforward yet powerful tool for injecting routing capabilities into React components. By leveraging React Router's hooks, it provides a clean and reusable way to access routing information, making it easier to build dynamic, navigation-aware components.