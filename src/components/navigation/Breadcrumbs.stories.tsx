import {Meta, StoryObj} from '@storybook/react'

import { Breadcrumbs, Link } from '../../components'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Basic: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Link href="#">Home</Link>
      <Link href="#">Library</Link>
      <span>Data</span>
    </Breadcrumbs>
  ),
}
