---
sidebar_position: 2
---

# IconButton

The IconButton component provides a button with an icon and optional text, replacing Chakra UI's Icon component with a more interactive and accessible solution.

## Overview

The IconButton component offers:

1. **Interactive Icons** - Create clickable icon elements with proper accessibility
2. **Size Variations** - Multiple size options for different UI contexts
3. **Color Options** - Theme-based color variations
4. **Accessibility** - Built-in accessibility features like proper focus states and aria labels
5. **Text Support** - Optional text to accompany the icon

## Installation

The IconButton component is included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

```jsx
import { IconButton } from 'pkg-fe-react-goblin-system';

function MyComponent() {
  return (
    <div>
      <IconButton 
        icon="edit" 
        aria-label="Edit item" 
        onClick={() => console.log('Edit clicked')} 
      />
    </div>
  );
}
```

## API Reference

### Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | **Required** | Icon name to display |
| `aria-label` | `string` | **Required** | Accessible label for the button |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the button |
| `color` | `string` | `'primary'` | Color of the button (any theme color) |
| `variant` | `'solid' \| 'outline' \| 'ghost'` | `'solid'` | Visual style of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `isRound` | `boolean` | `false` | Whether to use a round shape |
| `isActive` | `boolean` | `false` | Whether the button is in an active state |
| `isLoading` | `boolean` | `false` | Whether to show a loading spinner |
| `onClick` | `(event) => void` | `undefined` | Click handler function |
| `children` | `React.ReactNode` | `undefined` | Optional text or other elements to display next to the icon |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Basic IconButton

```jsx
<IconButton 
  icon="search"
  aria-label="Search"
  onClick={() => console.log('Search clicked')}
/>
```

### Different Sizes

```jsx
<div>
  <IconButton icon="star" aria-label="Favorite (extra small)" size="xs" />
  <IconButton icon="star" aria-label="Favorite (small)" size="sm" />
  <IconButton icon="star" aria-label="Favorite (medium)" size="md" />
  <IconButton icon="star" aria-label="Favorite (large)" size="lg" />
  <IconButton icon="star" aria-label="Favorite (extra large)" size="xl" />
</div>
```

### Color Variations

```jsx
<div>
  <IconButton icon="check" aria-label="Approve" color="success" />
  <IconButton icon="warning" aria-label="Warning" color="warning" />
  <IconButton icon="close" aria-label="Error" color="error" />
  <IconButton icon="info" aria-label="Information" color="info" />
</div>
```

### Button Variants

```jsx
<div>
  <IconButton icon="edit" aria-label="Edit (solid)" variant="solid" />
  <IconButton icon="edit" aria-label="Edit (outline)" variant="outline" />
  <IconButton icon="edit" aria-label="Edit (ghost)" variant="ghost" />
</div>
```

### Round Buttons

```jsx
<div>
  <IconButton 
    icon="plus" 
    aria-label="Add item" 
    isRound 
    size="lg" 
    color="primary" 
  />
</div>
```

### With Text

```jsx
<IconButton 
  icon="download" 
  aria-label="Download file"
>
  Download
</IconButton>
```

### Loading State

```jsx
<IconButton 
  icon="save" 
  aria-label="Save changes" 
  isLoading 
  onClick={() => saveData()}
>
  Saving...
</IconButton>
```

### Active State

```jsx
<IconButton 
  icon="heart" 
  aria-label="Like" 
  isActive={isLiked}
  color={isLiked ? "error" : "neutral"}
  onClick={() => setIsLiked(!isLiked)}
/>
```

## Migration from Chakra UI Icon

If you're migrating from Chakra UI's Icon component, here's how to convert them to Goblin System's IconButton:

### Simple Icon Conversion

Before (Chakra UI):
```jsx
<Icon name="edit" color="blue.500" boxSize={6} />
```

After (Goblin System):
```jsx
<IconButton 
  icon="edit" 
  aria-label="Edit" 
  color="primary" 
  size="md" 
  variant="ghost" 
/>
```

### Icon with Click Handler

Before (Chakra UI):
```jsx
<Box onClick={handleClick} cursor="pointer">
  <Icon name="delete" color="red.500" />
</Box>
```

After (Goblin System):
```jsx
<IconButton 
  icon="delete" 
  aria-label="Delete item" 
  color="error" 
  onClick={handleClick} 
/>
```

### Icon with Text

Before (Chakra UI):
```jsx
<Flex align="center">
  <Icon name="check" color="green.500" mr={2} />
  <Text>Completed</Text>
</Flex>
```

After (Goblin System):
```jsx
<IconButton 
  icon="check" 
  aria-label="Completed" 
  color="success" 
  variant="ghost"
>
  Completed
</IconButton>
```

## Design and Implementation

The IconButton component is built with:

- **Styled Components** - For consistent styling with the theme system
- **Accessibility Focus** - Proper keyboard navigation and screen reader support
- **Theme Integration** - Using theme tokens for colors, spacing, and sizes

Under the hood, the IconButton uses:

```jsx
// Simplified implementation
const IconButton = ({ 
  icon, 
  size = 'md', 
  color = 'primary', 
  variant = 'solid',
  isRound = false,
  disabled = false,
  'aria-label': ariaLabel,
  children,
  onClick,
  ...props 
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $size={size}
      $color={color}
      $variant={variant}
      $isRound={isRound}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon name={icon} size={size} />
      {children && <span className="icon-button-text">{children}</span>}
    </StyledButton>
  );
};
```

## Accessibility Considerations

The IconButton component follows these accessibility best practices:

- Requires an `aria-label` prop for screen reader users
- Maintains proper focus states for keyboard navigation
- Includes disabled states with proper ARIA attributes
- Ensures adequate color contrast for all theme variants
- Provides loading states with appropriate announcements

## Customization

### Using with Styled Components

You can extend the IconButton with styled-components:

```jsx
import styled from 'styled-components';
import { IconButton } from 'pkg-fe-react-goblin-system';

const FloatingActionButton = styled(IconButton)`
  position: fixed;
  bottom: ${props => props.theme.spacing.lg};
  right: ${props => props.theme.spacing.lg};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  transition: transform 0.2s, box-shadow 0.2s;
`;

function App() {
  return (
    <div>
      <h1>My Application</h1>
      <FloatingActionButton 
        icon="plus" 
        aria-label="Add new item" 
        color="primary" 
        size="lg"
        isRound
      />
    </div>
  );
}
```

### Custom Icon Integration

If you need to use custom icons:

```jsx
import { IconButton } from 'pkg-fe-react-goblin-system';
import { ReactComponent as CustomIcon } from './custom-icon.svg';

// Register the custom icon with the icon system
registerIcon('custom-action', CustomIcon);

function MyComponent() {
  return (
    <IconButton 
      icon="custom-action" 
      aria-label="Perform custom action" 
    />
  );
}
```

## Related Components

- [Button](./button.md) - Standard button component
- [Icon](./icon.md) - Non-interactive icon component
- [Tooltip](./tooltip.md) - Can be used with IconButton for additional information
