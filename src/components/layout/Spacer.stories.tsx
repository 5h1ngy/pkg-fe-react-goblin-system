import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Spacer from './Spacer';

const meta = {
  title: 'UI/Layout/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to visualize spacer
const Block = ({ children, color = '#1890ff' }: { children: React.ReactNode, color?: string }) => (
  <div 
    style={{ 
      backgroundColor: color, 
      color: 'white',
      padding: '12px 24px',
      borderRadius: '4px',
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

// Horizontal spacer with different sizes
export const HorizontalSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <Block>Block</Block>
    <Spacer size="xs" />
    <div style={{ fontSize: '12px', color: '#666' }}>xs spacing (4px)</div>
    <Block>Block</Block>
    <Spacer size="sm" />
    <div style={{ fontSize: '12px', color: '#666' }}>sm spacing (8px)</div>
    <Block>Block</Block>
    <Spacer size="md" />
    <div style={{ fontSize: '12px', color: '#666' }}>md spacing (16px)</div>
    <Block>Block</Block>
    <Spacer size="lg" />
    <div style={{ fontSize: '12px', color: '#666' }}>lg spacing (24px)</div>
    <Block>Block</Block>
    <Spacer size="xl" />
    <div style={{ fontSize: '12px', color: '#666' }}>xl spacing (32px)</div>
    <Block>Block</Block>
  </div>
);

// Vertical spacer with different sizes
export const VerticalSizes = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Block>Block</Block>
    <Spacer size="xs" orientation="vertical" />
    <Block>xs (4px)</Block>
    <Spacer size="sm" orientation="vertical" />
    <Block>sm (8px)</Block>
    <Spacer size="md" orientation="vertical" />
    <Block>md (16px)</Block>
    <Spacer size="lg" orientation="vertical" />
    <Block>lg (24px)</Block>
    <Spacer size="xl" orientation="vertical" />
    <Block>xl (32px)</Block>
  </div>
);

// Custom size spacer
export const CustomSize = () => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '32px' }}>
      <Block>Block</Block>
      <Spacer size={48} />
      <div style={{ fontSize: '12px', color: '#666' }}>Custom size (48px)</div>
      <Block>Block</Block>
    </div>
    
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Block>Block</Block>
      <Spacer size={48} orientation="vertical" />
      <div style={{ fontSize: '12px', color: '#666' }}>Custom size (48px)</div>
      <Block>Block</Block>
    </div>
  </div>
);

// Responsive sizing
export const ResponsiveSizing = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <Block>Block</Block>
    <Spacer 
      size={{ 
        xs: 'sm', 
        sm: 'md', 
        md: 'lg', 
        lg: 'xl', 
        xl: 'xl' 
      }} 
    />
    <div style={{ fontSize: '12px', color: '#666' }}>
      Responsive sizing:<br />
      - xs screens: sm spacing (8px)<br />
      - sm screens: md spacing (16px)<br />
      - md screens: lg spacing (24px)<br />
      - lg and xl screens: xl spacing (32px)
    </div>
    <Block>Block</Block>
  </div>
);

// Using spacer in a layout
export const InLayout = () => (
  <div 
    style={{ 
      width: '100%', 
      maxWidth: '600px',
      padding: '24px', 
      border: '1px solid #eee',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    }}
  >
    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Page Title</div>
    <Spacer size="md" />
    
    <div style={{ fontSize: '16px', color: '#666' }}>
      This example shows how Spacer components can be used in a typical layout
      to create consistent spacing between elements.
    </div>
    <Spacer size="lg" />
    
    <Block>Section 1</Block>
    <Spacer size="md" />
    
    <Block color="#52c41a">Section 2</Block>
    <Spacer size="md" />
    
    <Block color="#722ed1">Section 3</Block>
    <Spacer size="xl" />
    
    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Another Header</div>
    <Spacer size="md" />
    
    <Block color="#fa8c16">Section 4</Block>
    <Spacer size="sm" />
    
    <div style={{ fontSize: '12px', fontStyle: 'italic', color: '#999' }}>
      A small note with less spacing above
    </div>
  </div>
);
