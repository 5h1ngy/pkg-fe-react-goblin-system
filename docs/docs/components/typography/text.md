---
sidebar_position: 1
---

# Text

The `Text` component is a fundamental element for displaying textual content. It offers various style variants and formatting options to meet all typography needs.

## Importing

```jsx
import { Text } from 'pkg-fe-react-goblin-system';
```

## Basic Usage

```jsx
<Text>This is the default text</Text>
<Text variant="body1">This is body1 text</Text>
<Text variant="body2">This is body2 text</Text>
<Text variant="caption">This is caption text</Text>
<Text variant="overline">THIS IS OVERLINE TEXT</Text>
```

## Properties

| Property | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | `'body1' \| 'body2' \| 'caption' \| 'overline'` | `'body1'` | Text style variant |
| `color` | `string` | - | Text color (supports theme colors and CSS values) |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Horizontal alignment |
| `weight` | `'regular' \| 'medium' \| 'bold' \| number` | - | Font weight |
| `italic` | `boolean` | `false` | Applies italic style |
| `transform` | `'none' \| 'uppercase' \| 'lowercase' \| 'capitalize'` | `'none'` | Text transformation |
| `nowrap` | `boolean` | `false` | Prevents text wrapping |
| `truncate` | `boolean \| number` | `false` | Truncates text with ellipsis after one line or specified number of lines |
| `fontSize` | `string \| number` | - | Custom font size |
| `lineHeight` | `string \| number` | - | Custom line height |
| `paragraph` | `boolean` | `false` | Uses the semantic `<p>` tag and applies margin-bottom |
| `component` | `React.ElementType` | `'span'` | React component or HTML element to use |

## Variants

### Style Variants

```jsx
<Text variant="body1">Body 1 - Main text</Text>
<Text variant="body2">Body 2 - Secondary text, slightly smaller</Text>
<Text variant="caption">Caption - Smaller text for labels and notes</Text>
<Text variant="overline">OVERLINE - SMALL UPPERCASE TEXT FOR HEADERS</Text>
```

### Colors

```jsx
<Text color="primary">Text with theme primary color</Text>
<Text color="secondary">Text with theme secondary color</Text>
<Text color="error">Error text</Text>
<Text color="textSecondary">Secondary text</Text>
<Text color="#FF5722">Text with custom color</Text>
```

### Alignment

```jsx
<Text align="left">Left-aligned text</Text>
<Text align="center">Centered text</Text>
<Text align="right">Right-aligned text</Text>
<Text align="justify">Justified text. This paragraph demonstrates how text is distributed evenly across the available width, creating uniform spacing between words.</Text>
```

### Weight and Style

```jsx
<Text weight="regular">Text with regular weight</Text>
<Text weight="medium">Text with medium weight</Text>
<Text weight="bold">Text with bold weight</Text>
<Text weight={500}>Text with weight 500</Text>
<Text italic>Italic text</Text>
<Text weight="bold" italic>Bold and italic text</Text>
```

### Truncated Text

```jsx
<Text truncate style={{ width: '200px' }}>
  This text is very long and will be truncated with ellipsis at the end.
</Text>

{/* Truncate after 2 lines */}
<Text truncate={2} style={{ width: '200px' }}>
  This is a very long text that will take up more than one line and will be truncated after the second line with ellipsis.
</Text>
```

## Advanced Examples

### Paragraph

```jsx
<Text paragraph>
  This is a paragraph of text. It uses the semantic paragraph tag and includes appropriate spacing below it. This is useful for creating readable content with proper vertical rhythm.
</Text>

<Text paragraph>
  A second paragraph will have proper spacing between it and the previous paragraph.
</Text>
```

### Custom Component

```jsx
<Text component="label" htmlFor="input-id">
  This text is rendered as a label
</Text>

<Text component="h3" variant="body1" weight="bold" color="primary">
  This is rendered as an H3 heading with body1 styling
</Text>
```

### Rich Text Formatting

```jsx
<Text>
  You can combine <Text weight="bold" component="span">bold</Text>,{' '}
  <Text italic component="span">italic</Text>, and{' '}
  <Text color="primary" component="span">colored</Text> text within
  a single paragraph.
</Text>
```

## Responsive Typography

```jsx
// This text will be 1rem on mobile, 1.25rem on tablets, and 1.5rem on desktop
<Text 
  style={{ 
    fontSize: '1rem',
    '@media (min-width: 768px)': {
      fontSize: '1.25rem',
    },
    '@media (min-width: 1200px)': {
      fontSize: '1.5rem',
    }
  }}
>
  Responsive text that adapts to screen size
</Text>
```

## Theming

The `Text` component can be customized through the theme:

```jsx
const customTheme = {
  typography: {
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
  },
};
```

## Accessibility

The `Text` component is designed to support best practices for accessibility:

- Uses semantic HTML tags when appropriate (`paragraph` → `<p>`)
- Maintains a consistent text hierarchy through variants
- Ensures sufficient contrast with theme colors
- Supports text size increase in browsers without breaking

## Customization

You can customize the base styles of each variant through the theme:

```jsx
const customTheme = {
  typography: {
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
  },
};
```
