import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '../../components'

const meta: Meta<typeof Accordion> = {
  title: 'Surfaces/Accordion',
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Basic: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionSummary>Accordion summary</AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">Accordion detail content</Typography>
      </AccordionDetails>
    </Accordion>
  ),
}
