import type { Preview } from '@storybook/react'
import { MaterialThemeProvider, CssBaseline, createMaterialTheme } from '../src/foundations'

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
      defaultValue: '#1976d2',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: '#1976d2', title: 'Blue' },
          { value: '#9c27b0', title: 'Purple' },
          { value: '#2e7d32', title: 'Green' },
          { value: '#ed6c02', title: 'Orange' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.mode as 'light' | 'dark'
      const primary = context.globals.primary as string
      const theme = createMaterialTheme({
        palette: {
          mode,
          primary: { main: primary },
        },
      })

      return (
        <MaterialThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ minHeight: '100vh', padding: '2rem' }}>
            <Story />
          </div>
        </MaterialThemeProvider>
      )
    },
  ],
}

export default preview

