/**
 * ThemeProvider component
 * Provides theming capabilities to the application with support for light and dark modes
 * 
 * @module ThemeProvider
 */
import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme, lightTheme, darkTheme } from './theme';

// Type for the theme context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: 'light' | 'dark') => void;
};

// Create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to access the theme context
 * @returns ThemeContextType - Theme context containing theme object and theme control functions
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Props for the ThemeProvider component
interface ThemeProviderProps {
  /** Initial theme mode. Default is light */
  initialTheme?: 'light' | 'dark';
  /** Use system preference for theme if true */
  useSystemPreference?: boolean;
  /** Children components that will have access to the theme */
  children: ReactNode;
}

/**
 * ThemeProvider component that manages theme state and provides it to children
 * 
 * @param props - Component props
 * @returns JSX.Element
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme = 'light',
  useSystemPreference = false,
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(initialTheme);

  // Load theme from localStorage or system preference on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const savedTheme = localStorage.getItem('goblin-theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else if (useSystemPreference) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setCurrentTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, [useSystemPreference]);

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('goblin-theme', currentTheme);
  }, [currentTheme]);

  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // Explicitly set theme to light or dark
  const setTheme = useCallback((mode: 'light' | 'dark') => {
    setCurrentTheme(mode);
  }, []);

  // Get the appropriate theme object based on current mode
  const themeObject = currentTheme === 'light' ? lightTheme : darkTheme;

  // Create the context value
  const contextValue: ThemeContextType = {
    theme: themeObject,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={themeObject}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
