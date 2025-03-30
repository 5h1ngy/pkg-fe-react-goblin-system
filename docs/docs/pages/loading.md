---
sidebar_position: 3
---

# Loading Page

The Loading Page layout provides a standardized way to display loading states in your application with a clean, user-friendly interface.

## Overview

The Loading Page offers:

1. **Loading Indicators** - Visual feedback with customizable spinners
2. **Progress Messages** - Informative text about the loading process
3. **Responsive Design** - Adapts to different screen sizes
4. **Accessibility Features** - Screen reader support and keyboard focus management

## Installation

The Loading Page is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

Import and use the Loading Page component:

```jsx
import { LoadingPage } from 'pkg-fe-react-goblin-system/pages/Loading';

function MyComponent() {
  const { isLoading, data } = useMyData();
  
  if (isLoading) {
    return <LoadingPage message="Loading your data..." />;
  }
  
  return <div>{data}</div>;
}
```

## API Reference

### Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `'Loading...'` | Message to display during loading |
| `spinnerSize` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Size of the loading spinner |
| `spinnerColor` | `string` | `'primary'` | Color of the spinner (any theme color) |
| `fullPage` | `boolean` | `true` | Whether to take up the full page height |
| `showProgress` | `boolean` | `false` | Whether to show a progress indicator |
| `progress` | `number` | `0` | Progress value (0-100) when showProgress is true |
| `backgroundColor` | `string` | `undefined` | Background color override |
| `textColor` | `string` | `undefined` | Text color override |
| `withOverlay` | `boolean` | `false` | Whether to show with a semi-transparent overlay |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Basic Loading Page

```jsx
<LoadingPage message="Loading your dashboard..." />
```

### Loading Page with Progress

```jsx
<LoadingPage 
  message="Uploading your file..." 
  showProgress={true} 
  progress={75} 
/>
```

### Loading Overlay

```jsx
<div>
  <YourContent />
  {isLoading && (
    <LoadingPage 
      message="Processing data..." 
      withOverlay={true} 
      spinnerSize="md"
    />
  )}
</div>
```

### Custom Styled Loading

```jsx
<LoadingPage 
  message="Please wait while we prepare your report..." 
  spinnerColor="secondary"
  backgroundColor="neutral.100"
  textColor="text.secondary"
  spinnerSize="xl"
/>
```

## Design and Implementation

The Loading Page uses the following Goblin System components:

- `Container` and `Grid` for layout (replacing previous Flex components)
- `Spinner` for loading indicators (replacing previous ProgressBar components)
- `Text` for displaying loading messages

The layout is responsive and will adapt to different screen sizes.

## Integration with Async Operations

You can use the Loading Page with async operations:

```jsx
import React, { useState, useEffect } from 'react';
import { LoadingPage } from 'pkg-fe-react-goblin-system/pages/Loading';

function DataFetchComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Start loading
        setLoading(true);
        
        // Simulate progress updates
        const progressInterval = setInterval(() => {
          setProgress(prev => Math.min(prev + 10, 90));
        }, 500);
        
        // Fetch data
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        
        // Complete progress and set data
        clearInterval(progressInterval);
        setProgress(100);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) {
    return (
      <LoadingPage 
        message="Fetching your data..." 
        showProgress={true}
        progress={progress}
      />
    );
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      <h1>Data Loaded Successfully</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## Accessibility Considerations

The Loading Page is built with accessibility in mind:

- The spinner has an appropriate `aria-label`
- Loading state is announced to screen readers using `aria-live`
- Focus is managed properly during loading states
- Color contrast meets WCAG requirements

## Customization

### Styling

You can customize the styling of the Loading Page by applying custom CSS:

```jsx
<LoadingPage
  className="custom-loading-page"
  message="Custom styled loading page"
/>
```

```css
.custom-loading-page {
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### Custom Loading Components

For more advanced customization, you can create your own loading component using Goblin System's base components:

```jsx
import React from 'react';
import { 
  Container, 
  Grid, 
  Col, 
  Text, 
  Spinner 
} from 'pkg-fe-react-goblin-system';

function CustomLoadingPage({ message, isLoading }) {
  if (!isLoading) return null;
  
  return (
    <Container>
      <Grid alignItems="center" justifyContent="center" height="100vh">
        <Col xs={12} textAlign="center">
          <Spinner 
            size="lg" 
            color="primary" 
            aria-label="Loading content"
          />
          <Text variant="h3" mt={4}>
            {message || 'Loading content...'}
          </Text>
          <Text variant="body2" color="text.secondary" mt={2}>
            This may take a few moments
          </Text>
        </Col>
      </Grid>
    </Container>
  );
}
```
