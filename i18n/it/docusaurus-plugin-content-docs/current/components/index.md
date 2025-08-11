---
sidebar_position: 1
title: Panoramica componenti
---

# Panoramica componenti

I componenti di Goblin System sono organizzati per intento.  
Tutte le primitive sono collegate al contratto di tema condiviso ed espongono la prop `sx` per personalizzazioni puntuali.

## Famiglie di componenti

| Categoria | Contenuti |
| --- | --- |
| [Fondamenta](./foundations.md) | Theme provider, stili globali, set di icone, hook di supporto. |
| [Layout](./layout.md) | `Container`, `Stack`, `Grid` responsivo, image list. |
| [Data display](./data-display.md) | `Avatar`, `Badge`, `Chip`, `List`, `Table`, `Typography`. |
| [Input e controlli](./inputs.md) | Famiglia di pulsanti, toggle, selector, text input. |
| [Feedback e overlay](./feedback.md) | Alert, dialog, snackbar, indicatori di progresso, `Tooltip`. |
| [Navigazione](./navigation.md) | App bar, drawer, menu, paginazione, stepper, tab. |
| [Utility e portal](./utilities.md) | Collapse, modal, popover, portal e listener. |

Ogni pagina di dettaglio elenca i componenti principali della famiglia, con linee guida e collegamenti alle storie di Storybook.

## Anatomia dei componenti

- Prop di variante con prefisso `$` (`$variant`, `$interactive`) per evitare collisioni con HTML props.
- Prop `color` che rispetta le chiavi della palette (`primary`, `secondary`, `info`, `success`, `warning`, `error`).
- Prop `sx` per oggetti o funzioni basati sul tema.
- Ref inoltrate per integrarsi con librerie di form o animazioni personalizzate.

## Tieni Storybook a portata di mano

Il modo più rapido per esplorare il comportamento è aprire Storybook dal link nell'header.  
Puoi copiare gli snippet direttamente nelle tue viste, mentre la documentazione resta focalizzata su design e architettura.
