---
sidebar_position: 1
---

# Container

Il componente `Container` è un elemento fondamentale per il layout che centra il contenuto orizzontalmente con un padding adeguato e larghezza massima responsiva.

## Importazione

```jsx
import { Container } from 'pkg-fe-react-goblin-system';
```

## Utilizzo di base

```jsx
<Container>
  <h1>Titolo della pagina</h1>
  <p>Contenuto della pagina...</p>
</Container>
```

## Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `maxWidth` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| string` | `'lg'` | Larghezza massima del container |
| `disableGutters` | `boolean` | `false` | Se `true`, rimuove il padding laterale |
| `fluid` | `boolean` | `false` | Se `true`, il container occupa sempre il 100% della larghezza disponibile |
| `as` | `React.ElementType` | `'div'` | Componente HTML o React da utilizzare |
| `children` | `ReactNode` | - | Contenuto del container |

## Varianti

### Dimensioni

```jsx
<Container maxWidth="xs">Container extra small (max 576px)</Container>
<Container maxWidth="sm">Container small (max 768px)</Container>
<Container maxWidth="md">Container medium (max 992px)</Container>
<Container maxWidth="lg">Container large (max 1200px, default)</Container>
<Container maxWidth="xl">Container extra large (max 1400px)</Container>
```

### Personalizzazione della dimensione

```jsx
<Container maxWidth="800px">
  Container con larghezza massima personalizzata di 800px
</Container>
```

### Container fluid

```jsx
<Container fluid>
  Questo container occupa sempre il 100% della larghezza disponibile,
  mantenendo il padding laterale.
</Container>
```

### Senza padding laterale

```jsx
<Container disableGutters>
  Container senza padding laterale
</Container>
```

## Esempi avanzati

### Layout di pagina base

```jsx
<Container>
  <Header />
  <main>
    <Heading level={1}>Titolo della pagina</Heading>
    <Text>Questo è il contenuto principale della pagina...</Text>
  </main>
  <Footer />
</Container>
```

### Layout a sezioni

```jsx
<>
  {/* Sezione hero a larghezza piena */}
  <Container fluid disableGutters>
    <div style={{ backgroundColor: '#f0f0f0', padding: '48px 0' }}>
      <Container>
        <h1>Welcome to our Site</h1>
        <p>Hero section content...</p>
      </Container>
    </div>
  </Container>

  {/* Contenuto principale con larghezza contenuta */}
  <Container maxWidth="md">
    <div style={{ padding: '48px 0' }}>
      <h2>Main Content</h2>
      <p>Page content with constrained width...</p>
    </div>
  </Container>

  {/* Footer a tutta larghezza */}
  <Container fluid disableGutters>
    <div style={{ backgroundColor: '#333', color: 'white', padding: '24px 0' }}>
      <Container>
        <p>Footer content...</p>
      </Container>
    </div>
  </Container>
</>
```

### Container con elemento HTML personalizzato

```jsx
<Container as="section" maxWidth="md">
  Questo container è renderizzato come un elemento <section>
</Container>

<Container as="article" maxWidth="md">
  Questo container è renderizzato come un elemento <article>
</Container>
```

## Best Practices

- Usa il componente `Container` come wrapper di primo livello per le tue pagine
- Utilizza dimensioni adeguate in base al contenuto: `md` o `lg` per contenuti generali, `sm` per form e contenuti a larghezza ridotta
- Combina `Container fluid` con un `Container` annidato per creare sezioni a larghezza piena con contenuto centrato
- Utilizza la proprietà `disableGutters` quando hai bisogno di estendere il contenuto fino ai bordi (utile per header, footer o elementi di sfondo)

## Responsive Design

Il `Container` si adatta automaticamente alle diverse dimensioni dello schermo:

- Su schermi più piccoli della larghezza massima specificata, il container occuperà il 100% della larghezza disponibile (meno il padding laterale)
- Su schermi più grandi della larghezza massima specificata, il container manterrà la sua larghezza massima e rimarrà centrato

## Personalizzazione

Puoi personalizzare i valori predefiniti del Container nel tema:

```jsx
const customTheme = {
  components: {
    Container: {
      maxWidths: {
        xs: '540px',
        sm: '720px',
        md: '960px',
        lg: '1140px',
        xl: '1320px',
      },
      padding: '24px', // Padding laterale predefinito
    }
  }
};

<ThemeProvider theme={customTheme}>
  <Container>Contenuto</Container>
</ThemeProvider>
```
