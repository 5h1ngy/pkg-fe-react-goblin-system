import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Row, Column } from './Grid';

const meta = {
  title: 'UI/Layout/Grid',
  component: Row,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Row>;

export default meta;

// Helper component for visualizing grid cells
const Cell = ({ children, height = '80px' }: { children: React.ReactNode, height?: string }) => (
  <div 
    style={{ 
      backgroundColor: '#e6f7ff', 
      border: '1px solid #1890ff',
      borderRadius: '4px',
      padding: '16px',
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

// Basic grid with equal columns
export const BasicGrid = () => (
  <Row gutter={16}>
    <Column span={8}>
      <Cell>Column 1</Cell>
    </Column>
    <Column span={8}>
      <Cell>Column 2</Cell>
    </Column>
    <Column span={8}>
      <Cell>Column 3</Cell>
    </Column>
  </Row>
);

// Grid with different column widths
export const DifferentWidths = () => (
  <Row gutter={16}>
    <Column span={6}>
      <Cell>span=6</Cell>
    </Column>
    <Column span={12}>
      <Cell>span=12</Cell>
    </Column>
    <Column span={6}>
      <Cell>span=6</Cell>
    </Column>
  </Row>
);

// Grid with gutter options
export const GutterOptions = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div>
      <p style={{ marginBottom: '16px' }}>Gutter: 8px</p>
      <Row gutter={8}>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{ marginBottom: '16px' }}>Gutter: 16px</p>
      <Row gutter={16}>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{ marginBottom: '16px' }}>Gutter: 32px</p>
      <Row gutter={32}>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
        <Column span={6}>
          <Cell>Column</Cell>
        </Column>
      </Row>
    </div>
  </div>
);

// Grid with column offset
export const ColumnOffset = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Row gutter={16}>
      <Column span={8}>
        <Cell>span=8</Cell>
      </Column>
      <Column span={8} offset={8}>
        <Cell>span=8 offset=8</Cell>
      </Column>
    </Row>
    <Row gutter={16}>
      <Column span={6} offset={6}>
        <Cell>span=6 offset=6</Cell>
      </Column>
      <Column span={6} offset={6}>
        <Cell>span=6 offset=6</Cell>
      </Column>
    </Row>
    <Row gutter={16}>
      <Column span={12} offset={6}>
        <Cell>span=12 offset=6</Cell>
      </Column>
    </Row>
  </div>
);

// Grid with alignment options
export const AlignmentOptions = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div>
      <p style={{ marginBottom: '16px' }}>Align: flex-start</p>
      <Row gutter={16} align="flex-start">
        <Column span={8}>
          <Cell height="120px">Column 1</Cell>
        </Column>
        <Column span={8}>
          <Cell height="80px">Column 2</Cell>
        </Column>
        <Column span={8}>
          <Cell height="160px">Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{ marginBottom: '16px' }}>Align: center</p>
      <Row gutter={16} align="center">
        <Column span={8}>
          <Cell height="120px">Column 1</Cell>
        </Column>
        <Column span={8}>
          <Cell height="80px">Column 2</Cell>
        </Column>
        <Column span={8}>
          <Cell height="160px">Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{ marginBottom: '16px' }}>Align: flex-end</p>
      <Row gutter={16} align="flex-end">
        <Column span={8}>
          <Cell height="120px">Column 1</Cell>
        </Column>
        <Column span={8}>
          <Cell height="80px">Column 2</Cell>
        </Column>
        <Column span={8}>
          <Cell height="160px">Column 3</Cell>
        </Column>
      </Row>
    </div>
  </div>
);

// Grid with justification options
export const JustificationOptions = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div>
      <p style={{ marginBottom: '16px' }}>Justify: flex-start</p>
      <Row gutter={16} justify="flex-start">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{ marginBottom: '16px' }}>Justify: center</p>
      <Row gutter={16} justify="center">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{ marginBottom: '16px' }}>Justify: flex-end</p>
      <Row gutter={16} justify="flex-end">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
    
    <div>
      <p style={{ marginBottom: '16px' }}>Justify: space-between</p>
      <Row gutter={16} justify="space-between">
        <Column span={4}>
          <Cell>Column 1</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 2</Cell>
        </Column>
        <Column span={4}>
          <Cell>Column 3</Cell>
        </Column>
      </Row>
    </div>
  </div>
);

// Responsive grid
export const ResponsiveGrid = () => (
  <div>
    <p style={{ marginBottom: '16px' }}>Resize the browser window to see the responsive behavior</p>
    <Row gutter={16}>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
      <Column xs={24} sm={12} md={8} lg={6} xl={4}>
        <Cell>Col</Cell>
      </Column>
    </Row>
  </div>
);

// Nested grid
export const NestedGrid = () => (
  <Row gutter={16}>
    <Column span={8}>
      <Cell>Col-8</Cell>
    </Column>
    <Column span={16}>
      <Row gutter={8}>
        <Column span={8}>
          <Cell>Col-8</Cell>
        </Column>
        <Column span={8}>
          <Cell>Col-8</Cell>
        </Column>
        <Column span={8}>
          <Cell>Col-8</Cell>
        </Column>
      </Row>
    </Column>
  </Row>
);
