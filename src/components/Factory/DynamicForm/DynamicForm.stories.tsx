import { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import { withMeta } from './DynamicForm';
import DynamicForm from './DynamicForm';

export default {
  title: 'Components/Factory/DynamicForm',
  component: DynamicForm,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof DynamicForm>;

const schema = z.object({
  name: withMeta(z.string().min(2), { label: 'Name' }),
  age: withMeta(z.number().min(18), { label: 'Age' }),
}).superRefine(() => { });

export const Default: StoryObj<typeof DynamicForm> = {
  args: {
    width: '400px',
    schema,
    defaultValues: { name: '', age: 18 },
    onNext: (step, complete) => console.log(`Next step: ${step}, Complete: ${complete}`),
    onBack: (step, complete) => console.log(`Back step: ${step}, Complete: ${complete}`),
    render: (rows, _onSubmit, next, back) => (
      <>
        {rows}
        <button onClick={() => next?.()}>Next</button>
        <button onClick={() => back?.()}>Back</button>
      </>
    ),
  },
};

export const WithSteps: StoryObj<typeof DynamicForm> = {
  args: {
    ...Default.args,
    schema: z.object({
      step1: withMeta(z.string().min(3), { label: 'Step 1', step: 0 }),
      step2: withMeta(z.string().min(3), { label: 'Step 2', step: 1 }),
    }).superRefine(() => { })
  },
};
