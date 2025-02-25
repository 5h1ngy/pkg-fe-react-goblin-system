# Panoramica Layouts

I **layout** sono componenti ad alto livello che gestiscono l’aspetto generale di determinate pagine o stati dell’applicazione.

## Layout Disponibili

1. **ErrorLayout** (`layouts/Error`):
   - Mostra un `EmptyState` con icona di errore e un messaggio generico.
   - Utile come fallback in caso di rotta non trovata o errori generici.

2. **LoadingLayout** (`layouts/Loading`):
   - Visualizza uno stato di caricamento con una barra di progresso e icona di “loader”.
   - Comodo per fasi di “fetching” iniziale.

3. **TransformerLayout** (`layouts/Transformer`):
   - Layout più articolato e “animato”:
     - Sfondo personalizzabile (`background.image`, `background.imageDark`, `background.opacity`).
     - Header con navbar (principale e secondaria).
     - Gestione dell’hover del mouse con un cerchio animato (`gsap`).
     - Sezione di body dove vengono renderizzati i contenuti figli.
   - Pensato per presentazioni più “creative” o dashboard animate.

## Utilizzo

Di solito, i layout si importano e si associano a determinate route:

```tsx
import { Routes, Route } from 'react-router-dom'
import ErrorLayout from 'tua-libreria/layouts/Error'
import LoadingLayout from 'tua-libreria/layouts/Loading'
import TransformerLayout from 'tua-libreria/layouts/Transformer'

function MyRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<ErrorLayout />} />
      <Route path="/loading" element={<LoadingLayout />} />
      <Route path="/" element={<TransformerLayout>...contenuto...</TransformerLayout>} />
    </Routes>
  )
}
```

Oppure si possono usare condizionalmente in base allo stato dell’app (errore, caricamento, ecc.).

**Nota:** Ogni layout è comunque personalizzabile e adatto a scenari diversi. Per i dettagli implementativi, dai uno sguardo al codice e/o agli esempi presenti nelle storie.