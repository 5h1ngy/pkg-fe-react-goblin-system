import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Input from './Input';

const meta = {
  title: 'UI/Form/Input',
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    size: 'medium',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small input',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Medium input',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    size: 'medium',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Input with error',
    size: 'medium',
    error: true,
    errorText: 'This field is required',
  },
};

export const WithSuccess: Story = {
  args: {
    placeholder: 'Input with success',
    size: 'medium',
    success: true,
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: 'Enter amount',
    size: 'medium',
    prefix: '$',
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: 'Enter weight',
    size: 'medium',
    suffix: 'kg',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    size: 'medium',
    type: 'password',
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Full width input',
    size: 'medium',
    fullWidth: true,
  },
};
