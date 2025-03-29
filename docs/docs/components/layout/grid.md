---
sidebar_position: 2
---

# Grid

Il componente `Grid` è un sistema di layout flessibile basato su una griglia a 12 colonne che permette di creare layout responsivi complessi con facilità.

## Importazione

```jsx
import { Row, Col } from 'pkg-fe-react-goblin-system';
```

## Utilizzo di base

```jsx
<Row>
  <Col span={6}>Occupa metà della larghezza</Col>
  <Col span={6}>Occupa metà della larghezza</Col>
</Row>

<Row>
  <Col span={4}>Colonna 1/3</Col>
  <Col span={4}>Colonna 1/3</Col>
  <Col span={4}>Colonna 1/3</Col>
</Row>
```

## Proprietà

### Row Props

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `gutter` | `string \| number` | `0` | Spazio orizzontale tra le colonne |
| `gutterY` | `string \| number` | `0` | Spazio verticale tra le righe |
| `align` | `'top' \| 'middle' \| 'bottom' \| 'stretch'` | `'top'` | Allineamento verticale delle colonne |
| `justify` | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between'` | `'start'` | Distribuzione orizzontale delle colonne |
| `wrap` | `boolean` | `true` | Se le colonne devono andare a capo quando lo spazio è insufficiente |

### Col Props

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `span` | `number` | - | Numero di colonne su 12 da occupare |
| `xs` | `number` | - | Numero di colonne da occupare su schermi extra small (< 576px) |
| `sm` | `number` | - | Numero di colonne da occupare su schermi small (≥ 576px) |
| `md` | `number` | - | Numero di colonne da occupare su schermi medium (≥ 768px) |
| `lg` | `number` | - | Numero di colonne da occupare su schermi large (≥ 992px) |
| `xl` | `number` | - | Numero di colonne da occupare su schermi extra large (≥ 1200px) |
| `offset` | `number` | `0` | Numero di colonne di offset |
| `order` | `number` | - | Ordine della colonna nel flusso |
| `pull` | `number` | `0` | Numero di colonne da spostare a sinistra |
| `push` | `number` | `0` | Numero di colonne da spostare a destra |

## Esempi

### Sistema a griglia base

```jsx
<Row>
  <Col span={12}>100% di larghezza</Col>
</Row>
<Row>
  <Col span={6}>50%</Col>
  <Col span={6}>50%</Col>
</Row>
<Row>
  <Col span={8}>33.33%</Col>
  <Col span={8}>33.33%</Col>
  <Col span={8}>33.33%</Col>
</Row>
<Row>
  <Col span={3}>25%</Col>
  <Col span={3}>25%</Col>
  <Col span={3}>25%</Col>
  <Col span={3}>25%</Col>
</Row>
```

### Gutter (spaziatura)

```jsx
<Row gutter={16}>
  <Col span={12}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Colonna con gutter 16px</div>
  </Col>
  <Col span={12}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Colonna con gutter 16px</div>
  </Col>
</Row>

<Row gutter={32} gutterY={16}>
  <Col span={8}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Gutter orizzontale 32px e verticale 16px</div>
  </Col>
  <Col span={8}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Gutter orizzontale 32px e verticale 16px</div>
  </Col>
  <Col span={8}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Gutter orizzontale 32px e verticale 16px</div>
  </Col>
  <Col span={8}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Gutter orizzontale 32px e verticale 16px</div>
  </Col>
  <Col span={8}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Gutter orizzontale 32px e verticale 16px</div>
  </Col>
  <Col span={8}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>Gutter orizzontale 32px e verticale 16px</div>
  </Col>
</Row>
```

### Layout responsivo

```jsx
<Row>
  <Col xs={12} sm={6} md={4} lg={3} xl={2}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>
      Responsivo: 12 colonne su xs, 6 su sm, 4 su md, 3 su lg, 2 su xl
    </div>
  </Col>
  <Col xs={12} sm={6} md={4} lg={3} xl={2}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>
      Responsivo: 12 colonne su xs, 6 su sm, 4 su md, 3 su lg, 2 su xl
    </div>
  </Col>
  <Col xs={12} sm={6} md={4} lg={3} xl={2}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>
      Responsivo: 12 colonne su xs, 6 su sm, 4 su md, 3 su lg, 2 su xl
    </div>
  </Col>
  <Col xs={12} sm={6} md={4} lg={3} xl={2}>
    <div style={{ background: '#f0f0f0', padding: '8px' }}>
      Responsivo: 12 colonne su xs, 6 su sm, 4 su md, 3 su lg, 2 su xl
    </div>
  </Col>
</Row>
```

### Allineamento verticale

