import type { Meta, StoryObj } from '@storybook/react';
import RegisterForm from './RegisterForm';

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
} as Meta<typeof RegisterForm>;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    submit: (data: any) => alert('Registrazione completata:\n' + JSON.stringify(data)),
  },
};
