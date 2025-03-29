import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Alert from './Alert';
import Button from '../buttons/Button';

const meta = {
  title: 'UI/Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '500px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    children: 'This is an information alert message.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Your action was completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Warning: This action may have consequences.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'An error occurred while processing your request.',
  },
};

export const WithTitle: Story = {
  args: {
    type: 'info',
    title: 'Information',
    children: 'This is an information alert with a title.',
  },
};

export const Closable: Story = {
  args: {
    type: 'success',
    children: 'This alert can be closed.',
    closable: true,
    onClose: () => console.log('Alert closed'),
  },
};

export const WithAction: Story = {
  args: {
    type: 'warning',
    title: 'Attention Required',
    children: 'Your account needs verification before proceeding.',
    action: (
      <Button size="small" variant="primary">
        Verify Now
      </Button>
    ),
  },
};

export const WithMultipleActions: Story = {
  args: {
    type: 'error',
    title: 'Error Detected',
    children: 'We encountered a problem with your submission.',
    action: (
      <>
        <Button size="small" variant="primary">
          Try Again
        </Button>
        <Button size="small" variant="ghost">
          Cancel
        </Button>
      </>
    ),
  },
};

export const WithShadow: Story = {
  args: {
    type: 'info',
    children: 'This alert has a shadow effect.',
    withShadow: true,
  },
};

export const FullWidth: Story = {
  args: {
    type: 'success',
    children: 'This is a full-width alert.',
    fullWidth: true,
  },
};
