---
sidebar_position: 1
---

# Button

Il componente `Button` è un elemento di interazione fondamentale che permette agli utenti di eseguire azioni con un semplice click.

## Importazione

```jsx
import { Button } from 'pkg-fe-react-goblin-system';
```

## Utilizzo di base

```jsx
<Button>Pulsante predefinito</Button>
<Button variant="primary">Pulsante primario</Button>
<Button variant="secondary">Pulsante secondario</Button>
<Button variant="outline">Pulsante outline</Button>
<Button variant="text">Pulsante testuale</Button>
```

## Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'text'` | `'primary'` | Definisce lo stile visivo del pulsante |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Dimensione del pulsante |
| `disabled` | `boolean` | `false` | Disabilita il pulsante |
| `loading` | `boolean` | `false` | Mostra un indicatore di caricamento |
| `fullWidth` | `boolean` | `false` | Fa occupare al pulsante l'intera larghezza disponibile |
| `startIcon` | `ReactNode` | - | Icona da mostrare all'inizio del pulsante |
| `endIcon` | `ReactNode` | - | Icona da mostrare alla fine del pulsante |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Funzione callback richiamata al click |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo di pulsante HTML |

## Varianti

### Varianti di stile

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>
```

### Dimensioni

```jsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### Con icone

```jsx
import { InfoIcon, ArrowIcon } from 'pkg-fe-react-goblin-system';

<Button startIcon={<InfoIcon />}>Con icona iniziale</Button>
<Button endIcon={<ArrowIcon />}>Con icona finale</Button>
<Button startIcon={<InfoIcon />} endIcon={<ArrowIcon />}>Con entrambe</Button>
```

### Stati

```jsx
<Button disabled>Disabilitato</Button>
<Button loading>Caricamento</Button>
```

### Full width

```jsx
<Button fullWidth>Pulsante a larghezza piena</Button>
```

## Esempi

### Pulsante di submit in un form

```jsx
<form onSubmit={handleSubmit}>
  {/* Altri campi del form */}
  <Button type="submit" variant="primary">Invia</Button>
</form>
```

### Pulsante di caricamento con gestione dello stato

```jsx
function LoadingButtonExample() {
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleClick = async () => {
    setIsLoading(true);
    try {
      await someAsyncFunction();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      loading={isLoading}
      disabled={isLoading}
    >
      {isLoading ? 'Caricamento...' : 'Clicca qui'}
    </Button>
  );
}
```

## Accessibilità

Il componente Button è conforme alle linee guida di accessibilità:

- Supporta la navigazione da tastiera e il focus visibile
- Comunica correttamente lo stato disabled agli screen reader
- Mantiene un contrasto di colore adeguato in tutte le varianti
- Conserva la funzionalità di focus anche quando disabilitato visivamente

## Personalizzazione

È possibile personalizzare l'aspetto dei pulsanti attraverso il tema:

```jsx
const customTheme = {
  components: {
    Button: {
      borderRadius: '8px',
      fontWeight: 600,
      // Personalizzazioni delle varianti
      variants: {
        primary: {
          backgroundColor: '#1a73e8',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1765cc'
          }
        },
        // Altre varianti...
      }
    }
  }
};

<ThemeProvider theme={customTheme}>
  <Button variant="primary">Pulsante personalizzato</Button>
</ThemeProvider>
```
