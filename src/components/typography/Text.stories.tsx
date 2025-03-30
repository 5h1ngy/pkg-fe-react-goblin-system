import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Text from './Text';

const meta = {
  title: 'UI/Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic text
export const Basic: Story = {
  args: {
    children: 'This is a basic text component.',
  },
};

// Text variants
export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Text variant="body1">
      Body1: The main text variant for most content, designed for good readability.
    </Text>
    <Text variant="body2">
      Body2: A slightly smaller text variant, perfect for secondary information.
    </Text>
    <Text variant="caption">
      Caption: Used for small annotations, labels, or helper text.
    </Text>
    <Text variant="overline">
      OVERLINE: TYPICALLY ALL CAPS WITH LETTER SPACING FOR SMALL HEADERS.
    </Text>
  </div>
);

// Text colors
export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Text color="primary">Primary color text (from theme)</Text>
    <Text color="secondary">Secondary color text (from theme)</Text>
    <Text color="error">Error color text (from theme)</Text>
    <Text color="success">Success color text (from theme)</Text>
    <Text color="warning">Warning color text (from theme)</Text>
    <Text color="info">Info color text (from theme)</Text>
    <Text color="#ff5722">Custom color text (#ff5722)</Text>
    <Text color="rgba(75, 0, 130, 0.7)">Custom rgba color text</Text>
    <div style={{ backgroundColor: '#333', padding: '8px' }}>
      <Text color="white">White text on dark background</Text>
    </div>
  </div>
);

// Text weights
export const Weights = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Text weight="regular">Regular weight text (400)</Text>
    <Text weight="medium">Medium weight text (500)</Text>
    <Text weight="bold">Bold weight text (700)</Text>
  </div>
);

// Text alignment
export const Alignment = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Text align="left">
      Left aligned text. This is the default alignment for text in most languages. 
      It aligns text to the left margin.
    </Text>
    <Text align="center">
      Center aligned text. This centers the text between margins.
      Useful for headings or quotes.
    </Text>
    <Text align="right">
      Right aligned text. This aligns text to the right margin.
      Sometimes used for specific elements like dates or numbers.
    </Text>
  </div>
);

// Text transformations
export const Transformations = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Text transform="uppercase">This text is transformed to uppercase</Text>
    <Text transform="lowercase">THIS TEXT IS TRANSFORMED TO LOWERCASE</Text>
    <Text transform="capitalize">this text has each word capitalized</Text>
  </div>
);

// Font size
export const FontSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Text fontSize="12px">Small text (12px)</Text>
    <Text fontSize="16px">Medium text (16px)</Text>
    <Text fontSize="20px">Large text (20px)</Text>
    <Text fontSize="2rem">Really large text (2rem)</Text>
  </div>
);

// Line height
export const LineHeight = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div>
      <Text weight="medium">Default line height</Text>
      <Text>
        This text uses the default line height which is usually around 1.5. This is generally 
        considered good for readability on screens as it provides enough space between lines
        of text without making paragraphs too spaced out.
      </Text>
    </div>
    
    <div>
      <Text weight="medium">Tight line height (1.2)</Text>
      <Text lineHeight="1.2">
        This text uses a tighter line height of 1.2. Notice how the lines are closer
        together. This can be appropriate for headings or short text blocks, but may 
        reduce readability for longer paragraphs, especially on smaller screens.
      </Text>
    </div>
    
    <div>
      <Text weight="medium">Spacious line height (2)</Text>
      <Text lineHeight="2">
        This text uses a more spacious line height of 2. The extra space between lines
        can improve readability for some readers, particularly those with dyslexia or 
        visual impairments. However, it takes up more vertical space.
      </Text>
    </div>
  </div>
);

// Text decoration
export const Decoration = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Text decoration="underline">Underlined text</Text>
    <Text decoration="line-through">Text with strikethrough</Text>
    <Text decoration="none">Text with no decoration</Text>
  </div>
);

// Truncation
export const Truncation = () => (
  <div style={{ maxWidth: '300px', border: '1px solid #eee', padding: '16px' }}>
    <Text weight="medium">Without truncation:</Text>
    <Text>
      This is a very long text without truncation. It will wrap to multiple lines within its container
      and continue for as long as needed.
    </Text>
    
    <div style={{ height: '16px' }} />
    
    <Text weight="medium">With truncation:</Text>
    <Text truncate>
      This is a very long text with truncation. It will be cut off with an ellipsis when it reaches the
      width of its container instead of wrapping to multiple lines.
    </Text>
  </div>
);

// Semantic elements
export const SemanticElements = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Text as="p">This is rendered as a paragraph (p) element</Text>
    <Text as="span">This is rendered as a span element</Text>
    <Text as="div">This is rendered as a div element</Text>
    <Text as="label">This is rendered as a label element</Text>
  </div>
);

// Combined styling
export const CombinedStyling = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <Text 
      variant="body1" 
      color="primary" 
      weight="bold" 
      transform="uppercase"
    >
      Primary call to action
    </Text>
    
    <Text 
      variant="body2" 
      color="#6200ea" 
      align="center" 
      decoration="underline"
    >
      Important centered note
    </Text>
    
    <div style={{ backgroundColor: '#333', padding: '12px' }}>
      <Text 
        color="white" 
        weight="medium" 
        fontSize="18px"
      >
        Light text on dark background
      </Text>
    </div>
    
    <Text 
      style={{ 
        backgroundColor: '#e3f2fd', 
        padding: '12px', 
        borderRadius: '4px',
        border: '1px solid #90caf9'
      }}
    >
      Text with custom styling using the style prop
    </Text>
  </div>
);
