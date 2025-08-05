import type { Meta, StoryObj } from '@storybook/react'

import { Step, StepLabel, Stepper } from '../../components'

const meta: Meta<typeof Step> = {
  title: 'Navigation/Step',
  component: Step,
}

export default meta
type Story = StoryObj<typeof Step>

export const Basic: Story = {
  render: (args) => (
    <Stepper activeStep={args.index ?? 0}>
      <Step {...args}>
        <StepLabel>Step Label</StepLabel>
      </Step>
    </Stepper>
  ),
  args: {
    index: 0,
  },
}
