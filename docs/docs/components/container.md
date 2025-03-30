---
sidebar_position: 1
---

# Container & Grid System

The Container and Grid System provides a flexible, responsive layout system that replaces Chakra UI's Flex components.

## Overview

The Container and Grid System offers:

1. **Responsive Layouts** - Easily create layouts that adapt to different screen sizes
2. **Flexible Grid** - 12-column grid system for precise layout control
3. **Spacing Controls** - Built-in margin and padding utilities
4. **Alignment Options** - Control item alignment and distribution

## Installation

The Container and Grid components are included in the main package:

```bash
npm install pkg-fe-react-goblin-system
```

## Basic Usage

### Container

The `Container` component is used to center and constrain content width:

```jsx
import { Container } from 'pkg-fe-react-goblin-system';

function MyComponent() {
  return (
    <Container>
      <h1>My Content</h1>
      <p>This content is centered and has a maximum width.</p>
    </Container>
  );
}
```

### Grid and Column

The `Grid` and `Col` components work together to create responsive layouts:

```jsx
import { Grid, Col } from 'pkg-fe-react-goblin-system';

function TwoColumnLayout() {
  return (
    <Grid>
      <Col xs={12} md={6}>
        <h2>Left Column</h2>
        <p>This column takes full width on mobile and half width on medium screens and up.</p>
      </Col>
      <Col xs={12} md={6}>
        <h2>Right Column</h2>
        <p>This column takes full width on mobile and half width on medium screens and up.</p>
      </Col>
    </Grid>
  );
}
```

## API Reference

### Container Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fluid` | `boolean` | `false` | If true, the container will take up the full width of its parent |
| `maxWidth` | `string` | `'1200px'` | Maximum width of the container |
| `px` | `string \| number` | `4` | Horizontal padding |
| `py` | `string \| number` | `0` | Vertical padding |
| `mx` | `string \| number` | `'auto'` | Horizontal margin |
| `my` | `string \| number` | `0` | Vertical margin |
| `textAlign` | `'left' \| 'center' \| 'right'` | `undefined` | Text alignment within the container |
| `className` | `string` | `''` | Additional CSS class names |

### Grid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `spacing` | `number` | `3` | Space between grid items (using theme spacing) |
| `alignItems` | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'` | `'stretch'` | Vertical alignment of items |
| `justifyContent` | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | Horizontal distribution of items |
| `flexDirection` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'row'` | Direction of the flex items |
| `flexWrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'wrap'` | Whether items should wrap |
| `container` | `boolean` | `true` | If true, the grid will use container styles |
| `width` | `string` | `undefined` | Custom width override |
| `height` | `string` | `undefined` | Custom height override |
| `className` | `string` | `''` | Additional CSS class names |

### Col Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `xs` | `number \| 'auto'` | `undefined` | Width on extra small screens (0-12, where 12 is 100%) |
| `sm` | `number \| 'auto'` | `undefined` | Width on small screens and up |
| `md` | `number \| 'auto'` | `undefined` | Width on medium screens and up |
| `lg` | `number \| 'auto'` | `undefined` | Width on large screens and up |
| `xl` | `number \| 'auto'` | `undefined` | Width on extra large screens and up |
| `order` | `number` | `undefined` | Order of the column in the grid |
| `offset` | `number` | `undefined` | Offset from the left (in columns) |
| `textAlign` | `'left' \| 'center' \| 'right'` | `undefined` | Text alignment within the column |
| `alignSelf` | `'auto' \| 'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'` | `undefined` | Alignment of this specific column |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Basic Container

```jsx
<Container>
  <h1>Page Title</h1>
  <p>This is centered and has a max width.</p>
</Container>
```

### Fluid Container

```jsx
<Container fluid>
  <h1>Full Width Content</h1>
  <p>This container takes up the full width of its parent.</p>
</Container>
```

### Basic Grid Layout

```jsx
<Grid>
  <Col xs={12}>
    <h1>Full Width Header</h1>
  </Col>
  <Col xs={12} md={8}>
    <p>Main content area (8/12 columns on medium and up)</p>
  </Col>
  <Col xs={12} md={4}>
    <p>Sidebar (4/12 columns on medium and up)</p>
  </Col>
