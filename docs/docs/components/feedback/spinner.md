---
sidebar_position: 2
---

# Spinner

The `Spinner` component is a loading indicator that signals to users that an operation is in progress.

## Importing

```jsx
import { Spinner } from 'pkg-fe-react-goblin-system';
```

## Basic Usage

```jsx
<Spinner />
```

## Properties

| Property | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the spinner |
| `color` | `string` | `'primary'` | Color of the spinner (supports theme colors or CSS values) |
| `$centered` | `boolean` | `false` | Centers the spinner in its container |
| `thickness` | `number` | `2` | Thickness of the spinner lines |
| `visible` | `boolean` | `true` | Controls the visibility of the spinner |
| `label` | `string` | - | Accessible text for the spinner |
| `labelPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Position of the label text |

## Variants

### Sizes

```jsx
<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />
```

### Colors

```jsx
<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="error" />
<Spinner color="#FF5722" />
```

### Positioning

```jsx
<Spinner $centered />
```

### With Label

```jsx
<Spinner label="Loading..." />
<Spinner label="Please wait..." labelPosition="top" />
<Spinner label="Processing" labelPosition="right" />
```

## Advanced Examples

### Full-screen Spinner

```jsx
<div style={{ 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  width: '100%', 
  height: '100%', 
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
}}>
  <Spinner size="large" label="Loading page..." />
</div>
```

### Conditional Loading Component

```jsx
function LoadingContent({ isLoading, children }) {
  if (isLoading) {
    return (
      <div style={{ 
        minHeight: '200px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <Spinner label="Loading data..." />
      </div>
    );
  }

  return children;
}

// Usage
function MyComponent() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    // Simulate an API request
    setTimeout(() => {
      setData({ /* data */ });
      setIsLoading(false);
    }, 2000);
  }, []);
  
  return (
    <LoadingContent isLoading={isLoading}>
      {/* Content to display when loading is complete */}
      <div>Data loaded!</div>
    </LoadingContent>
  );
}
```

### Button with Loading State

```jsx
function LoadingButton({ isLoading, children, ...props }) {
  return (
    <Button 
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner 
            size="small" 
            color="currentColor" 
            style={{ marginRight: '8px' }}
          />
          Loading...
        </>
      ) : children}
    </Button>
  );
}

// Usage
function FormWithLoading() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate an API request
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Success
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
      {/* Form fields */}
      <LoadingButton 
        isLoading={isSubmitting} 
        type="submit"
        variant="primary"
      >
        Submit
      </LoadingButton>
    </form>
  );
}
```

## Accessibility

The `Spinner` component follows accessibility best practices:

- Includes an `aria-label` attribute for screen readers
- Provides a way to add descriptive text via the `label` prop
- Maintains sufficient contrast ratios for visibility

## Technical Notes

- Uses the `$` prefix for boolean props like `$centered` to prevent them from being passed directly to the DOM
- The animation is implemented using CSS keyframes via styled-components
- The spinner is rendered as an SVG for better resolution and scalability on all devices

## Customization

You can customize the appearance of the Spinner component through the theme:

```jsx
const customTheme = {
  components: {
    Spinner: {
      sizes: {
        small: '16px',
        medium: '24px',
        large: '40px',
      },
      defaultColor: 'primary',
      animation: {
        duration: '1s',
        timingFunction: 'linear',
      },
      // Other customizations...
    }
  }
};

<ThemeProvider theme={customTheme}>
  <Spinner />
</ThemeProvider>
```
