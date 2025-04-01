---
sidebar_position: 2
---

# IconButton

Il componente `IconButton` è progettato per visualizzare pulsanti circolari o quadrati contenenti solo un'icona. È ideale per interfacce pulite dove lo spazio è limitato o per azioni secondarie.

## Importazione

```jsx
import { IconButton } from 'pkg-fe-react-goblin-system';
```

## Utilizzo di base

```jsx
import { HomeIcon } from 'pkg-fe-react-goblin-system/icons';

<IconButton>
  <HomeIcon />
</IconButton>
```

## Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Variante visiva del pulsante |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Dimensione del pulsante |
| `circular` | `boolean` | `true` | Se `true`, il pulsante avrà forma circolare |
| `disabled` | `boolean` | `false` | Disabilita il pulsante |
| `$loading` | `boolean` | `false` | Mostra un indicatore di caricamento al posto dell'icona |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Funzione callback chiamata al click |
| `aria-label` | `string` | - | Etichetta per l'accessibilità (fortemente consigliata) |

## Varianti

### Varianti di stile

```jsx
<IconButton variant="primary"><EditIcon /></IconButton>
<IconButton variant="secondary"><DeleteIcon /></IconButton>
<IconButton variant="outline"><InfoIcon /></IconButton>
<IconButton variant="ghost"><SettingsIcon /></IconButton>
```

### Dimensioni

```jsx
<IconButton size="small"><SearchIcon /></IconButton>
<IconButton size="medium"><SearchIcon /></IconButton>
<IconButton size="large"><SearchIcon /></IconButton>
```

### Forma

```jsx
<IconButton circular={true}><StarIcon /></IconButton> {/* Circolare (default) */}
<IconButton circular={false}><StarIcon /></IconButton> {/* Quadrato con bordi arrotondati */}
```

### Stati

```jsx
<IconButton disabled><DeleteIcon /></IconButton>
<IconButton $loading><SaveIcon /></IconButton>
```

## Esempi

### Pulsante di azione flottante

```jsx
<div style={{ position: 'relative', height: '200px' }}>
  <IconButton
    variant="primary"
    size="large"
    style={{
      position: 'absolute',
      bottom: '16px',
      right: '16px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}
    aria-label="Aggiungi elemento"
  >
    <PlusIcon />
  </IconButton>
</div>
```

### Barra degli strumenti con IconButton

```jsx
<div style={{ display: 'flex', gap: '8px' }}>
  <IconButton variant="ghost" aria-label="Bold">
    <BoldIcon />
  </IconButton>
  <IconButton variant="ghost" aria-label="Italic">
    <ItalicIcon />
  </IconButton>
  <IconButton variant="ghost" aria-label="Underline">
    <UnderlineIcon />
  </IconButton>
</div>
```

### Stato di caricamento

```jsx
function LoadingIconButtonExample() {
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleClick = async () => {
    setIsLoading(true);
    try {
      await someAsyncOperation();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IconButton 
      onClick={handleClick}
      $loading={isLoading}
      disabled={isLoading}
      aria-label="Salva"
    >
      <SaveIcon />
    </IconButton>
  );
}
```

## Accessibilità

Per garantire che l'`IconButton` sia accessibile:

- **Usa sempre `aria-label`**: Poiché l'IconButton non contiene testo, è essenziale fornire un'etichetta ARIA descrittiva
- **Contrasto adeguato**: Assicurati che l'icona abbia un contrasto sufficiente rispetto allo sfondo del pulsante
- **Dimensione minima**: Mantieni una dimensione minima di 44x44 pixel per aree touchscreen, o usa `size="large"` per dispositivi touch

```jsx
// Esempio di IconButton accessibile
<IconButton
  aria-label="Cancella messaggio"
  variant="primary"
  size="medium"
>
  <DeleteIcon />
</IconButton>
```

## Personalizzazione

Puoi personalizzare l'aspetto dell'IconButton attraverso il tema:

```jsx
const customTheme = {
  components: {
    IconButton: {
      borderRadius: '8px',  // Per i pulsanti non circolari
      sizes: {
        small: '32px',
        medium: '44px',
        large: '56px'
      },
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
  <IconButton variant="primary"><SearchIcon /></IconButton>
</ThemeProvider>
```

## Note tecniche

- Utilizza il prefisso `$` per le props booleane come `$loading` per prevenire che vengano passate direttamente al DOM
- Per ottenere il massimo dall'IconButton, usa icone di dimensioni adeguate rispetto alla dimensione del pulsante
- Evita di inserire elementi diversi dalle icone come children
