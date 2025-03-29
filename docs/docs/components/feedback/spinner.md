---
sidebar_position: 2
---

# Spinner

Il componente `Spinner` è un indicatore di caricamento che segnala agli utenti che un'operazione è in corso.

## Importazione

```jsx
import { Spinner } from 'pkg-fe-react-goblin-system';
```

## Utilizzo di base

```jsx
<Spinner />
```

## Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Dimensione dello spinner |
| `color` | `string` | `'primary'` | Colore dello spinner (supporta colori del tema o valori CSS) |
| `$centered` | `boolean` | `false` | Centra lo spinner nel suo contenitore |
| `thickness` | `number` | `2` | Spessore delle linee dello spinner |
| `visible` | `boolean` | `true` | Controlla la visibilità dello spinner |
| `label` | `string` | - | Testo accessibile per lo spinner |
| `labelPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Posizione del testo di etichetta |

## Varianti

### Dimensioni

```jsx
<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />
```

### Colori

```jsx
<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="error" />
<Spinner color="#FF5722" />
```

### Posizionamento

```jsx
<Spinner $centered />
```

### Con etichetta

```jsx
<Spinner label="Caricamento in corso..." />
<Spinner label="Attendere..." labelPosition="top" />
<Spinner label="Elaborazione" labelPosition="right" />
```

## Esempi avanzati

### Spinner a schermo intero

```jsx
<div style={{ 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  width: '100%', 
  height: '100%', 
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
}}>
  <Spinner size="large" label="Caricamento della pagina..." />
</div>
```

### Componente di loading condizionale

```jsx
function LoadingContent({ isLoading, children }) {
  if (isLoading) {
    return (
      <div style={{ 
        minHeight: '200px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <Spinner label="Caricamento dati..." />
      </div>
    );
  }
  
  return children;
}

// Utilizzo
function MyComponent() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    // Simula una richiesta API
    setTimeout(() => {
      setData({ /* dati */ });
      setIsLoading(false);
    }, 2000);
  }, []);
  
  return (
    <LoadingContent isLoading={isLoading}>
      {/* Contenuto da mostrare quando il caricamento è completato */}
      <div>Dati caricati!</div>
    </LoadingContent>
  );
}
```

### Pulsante con spinner di caricamento

```jsx
function LoadingButton({ isLoading, children, ...props }) {
  return (
    <Button 
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner 
            size="small" 
            color="currentColor" 
            style={{ marginRight: '8px' }}
          />
          Caricamento...
        </>
      ) : children}
    </Button>
  );
}

// Utilizzo
function FormWithLoading() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simula una richiesta API
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Success
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
      {/* Campi del form */}
      <LoadingButton 
        isLoading={isSubmitting} 
        type="submit"
        variant="primary"
      >
        Invia
      </LoadingButton>
    </form>
  );
}
```

## Accessibilità

Il componente Spinner implementa le migliori pratiche di accessibilità:

- Include un attributo `role="status"` per gli screen reader
- Fornisce un `aria-label` adeguato (dalla prop `label` o un testo predefinito)
- Comunica visivamente il caricamento con movimento e colore
- Può includere un'etichetta visibile per aumentare la chiarezza

## Note tecniche

- Utilizza il prefisso `$` per le props booleane come `$centered` per prevenire che vengano passate direttamente al DOM
- L'animazione è implementata con CSS keyframes tramite styled-components
- Lo spinner è renderizzato come SVG per una migliore risoluzione e scalabilità su tutti i dispositivi

## Personalizzazione

Puoi personalizzare l'aspetto dello Spinner attraverso il tema:

```jsx
const customTheme = {
  components: {
    Spinner: {
      sizes: {
        small: '16px',
        medium: '24px',
        large: '40px',
      },
      defaultColor: 'primary',
      animation: {
        duration: '1s',
        timingFunction: 'linear',
      },
      // Altre personalizzazioni...
    }
  }
};

<ThemeProvider theme={customTheme}>
  <Spinner />
</ThemeProvider>
```
