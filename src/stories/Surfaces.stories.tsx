import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from '../components'

const meta: Meta = {
  title: 'Surfaces/Overview',
  component: Paper,
}

export default meta

type Story = StoryObj

export const Components: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    return (
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <Paper elevation={2}>
          <Typography variant='h6'>Paper</Typography>
          <Typography variant='body2'>Use Paper for surfaces of any elevation.</Typography>
        </Paper>

        <Card>
          <CardHeader title='Card title' subheader='Subheader' />
          <CardMedia image='https://picsum.photos/seed/card/600/300' />
          <CardContent>
            <Typography>Cards contain content and actions.</Typography>
          </CardContent>
          <CardActions>
            <button>Action</button>
          </CardActions>
        </Card>

        <Accordion expanded={expanded === 'panel1'} onChange={(_, isExpanded) => setExpanded(isExpanded ? 'panel1' : false)}>
          <AccordionSummary>Accordion summary</AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>Accordion detail content</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  },
}