```jsx
<Row align="top" style={{ height: '100px', background: '#f5f5f5' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '50px' }}>align="top"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '70px' }}>align="top"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '30px' }}>align="top"</div>
  </Col>
</Row>

<Row align="middle" style={{ height: '100px', background: '#f5f5f5', marginTop: '16px' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '50px' }}>align="middle"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '70px' }}>align="middle"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '30px' }}>align="middle"</div>
  </Col>
</Row>

<Row align="bottom" style={{ height: '100px', background: '#f5f5f5', marginTop: '16px' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '50px' }}>align="bottom"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '70px' }}>align="bottom"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', height: '30px' }}>align="bottom"</div>
  </Col>
</Row>

<Row align="stretch" style={{ height: '100px', background: '#f5f5f5', marginTop: '16px' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0' }}>align="stretch"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0' }}>align="stretch"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0' }}>align="stretch"</div>
  </Col>
</Row>
```

### Distribuzione orizzontale

```jsx
<Row justify="start">
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="start"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="start"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="start"</div>
  </Col>
</Row>

<Row justify="center" style={{ marginTop: '16px' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="center"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="center"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="center"</div>
  </Col>
</Row>

<Row justify="end" style={{ marginTop: '16px' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="end"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="end"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="end"</div>
  </Col>
</Row>

<Row justify="space-between" style={{ marginTop: '16px' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="space-between"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="space-between"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="space-between"</div>
  </Col>
</Row>

<Row justify="space-around" style={{ marginTop: '16px' }}>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="space-around"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="space-around"</div>
  </Col>
  <Col span={4}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>justify="space-around"</div>
  </Col>
</Row>
```

### Offset, Order, Pull e Push

```jsx
<Row>
  <Col span={8}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>span=8</div>
  </Col>
  <Col span={8} offset={8}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>span=8 offset=8</div>
  </Col>
</Row>

<Row style={{ marginTop: '16px' }}>
  <Col span={6} order={2}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>1 - order=2</div>
  </Col>
  <Col span={6} order={1}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>2 - order=1</div>
  </Col>
</Row>

<Row style={{ marginTop: '16px' }}>
  <Col span={6} push={6}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>push=6</div>
  </Col>
  <Col span={6} pull={6}>
    <div style={{ background: '#e0e0e0', padding: '8px' }}>pull=6</div>
  </Col>
</Row>
```

## Layout predefiniti comuni

### Layout a tre colonne

```jsx
<Row gutter={16}>
  <Col span={6}>
    <div style={{ background: '#f0f0f0', padding: '16px', height: '100%' }}>
      Sidebar / Menu
    </div>
  </Col>
  <Col span={12}>
    <div style={{ background: '#f0f0f0', padding: '16px' }}>
      Contenuto principale
    </div>
  </Col>
  <Col span={6}>
    <div style={{ background: '#f0f0f0', padding: '16px', height: '100%' }}>
      Widget / Informazioni supplementari
    </div>
  </Col>
</Row>
```

### Layout responsivo a due colonne (stacked su mobile)

```jsx
<Row gutter={16}>
  <Col xs={24} md={16}>
    <div style={{ background: '#f0f0f0', padding: '16px' }}>
      Contenuto principale (24 colonne su mobile, 16 su tablet e desktop)
    </div>
  </Col>
  <Col xs={24} md={8}>
    <div style={{ background: '#f0f0f0', padding: '16px' }}>
      Sidebar (24 colonne su mobile, 8 su tablet e desktop)
    </div>
  </Col>
</Row>
```

## Best Practices

1. **Sempre all'interno di un Container**: Utilizza il componente `Container` come wrapper per il sistema di griglia per garantire il corretto allineamento e la larghezza massima.

2. **Usa le classi responsive per diversi breakpoint**: Sfrutta le proprietà responsive (`xs`, `sm`, `md`, `lg`, `xl`) per creare layout adattivi.

3. **Utilizza i gutter coerentemente**: Mantieni gutter coerenti in tutta l'applicazione, preferibilmente utilizzando i valori del tema.

4. **Nidifica le righe quando necessario**: È possibile annidare righe all'interno di colonne per creare layout complessi.

5. **Non ignorare l'accessibilità**: Assicurati che il tuo layout sia accessibile su tutti i dispositivi e con l'uso di tecnologie assistive.

## Personalizzazione del tema

Puoi personalizzare il comportamento del Grid attraverso il tema:

```jsx
const customTheme = {
  grid: {
    columns: 12,  // Numero di colonne nel sistema
    gutterUnit: 'px',  // Unità di misura per i gutter
    breakpoints: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    containerMaxWidths: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
    },
  },
};

<ThemeProvider theme={customTheme}>
  <Container>
    <Row>
      <Col>Contenuto con grid personalizzato</Col>
    </Row>
  </Container>
</ThemeProvider>
```
