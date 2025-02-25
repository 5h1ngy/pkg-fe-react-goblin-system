# Panoramica Componenti

Questa libreria fornisce una serie di componenti React basati (o estesi) da Chakra UI. **Nella maggior parte dei casi, i componenti hanno un design e un set di props molto simile alla controparte Chakra** ma con funzionalità extra o una struttura più modulare.

> Per gli esempi pratici o il dettaglio di ogni prop, fai riferimento allo **Storybook** incluso nella libreria.

---

## Factory/Chakra

All’interno di `components/Factory/Chakra/` trovi molte implementazioni personalizzate, tra cui:

- **Accordion** (`accordion.tsx`): wrapper e item di un accordion, con possibilità di icone personalizzate.
- **ActionBar** (`action-bar.tsx`): barra azioni contestuali, appare quando c’è una selezione di elementi.
- **Alert** (`alert.tsx`): alert con icone e possibilità di rendere closable.
- **Avatar** (`avatar.tsx`), **AvatarGroup**: avatar personalizzabili con fallback e icone.
- **Blockquote** (`blockquote.tsx`): citazione con styling e caption.
- **Breadcrumb** (`breadcrumb.tsx`): navigazione gerarchica.
- **Button** (`button.tsx`): estende il button di Chakra con logiche di loading personalizzate.
- **Checkbox** e **CheckboxCard**: checkbox semplici e versioni “card” (stile card cliccabili).
- **Clipboard** (`clipboard.tsx`): pulsanti e input per copiare testi negli appunti.
- **CloseButton** (`close-button.tsx`): un IconButton con icona di chiusura.
- **ColorMode** (`color-mode.tsx`): gestisce la modalità chiaro/scuro (usa `next-themes`).
- **DataList** (`data-list.tsx`): stile tabella verticalizzata con label/valore e possibili info.
- **Dialog**, **Drawer**, **Popover**, **HoverCard**: contengono overlay e contenuti modali.
- **EmptyState** (`empty-state.tsx`): stato “vuoto” con titolo, descrizione, icona.
- **Field** (`field.tsx`): composizione generica label+input+error.
- **FileUpload** (`file-button.tsx`): input file e dropzone personalizzati.
- **InputGroup** (`input-group.tsx`): raggruppa input con icone o elementi a sinistra/destra.
- **LinkButton** (`link-button.tsx`): link con stile da “bottone” Chakra.
- **Menu** (`menu.tsx`): menù personalizzati, con radio, checkbox, sub-item.
- **NativeSelect** (`native-select.tsx`): select HTML nativo (uso limitato).
- **NumberInput** (`number-input.tsx`): input numerico con controlli + e -.
- **Pagination** (`pagination.tsx`): compone la paginazione con stili e item personalizzati.
- **PasswordInput** (`password-input.tsx`): input password con toggle di visibilità.
- **PinInput** (`pin-input.tsx`): input a caselle (es. OTP).
- **Progress** e **ProgressCircle**: barre e cerchi di progresso.
- **Prose** (`prose.tsx`): per formattare testo con stili tipografici di base.
- **Radio** e **RadioCard**: radio e card con indicator.
- **Rating** (`rating.tsx`): stelline (o icone) da 1 a n.
- **SegmentedControl** (`segmented-control.tsx`): segmenti cliccabili (switch).
- **Select** (`select.tsx`): select con opzioni e indicatori chiari, personalizzabile.
- **Skeleton**: placeholder di caricamento.
- **Slider** (`slider.tsx`): slider con possibili “marks”.
- **Stat** e **Status**: per visualizzare statistiche, trend e stati.
- **StepperInput**: number input con pulsanti + e - esterni.
- **Steps** (`steps.tsx`): wizard a step orizzontali.
- **Switch** (`switch.tsx`): interruttore on/off con label personalizzate.
- **Tag** (`tag.tsx`): piccola etichetta con elemento di chiusura.
- **Timeline** (`timeline.tsx`): sequenza di eventi.
- **Toaster** (`toaster.tsx`): wrapper per toast, creati con `createToaster`.
- **Toggle** (`toggle.tsx`): togglare uno stato con stili personalizzati.
- **Tooltip** (`tooltip.tsx`): per mostrare suggerimenti al passaggio del mouse.

La maggior parte di questi componenti **espone** gli stessi props di Chakra UI, aggiungendo qualche personalizzazione. Ricordati di consultare **Storybook** per esempi.

---

## DynamicForm

All’interno di `components/Factory/DynamicForm/`, trovi un costruttore di form basato su:
- [**Zod**](https://zod.dev/) per la validazione
- `react-hook-form` per la gestione dello stato
- Metadati personalizzabili (tramite `withMeta`) per definire step, label, row, ecc.

Puoi costruire form a step con:
```tsx
const schema = z.object({
  field1: withMeta(z.string().min(2), { label: 'Campo 1', step: 0 }),
  field2: withMeta(z.string(), { label: 'Campo 2', step: 1 }),
}).superRefine(() => {})

// Uso
<DynamicForm
  schema={schema}
  onNext={(step, complete) => {}}
  onBack={(step, complete) => {}}
  render={(rows, onSubmit, next, back) => (
    <>
      {rows}
      <button onClick={() => next?.()}>Avanti</button>
    </>
  )}
/>
```

---

## LiquidSearchForm

In `components/LiquidSearchForm` trovi un form “veloce” per ricerche e filtri, anch’esso basato su Zod. È un wrapper di `DynamicForm` con un aspetto più stilizzato per la ricerca o filtri prodotti, ecc.

---

## LiquidTable

In `components/LiquidTable` trovi una tabella reattiva basata su Chakra e con funzioni di:
- Selezione multipla (tramite `ActionBar`)
- Paginazione (personalizzata)
- **Parsing** automatico delle chiavi di un array di oggetti (`parseItems`)
- Colonne nascoste e visualizzazione condizionale

Si utilizza con:

```tsx
import LiquidTable from 'tua-libreria/components/LiquidTable'

<LiquidTable
  items={[
    { id: "1", name: "Mario", age: 25 },
    { id: "2", name: "Luigi", age: 30 },
  ]}
  hiddenFields={["age"]}
  pagination={{ offset: 1, size: 10, totalOccurrences: 2, totalPages: 1 }}
/>
```

---

## Altri componenti principali

- **LoginForm**: un form semplice per autenticarsi (usa `DynamicForm`).
- **RegisterForm**: form a step per la registrazione, con validazioni (email uguali, password uguali, date).
- **SectionCard** e **SectionCardRow**: card con intestazione, subheader ed eventuale contenuto “vuoto”.
- **StyledMarkdown**: wrapper di `react-markdown` con plugin `remark-gfm` e `rehype-highlight`, utile per renderizzare testo markdown con highlight.

Per tutti i componenti, troverai le **Storie** (`.stories.tsx`) in cui puoi visualizzare esempi pratici di utilizzo.