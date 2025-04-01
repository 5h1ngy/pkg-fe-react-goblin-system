import { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Pages/Loading',
  component: Loading,
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
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};
