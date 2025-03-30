import { FC } from "react";
import styled from 'styled-components';
import { BiErrorCircle } from "react-icons/bi";
import EmptyState from "../../components/feedback/EmptyState";
import Button from "../../components/buttons/Button";

// Componente per l'icona di errore con stile moderno
const ErrorIcon: FC = () => (
  <BiErrorCircle size={40} />
);

// Container per centrare il contenuto nella pagina con stile Ant Design
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

// Bottone retry con stile Ant Design
const RetryButton = styled(Button)`
  margin-top: ${props => props.theme.spacing.md};
  min-width: 120px;
`;

/**
 * Componente Error Page
 * Visualizza una pagina di errore a schermo intero con un messaggio centrato
 * Styled according to Ant Design principles with modern, rounded aesthetics
 */
const Error: FC = () => (
  <FullPageContainer>
    <EmptyState
      icon={<ErrorIcon />}
      title="Something went wrong"
      description="We encountered an error while processing your request. Please try again or contact support if the issue persists."
      verticalCenter
    >
      <RetryButton 
        variant="primary" 
        size="medium"
        onClick={() => window.location.reload()}
      >
        Try Again
      </RetryButton>
    </EmptyState>
  </FullPageContainer>
);

export default Error;
