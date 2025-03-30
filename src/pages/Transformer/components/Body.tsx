import React, { FC, useRef, useEffect, ReactNode } from "react";
import styled from 'styled-components';
import gsap from "gsap";

import { usePageContext } from "../shared/hooks";

// Container styled in stile Ant Design
const BodyContainer = styled.div`
  position: relative;
  z-index: 3;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 64px; /* Altezza dell'header */
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (min-width: 992px) {
    padding: 24px 50px;
  }
  
  @media (min-width: 1200px) {
    padding: 24px 10%;
  }
`;

// Contenitore del contenuto principale in stile Ant Design
const ContentContainer = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  padding: 24px;
  margin-bottom: 24px;
  width: 100%;
  flex: 1;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.32), 0 3px 6px 0 rgba(0, 0, 0, 0.24), 0 5px 12px 4px rgba(0, 0, 0, 0.18);
  }
`;

// Card in stile Ant Design
const Card = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  padding: 24px;
  margin-bottom: 24px;
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.14), 0 9px 28px 8px rgba(0, 0, 0, 0.12);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.32), 0 3px 6px 0 rgba(0, 0, 0, 0.24), 0 5px 12px 4px rgba(0, 0, 0, 0.18);
    
    &:hover {
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.36), 0 6px 16px 0 rgba(0, 0, 0, 0.28), 0 9px 28px 8px rgba(0, 0, 0, 0.24);
    }
  }
`;

// Grid layout in stile Ant Design
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
`;

/**
 * CardItem component
 * Card with content in Ant Design style
 */
const CardItem: FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <Card>
      {title && <h3 style={{ marginTop: 0, marginBottom: 16 }}>{title}</h3>}
      {children}
    </Card>
  );
};

/**
 * Componente Body
 * Contenitore principale che mostra il contenuto dell'applicazione in stile Ant Design
 */
const Body: FC = () => {
    const { props } = usePageContext();
    const { children } = props;

    // 1. Creiamo un ref per il container
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 2. Avviamo l'animazione GSAP al montaggio
        if (containerRef.current && contentRef.current) {
            // Animazione del container
            gsap.fromTo(
                containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: "power2.out" }
            );
            
            // Animazione del contenuto principale
            gsap.fromTo(
                contentRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power3.out" }
            );
        }
    }, []);

    // Se children è un componente React, visualizzalo direttamente
    if (children && React.isValidElement(children)) {
        return (
            <BodyContainer ref={containerRef}>
                <ContentContainer ref={contentRef}>
                    {children}
                </ContentContainer>
            </BodyContainer>
        );
    }

    // Altrimenti, incapsula il contenuto in una Card se necessario
    return (
        <BodyContainer ref={containerRef}>
            <ContentContainer ref={contentRef}>
                {children ? (
                    <CardItem>
                        {children}
                    </CardItem>
                ) : (
                    <Grid>
                        <CardItem title="Benvenuto">
                            Contenuto di esempio in stile Ant Design
                        </CardItem>
                        <CardItem title="Informazioni">
                            Questo è un esempio di layout con card in stile Ant Design
                        </CardItem>
                        <CardItem title="Funzionalità">
                            Usa questo layout per organizzare i tuoi contenuti
                        </CardItem>
                    </Grid>
                )}
            </ContentContainer>
        </BodyContainer>
    );
};

export default Body;
