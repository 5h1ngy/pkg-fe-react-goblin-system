import {Meta, StoryObj} from '@storybook/react'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof AccordionSummary> = {
  title: 'Surfaces/AccordionSummary',
  component: AccordionSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.AccordionSummary,
      },
    },
  },
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