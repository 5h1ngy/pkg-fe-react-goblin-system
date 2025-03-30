---
sidebar_position: 4
---

# Alert & EmptyState

The Alert component provides feedback messages and notifications, while the EmptyState component (built on Alert) displays placeholder content when data is unavailable.

## Overview

The Alert and EmptyState components offer:

1. **Status Messages** - Visually distinct status indicators
2. **Contextual Feedback** - Information, success, warning, and error states
3. **Customizable Content** - Support for icons, titles, and descriptions
4. **Interactive Options** - Optional actions like dismiss buttons
5. **Empty State Handling** - Consistent way to display when data is unavailable

## Installation

These components are included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

### Alert Component

```jsx
import { Alert } from 'pkg-fe-react-goblin-system';

function MyComponent() {
  return (
    <Alert 
      status="success" 
      title="Saved successfully" 
      description="Your changes have been saved."
    />
  );
}
```

### EmptyState Component

```jsx
import { EmptyState } from 'pkg-fe-react-goblin-system';

function EmptyList() {
  return (
    <EmptyState
      icon="folder-open"
      title="No files found"
      description="Your search didn't match any files."
      actionText="Clear filters"
      onAction={() => clearFilters()}
    />
  );
}
```

## API Reference

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Status/type of the alert |
| `variant` | `'solid' \| 'subtle' \| 'outline'` | `'subtle'` | Visual style of the alert |
| `title` | `string` | `undefined` | Main alert heading |
| `description` | `string \| React.ReactNode` | `undefined` | Alert description or content |
| `icon` | `string \| React.ReactNode` | `undefined` | Icon to display (overrides default status icon) |
| `showIcon` | `boolean` | `true` | Whether to show the status icon |
| `dismissible` | `boolean` | `false` | Whether the alert can be dismissed |
| `onDismiss` | `() => void` | `undefined` | Function called when alert is dismissed |
| `action` | `React.ReactNode` | `undefined` | Action element (like a button) |
| `actionText` | `string` | `undefined` | Text for the action button |
| `onAction` | `() => void` | `undefined` | Function called when action is clicked |
| `className` | `string` | `''` | Additional CSS class names |

### EmptyState Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'No data available'` | Main heading for the empty state |
| `description` | `string \| React.ReactNode` | `'There are no items to display at this time.'` | Description text |
| `icon` | `string` | `'inbox'` | Icon to display |
| `showIcon` | `boolean` | `true` | Whether to show the icon |
| `actionText` | `string` | `undefined` | Text for the action button |
| `onAction` | `() => void` | `undefined` | Function called when action is clicked |
| `secondaryActionText` | `string` | `undefined` | Text for the secondary action button |
| `onSecondaryAction` | `() => void` | `undefined` | Function called when secondary action is clicked |
| `image` | `string \| React.ReactNode` | `undefined` | Custom image instead of icon |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the empty state component |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Alert Variants

```jsx
<div>
  <Alert 
    status="info" 
    title="Information" 
    description="This is an informational message."
  />
  
  <Alert 
    status="success" 
    title="Success" 
    description="Operation completed successfully."
    variant="solid"
  />
  
  <Alert 
    status="warning" 
    title="Warning" 
    description="This action cannot be undone."
    variant="outline"
  />
  
  <Alert 
    status="error" 
    title="Error" 
    description="An error occurred while processing your request."
  />
</div>
```

### Dismissible Alert

```jsx
function DismissibleAlertExample() {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <Alert 
      status="info" 
      title="New feature available" 
      description="Check out our new dashboard layout."
      dismissible={true}
      onDismiss={() => setIsVisible(false)}
    />
  );
}
```

### Alert with Action

```jsx
<Alert 
  status="warning" 
  title="Storage almost full" 
  description="You're using 90% of your storage. Upgrade your plan to get more space."
  actionText="Upgrade Plan"
  onAction={() => navigateToUpgradePage()}
/>
```

### Basic EmptyState

```jsx
<EmptyState 
  title="No messages" 
  description="Your inbox is empty. When you receive messages, they will appear here."
/>
```

### EmptyState with Actions

```jsx
<EmptyState 
  title="No products found" 
  description="We couldn't find any products that match your criteria."
  icon="search"
  actionText="Clear filters"
  onAction={() => clearFilters()}
  secondaryActionText="Browse all"
  onSecondaryAction={() => browseAll()}
/>
```

### EmptyState with Custom Image

```jsx
<EmptyState 
  title="Start your journey" 
  description="Create your first project to get started."
  image={<img src="/images/empty-projects.svg" alt="" />}
  actionText="Create Project"
  onAction={() => createNewProject()}
  size="lg"
/>
```

## Migration from Chakra UI EmptyState

If you're migrating from Chakra UI's EmptyState, here's how to convert to Goblin System's EmptyState:

### Basic EmptyState

Before (Chakra UI):
```jsx
<EmptyState
  title="No results found"
  description="Try adjusting your search terms."
  icon={SearchIcon}
/>
```

