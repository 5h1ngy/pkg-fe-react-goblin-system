import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

/**
 * `Image` è un componente avanzato per la visualizzazione di immagini con funzionalità
 * come object-fit, fallback, bordi arrotondati e caricamento lazy.
 * Riprogettato seguendo le linee guida di Ant Design.
 */
const meta: Meta<typeof Image> = {
  title: 'Components/Graphics/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente immagine avanzato con stile Ant Design che supporta varie modalità di adattamento e funzionalità aggiuntive.'
      },
    }
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'URL dell\'immagine',
      type: { name: 'string', required: true }
    },
    alt: {
      control: 'text',
      description: 'Testo alternativo per l\'immagine',
      type: { name: 'string', required: true }
    },
    fit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'Proprietà object-fit per controllare come l\'immagine si adatta al contenitore'
    },
    borderRadius: {
      control: 'text',
      description: 'Raggio del bordo per l\'immagine in formato CSS (px, %, em, ecc.)'
    },
    fallbackSrc: {
      control: 'text',
      description: 'URL dell\'immagine di fallback se l\'immagine principale non si carica'
    },
    objectPosition: {
      control: 'text',
      description: 'Proprietà object-position per controllare la posizione dell\'immagine'
    },
    width: {
      control: 'text',
      description: 'Larghezza dell\'immagine (px, %, vw, ecc.)'
    },
    height: {
      control: 'text',
      description: 'Altezza dell\'immagine (px, %, vh, ecc.)'
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      description: 'Strategia di caricamento dell\'immagine'
    },
    nativeLazy: {
      control: 'boolean',
      description: 'Usa il caricamento lazy nativo del browser'
    },
    wrapperClassName: {
      control: 'text',
      description: 'Classe CSS da applicare al wrapper dell\'immagine'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

/**
 * Esempio di base del componente Image
 */
export const Default: Story = {
  args: {
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    alt: 'Esempio di immagine',
    width: 200,
    height: 200
  },
};

/**
 * Immagine con modalità object-fit 'contain'
 */
export const ContainMode: Story = {
  args: {
    ...Default.args,
    fit: 'contain',
    width: 200,
    height: 200,
  },
};

/**
 * Immagine con bordi arrotondati
 */
export const Rounded: Story = {
  args: {
    ...Default.args,
    borderRadius: '8px',
  },
};

/**
 * Immagine con fallback in caso di errore
 */
export const WithFallback: Story = {
  args: {
    src: 'https://not-a-valid-image-url.jpg',
    fallbackSrc: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    alt: 'Immagine con fallback',
    width: 200,
    height: 200,
  },
};

/**
 * Immagine caricata in modalità lazy
 */
export const LazyLoading: Story = {
  args: {
    ...Default.args,
    nativeLazy: true,
  },
};

/**
 * Immagine in dimensioni personalizzate
 */
export const CustomSize: Story = {
  args: {
    ...Default.args,
    width: 300,
    height: 150,
    fit: 'cover',
  },
};

/**
 * Immagine con posizionamento personalizzato
 */
export const CustomPosition: Story = {
  args: {
    ...Default.args,
    objectPosition: 'top left',
    fit: 'cover',
  },
};
