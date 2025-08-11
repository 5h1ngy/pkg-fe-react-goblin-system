---
sidebar_position: 1
slug: /
title: Benvenuto
---

# Linguaggio visivo di Goblin System

Goblin System è un design system React pensato per esperienze portfolio.  
Raccoglie fondamenta coerenti, primitive di layout e componenti pronti per la produzione che condividono lo stesso contratto di tema.

## Perché è diverso?

- **Fondamenta dark-first**  
  Il tema predefinito abbraccia una superficie cinematografica scura con un accento ocra. Nel menu dell'header puoi cambiare subito verso tinte fluorescenti.
- **Un'unica fonte di verità**  
  `createGoblinTheme` genera palette, tipografia, spaziature, mixin, transizioni, ombre e breakpoint consumati da ogni componente tramite `styled-components`.
- **Parità con Storybook**  
  Ogni pattern documentato rimanda alla relativa storia in Storybook così da ispezionare l'implementazione reale.
- **TypeScript di prima classe**  
  L'API pubblica distribuisce dichiarazioni, discriminated union per le varianti e helper `sx` tipizzati.
- **Agnostico rispetto al framework**  
  Niente router, state management o form library: puoi integrare il kit in qualsiasi app React o Vite e iniziare a comporre.

## Contenuti in sintesi

| Dominio | Elementi principali |
| --- | --- |
| Fondamenta | `createGoblinTheme`, `GoblinThemeProvider`, `CssBaseline`, set di icone, stili globali |
| Layout | `Container`, `Stack`, `Grid` responsivo, image list |
| Data display | `Avatar`, `Badge`, `Chip`, `List`, `Table`, `Typography` |
| Input e controlli | Famiglia di pulsanti, toggle, selector, campi di testo |
| Feedback & overlay | `Alert`, suite `Dialog`, `Snackbar`, indicatori di progresso, `Tooltip` |
| Navigazione | `AppBar`, `Drawer`, `Tabs`, `Pagination`, `Stepper`, `SpeedDial` |
| Superfici & utility | Famiglia `Card`, `Accordion`, `Paper`, `Modal`, `Popover`, `Portal` |

Usa il menu di navigazione per esplorare ogni area oppure passa subito alla guida [Guida rapida](./getting-started.md).
