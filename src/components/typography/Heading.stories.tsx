import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Heading from './Heading';

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic heading with default level
export const Basic: Story = {
  args: {
    children: 'Default Heading',
  },
};

// Different heading levels
export const HeadingLevels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <Heading level={1}>Heading Level 1 (h1)</Heading>
    <Heading level={2}>Heading Level 2 (h2)</Heading>
    <Heading level={3}>Heading Level 3 (h3)</Heading>
    <Heading level={4}>Heading Level 4 (h4)</Heading>
    <Heading level={5}>Heading Level 5 (h5)</Heading>
    <Heading level={6}>Heading Level 6 (h6)</Heading>
  </div>
);

// Heading colors
export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Heading level={2} color="primary">Primary Color Heading</Heading>
    <Heading level={2} color="secondary">Secondary Color Heading</Heading>
    <Heading level={2} color="error">Error Color Heading</Heading>
    <Heading level={2} color="#ff5722">Custom Color Heading (#ff5722)</Heading>
    <div style={{ backgroundColor: '#333', padding: '16px' }}>
      <Heading level={2} color="white">White Heading on Dark Background</Heading>
    </div>
  </div>
);

// Text weights
export const Weights = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Heading level={2} weight="regular">Regular Weight Heading (400)</Heading>
    <Heading level={2} weight="medium">Medium Weight Heading (500)</Heading>
    <Heading level={2} weight="bold">Bold Weight Heading (700)</Heading>
  </div>
);

// Heading alignment
export const Alignment = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <Heading level={2} align="left">Left Aligned Heading</Heading>
    <Heading level={2} align="center">Center Aligned Heading</Heading>
    <Heading level={2} align="right">Right Aligned Heading</Heading>
  </div>
);

// Text transformations
export const Transformations = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Heading level={3} transform="uppercase">Uppercase Heading</Heading>
    <Heading level={3} transform="lowercase">LOWERCASE HEADING</Heading>
    <Heading level={3} transform="capitalize">capitalize each word in heading</Heading>
  </div>
);

// Custom font size
export const CustomFontSize = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Heading level={2} fontSize="24px">Custom 24px Heading</Heading>
    <Heading level={2} fontSize="32px">Custom 32px Heading</Heading>
    <Heading level={2} fontSize="3rem">Custom 3rem Heading</Heading>
  </div>
);

// Margin customization
export const CustomMargin = () => (
  <div style={{ display: 'flex', flexDirection: 'column', border: '1px dashed #ccc', padding: '16px' }}>
    <Heading level={2} margin="0 0 24px 0">
      Heading with Bottom Margin
    </Heading>
    <div style={{ padding: '8px', backgroundColor: '#f0f0f0' }}>
      Content below heading
    </div>
  </div>
);

// Line height
export const LineHeight = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div>
      <Heading level={2}>Default Line Height</Heading>
      <div style={{ backgroundColor: '#f0f0f0', height: '2px', marginTop: '4px' }}></div>
    </div>
    
    <div>
      <Heading level={2} lineHeight="1">Tight Line Height (1)</Heading>
      <div style={{ backgroundColor: '#f0f0f0', height: '2px', marginTop: '4px' }}></div>
    </div>
    
    <div>
      <Heading level={2} lineHeight="2">Spacious Line Height (2)</Heading>
      <div style={{ backgroundColor: '#f0f0f0', height: '2px', marginTop: '4px' }}></div>
    </div>
  </div>
);

// Truncation
export const Truncation = () => (
  <div style={{ maxWidth: '300px', border: '1px solid #eee', padding: '16px' }}>
    <div>
      <strong>Without truncation:</strong>
      <Heading level={3}>
        This is a very long heading that will wrap to multiple lines when it exceeds the container width
      </Heading>
    </div>
    
    <div style={{ marginTop: '24px' }}>
      <strong>With truncation:</strong>
      <Heading level={3} truncate>
        This is a very long heading that will be truncated with an ellipsis when it exceeds the container width
      </Heading>
    </div>
  </div>
);

// Responsive heading example
export const ResponsiveHeading = () => (
  <div>
    <p style={{ marginBottom: '16px' }}>
      Resize the window to see how this heading responds to different viewport sizes:
    </p>
    <Heading 
      level={2} 
      style={{ 
        fontSize: 'clamp(1.5rem, 5vw, 3rem)',
        transition: 'font-size 0.3s ease'
      }}
    >
      Responsive Sized Heading
    </Heading>
  </div>
);

// Page heading example
export const PageHeadingExample = () => (
  <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
    <Heading 
      level={1} 
      style={{ borderBottom: '2px solid #1890ff', paddingBottom: '8px' }}
    >
      Page Title
    </Heading>
    
    <div style={{ marginTop: '32px' }}>
      <Heading level={2} color="secondary">Section Heading</Heading>
      <p style={{ marginTop: '16px' }}>
        This example shows how headings can be used in a typical page layout.
        The main title uses level 1 (h1) with a bottom border for emphasis,
        while section headings use level 2 (h2) with a different color.
      </p>
    </div>
    
    <div style={{ marginTop: '32px' }}>
      <Heading level={3}>Subsection</Heading>
      <p style={{ marginTop: '16px' }}>
        Smaller subsections use level 3 (h3) headings to create a clear
        hierarchy of content on the page.
      </p>
    </div>
  </div>
);
