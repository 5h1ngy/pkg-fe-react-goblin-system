import {Meta, StoryObj} from '@storybook/react'

import { Step, StepLabel, Stepper } from '../../components'

const meta: Meta<typeof StepLabel> = {
  title: 'Navigation/StepLabel',
  component: StepLabel,
}

export default meta
type Story = StoryObj<typeof StepLabel>

export const Basic: Story = {
  render: (args) => (
    <Stepper activeStep={0}>
      <Step index={0}>
        <StepLabel {...args}>Wizard Step</StepLabel>
      </Step>
    </Stepper>
  ),
}
