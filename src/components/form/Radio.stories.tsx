import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Radio, { RadioGroup } from './Radio';

const meta = {
  title: 'Components/Form/Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio option',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Radio with error',
    error: true,
    errorText: 'This field is required',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small radio',
    size: 'small',
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Medium radio',
    size: 'medium',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large radio',
    size: 'large',
  },
};

// Radio Group examples
export const RadioGroupVertical: Story = {
  render: () => (
    <RadioGroup name="options-vertical" defaultValue="option1">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
      <Radio value="option4" label="Option 4" disabled />
    </RadioGroup>
  ),
};

export const RadioGroupHorizontal: Story = {
  render: () => (
    <RadioGroup name="options-horizontal" defaultValue="option2" layout="horizontal">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const RadioGroupError: Story = {
  render: () => (
    <RadioGroup 
      name="options-error" 
      error={true} 
      errorText="Please select an option"
    >
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
};
