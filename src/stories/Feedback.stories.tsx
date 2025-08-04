import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import {
  Alert,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  Skeleton,
  Snackbar,
  Tooltip,
  Button,
} from '../components'

const meta: Meta = {
  title: 'Feedback/Overview',
  component: Alert,
}

export default meta

type Story = StoryObj

export const Components: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Alert severity='warning' action={<button>Undo</button>}>
          Warning alert
        </Alert>

        <LinearProgress variant='indeterminate' />
        <CircularProgress />
        <Skeleton width={240} />

        <div>
          <Button variant='contained' onClick={() => setDialogOpen(true)}>
            Open dialog
          </Button>
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>Dialog content</DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>

        <div>
          <Button onClick={() => setSnackbarOpen(true)}>Show snackbar</Button>
          <Snackbar open={snackbarOpen} message='Saved' onClose={() => setSnackbarOpen(false)} />
        </div>

        <Tooltip title='Tooltip text'>
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    )
  },
}

