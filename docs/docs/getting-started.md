---
sidebar_position: 2
---

# Guida introduttiva

Questa guida ti aiuterà a installare e configurare Goblin System nel tuo progetto React.

## Requisiti

- React 16.8+ (con supporto per gli hooks)
- Node.js 12+
- npm, yarn o pnpm

## Installazione

Installa il pacchetto tramite il tuo gestore di pacchetti preferito:

```bash
# Usando npm
npm install pkg-fe-react-goblin-system

# Usando yarn
yarn add pkg-fe-react-goblin-system

# Usando pnpm
pnpm add pkg-fe-react-goblin-system
```

## Configurazione base

### 1. Configurazione del ThemeProvider

Avvolgi la tua applicazione con il `ThemeProvider` per garantire che tutti i componenti abbiano accesso al tema:

```jsx
// index.js o App.js
import React from 'react';
import { ThemeProvider } from 'pkg-fe-react-goblin-system';
import App from './App';

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
```

### 2. Importazione di componenti

Importa i componenti necessari dai rispettivi moduli:

```jsx
import { Button } from 'pkg-fe-react-goblin-system/src/components/buttons';
import { Text } from 'pkg-fe-react-goblin-system/src/components/typography';
import { Input } from 'pkg-fe-react-goblin-system/src/components/form';
```

Oppure, per importare più componenti contemporaneamente:

```jsx
import { 
  Button, 
  Text, 
  Input, 
  Checkbox, 
  Container 
} from 'pkg-fe-react-goblin-system';
```

## Personalizzazione del tema

Per personalizzare il tema predefinito:

```jsx
import { ThemeProvider, createTheme } from 'pkg-fe-react-goblin-system';

// Personalizza il tema predefinito
const customTheme = createTheme({
  colors: {
    primary: '#1E88E5',
    secondary: '#6C757D',
    success: '#43A047',
    error: '#E53935',
    warning: '#FFB300',
    info: '#039BE5',
  },
  // Altri override del tema...
});

const App = () => (
  <ThemeProvider theme={customTheme}>
    <YourApplication />
  </ThemeProvider>
);
```

## Esempio completo

Ecco un esempio più completo di come utilizzare Goblin System in un'applicazione React:

```jsx
import React from 'react';
import { 
  ThemeProvider, 
  Container, 
  Text, 
  Button, 
  Input, 
  Spacer 
} from 'pkg-fe-react-goblin-system';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text variant="body1">Inserisci le tue credenziali</Text>
      <Spacer size="md" />

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@esempio.com"
        required
      />
      <Spacer size="sm" />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Spacer size="md" />

      <Button type="submit" variant="primary">
        Accedi
      </Button>
    </form>
  );
};

const App = () => (
  <ThemeProvider>
    <Container>
      <Text variant="h2">Benvenuto</Text>
      <Spacer size="lg" />
      <LoginForm />
    </Container>
  </ThemeProvider>
);

export default App;
```

## Prossimi passi

Una volta completata la configurazione di base, consulta la documentazione dei singoli componenti per esplorare tutte le funzionalità disponibili:

- [Componenti di layout](/docs/components/layout)
- [Pulsanti e controlli](/docs/components/buttons)
- [Form e input](/docs/components/form)
- [Componenti di feedback](/docs/components/feedback)
- [Componenti di navigazione](/docs/components/navigation)
- [Componenti tipografici](/docs/components/typography)
