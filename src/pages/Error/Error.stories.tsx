import { Meta, StoryObj } from '@storybook/react';
import Error from './Error';

const meta: Meta<typeof Error> = {
  title: 'Pages/Error',
  component: Error,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {},
};
