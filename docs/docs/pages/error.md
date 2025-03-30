---
sidebar_position: 2
---

# Error Page

The Error Page layout provides a standardized way to display error states in your application.

## Overview

The Error Page offers:

1. **Error Visualization** - Clear presentation of error information
2. **Action Buttons** - Options for users to retry or go back
3. **Customizable Messages** - Adapt error messaging to your specific context
4. **Status Code Support** - Display HTTP status codes when applicable

## Installation

The Error Page is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

Import and use the Error Page component:

```jsx
import { ErrorPage } from 'pkg-fe-react-goblin-system/pages/Error';

function MyComponent() {
  const { error, refetch } = useMyData();
  
  if (error) {
    return (
      <ErrorPage
        title="Data Load Error"
        message={error.message}
        onRetry={refetch}
      />
    );
  }
  
  return <div>My content</div>;
}
```

## API Reference

### Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'An error occurred'` | Main error title |
| `message` | `string` | `'We encountered a problem while processing your request.'` | Detailed error message |
| `statusCode` | `number` | `undefined` | HTTP status code (optional) |
| `onRetry` | `() => void` | `undefined` | Function to call when retry button is clicked |
| `onBack` | `() => void` | `() => window.history.back()` | Function to call when back button is clicked |
| `showRetryButton` | `boolean` | `true` | Whether to show the retry button |
| `showBackButton` | `boolean` | `true` | Whether to show the back button |
| `retryButtonText` | `string` | `'Try Again'` | Text for the retry button |
| `backButtonText` | `string` | `'Go Back'` | Text for the back button |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Basic Error Page

```jsx
<ErrorPage
  title="Something went wrong"
  message="We couldn't load your data. Please try again."
  onRetry={() => window.location.reload()}
/>
```

### Custom Error Page with Status Code

```jsx
<ErrorPage
  title="Page Not Found"
  message="The page you're looking for doesn't exist or has been moved."
  statusCode={404}
  showRetryButton={false}
  backButtonText="Back to Home"
  onBack={() => navigate('/')}
/>
```

### Error Page with Custom Actions

```jsx
<ErrorPage
  title="Authorization Error"
  message="You don't have permission to access this resource."
  statusCode={403}
  showRetryButton={true}
  retryButtonText="Log In"
  onRetry={() => navigate('/login')}
  backButtonText="Go to Dashboard"
  onBack={() => navigate('/dashboard')}
/>
```

## Design and Implementation

The Error Page uses the following Goblin System components:

- `Container` and `Grid` for layout (replacing previous Flex components)
- `Text` for displaying error messages
- `Button` for action buttons
- `IconButton` for interactive icons (replacing previous Icon components)

The layout is responsive and will adapt to different screen sizes.

## Usage in React Router

You can use the Error Page with React Router's error handling:

```jsx
import { ErrorPage } from 'pkg-fe-react-goblin-system/pages/Error';
import { useRouteError, useNavigate } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  
  let statusCode;
  if (error.status) {
    statusCode = error.status;
  }
  
  return (
    <ErrorPage
      title={error.statusText || 'Application Error'}
      message={error.message || 'An unexpected error occurred in the application.'}
      statusCode={statusCode}
      onRetry={() => window.location.reload()}
      onBack={() => navigate('/')}
    />
  );
}

// In your router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      // Routes...
    ]
  }
]);
```

## Customization

### Styling

You can customize the styling of the Error Page by applying custom CSS:

```jsx
<ErrorPage
  className="custom-error-page"
  title="Custom Styled Error"
  message="This error page has custom styling."
/>
```

```css
.custom-error-page {
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Custom Error Components

For more advanced customization, you can create your own error component using Goblin System's base components:

```jsx
import React from 'react';
import { 
  Container, 
  Grid, 
  Col, 
  Text, 
  Button,
  IconButton
} from 'pkg-fe-react-goblin-system';

function CustomErrorPage({ title, message, onAction }) {
  return (
    <Container>
      <Grid>
        <Col xs={12} textAlign="center">
          <IconButton 
            icon="warning" 
            size="xl"
            color="error"
            aria-label="Error icon"
          />
          <Text variant="h2">{title}</Text>
          <Text>{message}</Text>
          <Button 
            variant="primary"
            onClick={onAction}
          >
            Take Action
          </Button>
        </Col>
      </Grid>
    </Container>
  );
}
```
