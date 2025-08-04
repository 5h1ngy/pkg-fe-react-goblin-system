import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Drawer,
  Link,
  Pagination,
  Step,
  StepLabel,
  Stepper,
  Tabs,
  Tab,
  TabPanel,
  Toolbar,
} from '../components'

const meta: Meta = {
  title: 'Navigation/Overview',
  component: AppBar,
}

export default meta

type Story = StoryObj

export const Components: Story = {
  render: () => {
    const [tab, setTab] = useState('one')
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [bottom, setBottom] = useState(0)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <AppBar position='static'>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <strong>Brand</strong>
            <Breadcrumbs>
              <Link href='#'>Home</Link>
              <Link href='#'>Library</Link>
              <span>Data</span>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>

        <div>
          <Tabs value={tab} onChange={(_, value) => setTab(value as string)}>
            <Tab value='one' label='Item One' />
            <Tab value='two' label='Item Two' />
            <Tab value='three' label='Item Three' />
          </Tabs>
          <TabPanel value='one'>Panel One</TabPanel>
          <TabPanel value='two'>Panel Two</TabPanel>
          <TabPanel value='three'>Panel Three</TabPanel>
        </div>

        <Pagination count={10} />

        <Stepper activeStep={1} alternativeLabel>
          {[0, 1, 2].map((index) => (
            <Step key={index} index={index}>
              <StepLabel>{`Step ${index + 1}`}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>
          <button onClick={() => setDrawerOpen(true)}>Open Drawer</button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <div style={{ padding: '1rem' }}>Navigation Drawer</div>
          </Drawer>
        </div>

        <BottomNavigation value={bottom} onChange={(_, value) => setBottom(value as number)}>
          <BottomNavigationAction label='Recents' value={0} />
          <BottomNavigationAction label='Favorites' value={1} />
          <BottomNavigationAction label='Nearby' value={2} />
        </BottomNavigation>
      </div>
    )
  },
}

