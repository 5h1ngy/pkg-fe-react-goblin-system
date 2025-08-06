import {Meta, StoryObj} from '@storybook/react'

import { Step, StepLabel, Stepper } from '../../components'

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
}

export default meta
type Story = StoryObj<typeof Stepper>

export const Basic: Story = {
  render: (args) => (
    <Stepper {...args} activeStep={1} alternativeLabel>
      {[0, 1, 2].map((index) => (
        <Step key={index} index={index}>
          <StepLabel optional={index === 2 ? 'Optional' : undefined}>{`Step ${index + 1}`}</StepLabel>
        </Step>
      ))}
    </Stepper>
  ),
}
