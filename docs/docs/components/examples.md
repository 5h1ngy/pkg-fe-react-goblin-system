# Component Examples

This document provides practical examples demonstrating how to use various UI components available in the **pkg-fe-react-goblin-system** project. The examples below are intended to serve as a starting point for integrating these components into your application while adhering to best practices.

## Example 1: Using a Button Component

The Button component is a fundamental UI element. Here's how to import and use it in your application:

```jsx
import React from 'react';
import Button from 'components/Button';

const ExampleButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Click Me
    </Button>
  );
};

export default ExampleButton;
```

## Example 2: Composing a Card Component

The Card component helps organize content into a clear, structured layout. This example demonstrates how to combine a Card with a header, content area, and footer:

```jsx
import React from 'react';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import CardFooter from 'components/CardFooter';
import Button from 'components/Button';

const ExampleCard = () => (
  <Card>
    <CardHeader title="Card Title" />
    <CardContent>
      <p>
        This card component demonstrates how to compose multiple sub-components
        to display structured content.
      </p>
    </CardContent>
    <CardFooter>
      <Button variant="secondary">Learn More</Button>
    </CardFooter>
  </Card>
);

export default ExampleCard;
```

## Example 3: Building a Form with Input and Validation

This example shows how to create a simple form using an Input component along with basic validation logic:

```jsx
import React, { useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';

const ExampleForm = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      setError('This field is required');
    } else {
      setError('');
      // Handle form submission
      console.log('Form submitted with value:', value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
        error={error}
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};

export default ExampleForm;
```

## Best Practices

- **Consistency:** Use the provided components to ensure a uniform look and feel throughout your application.
- **Customization:** Leverage available props and theming options to tailor components to your design requirements.
- **Performance:** Optimize your components by using memoization techniques and minimizing unnecessary re-renders.
- **Documentation:** Always refer to the individual component documentation for detailed API information and usage guidelines.

## Conclusion

These examples illustrate common use cases for components in the **pkg-fe-react-goblin-system** project. Use them as a foundation for building more complex user interfaces, and feel free to extend or modify the examples to suit your specific needs.

Happy coding!