import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { NavbarItem, NavbarSubItem } from "../transformer.types";

gsap.registerPlugin(ScrollToPlugin);

export function scrollToSection(id: string): void {
    const section = document.getElementById(id);

    if (section) {
        gsap.to(window, {
            scrollTo: {
                y: section.offsetTop - 50,
                autoKill: false,
            },
            duration: 1,
            ease: "power1.inOut",
        });
    } else {
        console.warn(`Elemento con ID '${id}' non trovato.`);
    }
}

export function findMatchingNavbarValue(location: string, items?: NavbarItem[], subItems?: NavbarSubItem[],): string | null {
    if (!items || !subItems) {
        return null;
    }

    const matchedNavbarItem = items.find(navItem =>
        location.startsWith(navItem.value)
    );

    if (!matchedNavbarItem || !matchedNavbarItem.group) {
        return null;
    }

    const matchedSubItem = subItems.find(
        subItem =>
            subItem.group!.includes(matchedNavbarItem.group!) &&
            location.startsWith(subItem.value)
    );

    return matchedSubItem ? matchedSubItem.value : null;
}
