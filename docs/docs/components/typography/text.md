---
sidebar_position: 1
---

# Text

Il componente `Text` è un elemento fondamentale per la visualizzazione di contenuti testuali. Offre diverse varianti di stile e opzioni di formattazione per soddisfare tutte le esigenze di tipografia.

## Importazione

```jsx
import { Text } from 'pkg-fe-react-goblin-system';
```

## Utilizzo di base

```jsx
<Text>Questo è un testo predefinito</Text>
<Text variant="body1">Questo è un testo body1</Text>
<Text variant="body2">Questo è un testo body2</Text>
<Text variant="caption">Questo è un testo caption</Text>
<Text variant="overline">QUESTO È UN TESTO OVERLINE</Text>
```

## Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `variant` | `'body1' \| 'body2' \| 'caption' \| 'overline'` | `'body1'` | Variante di stile del testo |
| `color` | `string` | - | Colore del testo (supporta colori del tema e valori CSS) |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Allineamento orizzontale |
| `weight` | `'regular' \| 'medium' \| 'bold' \| number` | - | Spessore del carattere |
| `italic` | `boolean` | `false` | Applica lo stile corsivo |
| `transform` | `'none' \| 'uppercase' \| 'lowercase' \| 'capitalize'` | `'none'` | Trasformazione del testo |
| `nowrap` | `boolean` | `false` | Impedisce il wrapping del testo |
| `truncate` | `boolean \| number` | `false` | Tronca il testo con ellipsis dopo una linea o un numero specificato di linee |
| `fontSize` | `string \| number` | - | Dimensione personalizzata del carattere |
| `lineHeight` | `string \| number` | - | Altezza della linea personalizzata |
| `paragraph` | `boolean` | `false` | Usa il tag semantico `<p>` e applica margin-bottom |
| `component` | `React.ElementType` | `'span'` | Componente React o elemento HTML da utilizzare |

## Varianti

### Varianti di stile

```jsx
<Text variant="body1">Body 1 - Testo principale</Text>
<Text variant="body2">Body 2 - Testo secondario, leggermente più piccolo</Text>
<Text variant="caption">Caption - Testo più piccolo per etichette e note</Text>
<Text variant="overline">OVERLINE - PICCOLO TESTO IN MAIUSCOLO PER INTESTAZIONI</Text>
```

### Colori

```jsx
<Text color="primary">Testo con colore primario del tema</Text>
<Text color="secondary">Testo con colore secondario del tema</Text>
<Text color="error">Testo di errore</Text>
<Text color="textSecondary">Testo secondario</Text>
<Text color="#FF5722">Testo con colore personalizzato</Text>
```

### Allineamento

```jsx
<Text align="left">Testo allineato a sinistra</Text>
<Text align="center">Testo centrato</Text>
<Text align="right">Testo allineato a destra</Text>
<Text align="justify">Testo giustificato. Questo paragrafo dimostra come il testo venga distribuito uniformemente sulla larghezza disponibile creando uno spazio uniforme tra le parole.</Text>
```

### Peso e stile

```jsx
<Text weight="regular">Testo con peso regular</Text>
<Text weight="medium">Testo con peso medium</Text>
<Text weight="bold">Testo con peso bold</Text>
<Text weight={500}>Testo con peso 500</Text>
<Text italic>Testo in corsivo</Text>
<Text weight="bold" italic>Testo bold e corsivo</Text>
```

### Testo troncato

```jsx
<Text truncate style={{ width: '200px' }}>
  Questo testo è molto lungo e verrà troncato con i puntini alla fine.
</Text>

{/* Tronca dopo 2 linee */}
<Text truncate={2} style={{ width: '200px' }}>
  Questo è un testo molto lungo che occuperà più di una linea e verrà troncato dopo la seconda linea con i puntini di sospensione.
</Text>
```

## Esempi avanzati

### Paragrafo

```jsx
<Text paragraph>
  Questo è un paragrafo di testo. Verrà renderizzato con un tag <p> e avrà un margin-bottom adeguato.
  Il testo continua in questo paragrafo per dimostrare come appare un blocco di testo più lungo.
</Text>
<Text paragraph>Un altro paragrafo che segue il precedente con lo spazio appropriato.</Text>
```

### Componente personalizzato

```jsx
<Text component="label" htmlFor="my-input">
  Etichetta per un campo di input
</Text>

<Text component="a" href="https://example.com" color="primary">
  Questo è un link
</Text>
```

### Combinazione di più proprietà

```jsx
<Text 
  variant="body1"
  color="primary"
  weight="bold"
  align="center"
  transform="uppercase"
  paragraph
>
  UN TESTO IMPORTANTE IN EVIDENZA
</Text>
```

## Accessibilità

Il componente `Text` è progettato per supportare le migliori pratiche di accessibilità:

- Utilizza tag HTML semantici quando appropriato (`paragraph` → `<p>`)
- Mantiene una gerarchia testuale coerente tramite le varianti
- Garantisce rapporti di contrasto adeguati con i colori del tema predefinito
- Supporta l'aumento di dimensioni del testo nei browser senza rompersi

## Personalizzazione

Puoi personalizzare gli stili di base di ogni variante attraverso il tema:

```jsx
const customTheme = {
  typography: {
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
};

<ThemeProvider theme={customTheme}>
  <Text variant="body1">Testo personalizzato</Text>
</ThemeProvider>
```
