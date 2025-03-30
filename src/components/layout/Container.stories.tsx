import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Container from './Container';
import Text from '../typography/Text';

const meta = {
  title: 'Components/Layout/Container',
  component: Container,
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
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic container
export const Basic: Story = {
  args: {
    children: <div style={{padding: '20px', background: '#f0f0f0'}}>Container content</div>,
  },
};

// Fluid container
export const Fluid: Story = {
  args: {
    fluid: true,
    children: <div style={{padding: '20px', background: '#f0f0f0', width: '100%'}}>Fluid container takes up full width</div>,
  },
};

// Container with custom max width
export const CustomMaxWidth: Story = {
  args: {
    maxWidth: '600px',
    children: <div style={{padding: '20px', background: '#f0f0f0', width: '100%'}}>Container with 600px max width</div>,
  },
};

// Container with custom padding
export const CustomPadding: Story = {
  args: {
    padding: '32px',
    children: <div style={{padding: '20px', background: '#f0f0f0'}}>Container with 32px padding</div>,
  },
};

// Container without gutters
export const NoGutters: Story = {
  args: {
    disableGutters: true,
    children: <div style={{padding: '20px', background: '#f0f0f0'}}>Container without gutters (no margin)</div>,
  },
};

// Container with custom style
export const CustomStyle: Story = {
  args: {
    style: { 
      backgroundColor: '#e6f7ff', 
      border: '1px solid #1890ff',
      borderRadius: '8px',
    },
    children: <div style={{padding: '20px'}}>Container with custom styling</div>,
  },
};

// Container with nested content
export const WithNestedContent = () => {
  return (
    <Container style={{ width: '100%', maxWidth: '800px' }}>
      <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <Text variant="body1" style={{ marginBottom: '16px' }}>
          This is a container with nested content. Containers are useful for maintaining consistent 
          widths and centering content on the page.
        </Text>
        <Container 
          style={{ 
            backgroundColor: '#e6f7ff', 
            borderRadius: '4px',
            marginBottom: '16px'
          }}
        >
          <div style={{ padding: '16px' }}>
            <Text variant="body2">
              You can nest containers to create more complex layouts.
            </Text>
          </div>
        </Container>
        <Container 
          style={{ 
            backgroundColor: '#f6ffed', 
            borderRadius: '4px' 
          }}
        >
          <div style={{ padding: '16px' }}>
            <Text variant="body2">
              Each container can have its own styling and behavior.
            </Text>
          </div>
        </Container>
      </div>
    </Container>
  );
};
