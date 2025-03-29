---
sidebar_position: 4
---

# Personalizzazione dei temi

Goblin System offre un sistema di theming potente e flessibile che ti permette di personalizzare facilmente l'aspetto di tutti i componenti.

## Concetti base del theming

Il sistema di theming di Goblin System è basato su:

1. **Theme Provider**: Un componente context provider che avvolge la tua applicazione
2. **Theme Object**: Un oggetto JavaScript che definisce tutti i valori del tema
3. **Styled Components**: La libreria sottostante che gestisce gli stili dei componenti

## Theme Provider

Il `ThemeProvider` deve avvolgere la tua applicazione per garantire che tutti i componenti abbiano accesso al tema:

```jsx
import { ThemeProvider } from 'pkg-fe-react-goblin-system';
import App from './App';

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
```

## Utilizzo del tema predefinito

Per default, Goblin System utilizza un tema moderno e professionale che si adatta alla maggior parte delle applicazioni. Non hai bisogno di configurare nulla per utilizzare questo tema.

## Personalizzazione del tema

### Tema completo personalizzato

Puoi fornire un tema personalizzato al `ThemeProvider`:

```jsx
import { ThemeProvider, createTheme } from 'pkg-fe-react-goblin-system';

// Crea un tema personalizzato
const customTheme = createTheme({
  colors: {
    primary: '#1E88E5',
    secondary: '#6C757D',
    success: '#43A047',
    error: '#E53935',
    warning: '#FFB300',
    info: '#039BE5',
    bgDefault: '#F8F9FA',
    bgElevated: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#757575',
    border: '#DFE3E8',
  },
  // Altre personalizzazioni...
});

const App = () => (
  <ThemeProvider theme={customTheme}>
    <YourApplication />
  </ThemeProvider>
);
```

### Estensione del tema predefinito

Puoi estendere il tema predefinito modificando solo specifiche parti:

```jsx
import { ThemeProvider, defaultTheme } from 'pkg-fe-react-goblin-system';

// Estendi il tema predefinito
const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF5722',
    secondary: '#9C27B0',
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    <YourApplication />
  </ThemeProvider>
);
```

## Struttura completa del tema

Il tema di Goblin System è organizzato in sezioni logiche:

```jsx
const themeStructure = {
  // Palette colori
  colors: {
    primary: '#1976D2',
    secondary: '#6C757D',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
    info: '#03A9F4',
    bgDefault: '#F5F5F5',
    bgElevated: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#757575',
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    // ... altri colori
  },
  
  // Tipografia
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      xs: 1.1,
      sm: 1.25,
      md: 1.5,
      lg: 1.75,
      xl: 2,
    },
    variants: {
      h1: { /* stili specifici per h1 */ },
      h2: { /* stili specifici per h2 */ },
      // ... altre varianti
    },
  },
  
  // Spaziatura
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  // Breakpoint
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  
  // Bordi e arrotondamenti
  radii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    round: '50%',
  },
  
  // Ombre
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    lg: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
    xl: '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
  },
  
  // Transizioni
  transitions: {
    duration: {
      short: '150ms',
      medium: '300ms',
      long: '500ms',
    },
    timing: {
      ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
      easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
  },
  
  // Griglia
  grid: {
    columns: 12,
    gutters: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
  },
  
  // Stili specifici per componenti
  components: {
    Button: {
      // Personalizzazioni specifiche per il componente Button
    },
    Modal: {
      // Personalizzazioni specifiche per il componente Modal
    },
    // ... altri componenti
  },
};
```

## Personalizzazione di componenti specifici

Ogni componente può essere personalizzato individualmente attraverso la proprietà `components` del tema:

```jsx
const customTheme = createTheme({
  // Tema generale...
  
  components: {
    Button: {
      borderRadius: '8px',
      fontWeight: 500,
      variants: {
        primary: {
          backgroundColor: '#1E88E5',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1976D2',
          },
        },
        secondary: {
          // ... personalizzazioni per variante secondary
        },
        // ... altre varianti
      },
      sizes: {
        small: {
          padding: '4px 8px',
          fontSize: '0.85rem',
        },
        medium: {
          // ... personalizzazioni per dimensione medium
        },
        large: {
          // ... personalizzazioni per dimensione large
        },
      },
    },
    
    Modal: {
      borderRadius: '12px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05)',
      // ... altre personalizzazioni
    },
    
    // ... altri componenti
  },
});
```

## Utilizzo dei valori del tema nei tuoi componenti

Puoi accedere ai valori del tema nei tuoi componenti personalizzati utilizzando il hook `useTheme`:

```jsx
import React from 'react';
import { useTheme } from 'pkg-fe-react-goblin-system';

const MyCustomComponent = () => {
  const theme = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.bgElevated,
      padding: theme.spacing.md,
      borderRadius: theme.radii.md,
      boxShadow: theme.shadows.md,
      color: theme.colors.textPrimary,
    }}>
      <h3 style={{ 
        fontSize: theme.typography.fontSizes.lg,
        fontWeight: theme.typography.fontWeights.medium,
      }}>
        Il mio componente personalizzato
      </h3>
      <p>Questo componente utilizza i valori del tema di Goblin System</p>
    </div>
  );
};

export default MyCustomComponent;
```

## Temi predefiniti

Goblin System include alcuni temi predefiniti che puoi utilizzare come punto di partenza:

```jsx
import { 
  ThemeProvider, 
  lightTheme,
  darkTheme,
  contrastTheme 
} from 'pkg-fe-react-goblin-system';

// Tema chiaro (default)
const App1 = () => (
  <ThemeProvider theme={lightTheme}>
    <YourApplication />
  </ThemeProvider>
);

// Tema scuro
const App2 = () => (
  <ThemeProvider theme={darkTheme}>
    <YourApplication />
  </ThemeProvider>
);

// Tema ad alto contrasto (per accessibilità migliorata)
const App3 = () => (
  <ThemeProvider theme={contrastTheme}>
    <YourApplication />
  </ThemeProvider>
);
```

## Modalità scura dinamica

Puoi implementare un toggle per la modalità scura utilizzando un hook personalizzato:

```jsx
import React, { useState, useMemo } from 'react';
import { ThemeProvider, lightTheme, darkTheme } from 'pkg-fe-react-goblin-system';

const ThemeToggleContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useThemeToggle = () => React.useContext(ThemeToggleContext);

export const ThemeToggleProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);
  
  const contextValue = useMemo(() => {
    return { isDarkMode, toggleTheme };
  }, [isDarkMode]);
  
  return (
    <ThemeToggleContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

// Utilizzo
const App = () => (
  <ThemeToggleProvider>
    <RootComponent />
  </ThemeToggleProvider>
);

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();
  
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
    </button>
  );
};
```

## Best Practices per il theming

1. **Consistenza**: Utilizza i valori del tema in modo coerente in tutta l'applicazione
2. **Accessibilità**: Assicurati che i colori scelti rispettino i requisiti di accessibilità (contrasto adeguato)
3. **Modularità**: Crea temi specifici per sezioni diverse dell'applicazione se necessario
4. **Semantica**: Usa nomi semantici per le variabili del tema (es. `primary`, `error`) anziché nomi specifici (`blue`, `red`)
5. **Testing**: Testa la tua applicazione con diversi temi per garantire che tutti i componenti si adattino correttamente