After (Goblin System):
```jsx
<EmptyState
  title="No results found"
  description="Try adjusting your search terms."
  icon="search"
/>
```

### EmptyState with Action

Before (Chakra UI):
```jsx
<EmptyState
  title="No tasks available"
  description="Create your first task to get started."
  icon={TaskIcon}
  actionLabel="Create Task"
  onAction={handleCreateTask}
/>
```

After (Goblin System):
```jsx
<EmptyState
  title="No tasks available"
  description="Create your first task to get started."
  icon="task-list"
  actionText="Create Task"
  onAction={handleCreateTask}
/>
```

## Design and Implementation

The Alert and EmptyState components are built with:

- **Styled Components** - For consistent styling with the theme system
- **Accessibility Focus** - Proper ARIA roles and attributes
- **Theme Integration** - Using theme tokens for colors, spacing, and typography

Under the hood, EmptyState uses the Alert component with specialized styling:

```jsx
// Simplified implementation
const EmptyState = ({
  title = 'No data available',
  description = 'There are no items to display at this time.',
  icon = 'inbox',
  showIcon = true,
  actionText,
  onAction,
  secondaryActionText,
  onSecondaryAction,
  image,
  size = 'md',
  className,
  ...props
}) => {
  return (
    <StyledEmptyState
      status="info"
      variant="subtle"
      className={className}
      $size={size}
      {...props}
    >
      <EmptyStateContent>
        {showIcon && !image && (
          <EmptyStateIcon>
            <Icon name={icon} size={size === 'lg' ? 'xl' : 'lg'} />
          </EmptyStateIcon>
        )}
        
        {image && (
          <EmptyStateImage>
            {typeof image === 'string' ? (
              <img src={image} alt="" />
            ) : (
              image
            )}
          </EmptyStateImage>
        )}
        
        <EmptyStateTitle>{title}</EmptyStateTitle>
        
        {description && (
          <EmptyStateDescription>{description}</EmptyStateDescription>
        )}
        
        {(actionText || secondaryActionText) && (
          <EmptyStateActions>
            {actionText && (
              <Button variant="primary" onClick={onAction}>
                {actionText}
              </Button>
            )}
            
            {secondaryActionText && (
              <Button variant="secondary" onClick={onSecondaryAction}>
                {secondaryActionText}
              </Button>
            )}
          </EmptyStateActions>
        )}
      </EmptyStateContent>
    </StyledEmptyState>
  );
};
```

## Accessibility Considerations

The Alert and EmptyState components follow these accessibility best practices:

- Uses appropriate ARIA roles (`role="alert"` for Alert)
- Provides clear, descriptive content
- Ensures proper focus management for interactive elements
- Uses sufficient color contrast for visibility
- Maintains proper heading hierarchy

## Customization

### Using with Styled Components

You can extend the Alert and EmptyState with styled-components:

```jsx
import styled from 'styled-components';
import { Alert, EmptyState } from 'pkg-fe-react-goblin-system';

const CustomAlert = styled(Alert)`
  border-left: 4px solid ${props => props.theme.colors[props.$status || 'info'].main};
  border-radius: ${props => props.theme.radii.md};
`;

const CustomEmptyState = styled(EmptyState)`
  max-width: 500px;
  margin: ${props => props.theme.spacing.xl} auto;
  
  // Style specific elements
  .empty-state-title {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }
`;

function MyComponent() {
  return (
    <div>
      <CustomAlert 
        status="warning"
        title="Scheduled Maintenance"
        description="Our services will be unavailable on Sunday from 2-4 AM."
      />
      
      <CustomEmptyState
        title="Your cart is empty"
        description="Add items to your cart to continue shopping."
        icon="shopping-cart"
        actionText="Browse Products"
        onAction={() => navigateToProducts()}
      />
    </div>
  );
}
```

### Creating Custom EmptyState Templates

You can create reusable empty state templates for specific scenarios:

```jsx
import { EmptyState } from 'pkg-fe-react-goblin-system';

// Reusable empty state templates
export const NoResultsEmptyState = ({ onReset }) => (
  <EmptyState
    title="No results found"
    description="We couldn't find anything matching your search criteria."
    icon="search"
    actionText="Clear Search"
    onAction={onReset}
  />
);

export const NoPermissionEmptyState = ({ onRequestAccess }) => (
  <EmptyState
    title="Access Restricted"
    description="You don't have permission to view this content."
    icon="lock"
    actionText="Request Access"
    onAction={onRequestAccess}
  />
);

export const FirstTimeEmptyState = ({ onCreateNew }) => (
  <EmptyState
    title="Get Started"
    description="This is where your items will appear once you create them."
    icon="rocket"
    actionText="Create First Item"
    onAction={onCreateNew}
  />
);
```

## Related Components

- [LoadingPage](../pages/loading.md) - For loading states
- [ErrorPage](../pages/error.md) - For error states
- [Notification](./notification.md) - For temporary notifications
