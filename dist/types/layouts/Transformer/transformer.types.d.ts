import { ReactElement } from "react";
/**
 * Interfaccia per un elemento della barra di navigazione principale.
 */
export type NavbarItem = {
    icon: ReactElement | string;
    label: string;
    value: string;
    group?: string;
};
/**
 * Interfaccia per un elemento secondario della barra di navigazione (submenu).
 */
export type NavbarSubItem = {
    icon: ReactElement | string;
    label: string;
    value: string;
    group?: string[];
};
export type Background = {
    opacity?: number;
    image?: string;
    imageDark?: string;
};
/**
 * Interfaccia per le proprietà del componente principale.
 */
export type ComponentProps = {
    children?: ReactElement;
    navigationScroll?: boolean;
    navbarItems?: Array<NavbarItem>;
    navbarSubItems?: Array<NavbarSubItem>;
    logo?: string;
    background?: Background;
};
export type ContextType = {
    setBackground: React.Dispatch<React.SetStateAction<Background | undefined>>;
    props: ComponentProps;
};
