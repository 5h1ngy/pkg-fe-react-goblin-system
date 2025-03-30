---
sidebar_position: 3
---

# Spinner

The Spinner component provides a visual loading indicator that replaces Chakra UI's ProgressBar component with a simpler, more versatile solution.

## Overview

The Spinner component offers:

1. **Visual Feedback** - Indicates loading or processing states
2. **Size Variations** - Multiple size options for different UI contexts
3. **Color Options** - Theme-based color variations
4. **Accessibility** - Built-in accessibility features
5. **Animation Control** - Options to control animation behavior

## Installation

The Spinner component is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

```jsx
import { Spinner } from 'pkg-fe-react-goblin-system';

function LoadingComponent() {
  return (
    <div>
      <Spinner />
      <p>Loading content...</p>
    </div>
  );
}
```

## API Reference

### Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the spinner |
| `color` | `string` | `'primary'` | Color of the spinner (any theme color) |
| `thickness` | `string` | `'2px'` | Thickness of the spinner track |
| `speed` | `string` | `'0.7s'` | Speed of the animation |
| `emptyColor` | `string` | `'transparent'` | Color of the empty area |
| `label` | `string` | `'Loading...'` | Text label for screen readers |
| `labelPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `undefined` | Position of the visible label |
| `showLabel` | `boolean` | `false` | Whether to show the label visibly |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Basic Spinner

```jsx
<Spinner />
```

### Different Sizes

```jsx
<div>
  <Spinner size="xs" />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner size="xl" />
</div>
```

### Color Variations

```jsx
<div>
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="success" />
  <Spinner color="warning" />
  <Spinner color="error" />
  <Spinner color="info" />
</div>
```

### With Visible Label

```jsx
<Spinner 
  label="Fetching data" 
  showLabel={true} 
  labelPosition="bottom" 
/>
```

### Custom Animation Speed

```jsx
<Spinner 
  size="lg" 
  speed="1.2s" 
  thickness="4px"
/>
```

### With Custom Styles

```jsx
<Spinner 
  color="secondary" 
  emptyColor="rgba(0, 0, 0, 0.1)" 
  className="custom-spinner" 
/>
```

## Migration from Chakra UI ProgressBar

If you're migrating from Chakra UI's ProgressBar component, here's how to convert to Goblin System's Spinner:

### Indeterminate Progress Bar

Before (Chakra UI):
```jsx
<Progress isIndeterminate color="blue.300" />
```

After (Goblin System):
```jsx
<Spinner color="primary" />
```

### Progress Bar with Label

Before (Chakra UI):
```jsx
<Box>
  <Progress isIndeterminate colorScheme="green" />
  <Text mt={2}>Loading data...</Text>
</Box>
```

After (Goblin System):
```jsx
<Spinner 
  color="success"
  label="Loading data..."
  showLabel={true}
  labelPosition="bottom"
/>
```

### Custom Sized Progress Bar

Before (Chakra UI):
```jsx
<Progress 
  isIndeterminate 
  size="sm" 
  colorScheme="purple" 
/>
```

After (Goblin System):
```jsx
<Spinner 
  size="sm"
  color="secondary"
/>
```

## Design and Implementation

The Spinner component is built with:

- **CSS Animations** - Smooth, performant loading animations
- **Accessibility Focus** - Proper ARIA attributes for screen readers
- **Theme Integration** - Using theme tokens for colors and sizes

Under the hood, the Spinner uses:

```jsx
// Simplified implementation
const Spinner = ({ 
  size = 'md', 
  color = 'primary', 
  thickness = '2px',
  speed = '0.7s',
  emptyColor = 'transparent',
  label = 'Loading...',
  labelPosition,
  showLabel = false,
  className,
  ...props 
}) => {
  return (
    <SpinnerContainer 
      className={className}
      $labelPosition={labelPosition}
      {...props}
    >
      <SpinnerElement
        $size={size}
        $color={color}
        $thickness={thickness}
        $speed={speed}
        $emptyColor={emptyColor}
        aria-label={label}
        role="status"
      />
      {showLabel && (
        <SpinnerLabel $position={labelPosition}>
          {label}
        </SpinnerLabel>
      )}
    </SpinnerContainer>
  );
};
```

## Accessibility Considerations

The Spinner component follows these accessibility best practices:

- Uses appropriate ARIA roles (`role="status"`)
- Provides screen reader text via `aria-label`
- Can make the label visible for all users
- Ensures animations respect user preferences for reduced motion
- Animation does not flash or otherwise cause issues for users with visual sensitivities

## Customization

### Using with Styled Components

You can extend the Spinner with styled-components:

```jsx
import styled from 'styled-components';
import { Spinner } from 'pkg-fe-react-goblin-system';

const CustomSpinner = styled(Spinner)`
  margin: ${props => props.theme.spacing.md};
  
  // Style the label if needed
  span {
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    color: ${props => props.theme.colors.text.secondary};
  }
`;

function LoadingOverlay() {
  return (
    <div className="overlay">
      <CustomSpinner 
        size="xl" 
        color="primary" 
        label="Processing your request" 
        showLabel={true}
        labelPosition="bottom"
      />
    </div>
  );
}
```

### Creating a Progress Bar Alternative

If you need a determinate progress bar instead of a spinner:

```jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.colors.neutral[200]};
  border-radius: ${props => props.theme.radii.pill};
  overflow: hidden;
`;

const ProgressIndicator = styled.div`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${props => props.theme.colors[props.$color].main};
  transition: width 0.3s ease;
`;

function ProgressBar({ progress, color = 'primary' }) {
  return (
    <ProgressBarContainer role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <ProgressIndicator $progress={progress} $color={color} />
    </ProgressBarContainer>
  );
}

// Usage example
function FileUpload() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 10;
        clearInterval(interval);
        return 100;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h3>Uploading file...</h3>
      <ProgressBar progress={progress} color="success" />
      <p>{progress}% complete</p>
    </div>
  );
}
```

## Related Components

- [LoadingPage](../pages/loading.md) - Full page loading component
- **Button** - Can incorporate a spinner for loading states
- [Alert](./alert.md) - For providing loading status messages
