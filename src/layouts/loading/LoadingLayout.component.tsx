import { FC } from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { EmptyState } from "@/components/Factory/Chakra/empty-state";
import { ProgressBar, ProgressRoot } from "@/components/Factory/Chakra/progress";
import { TbLoader3 } from "react-icons/tb";

/**
 * LoaderComponent
 * ----------------------------------------------------------------------------
 * Visualizza uno stato "vuoto" (EmptyState) con un'icona
 * di caricamento (TbLoader3) e una progress bar animata.
 * - Utilizza i componenti di Chakra UI e quelli custom
 *   (EmptyState, ProgressBar, ProgressRoot).
 * - Occupa l'intera viewport e centra il contenuto.
 */
const Component: FC = () => {
    return (
        <Flex
            position={"fixed"}
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100vh"
        >
            {/* EmptyState è un componente personalizzato 
          che presenta un'icona, un titolo e una descrizione. */}
            <EmptyState
                icon={<Icon as={TbLoader3} boxSize={6} />}
                title="Fetching..."
                description="Wait please!" // Messaggio descrittivo
            >
                {/* ProgressRoot è un wrapper che definisce il 
            contenitore della barra di caricamento. */}
                <ProgressRoot width="25vw" value={null}>
                    {/* ProgressBar rappresenta la parte 'riempita' 
              della barra di progresso (animata se value=null). */}
                    <ProgressBar />
                </ProgressRoot>
            </EmptyState>
        </Flex>
    );
};

export default Component;
