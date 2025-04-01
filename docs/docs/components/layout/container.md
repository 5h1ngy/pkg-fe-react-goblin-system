---
sidebar_position: 1
---

# Container

The `Container` component is a fundamental layout element that centers content horizontally with appropriate padding and responsive maximum width.

## Importing

```jsx
import { Container } from 'pkg-fe-react-goblin-system';
```

## Basic Usage

```jsx
<Container>
  <h1>Page Title</h1>
  <p>Page content...</p>
</Container>
```

## Properties

| Property | Type | Default | Description |
|-----------|------|---------|-------------|
| `maxWidth` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| string` | `'lg'` | Maximum width of the container |
| `disableGutters` | `boolean` | `false` | If `true`, removes side padding |
| `fluid` | `boolean` | `false` | If `true`, the container always occupies 100% of the available width |
| `as` | `React.ElementType` | `'div'` | HTML or React component to use |
| `children` | `ReactNode` | - | Container content |

## Variants

### Sizes

```jsx
<Container maxWidth="xs">Extra small container (max 576px)</Container>
<Container maxWidth="sm">Small container (max 768px)</Container>
<Container maxWidth="md">Medium container (max 992px)</Container>
<Container maxWidth="lg">Large container (max 1200px, default)</Container>
<Container maxWidth="xl">Extra large container (max 1400px)</Container>
```

### Custom Size

```jsx
<Container maxWidth="800px">
  Container with custom maximum width of 800px
</Container>
```

### Fluid Container

```jsx
<Container fluid>
  This container always occupies 100% of the available width,
  while maintaining side padding.
</Container>
```

### Without Side Padding

```jsx
<Container disableGutters>
  Container without side padding
</Container>
```

## Advanced Examples

### Basic Page Layout

```jsx
<Container>
  <Header />
  <main>
    <Heading level={1}>Page Title</Heading>
    <Text>This is the main content of the page...</Text>
  </main>
  <Footer />
</Container>
```

### Section Layout

```jsx
<>
  {/* Full-width hero section */}
  <Container fluid disableGutters>
    <div style={{ backgroundColor: '#f0f0f0', padding: '48px 0' }}>
      <Container>
        <h1>Welcome to our Site</h1>
        <p>Hero section content...</p>
      </Container>
    </div>
  </Container>

  {/* Main content with contained width */}
  <Container maxWidth="md">
    <h2>Main Content</h2>
    <p>Content with a medium-width container...</p>
  </Container>
</>
```

### Nested Containers

```jsx
<Container fluid>
  <div style={{ backgroundColor: '#f5f5f5', padding: '24px 0' }}>
    <Container>
      <h2>Nested Container</h2>
      <p>
        A fluid container can contain a regular container to create 
        full-width colored sections with contained content.
      </p>
    </Container>
  </div>
</Container>
```

## Complex Layouts

For more complex layouts, consider using the `Container` component in combination with the `Grid` component:

```jsx
<Container>
  <Grid container spacing="md">
    <Grid item xs={12} md={6}>
      <Card>Left column content</Card>
    </Grid>
    <Grid item xs={12} md={6}>
      <Card>Right column content</Card>
    </Grid>
  </Grid>
</Container>
```

## Custom Component

You can change the HTML element using the `as` prop:

```jsx
<Container as="section">
  This will render as a <section> element instead of a <div>
</Container>

<Container as="article">
  This will render as an <article> element
</Container>
```

## Responsive Behavior

The `Container` component is fully responsive by default:

- On small screens, it has appropriate side margins
- It will never exceed its `maxWidth` on larger screens
- When using `fluid`, it will always be 100% width but still with appropriate side padding

## Theme Customization

The Container component can be customized through the theme:

```jsx
const theme = {
  components: {
    Container: {
      defaultProps: {
        maxWidth: 'md',  // Change default max width
      },
      styleOverrides: {
        root: {
          // Override default padding
          padding: '0 24px',
          
          // Add custom media queries
          '@media (min-width: 768px)': {
            padding: '0 32px',
          },
        },
      },
      variants: {
        // Custom variant for content containers
        content: {
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
  },
};
```

## Best Practices

- Use the `Container` component as a top-level wrapper for your pages
- Choose suitable sizes based on content: `md` or `lg` for general content, `sm` for forms and reduced-width content
- Combine `Container fluid` with a nested `Container` to create full-width sections with centered content
- Use the `disableGutters` property when you need to extend content to the edges (useful for headers, footers, or background elements)
