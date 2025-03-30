import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Spinner from './Spinner';

const meta = {
  title: 'UI/Feedback/Spinner',
  component: Spinner,
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
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderType: Story = {
  args: {
    type: 'border',
    size: 'medium',
  },
};

export const GrowType: Story = {
  args: {
    type: 'grow',
    size: 'medium',
  },
};

export const DotsType: Story = {
  args: {
    type: 'dots',
    size: 'medium',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    type: 'border',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
    type: 'border',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    type: 'border',
  },
};

export const CustomSize: Story = {
  args: {
    size: 50,
    type: 'border',
  },
};

export const CustomColor: Story = {
  args: {
    type: 'border',
    size: 'medium',
    color: '#FF5722',
  },
};

export const Centered: Story = {
  args: {
    type: 'border',
    size: 'medium',
    centered: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '300px', height: '100px', border: '1px dashed #ccc' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const WithLabel: Story = {
  args: {
    type: 'border',
    size: 'medium',
    label: 'Custom loading message',
  },
};
