# Gestione dello Store (Redux)

La libreria fornisce uno **slice** di esempio per l’autenticazione, così da mostrare come strutturare la logica interna. La cartella principale è `store/auth/`.

## Struttura Principale

- **asyncThunks.ts**: definisce le funzioni asincrone (`createAsyncThunk`) per `login`, `register` e `refresh`.
- **extraReducers.ts**: gestisce gli stati `pending`, `fulfilled`, `rejected` per i thunks.
- **reducers.ts**: reducer sincroni per azioni di “pulizia errori” (`clearErrorsRegister`, `clearErrorsLogin`).
- **initialState.ts**: definisce lo stato iniziale (contiene `accessToken` e `refreshToken` presi da `localStorage`).
- **types.ts**: definisce i tipi del **State** e i tipi di errore e stato (IDLE, LOADING, SUCCESS, FAILED).

## Esempio di Configurazione

```ts
// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'tua-libreria/store/auth'

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
  },
})

// ...
```

Nel tuo componente potrai usare:
```ts
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { authAsyncActions } from 'tua-libreria/store/auth'

function MyLogin() {
  const dispatch = useAppDispatch()
  const { login } = useAppSelector((state) => state.authSlice)

  function handleLogin() {
    const form = new FormData()
    form.append('id', 'demo@user')
    form.append('password', 'mypassword')
    dispatch(authAsyncActions.doLogin(form))
  }
  
  // ...
}
```

## Tipi di Ritorno

- `doLogin`: `accessToken`, `refreshToken` salvati nello state e in `localStorage`.
- `doRegister`: analogo a `doLogin`.
- `doRefresh`: refresh del token.

**Nota**: Puoi personalizzare questo slice o crearne di nuovi. La libreria fornisce un esempio di pattern strutturato.