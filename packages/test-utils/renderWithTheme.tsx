import { ReactElement } from 'react'
import { render } from '@testing-library/react'

import {
  CssBaseline,
  GoblinThemeProvider,
  createGoblinTheme,
} from 'pkg-fe-react-goblin-system'

const theme = createGoblinTheme({
  palette: {
    mode: 'dark',
    secondary: { main: '#c9971f' },
  },
})

export const renderWithTheme = (element: ReactElement) =>
  render(
    <GoblinThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </GoblinThemeProvider>,
  )

export const withTheme = <T extends ReactElement>(element: T) => (
  <GoblinThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </GoblinThemeProvider>
)
