import { FC } from "react";
import styled from 'styled-components';

import { usePageContext, useHooks } from "./shared/hooks";
import Header from "./components/Header";
import Body from "./components/Body";
import { ComponentProps } from "./transformer.types";

// Container principale che segue lo stile Ant Design
const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f0f2f5;
  color: rgba(0, 0, 0, 0.85);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    color: rgba(255, 255, 255, 0.85);
  }
`;

// Background sfocato con stile Ant Design
const BackgroundLayer = styled.div<{ 
  opacity?: number; 
  image?: string; 
  imageDark?: string;
}>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
  filter: ${props => props.opacity ? `blur(${props.opacity}px)` : undefined};
  background-color: #f0f2f5;
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  opacity: 0.8;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    background-image: ${props => props.imageDark ? `url(${props.imageDark})` : 'none'};
  }
`;

// Cerchio dietro il mouse, più sottile per seguire lo stile minimale di Ant Design
const MouseCircle = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(24, 144, 255, 0.3) 0%, transparent 70%);
  
  @media (prefers-color-scheme: dark) {
    background: radial-gradient(circle, rgba(24, 144, 255, 0.2) 0%, transparent 70%);
  }
`;

// Container del contenuto con stile Ant Design
const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

// Footer container stile Ant Design
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #f0f2f5;
  border-top: 1px solid #f0f0f0;
  
  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    border-top: 1px solid #303030;
    color: rgba(255, 255, 255, 0.65);
  }
`;

/**
 * Componente Transformer
 * Layout principale dell'applicazione che fornisce struttura e navigazione
 */
const Transformer: FC<ComponentProps> = () => {
    const { props, footer } = usePageContext();
    const { background, navigationScroll } = props;
    const { isMobileRef, circleRef } = useHooks(navigationScroll);

    return (
        <MainContainer>
            {/* Sfondo sfocato */}
            {background && (
                <BackgroundLayer
                    opacity={background.opacity}
                    image={background.image}
                    imageDark={background.imageDark}
                />
            )}

            {/* Cerchio dietro il mouse */}
            {!isMobileRef && <MouseCircle ref={circleRef} />}

            {/* Contenuto */}
            <ContentContainer>
                <Header />
                <Body />

                {footer && <FooterContainer>{footer}</FooterContainer>}
            </ContentContainer>
        </MainContainer>
    );
};

export default Transformer;
