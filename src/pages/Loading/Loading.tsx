import { FC } from "react";
import styled from 'styled-components';
import { TbLoader3 } from "react-icons/tb";
import EmptyState from "@/components/feedback/EmptyState";
import Spinner from "@/components/feedback/Spinner";

// Componente per l'icona di caricamento
const LoaderIcon: FC = () => (
  <TbLoader3 size={24} />
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

// Container per lo spinner centrato
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;

/**
 * Componente Loading Page
 * Visualizza una pagina di caricamento a schermo intero con un messaggio centrato e uno spinner
 */
const Loading: FC = () => (
  <FullPageContainer>
    <EmptyState
      icon={<LoaderIcon />}
      title="Fetching..."
      description="Wait please!"
      verticalCenter
    >
      <SpinnerContainer>
        <Spinner 
          type="border" 
          size="large" 
          color="primary"
        />
      </SpinnerContainer>
    </EmptyState>
  </FullPageContainer>
);

export default Loading;
