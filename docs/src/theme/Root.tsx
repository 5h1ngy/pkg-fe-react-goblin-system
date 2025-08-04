import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Canvas, GlobalStyle, createTheme, type ThemeMode } from 'pkg-fe-react-goblin-system';

import { ThemeControllerContext } from './ThemeControllerContext';

export default function Root({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [accent, setAccent] = useState('#ffb422');
  const theme = useMemo(() => createTheme(mode, accent), [mode, accent]);

  return (
    <ThemeControllerContext.Provider value={{ mode, accent, setMode, setAccent }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Canvas>{children}</Canvas>
      </ThemeProvider>
    </ThemeControllerContext.Provider>
  );
}
