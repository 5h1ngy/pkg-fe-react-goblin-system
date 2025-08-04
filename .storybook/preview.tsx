import type { Preview } from "@storybook/react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle, createTheme, SECONDARY_COLORS, ThemeMode } from "../src/styles";

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
        { name: 'surface', value: '#030616' },
        { name: 'paper', value: '#f7f9ff' },
      ],
    },
  },
  globalTypes: {
    mode: {
      name: 'Mode',
      description: 'App theme mode',
      defaultValue: 'dark',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
    accent: {
      name: 'Accent',
      description: 'Primary accent color',
      defaultValue: '#7f5bff',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: '#7f5bff', title: 'Violet' },
          ...SECONDARY_COLORS.map((value, index) => ({ value, title: `Alt ${index + 1}` })),
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const mode = (context.globals.mode as ThemeMode) ?? 'dark'
      const accent = (context.globals.accent as string) ?? '#7f5bff'
      const theme = createTheme(mode, accent)

      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div style={{ minHeight: '100vh', padding: '2rem' }}>
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
};

export default preview;
