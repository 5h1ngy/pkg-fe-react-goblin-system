import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '../../components'

const meta: Meta<typeof AccordionSummary> = {
  title: 'Surfaces/AccordionSummary',
  component: AccordionSummary,
}

export default meta
type Story = StoryObj<typeof AccordionSummary>

export const Basic: Story = {
  render: (args) => (
    <Accordion defaultExpanded>
      <AccordionSummary {...args}>Summary text</AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">Details content</Typography>
      </AccordionDetails>
    </Accordion>
  ),
}
