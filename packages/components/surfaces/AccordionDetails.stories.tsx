import {Meta, StoryObj} from '@storybook/react'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof AccordionDetails> = {
  title: 'Surfaces/AccordionDetails',
  component: AccordionDetails,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.AccordionDetails,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AccordionDetails>

export const Basic: Story = {
  render: (args) => (
    <Accordion defaultExpanded>
      <AccordionSummary>Summary</AccordionSummary>
      <AccordionDetails {...args}>
        <Typography variant="body2">Custom details content.</Typography>
      </AccordionDetails>
    </Accordion>
  ),
}