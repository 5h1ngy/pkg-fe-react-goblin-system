import { ReactElement, ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

/**
 * Interfaccia per un elemento della barra di navigazione principale.
 */
export type NavbarItem = {
    icon?: ReactElement | string;
    label: string; // Etichetta visibile dell'elemento di navigazione.
    value: string; // Valore o URL associato all'elemento.
    group?: string;
    onClick?: () => void; // Funzione callback da eseguire al click
    children?: NavbarItem[]; // Sottomenu (per dropdown in stile Ant Design)
}

/**
 * Interfaccia per un elemento secondario della barra di navigazione (submenu).
 */
export type NavbarSubItem = {
    icon?: ReactElement | string; // Icona associata all'elemento secondario, può essere un ReactElement o una stringa (es. URL).
    label: string; // Etichetta visibile dell'elemento secondario.
    value: string; // Valore o URL associato all'elemento secondario.
    group?: string[];
}

export type Background = {
    opacity?: number;
    image?: string;
    imageDark?: string;
}

/**
 * Interfaccia per le proprietà del componente principale.
 */
export type ComponentProps = {
    children?: ReactElement; // Contenuto opzionale da renderizzare all'interno del componente.
    navigationScroll?: boolean;
    navbarItems?: Array<NavbarItem>; // Elenco degli elementi principali della barra di navigazione.
    navbarSubItems?: Array<NavbarSubItem>;
    logo?: string; // URL del logo o null se non è presente.
    background?: Background;
    location?: Location;
    navigate?: NavigateFunction;
    branding?: {
        icon?: ReactElement;
        text?: string;
    };
}

export type ContextType = {
    footer: ReactNode;
    handleNavigationAndScroll: (path: string, navigationScroll?: boolean) => void;
    setFooter: React.Dispatch<React.SetStateAction<ReactNode | undefined>>;
    setBackground: React.Dispatch<React.SetStateAction<Background | undefined>>;
    props: ComponentProps;
}
