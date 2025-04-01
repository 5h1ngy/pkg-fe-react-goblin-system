/**
 * GoblinProvider
 * Provider globale che integra tema, stili e font in un unico componente
 * Permette l'uso semplificato della libreria nei progetti che la importano
 * 
 * @module providers/GoblinProvider
 */
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/GlobalStyles';
import GlobalFonts from '../components/typography/GlobalFonts';
import { lightTheme, darkTheme } from '../theme/theme';

export interface GoblinProviderProps {
  /** Componenti figli che avranno accesso al provider */
  children: ReactNode;
  /** Tema iniziale (light o dark) - default: light */
  initialTheme?: 'light' | 'dark';
  /** Usa le preferenze di sistema per il tema se true */
  useSystemPreference?: boolean;
  /** Disabilita gli stili globali se true */
  disableGlobalStyles?: boolean;
  /** Disabilita i font globali se true */
  disableGlobalFonts?: boolean;
}

/**
 * GoblinProvider - Provider principale per la libreria Goblin System
 * Applica automaticamente tema, stili globali e font moderni
 * 
 * Esempio di utilizzo base:
 * ```tsx
 * import { GoblinProvider } from 'pkg-fe-react-goblin-system';
 * 
 * function App() {
 *   return (
 *     <GoblinProvider>
 *       // contenuto dell'app
 *     </GoblinProvider>
 *   );
 * }
 * ```
 */
export function GoblinProvider({
  children,
  initialTheme = 'light',
  useSystemPreference = false,
  disableGlobalStyles = false,
  disableGlobalFonts = false,
}: GoblinProviderProps) {
  // Stato per tenere traccia del tema corrente
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(initialTheme);

  // Gestisce le preferenze di sistema per il tema se abilitato
  useEffect(() => {
    if (!useSystemPreference || typeof window === 'undefined') return;

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setCurrentTheme(prefersDarkMode ? 'dark' : 'light');

    // Ascolta i cambiamenti delle preferenze di sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setCurrentTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [useSystemPreference]);

  // Determina il tema base in base all'impostazione corrente
  const themeObject = currentTheme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={themeObject}>
      {!disableGlobalStyles && <GlobalStyles theme={themeObject} />}
      {!disableGlobalFonts && <GlobalFonts />}
      {children}
    </StyledThemeProvider>
  );
}

// Esportazione di default per una più facile importazione
export default GoblinProvider;
