import { ReactElement } from "react";
import { NavigateFunction } from "react-router-dom";
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
    location?: Location;
    navigate?: NavigateFunction;
};
export interface HocProps extends ComponentProps {
    location?: Location;
    navigate?: NavigateFunction;
}
export type ContextType = {
    setBackground: React.Dispatch<React.SetStateAction<Background | undefined>>;
    props: ComponentProps;
};
