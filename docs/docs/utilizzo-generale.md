# Utilizzo Generale

In questa sezione trovi alcune linee guida su come utilizzare e integrare i vari pezzi della libreria.

## Import dei Componenti

I componenti principali si trovano spesso dentro cartelle come `components/Factory/Chakra`, `components/LiquidSearchForm`, `components/LiquidTable`, ecc. Di norma:

```tsx
import { Button } from 'tua-libreria/components/Factory/Chakra/button'

function MyComponent() {
  return <Button variant="solid">Cliccami</Button>
}
```

Alcuni componenti più complessi (es. `DynamicForm`, `LiquidTable`, `LoginForm`) hanno storie in Storybook. Ti consigliamo di consultare Storybook per esempi e pattern d’uso.

## Uso dei Layout

I layout si trovano in `layouts/`. Ad esempio:
- `ErrorLayout`
- `LoadingLayout`
- `TransformerLayout`

Per inserirli in un router:

```tsx
import { Routes, Route } from 'react-router-dom'
import ErrorLayout from 'tua-libreria/layouts/Error'
import LoadingLayout from 'tua-libreria/layouts/Loading'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<ErrorLayout />} />
      <Route path="/loading" element={<LoadingLayout />} />
      {/* Altre rotte */}
    </Routes>
  )
}
```

Oppure puoi usarli come fallback (es. in caso di caricamento o errore) in un tuo componente.

## Gestione dello Store (Redux)

Se desideri sfruttare le slice già predisposte (es. `authSlice`), integra la logica nel tuo store Redux:

```tsx
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'tua-libreria/store/auth'

const store = configureStore({
  reducer: {
    authSlice: authSlice,
  },
})

export default store
```

Quindi puoi usare le azioni asincrone `doLogin`, `doRegister`, `doRefresh`, ecc. all’interno dei tuoi componenti.

## Provider di Autenticazione

Il provider `Auth` (`providers/Auth`) espone un contesto `AuthContext` con `accessToken` e logiche di routing (`PrivateRoute`, `RedirectPublicRoute`). Usalo se vuoi proteggere alcune rotte:

```tsx
import { PrivateRoute } from 'tua-libreria/providers/Auth'

<Route path="/area-privata" element={
  <PrivateRoute render={<PrivatePage />} />
} />
```

Se l’utente non è autenticato, verrà reindirizzato a `/auth/login` o alla rotta che specifichi.

Questo è un esempio generale di come integrare i vari moduli della libreria.