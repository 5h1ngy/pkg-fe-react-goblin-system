import type { Preview } from '@storybook/react'
import { GoblinThemeProvider, CssBaseline, createGoblinTheme } from '../src/foundations'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#121212' },
        { name: 'paper', value: '#ffffff' },
      ],
    },
  },
  globalTypes: {
    mode: {
      name: 'Mode',
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
    primary: {
      name: 'Primary',
      description: 'Primary palette color',
      defaultValue: '#1677ff',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: '#1677ff', title: 'Blue' },
          { value: '#722ed1', title: 'Purple' },
          { value: '#52c41a', title: 'Green' },
          { value: '#faad14', title: 'Amber' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.mode as 'light' | 'dark'
      const primary = context.globals.primary as string
      const theme = createGoblinTheme({
        palette: {
          mode,
          primary: { main: primary },
        },
      })

      return (
        <GoblinThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ minHeight: '100vh', padding: '2rem' }}>
            <Story />
          </div>
        </GoblinThemeProvider>
      )
    },
  ],
}

export default preview
