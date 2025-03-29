---
sidebar_position: 1
---

# Modal

Il componente `Modal` è una finestra di dialogo che appare sopra il contenuto dell'applicazione per fornire informazioni critiche, richiedere decisioni o visualizzare contenuto senza perdere il contesto.

## Importazione

```jsx
import { Modal } from 'pkg-fe-react-goblin-system';
```

## Utilizzo di base

```jsx
import React from 'react';
import { Modal, Button } from 'pkg-fe-react-goblin-system';

function ModalExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Apri Modal</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Titolo del Modal"
        footer={
          <Button onClick={() => setIsOpen(false)}>Chiudi</Button>
        }
      >
        <p>Questo è il contenuto del modal.</p>
      </Modal>
    </>
  );
}
```

## Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controlla se il modal è visibile |
| `onClose` | `() => void` | - | Funzione chiamata quando il modal deve chiudersi |
| `title` | `ReactNode` | - | Titolo del modal |
| `children` | `ReactNode` | - | Contenuto del modal |
| `footer` | `ReactNode` | - | Contenuto del footer (tipicamente i pulsanti di azione) |
| `size` | `'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Dimensione del modal |
| `fullScreen` | `boolean` | `false` | Mostra il modal a schermo intero (ha priorità su size) |
| `centered` | `boolean` | `true` | Centra il modal verticalmente |
| `closeOnBackdropClick` | `boolean` | `true` | Chiude il modal al click sullo sfondo |
| `closeOnEsc` | `boolean` | `true` | Chiude il modal alla pressione del tasto ESC |
| `showCloseButton` | `boolean` | `true` | Mostra il pulsante di chiusura nell'header |
| `lockBodyScroll` | `boolean` | `true` | Impedisce lo scroll del body quando il modal è aperto |
| `zIndex` | `number` | `1050` | z-index per il modal |
| `maxBodyHeight` | `string` | - | Altezza massima del corpo del modal con scrolling |
| `width` | `string` | - | Larghezza personalizzata per il modal |

## Varianti e esempi

### Dimensioni

```jsx
<Modal size="small" title="Modal piccolo" isOpen={isOpen} onClose={handleClose}>
  Contenuto del modal piccolo
</Modal>

<Modal size="medium" title="Modal medio" isOpen={isOpen} onClose={handleClose}>
  Contenuto del modal medio (dimensione predefinita)
</Modal>

<Modal size="large" title="Modal grande" isOpen={isOpen} onClose={handleClose}>
  Contenuto del modal grande
</Modal>

<Modal size="full" title="Modal a larghezza piena" isOpen={isOpen} onClose={handleClose}>
  Contenuto del modal a larghezza piena
</Modal>
```

### Modal a schermo intero

```jsx
<Modal 
  fullScreen 
  title="Modal a schermo intero" 
  isOpen={isOpen} 
  onClose={handleClose}
>
  Questo modal occupa l'intero schermo
</Modal>
```

### Modal con footer personalizzato

```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Conferma azione"
  footer={
    <>
      <Button variant="outline" onClick={handleClose}>Annulla</Button>
      <Button variant="primary" onClick={handleConfirm}>Conferma</Button>
    </>
  }
>
  Sei sicuro di voler procedere con questa azione?
</Modal>
```

### Modal senza header

```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  showCloseButton={false}
>
  <div style={{ padding: '24px' }}>
    <h2>Modal personalizzato</h2>
    <p>Questo modal non ha un header predefinito.</p>
    <Button onClick={handleClose}>Chiudi</Button>
  </div>
</Modal>
```

## Esempi avanzati

### Form in un modal

```jsx
function FormModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', email: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Apri Form</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Inserisci i tuoi dati"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Annulla
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Salva
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </Modal>
    </>
  );
}
```

### Modal con contenuto con scrolling

```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal con contenuto lungo"
  maxBodyHeight="300px"
>
  <div>
    <p>Questo è un paragrafo lungo che richiederà scrolling...</p>
    {/* Molto contenuto qui */}
    <p>Fine del contenuto</p>
  </div>
</Modal>
```

## Accessibilità

Il componente Modal implementa le migliori pratiche di accessibilità:

- Gestione corretta del focus: il focus viene intrappolato all'interno del modal quando è aperto
- Supporto per la navigazione da tastiera con il tasto TAB
- Chiusura tramite tasto ESC (può essere disabilitata)
- Attributi ARIA appropriati (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`)
- Annuncio appropriato agli screen reader

## Note tecniche

- Il Modal utilizza React Portal per renderizzarsi al di fuori della gerarchia DOM del componente padre
- Quando è aperto, blocca automaticamente lo scrolling del body per prevenire l'interazione con il contenuto sottostante
- Utilizza il prefisso `$` per le props booleane come `$fullScreen` e `$centered` per prevenire che vengano passate direttamente al DOM
- L'animazione è gestita tramite styled-components per garantire transizioni fluide

## Personalizzazione

È possibile personalizzare l'aspetto del Modal attraverso il tema:

```jsx
const customTheme = {
  components: {
    Modal: {
      borderRadius: '12px',
      headerPadding: '20px 24px',
      bodyPadding: '24px',
      footerPadding: '20px 24px',
      backgroundColor: '#ffffff',
      shadow: '0 10px 30px rgba(0,0,0,0.2)',
      // Altre personalizzazioni...
    }
  }
};

<ThemeProvider theme={customTheme}>
  <Modal isOpen={isOpen} onClose={handleClose}>
    Modal con stile personalizzato
  </Modal>
</ThemeProvider>
```
