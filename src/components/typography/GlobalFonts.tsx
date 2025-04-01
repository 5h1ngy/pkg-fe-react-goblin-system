/**
 * GlobalFonts component 
 * Applies modern typography styling following Ant Design 2025 standards
 * Uses Inter Variable as the primary font and JetBrains Mono for code
 * 
 * @module typography/GlobalFonts
 */

import { createGlobalStyle } from 'styled-components';
import '../../assets/fonts/fonts.css';

/**
 * Global style component that applies typography settings throughout the application
 * Integrates with styled-components to ensure theme consistency
 */
const GlobalFonts = createGlobalStyle`
  body {
    font-family: ${props => props.theme.typography?.fontFamily || "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"};
    font-size: ${props => props.theme.typography?.fontSize?.md || '16px'};
    line-height: ${props => props.theme.typography?.lineHeight?.md || 1.6};
    color: ${props => props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)'};
    background-color: ${props => props.theme.colors?.background || '#f0f2f5'};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }

  /* Modern heading styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography?.fontFamily || "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"};
    margin-top: 0;
    margin-bottom: ${props => props.theme.spacing?.md || '16px'};
    font-weight: ${props => props.theme.typography?.fontWeight?.semibold || 600};
    line-height: 1.4;
    color: ${props => props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)'};
    letter-spacing: -0.015em;
    font-feature-settings: 'cv11', 'salt', 'ss01';
  }

  h1 {
    font-size: ${props => props.theme.typography?.fontSize?.xxl || '24px'};
    font-weight: ${props => props.theme.typography?.fontWeight?.bold || 700};
  }

  h2 {
    font-size: ${props => props.theme.typography?.fontSize?.xl || '20px'};
    font-weight: ${props => props.theme.typography?.fontWeight?.bold || 700};
  }

  h3 {
    font-size: ${props => props.theme.typography?.fontSize?.lg || '18px'};
    font-weight: ${props => props.theme.typography?.fontWeight?.semibold || 600};
  }

  h4 {
    font-size: ${props => props.theme.typography?.fontSize?.md || '16px'};
    font-weight: ${props => props.theme.typography?.fontWeight?.semibold || 600};
  }

  h5 {
    font-size: ${props => props.theme.typography?.fontSize?.sm || '14px'};
    font-weight: ${props => props.theme.typography?.fontWeight?.semibold || 600};
  }

  h6 {
    font-size: ${props => props.theme.typography?.fontSize?.xs || '12px'};
    font-weight: ${props => props.theme.typography?.fontWeight?.semibold || 600};
  }

  /* Code and monospace content */
  code, pre, kbd, samp {
    font-family: ${props => props.theme.typography?.fontFamilyMono || "'JetBrains Mono', 'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, 'Cascadia Mono', monospace"};
    font-size: 90%;
    font-feature-settings: 'liga' 0;
  }

  /* Links */
  a {
    color: ${props => props.theme.colors?.primary || '#1890ff'};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors?.primary ? `${props.theme.colors.primary}dd` : '#40a9ff'};
      text-decoration: underline;
    }
  }

  /* Smooth text transitions for theme changes */
  * {
    transition: color 0.2s ease, background-color 0.2s ease;
  }
`;

export default GlobalFonts;
