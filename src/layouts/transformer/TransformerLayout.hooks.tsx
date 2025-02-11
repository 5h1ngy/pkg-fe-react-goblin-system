import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router";
import gsap from "gsap";

import { scrollToSection } from "./TransformerLayout.utils";

/**
 * Hook personalizzato `useMediaQuery`.
 * 
 * Permette di rilevare se una media query specificata corrisponde allo stato corrente della finestra.
 * 
 * @param {string} query - La stringa della media query da monitorare (es. '(max-width: 768px)').
 * @returns {boolean} - Restituisce `true` se la media query corrisponde, altrimenti `false`.
 */
export default function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false); // Stato che indica se la media query è soddisfatta.

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query); // Crea un oggetto `MediaQueryList` per monitorare la media query.

        // Imposta il valore iniziale dello stato in base alla media query corrente.
        setMatches(mediaQueryList.matches);

        /**
         * Listener per aggiornare lo stato quando la media query cambia.
         * 
         * @param {MediaQueryListEvent} event - Evento scatenato dal cambiamento della media query.
         */
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches); // Aggiorna lo stato con il nuovo valore della media query.
        };

        // Aggiunge il listener per monitorare i cambiamenti della media query.
        mediaQueryList.addEventListener('change', listener);

        // Cleanup: Rimuove il listener quando il componente viene smontato o il `query` cambia.
        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, [query]); // Effettua il side effect solo quando `query` cambia.

    return matches; // Restituisce lo stato attuale della media query.
}

export function useMouse() {
    const location = useLocation();
    const navigate = useNavigate();
    const circleRef = useRef<HTMLDivElement>(null);
    const isMobileRef = useMediaQuery('(max-width: 519px)');

    function handleMouseMove(event: MouseEvent) {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                x: event.clientX - 50, y: event.clientY - 50,
                duration: 0.1, ease: "power1.out",
            });
        }
    };

    function handleNavigationAndScroll(path: string, navigationScroll?: boolean) {
        if (navigationScroll) {
            navigate(path.replace('/', '').split('/').pop() || "");
            scrollToSection(path.replace('/', '').split('/').pop() || "");
        } else {
            navigate(path, { replace: true  })
        }
    }

    useEffect(() => {
        setTimeout(() => {
            scrollToSection(location.pathname.split('/').pop() || "");
        }, 500);
    }, []);

    useEffect(() => {
        if (isMobileRef) return;
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [isMobileRef]);

    return { handleNavigationAndScroll, isMobileRef, circleRef }
}