import { FC } from "react";
import { Flex, Icon } from "@chakra-ui/react"; // Flex e Icon sono componenti Chakra UI
import { EmptyState } from "@/components/Factory/Chakra/empty-state"; // Componente personalizzato per stati vuoti o errori
import { BiError } from "react-icons/bi"; // Icona di errore dalla libreria react-icons

/**
 * ErrorPage Component
 * ----------------------------------------------------------------------------
 * Questo componente rappresenta una pagina di errore generica.
 * Viene utilizzato per informare l'utente che si è verificato
 * un errore durante l'esecuzione dell'applicazione.
 * 
 * Caratteristiche principali:
 * - L'interfaccia è centrata verticalmente e orizzontalmente.
 * - Viene visualizzata un'icona di errore, un titolo e una descrizione
 *   per comunicare il problema in modo chiaro.
 * 
 * Tecnologie utilizzate:
 * - Chakra UI: Gestisce il layout (Flex) e le icone (Icon).
 * - React Icons: Fornisce l'icona di errore (BiError).
 * - Componente personalizzato (EmptyState): Struttura il messaggio di errore.
 */
const Component: FC = () => {
    return (
        /**
         * Flex Container
         * ----------------------------------------------------------------------------
         * - Layout flessibile utilizzato per centrare verticalmente e orizzontalmente
         *   il contenuto.
         * - `flexDirection="column"`: Posiziona gli elementi (icona, titolo, descrizione)
         *   uno sotto l'altro.
         * - `justifyContent="center"`: Centra il contenuto verticalmente.
         * - `width="100%"`: Larghezza completa della viewport.
         * - `height="100vh"`: Altezza completa della viewport.
         */
        <Flex
            position={"fixed"}
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100vh"
        >
            {/**
             * EmptyState Component
             * ----------------------------------------------------------------------------
             * - Componente personalizzato per stati vuoti o messaggi di errore.
             * - Mostra un'icona, un titolo e una descrizione per comunicare lo stato.
             * 
             * Proprietà utilizzate:
             * - `icon`: L'icona da mostrare, in questo caso BiError, fornita da react-icons.
             * - `title`: Titolo del messaggio di errore.
             * - `description`: Testo descrittivo che spiega la natura dell'errore.
             */}
            <EmptyState
                icon={<Icon as={BiError} boxSize={6} />}
                title="ERROR" // Titolo del messaggio di errore
                description="An error occurred while running the application" // Spiegazione del problema
            />
        </Flex>
    );
};

export default Component;