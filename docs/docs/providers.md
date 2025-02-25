# Providers e Contesti

La libreria offre alcuni **Provider** che semplificano l’integrazione di temi, autenticazione e routing personalizzato.

## ThemeProvider

Percorso: `providers/Theme.tsx`

- Wrappa ChakraProvider e gestisce una configurazione di base (incluse le preferenze di tema).  
- Usa anche `ColorModeProvider` (basato su `next-themes`) per abilitare la **dark mode** con transizioni fluide.

Utilizzo:

```tsx
import ThemeProvider from 'tua-libreria/providers/Theme'

function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
```

## AuthProvider

Percorso: `providers/Auth/Auth.tsx`

- Sfrutta Redux per ottenere `accessToken` dallo state (`authSlice.accessToken`).
- Espone un context (`AuthContext`) con il valore `accessToken`.
- Include i componenti:
  - `PrivateRoute`: se l’utente non è autenticato, reindirizza su `/auth/login`.
  - `RedirectPublicRoute`: se l’utente è autenticato, reindirizza su un percorso predefinito.

Utilizzo (esempio con React Router):

```tsx
import { PrivateRoute } from 'tua-libreria/providers/Auth'

<Route path="/dashboard" element={<PrivateRoute render={<Dashboard />} />} />
```

> Se `accessToken` manca, l’utente viene rimandato a `/auth/login`.