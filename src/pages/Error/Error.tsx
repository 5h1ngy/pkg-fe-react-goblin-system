import { FC } from "react";
import styled from 'styled-components';
import { BiError } from "react-icons/bi";
import EmptyState from "@/components/feedback/EmptyState";

// Componente per l'icona di errore
const ErrorIcon: FC = () => (
  <BiError size={24} />
);

// Container per centrare il contenuto nella pagina
const FullPageContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

/**
 * Componente Error Page
 * Visualizza una pagina di errore a schermo intero con un messaggio centrato
 */
const Error: FC = () => (
  <FullPageContainer>
    <EmptyState
      icon={<ErrorIcon />}
      title="ERROR"
      description="An error occurred while running the application"
      verticalCenter
    />
  </FullPageContainer>
);

export default Error;
