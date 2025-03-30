import { FC } from "react";
import styled from 'styled-components';
import { TbLoader3 } from "react-icons/tb";
import EmptyState from "../../components/feedback/EmptyState";
import Spinner from "../../components/feedback/Spinner";

// Componente per l'icona di caricamento con animazione
const LoaderIcon: FC = () => (
  <TbLoader3 size={32} />
);

// Container per centrare il contenuto nella pagina
const FullPageContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  z-index: 1000;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
`;

// Container per lo spinner centrato con animazione
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

/**
 * Componente Loading Page
 * Visualizza una pagina di caricamento a schermo intero con un messaggio centrato e uno spinner
 * Styled according to Ant Design principles with modern, rounded aesthetics
 */
const Loading: FC = () => (
  <FullPageContainer>
    <EmptyState
      icon={<LoaderIcon />}
      title="Loading Content"
      description="Please wait while we prepare your data..."
      verticalCenter
    >
      <SpinnerContainer>
        <Spinner 
          type="dots" 
          size="large" 
          color="primary"
          mb="1rem"
        />
      </SpinnerContainer>
    </EmptyState>
  </FullPageContainer>
);

export default Loading;
