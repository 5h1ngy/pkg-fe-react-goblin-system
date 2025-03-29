import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import Checkbox from './Checkbox';
import { useState } from 'react';

const meta = {
  title: 'UI/Form/Checkbox',
  component: Checkbox,
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
  args: {
    id: 'checkbox-example',
    label: 'Checkbox label',
    onChange: () => {}
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic checkbox
export const Basic: Story = {
  args: {
    id: 'basic-checkbox',
    label: 'Basic checkbox',
  },
};

// Controlled checkbox
export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Checkbox
        id="controlled-checkbox"
        label={`Controlled checkbox (${checked ? 'Checked' : 'Unchecked'})`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <button 
        onClick={() => setChecked(!checked)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Toggle checkbox
      </button>
    </div>
  );
};

// Checked checkbox
export const Checked: Story = {
  args: {
    id: 'checked-checkbox',
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

// Disabled checkbox
export const Disabled: Story = {
  args: {
    id: 'disabled-checkbox',
    label: 'Disabled checkbox',
    disabled: true,
  },
};

// Disabled and checked checkbox
export const DisabledChecked: Story = {
  args: {
    id: 'disabled-checked-checkbox',
    label: 'Disabled and checked checkbox',
    disabled: true,
    defaultChecked: true,
  },
};

// Checkbox with error
export const WithError: Story = {
  args: {
    id: 'error-checkbox',
    label: 'Checkbox with error',
    error: 'This field is required',
  },
};

// Checkbox sizes
export const Sizes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        id="small-checkbox"
        label="Small checkbox"
        size="small"
      />
      <Checkbox
        id="medium-checkbox"
        label="Medium checkbox"
        size="medium"
      />
      <Checkbox
        id="large-checkbox"
        label="Large checkbox"
        size="large"
      />
    </div>
  );
};

// Checkbox group example
export const CheckboxGroup = () => {
  const [selected, setSelected] = useState<string[]>(['option1']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ marginBottom: '8px', fontWeight: 500 }}>
        Select your favorite fruits:
      </div>
      <Checkbox
        id="option1"
        value="option1"
        label="Apple"
        checked={selected.includes('option1')}
        onChange={handleChange}
      />
      <Checkbox
        id="option2"
        value="option2"
        label="Banana"
        checked={selected.includes('option2')}
        onChange={handleChange}
      />
      <Checkbox
        id="option3"
        value="option3"
        label="Orange"
        checked={selected.includes('option3')}
        onChange={handleChange}
      />
      <Checkbox
        id="option4"
        value="option4"
        label="Strawberry"
        checked={selected.includes('option4')}
        onChange={handleChange}
      />
      <div style={{ marginTop: '16px' }}>
        Selected options: {selected.join(', ')}
      </div>
    </div>
  );
};
