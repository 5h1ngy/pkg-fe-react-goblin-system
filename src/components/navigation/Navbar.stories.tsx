import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theme/ThemeProvider';
import Navbar, { NavItem } from './Navbar';
import Button from '../buttons/Button';

const meta = {
  title: 'UI/Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brand: <a href="#">Brand Logo</a>,
    children: (
      <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#" disabled>Disabled</NavItem>
      </>
    ),
  },
};

export const WithRightItems: Story = {
  args: {
    brand: <a href="#">Brand Logo</a>,
    children: (
      <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>
    ),
    rightItems: (
      <>
        <Button size="small" variant="outline" mr="8px">Login</Button>
        <Button size="small" variant="primary">Sign Up</Button>
      </>
    ),
  },
};

export const Fixed: Story = {
  args: {
    brand: <a href="#">Fixed Navbar</a>,
    children: (
      <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>
    ),
    fixed: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div>
          <Story />
          <div style={{ padding: '20px', marginTop: '70px' }}>
            <h1>Content below fixed navbar</h1>
            <p>Scroll down to see the navbar stay fixed at the top.</p>
            {Array(10).fill(0).map((_, i) => (
              <p key={i}>
                This is paragraph {i + 1} to demonstrate scrolling content.
              </p>
            ))}
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

export const CustomColors: Story = {
  args: {
    brand: <a href="#">Colored Navbar</a>,
    children: (
      <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>
    ),
    bgColor: '#2c3e50',
    textColor: '#ecf0f1',
  },
};

export const ExpandedMobile: Story = {
  args: {
    brand: <a href="#">Mobile Expanded</a>,
    children: (
      <>
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">About</NavItem>
      </>
    ),
    expanded: true,
  },
};
