import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Select from './Select';

const meta = {
  title: 'Components/Form/Select',
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Options for all examples
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

// Options with a disabled item
const optionsWithDisabled = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

export const Default: Story = {
  args: {
    options: options,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Select an option',
    options: options,
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Select an option',
    options: options,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    options: options,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    options: options,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    options: options,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: options,
    placeholder: 'Disabled select',
  },
};

export const DisabledOptions: Story = {
  args: {
    options: optionsWithDisabled,
    placeholder: 'Select with disabled option',
  },
};

export const WithError: Story = {
  args: {
    options: options,
    error: true,
    errorText: 'Please select a valid option',
  },
};

export const Required: Story = {
  args: {
    options: options,
    required: true,
    label: 'Required field',
  },
};

export const FullWidth: Story = {
  args: {
    options: options,
    fullWidth: true,
    placeholder: 'Full width select',
  },
};