</Grid>
```

### Complex Responsive Layout

```jsx
<Container>
  <Grid spacing={4}>
    <Col xs={12}>
      <header>
        <h1>Responsive Dashboard</h1>
      </header>
    </Col>
    
    <Col xs={12} lg={3}>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Settings</li>
        </ul>
      </nav>
    </Col>
    
    <Col xs={12} lg={6}>
      <main>
        <h2>Main Content</h2>
        <p>This area takes half the screen on large devices.</p>
      </main>
    </Col>
    
    <Col xs={12} lg={3}>
      <aside>
        <h2>Sidebar</h2>
        <p>Right sidebar visible on large screens.</p>
      </aside>
    </Col>
    
    <Col xs={12}>
      <footer>
        <p>Footer content</p>
      </footer>
    </Col>
  </Grid>
</Container>
```

### Grid with Alignment

```jsx
<Grid alignItems="center" justifyContent="space-between" height="100vh">
  <Col xs={12} md={6}>
    <h2>Left aligned, vertically centered</h2>
  </Col>
  
  <Col xs={12} md={6} textAlign="right">
    <h2>Right aligned, vertically centered</h2>
  </Col>
</Grid>
```

### Nested Grids

```jsx
<Grid>
  <Col xs={12} md={6}>
    <h2>Left Column</h2>
    
    <Grid>
      <Col xs={6}>
        <p>Nested left</p>
      </Col>
      <Col xs={6}>
        <p>Nested right</p>
      </Col>
    </Grid>
  </Col>
  
  <Col xs={12} md={6}>
    <h2>Right Column</h2>
    <p>Content here</p>
  </Col>
</Grid>
```

## Migration from Chakra UI Flex

If you're migrating from Chakra UI's Flex components, here's how the properties map:

### Chakra UI to Goblin System Mapping

| Chakra UI Flex Prop | Goblin System Equivalent |
|---------------------|--------------------------|
| `direction` | `flexDirection` on Grid |
| `wrap` | `flexWrap` on Grid |
| `justify` | `justifyContent` on Grid |
| `align` | `alignItems` on Grid |
| `alignContent` | Use CSS directly or wrap with styled-components |
| `basis` | Use width/height with percentages or px values |
| `grow` | Use styled-components to add flex-grow |
| `shrink` | Use styled-components to add flex-shrink |
| `w` or `width` | `width` on Grid or Col |
| `h` or `height` | `height` on Grid or Col |

### Example Migration

Before (Chakra UI):

```jsx
<Flex
  direction={['column', 'row']}
  justify="space-between"
  align="center"
  wrap="wrap"
  p={4}
>
  <Box w={['100%', '50%']} mb={[4, 0]}>
    Left Content
  </Box>
  <Box w={['100%', '50%']}>
    Right Content
  </Box>
</Flex>
```

After (Goblin System):

```jsx
<Grid
  flexDirection={{ xs: 'column', sm: 'row' }}
  justifyContent="space-between"
  alignItems="center"
  flexWrap="wrap"
  px={4}
  py={4}
>
  <Col xs={12} sm={6} mb={{ xs: 4, sm: 0 }}>
    Left Content
  </Col>
  <Col xs={12} sm={6}>
    Right Content
  </Col>
</Grid>
```

## Customization

### Styled Component Extension

You can extend the Container and Grid components with styled-components:

```jsx
import styled from 'styled-components';
import { Container, Grid, Col } from 'pkg-fe-react-goblin-system';

const HeroContainer = styled(Container)`
  background-color: ${props => props.theme.colors.primary.lightest};
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.spacing.xl};
`;

const CardGrid = styled(Grid)`
  margin-top: ${props => props.theme.spacing.xl};
`;

const CardCol = styled(Col)`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

function HeroSection() {
  return (
    <HeroContainer>
      <h1>Welcome to Our Platform</h1>
      <CardGrid>
        <CardCol xs={12} md={4}>
          <div className="card">Feature 1</div>
        </CardCol>
        <CardCol xs={12} md={4}>
          <div className="card">Feature 2</div>
        </CardCol>
        <CardCol xs={12} md={4}>
          <div className="card">Feature 3</div>
        </CardCol>
      </CardGrid>
    </HeroContainer>
  );
}
```

## Accessibility Considerations

The Container and Grid system follows these accessibility best practices:

- Uses semantic HTML elements wherever possible
- Maintains proper document flow for screen readers
- Preserves correct reading order even when using order or flex-direction
- Ensures responsive layouts work across devices and zoom levels
