import { FC, useEffect } from "react";
import styled from 'styled-components';

import { usePageContext, useHooks } from "./shared/hooks";
import Header from "./components/Header";
import Body from "./components/Body";
import { ComponentProps } from "./transformer.types";

// Container principale che segue lo stile Ant Design moderno 2025
const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors?.background || '#f0f2f5'};
  color: ${props => props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)'};
  font-family: ${props => props.theme.typography?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'};
  transition: all 0.3s ease-in-out;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors?.backgroundDark || '#141414'};
    color: ${props => props.theme.colors?.textPrimaryDark || 'rgba(255, 255, 255, 0.85)'};
  }
`;

// Background sfocato con stile Ant Design moderno
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
  background-position: center;
  background-size: cover;
  filter: ${props => props.opacity ? `blur(${props.opacity}px)` : undefined};
  background-color: ${props => props.theme.colors?.background || '#f0f2f5'};
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  opacity: 0.8;
  transition: all 0.5s ease;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors?.backgroundDark || '#141414'};
    background-image: ${props => props.imageDark ? `url(${props.imageDark})` : 'none'};
  }
`;

// Cerchio dietro il mouse, con animazione fluida per stile moderno
const MouseCircle = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, ${props => `${props.theme.colors?.primary || '#1890ff'}40`} 0%, transparent 70%);
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate(-50%, -50%) scale(1);
  
  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
  
  @media (prefers-color-scheme: dark) {
    background: radial-gradient(circle, ${props => `${props.theme.colors?.primary || '#1890ff'}30`} 0%, transparent 70%);
  }
`;

// Container del contenuto con stile Ant Design moderno, arrotondato
const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  border-radius: ${props => props.theme.borderRadius?.lg || '8px'};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows?.sm || '0 2px 8px rgba(0, 0, 0, 0.15)'};
`;

// Footer container stile Ant Design moderno
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 50px;
  color: ${props => props.theme.colors?.textSecondary || 'rgba(0, 0, 0, 0.65)'};
  background-color: ${props => props.theme.colors?.background || '#f0f2f5'};
  border-top: 1px solid ${props => props.theme.colors?.border || '#f0f0f0'};
  border-radius: 0 0 ${props => props.theme.borderRadius?.lg || '8px'} ${props => props.theme.borderRadius?.lg || '8px'};
  transition: all 0.3s ease;
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors?.backgroundDark || '#1f1f1f'};
    border-top: 1px solid ${props => props.theme.colors?.borderDark || '#303030'};
    color: ${props => props.theme.colors?.textSecondaryDark || 'rgba(255, 255, 255, 0.65)'};
  }
`;

/**
 * Componente Transformer
 * Layout principale dell'applicazione che fornisce struttura e navigazione
 * Styled according to Ant Design 2025 principles with modern, rounded aesthetics
 */
const Transformer: FC<ComponentProps> = () => {
    const { props, footer } = usePageContext();
    const { background, navigationScroll } = props;
    const { isMobileRef, circleRef } = useHooks(navigationScroll);

    // Effect per applicare un'entrata fluida
    useEffect(() => {
        const main = document.querySelector('.transformer-main') as HTMLElement;
        if (main) {
            main.style.opacity = '0';
            main.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                main.style.opacity = '1';
                main.style.transform = 'translateY(0)';
            }, 100);
        }
    }, []);

    return (
        <MainContainer className="transformer-main" style={{ opacity: 0, transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
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
