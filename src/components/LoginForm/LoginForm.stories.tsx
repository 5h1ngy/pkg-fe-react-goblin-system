import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} as Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    // Esempio di handler di submit
    submit: (data: any) => alert('Submit: ' + JSON.stringify(data)),
  },
};
