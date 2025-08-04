import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import {
  Autocomplete,
  Button,
  ButtonGroup,
  Checkbox,
  Fab,
  IconButton,
  Radio,
  Rating,
  Select,
  Slider,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  TransferList,
} from '../components'

const meta: Meta = {
  title: 'Inputs/Overview',
  component: Button,
}

export default meta

type Story = StoryObj

export const Components: Story = {
  render: () => {
    const [toggleValue, setToggleValue] = useState('left')
    const [transfer, setTransfer] = useState({
      left: [
        { label: 'Analytics', value: 'analytics' },
        { label: 'Payments', value: 'payments' },
      ],
      right: [{ label: 'Automation', value: 'automation' }],
    })

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
          <Button variant="text" color="success">
            Text
          </Button>
          <IconButton aria-label="favorite">❤</IconButton>
          <Fab aria-label="add">+</Fab>
        </div>

        <ButtonGroup variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Checkbox />
          <Radio value="one" checked />
          <Switch checked />
          <Rating defaultValue={3} />
        </div>

        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <TextField label="Name" placeholder="Enter name" fullWidth />
          <Select
            label="Status"
            options={[
              { label: 'Draft', value: 'draft' },
              { label: 'Published', value: 'published' },
            ]}
            fullWidth
          />
          <Autocomplete
            label="Country"
            options={[
              { label: 'Italy', value: 'it' },
              { label: 'Spain', value: 'es' },
              { label: 'Germany', value: 'de' },
            ]}
            fullWidth
          />
        </div>

        <Slider min={0} max={100} defaultValue={50} />

        <ToggleButtonGroup
          value={toggleValue}
          onChange={(_, value) => {
            if (typeof value === 'string') {
              setToggleValue(value)
            }
          }}
        >
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
        </ToggleButtonGroup>

        <TransferList
          left={transfer.left}
          right={transfer.right}
          onChange={(left, right) => setTransfer({ left, right })}
        />
      </div>
    )
  },
}
