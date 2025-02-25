# Installazione

Di seguito i passi principali per installare e configurare la libreria nel tuo progetto.

## Prerequisiti

- Node.js >= 14
- React >= 18
- [Chakra UI](https://chakra-ui.com/) (se non lo hai già, verrà comunque installato come dipendenza)
- [React Router](https://reactrouter.com/) (opzionale, ma consigliato se devi utilizzare i layout con navigazione)

## Passi di installazione

```bash
# Esempio di installazione dalla tua repository o da npm:
npm install tua-libreria
# oppure
yarn add tua-libreria
```

Assicurati anche di avere i peer dependencies corrette (Chakra UI, Redux Toolkit, React Router, ecc.).

## Configurazione di base

1. **Setup del `ThemeProvider`**:
   ```tsx
   // Esempio: src/main.tsx o src/index.tsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import ThemeProvider from 'tua-libreria/providers/Theme' 
   import App from './App'

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <ThemeProvider>
         <App />
       </ThemeProvider>
     </React.StrictMode>,
   )
   ```

2. **Redux Store** (opzionale, se usi gli slice integrati):
   ```tsx
   // Esempio store di Redux Toolkit
   import { configureStore } from '@reduxjs/toolkit'
   import { Provider } from 'react-redux'
   import { authSlice } from 'tua-libreria/store/auth'

   const store = configureStore({
     reducer: {
       authSlice: authSlice,
     },
   })

   // Poi incapsuli <App /> col provider Redux
   <Provider store={store}>
     <ThemeProvider>
       <App />
     </ThemeProvider>
   </Provider>
   ```

Questa configurazione iniziale ti permette di sfruttare i componenti e i layout della libreria.