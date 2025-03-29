---
sidebar_position: 1
slug: /
---

# Introduzione a Goblin System

**Goblin System** è una libreria di componenti React moderna e flessibile progettata per creare interfacce utente eleganti e funzionali con facilità.

## Caratteristiche principali

- **Componenti moderni e reattivi** - Tutti i componenti sono progettati per essere responsivi e funzionare su tutti i dispositivi.
- **Completamente tipizzato** - TypeScript integrato per un'esperienza di sviluppo eccellente.
- **Personalizzabile** - Sistema di temi flessibile per adattare i componenti al tuo marchio.
- **Accessibile** - Compatibilità WAI-ARIA e focalizzazione sulla migliore esperienza utente per tutti.
- **Performante** - Ottimizzato per prestazioni elevate con un footprint minimo.

## Installazione

```bash
# Usando npm
npm install pkg-fe-react-goblin-system

# Usando yarn
yarn add pkg-fe-react-goblin-system

# Usando pnpm
pnpm add pkg-fe-react-goblin-system
```

## Configurazione rapida

Avvolgi la tua applicazione con il `ThemeProvider` di Goblin System:

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

## Esempio base

```jsx
import { Button, Text, Container } from 'pkg-fe-react-goblin-system';

const MyComponent = () => (
  <Container>
    <Text variant="body1">Benvenuto a Goblin System!</Text>
    <Button variant="primary">Iniziamo</Button>
  </Container>
);

export default MyComponent;
```

## Struttura della documentazione

Questa documentazione è organizzata nelle seguenti sezioni:

- **Guida introduttiva**: Installazione e configurazione
- **Componenti**: Documentazione dettagliata di tutti i componenti disponibili
- **Temi e personalizzazione**: Come modificare l'aspetto dei componenti
- **API Reference**: Documentazione tecnica completa
- **Guide ed esempi**: Tutorial e pattern comuni
