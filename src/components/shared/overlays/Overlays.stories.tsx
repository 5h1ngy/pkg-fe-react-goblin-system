import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Backdrop } from './Backdrop'
import { ModalOverlay, ModalContainer, ModalScrollArea } from './Modal'
import { MenuSurface } from './Menu'
import { SurfaceButton } from '../buttons/Button'
import { MetaLabel } from '../metadata/MetaLabel'

const meta: Meta<typeof Backdrop> = {
  title: 'shared/overlays',
  component: Backdrop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Backdrop>

export const BackdropStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Backdrop $visible $tone="light" />
      <Backdrop $visible $tone="dark" />
    </div>
  ),
}

export const ModalLayout: Story = {
  render: () => (
    <ModalOverlay>
      <ModalContainer>
        <header style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <MetaLabel $variant="badge" $tone="accent">
            Spotlight
          </MetaLabel>
          <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.5rem' }}>Immersive modal canvas</h3>
        </header>
        <ModalScrollArea>
          <p>
            Combine gradient cards, accent dividers and tag lists inside the modal scroll area. The container is optimized
            for mobile and desktop and pairs naturally with Backdrop.
          </p>
        </ModalScrollArea>
      </ModalContainer>
    </ModalOverlay>
  ),
}

const MenuSurfaceExample = () => {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ position: 'relative', padding: '3rem', display: 'inline-block' }}>
      <SurfaceButton onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        Toggle Menu
      </SurfaceButton>
      <MenuSurface $open={open}>
        <SurfaceButton as="a" href="#">
          Section overview
        </SurfaceButton>
        <SurfaceButton as="a" href="#" $tone="muted">
          Case studies
        </SurfaceButton>
        <SurfaceButton as="a" href="#" $tone="ghost">
          Contact
        </SurfaceButton>
      </MenuSurface>
    </div>
  )
}

export const MenuSurfaceStory: Story = {
  render: () => <MenuSurfaceExample />,
}
