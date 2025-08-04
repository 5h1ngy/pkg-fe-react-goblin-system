import type { Meta, StoryObj } from '@storybook/react'
import { useMemo, useState } from 'react'

import type { HeaderProps } from './Header.types'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Shell/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    navigation: [
      { label: 'Hero', targetId: 'hero' },
      { label: 'Projects', targetId: 'projects' },
      { label: 'About', targetId: 'about' },
    ],
    accentOptions: ['#7f5bff', '#00c8ff', '#ff4bd5', '#24f49b'],
    accentColor: '#7f5bff',
    themeMode: 'dark',
    locale: 'en',
    locales: [
      { code: 'en', label: 'EN' },
      { code: 'it', label: 'IT' },
    ],
    profileName: 'Avery Goblin',
    brand: {
      href: '#hero',
      logoSrc:
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><rect width="60" height="60" rx="16" fill="%237f5bff"/><text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-family="Inter, Arial" font-size="28" fill="white">G</text></svg>',
      logoAlt: 'Goblin System logo',
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Header>

const Playground = (args: HeaderProps) => {
  const [themeMode, setThemeMode] = useState(args.themeMode)
  const [accentColor, setAccentColor] = useState(args.accentColor)
  const [locale, setLocale] = useState(args.locale)
  const sections = useMemo(() => args.navigation ?? [], [args.navigation])

  return (
    <>
      <Header
        {...args}
        themeMode={themeMode}
        onThemeChange={setThemeMode}
        accentColor={accentColor}
        onAccentChange={setAccentColor}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <div style={{ paddingTop: '140px' }}>
        {sections.map((section) => (
          <section
            id={section.targetId}
            key={section.targetId}
            style={{
              minHeight: '85vh',
              padding: '3rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h2>{section.label}</h2>
            <p>Scroll to test the sticky navigation indicator.</p>
          </section>
        ))}
      </div>
    </>
  )
}

export const Default: Story = {
  render: (args) => <Playground {...(args as HeaderProps)} />,
}
