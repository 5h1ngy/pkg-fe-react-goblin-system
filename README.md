# pkg-fe-react-goblin-system

<div align="center">
  <img src="assets/logo.png" alt="pkg-fe-react-goblin-system Logo" width="500">
</div>

<div align="start">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License MIT">
  </a>
  <a href="package.json">
    <img src="https://img.shields.io/badge/version-0.3.58-blue" alt="Version 0.3.58">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/node-%3E%3D20.18.0-blue" alt="Node >=20.18.0">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/react-18.x-blue" alt="React 18.x">
  </a>
</div>

## URLs

| Key       | Value                                                                           |
|-----------|---------------------------------------------------------------------------------|
| Website   | https://5h1ngy.github.io/pkg-fe-react-goblin-system/                            |
| Storybook | https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook                   |
| Docs      | https://5h1ngy.github.io/pkg-fe-react-goblin-system/docs                        |

## Panoramica

**pkg-fe-react-goblin-system** (anche noto come **React Goblin System**) è una libreria UI completa per React e TypeScript che fornisce componenti riutilizzabili, accessibili e altamente personalizzabili. Progettata con Styled Components, la libreria offre un sistema di componenti moderno con un'architettura flessibile e un potente sistema di theming.

## Caratteristiche principali

- **Componenti UI completamente personalizzabili** - Pulsanti, modali, grid, layout e altro
- **Sistema di theming avanzato** - Personalizza l'aspetto completo della tua applicazione
- **Design responsivo** - Interfacce ottimizzate per ogni dimensione di schermo
- **Accessibilità integrata** - Conformità WCAG e supporto per le tecnologie assistive
- **API consistenti** - Patterns di progettazione uniformi in tutti i componenti
- **Documentazione completa** - Guide dettagliate e esempi per ogni componente
- **TypeScript** - Tipizzazione completa per una migliore developer experience

## Documentazione

La documentazione completa è disponibile nella [directory docs](./docs/docs/intro.md) del repository.

### Guide principali

- [Introduzione](./docs/docs/intro.md)
- [Guida all'installazione](./docs/docs/getting-started.md)
- [Lista dei componenti](./docs/docs/components/index.md)
- [Personalizzazione dei temi](./docs/docs/theming/index.md)

### Componenti

#### Layout
- [Container](./docs/docs/components/layout/container.md) - Contenitore per limitare e centrare i contenuti
- [Grid](./docs/docs/components/layout/grid.md) - Sistema di griglia flessibile per layout responsivi

#### Pulsanti
- [Button](./docs/docs/components/buttons/button.md) - Pulsanti standard con varianti e stati
- [IconButton](./docs/docs/components/buttons/iconbutton.md) - Pulsanti con icone integrate

#### Feedback
- [Modal](./docs/docs/components/feedback/modal.md) - Finestre modali per dialoghi e contenuti sovrapposti
- [Spinner](./docs/docs/components/feedback/spinner.md) - Indicatori di caricamento animati

#### Tipografia
- [Text](./docs/docs/components/typography/text.md) - Componenti per la gestione del testo

## Installazione

```bash
# Con npm
npm install pkg-fe-react-goblin-system

# Con Yarn
yarn add pkg-fe-react-goblin-system

# Con pnpm
pnpm add pkg-fe-react-goblin-system
```

## Utilizzo rapido

```jsx
import React from 'react';
import { 
  ThemeProvider, 
  Container, 
  Row, 
  Col, 
  Button, 
  Text 
} from 'pkg-fe-react-goblin-system';

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Row>
          <Col span={12}>
            <Text as="h1" size="xxl" weight="bold">
              Benvenuto in Goblin System
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text>
              Una libreria moderna di componenti UI per React
            </Text>
          </Col>
          <Col span={6}>
            <Button variant="primary">
              Inizia ora
            </Button>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
```

## Requisiti

- **Node.js**: >= 20.18.0
- **React**: 18.x (peer dependency)  
- **Styled Components**: >= 6.0.0 (peer dependency)

## Struttura del progetto

```
pkg-fe-react-goblin-system/
├─ .storybook/          # Configurazioni Storybook
├─ docs/                # Documentazione Docusaurus
├─ src/
│  ├─ components/       # Componenti React
│  │  ├─ ui/            # Componenti UI di base
│  │  │  ├─ buttons/    # Button, IconButton, ecc.
│  │  │  ├─ feedback/   # Modal, Spinner, ecc.
│  │  │  ├─ layout/     # Container, Grid, ecc.
│  │  │  ├─ typography/ # Text, Heading, ecc.
│  │  ├─ providers/     # ThemeProvider e altri provider
│  ├─ styles/           # Temi e utilità di stile
│  ├─ utils/            # Funzioni di utilità
├─ package.json         # Informazioni sul progetto e dipendenze
└─ ... (altre configurazioni)
```

## Script disponibili

- **`start:storybook`** – Avvia Storybook in modalità di sviluppo (porta `6006`)
- **`start:docs`** – Avvia Docusaurus in locale (porta `3000`)
- **`build:storybook`** – Compila Storybook statico nella cartella `build-storybook/`
- **`build:docs`** – Compila la documentazione statica in `build-docusaurus/`
- **`build:lib`** – Compila la libreria con Vite e la impacchetta come tarball
- **`test`** – Esegue i test con Jest

## Compatibilità con i browser

- Chrome (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Edge (ultime 2 versioni)
- iOS 12+ (Safari)
- Android 5.0+ (Chrome)

## Contribuire

Siamo lieti di ricevere contributi al progetto! Per favore, segui questi passaggi:

1. Fai una fork del repository o crea un nuovo branch nel tuo clone
2. Installa le dipendenze e sviluppa la tua feature/fix in `src/`
3. Assicurati che i test passino e che la documentazione sia aggiornata
4. Invia una Pull Request con una chiara descrizione delle modifiche

## Licenza

Questo progetto è rilasciato sotto la licenza **MIT**. Per dettagli, vedi il file `LICENSE`.