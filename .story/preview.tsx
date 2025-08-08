import type { Preview } from '@storybook/react'
import { GoblinThemeProvider, CssBaseline, createGoblinTheme } from '../packages/foundations'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'surface-dark',
      values: [
        { name: 'surface-dark', value: '#121212' },
        { name: 'paper-light', value: '#ffffff' },
      ],
    },
  },
  globalTypes: {
    mode: {
      name: 'Mode',
      description: 'Theme mode',
      defaultValue: 'dark',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ].map((item) => ({
          ...item,
          title: `${item.title} mode`,
        })),
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
      const background = theme.palette.background?.default ?? '#121212'
      const color = theme.palette.text?.primary ?? '#ffffff'

      return (
        <GoblinThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              minHeight: '100vh',
              padding: '2rem',
              backgroundColor: background,
              color,
              transition: 'background-color 200ms ease, color 200ms ease',
            }}
          >
            <Story />
          </div>
        </GoblinThemeProvider>
      )
    },
  ],
}

export default preview
