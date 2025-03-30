---
sidebar_position: 1
---

# Page Layouts

Page layouts provide reusable templates for common UI patterns in your application. These layouts were formerly in the `layouts` directory but have been migrated to the `pages` directory and refactored to use Goblin System's native components instead of external UI libraries.

## Available Page Layouts

Goblin System includes the following page layouts:

- [Error](./error.md) - Displays error states and messages
- [Loading](./loading.md) - Shows loading screens during data fetching or processing
- [Transformer](./transformer.md) - Handles data transformation views and workflows

## Usage

You can import and use these page layouts in your application:

```jsx
import { ErrorPage } from 'pkg-fe-react-goblin-system/pages/Error';
import { LoadingPage } from 'pkg-fe-react-goblin-system/pages/Loading';
import { TransformerPage } from 'pkg-fe-react-goblin-system/pages/Transformer';

function MyApp() {
  const { isLoading, error, data } = useSomeData();
  
  if (isLoading) {
    return <LoadingPage message="Loading your data..." />;
  }
  
  if (error) {
    return <ErrorPage 
      title="Something went wrong" 
      message={error.message} 
      onRetry={() => refetchData()} 
    />;
  }
  
  // Return normal app content with the data
  return <YourAppContent data={data} />;
}
```

## Integration with React Router

These page layouts work well with React Router for handling different application states:

```jsx
import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from 'pkg-fe-react-goblin-system/pages/Error';
import { LoadingPage } from 'pkg-fe-react-goblin-system/pages/Loading';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage title="Page Not Found" statusCode={404} />} />
    </Routes>
  );
}
```

## Component Architecture

All page layouts follow a consistent architecture:

1. **Modularity** - Each layout is focused on a specific use case
2. **Customizability** - Props allow for customization of content and behavior
3. **Responsiveness** - Layouts adapt to different screen sizes
4. **Accessibility** - Built with accessibility best practices

The layouts have been refactored to use Goblin System's native components:

- `Container` and `Grid` for layout structure (replacing Flex)
- `IconButton` for interactive icons (replacing Icon)
- Custom components using `Alert` for empty states (replacing EmptyState)
- `Spinner` for loading indicators (replacing ProgressBar)

## Creating Custom Layouts

You can create your own custom layouts by composing Goblin System components:

```jsx
import React from 'react';
import { 
  Container, 
  Grid, 
  Col, 
  Text, 
  Button 
} from 'pkg-fe-react-goblin-system';

function CustomLayout({ title, children, footerContent }) {
  return (
    <Container>
      <Grid>
        <Col xs={12}>
          <header>
            <Text variant="h1">{title}</Text>
          </header>
        </Col>
        
        <Col xs={12}>
          <main>{children}</main>
        </Col>
        
        <Col xs={12}>
          <footer>
            {footerContent}
          </footer>
        </Col>
      </Grid>
    </Container>
  );
}

export default CustomLayout;
```
