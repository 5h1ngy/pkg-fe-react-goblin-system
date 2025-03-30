/**
 * Text component
 * A flexible text component with various style options
 * Updated for Ant Design 2025 standards with modern typography
 * 
 * @module Text
 */
import styled, { css } from 'styled-components';

export interface TextProps {
  /** Text variant */
  variant?: 'body1' | 'body2' | 'caption' | 'overline';
  /** Text variant size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Custom font size (overrides size) */
  fontSize?: string;
  /** Font weight */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  /** Text color - can use theme colors or custom colors */
  color?: string;
  /** Align text: left, center, right, justify */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Transform text: none, uppercase, lowercase, capitalize */
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  /** Text decoration: none, underline, line-through */
  decoration?: 'none' | 'underline' | 'line-through';
  /** Make text italic */
  italic?: boolean;
  /** Truncate text with ellipsis after specified number of lines */
  truncate?: number;
  /** Line height */
  lineHeight?: number | string;
  /** Letter spacing */
  letterSpacing?: string;
  /** Add margin bottom */
  mb?: string;
  /** Add margin top */
  mt?: string;
  /** Add margin left */
  ml?: string;
  /** Add margin right */
  mr?: string;
  /** Add padding */
  p?: string;
  /** Add padding horizontal (left and right) */
  px?: string;
  /** Add padding vertical (top and bottom) */
  py?: string;
  /** Optional font feature settings */
  fontFeatureSettings?: string;
  /** Optional animation for entry */
  animated?: boolean;
  /** Font smoothing */
  smooth?: boolean;
  /** Is this a monospace text */
  mono?: boolean;
  /** Secondary opacity text */
  secondary?: boolean;
  /** Disabled text */
  disabled?: boolean;
  /** Mark text with background */
  mark?: boolean;
  /** Strike through text */
  delete?: boolean;
  /** Underline text */
  underline?: boolean;
  /** Strong/emphasized text */
  strong?: boolean;
  /** Code style text */
  code?: boolean;
  /** Keyboard style text */
  keyboard?: boolean;
}

/**
 * Generate truncation styles based on number of lines
 */
const getTruncateStyles = (lines: number) => {
  if (lines === 1) {
    return css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }
  
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
};

/**
 * Text component for displaying content with various style options
 * Updated for Ant Design 2025 with enhanced typography features
 * 
 * Features:
 * - Multiple size variants with modern font scales
 * - Font weight control including semibold
 * - Text alignment and animation
 * - Color customization with theme integration
 * - Text transformation and decoration
 * - Multi-line truncation with ellipsis
 * - Optional font feature settings for advanced typography
 * - Special text styles: code, keyboard, mark, etc.
 */
const Text = styled.p<TextProps>`
  /* Base styles */
  margin: 0;
  padding: ${props => props.p || '0'};
  padding-left: ${props => props.px || props.p || '0'};
  padding-right: ${props => props.px || props.p || '0'};
  padding-top: ${props => props.py || props.p || '0'};
  padding-bottom: ${props => props.py || props.p || '0'};
  
  /* Margin */
  margin-bottom: ${props => props.mb || '0'};
  margin-top: ${props => props.mt || '0'};
  margin-left: ${props => props.ml || '0'};
  margin-right: ${props => props.mr || '0'};

  /* Font family */
  font-family: ${props => {
    if (props.mono || props.code || props.keyboard) {
      return props.theme.typography?.fontFamilyMono || "'JetBrains Mono', 'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, 'Cascadia Mono', monospace";
    }
    return props.theme.typography?.fontFamily || "'Inter Variable', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif";
  }};

  /* Font size based on variant or custom font size */
  font-size: ${props => props.fontSize || (
    props.size && {
      xs: props.theme.typography?.fontSize?.xs || '12px',
      sm: props.theme.typography?.fontSize?.sm || '14px',
      md: props.theme.typography?.fontSize?.md || '16px',
      lg: props.theme.typography?.fontSize?.lg || '18px',
      xl: props.theme.typography?.fontSize?.xl || '20px',
      xxl: props.theme.typography?.fontSize?.xxl || '24px',
    }[props.size] || props.theme.typography?.fontSize?.md || '16px'
  )};
  
  /* Line height */
  line-height: ${props => {
    if (props.lineHeight) return props.lineHeight;
    if (props.size) {
      return {
        xs: props.theme.typography?.lineHeight?.xs || 1.4,
        sm: props.theme.typography?.lineHeight?.sm || 1.5,
        md: props.theme.typography?.lineHeight?.md || 1.6,
        lg: props.theme.typography?.lineHeight?.lg || 1.7,
        xl: props.theme.typography?.lineHeight?.xl || 1.8,
        xxl: props.theme.typography?.lineHeight?.xxl || 1.8
      }[props.size] || props.theme.typography?.lineHeight?.md || 1.6
    }
    return props.theme.typography?.lineHeight?.md || 1.6;
  }};
  
  /* Font weight */
  font-weight: ${props => {
    if (props.strong) return props.theme.typography?.fontWeight?.bold || 700;
    
    switch (props.weight) {
      case 'light': return props.theme.typography?.fontWeight?.light || 300;
      case 'regular': return props.theme.typography?.fontWeight?.regular || 400;
      case 'medium': return props.theme.typography?.fontWeight?.medium || 500;
      case 'semibold': return props.theme.typography?.fontWeight?.semibold || 600;
      case 'bold': return props.theme.typography?.fontWeight?.bold || 700;
      default: return props.theme.typography?.fontWeight?.regular || 400;
    }
  }};
  
  /* Font style */
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  
  /* Text decoration */
  text-decoration: ${props => {
    if (props.underline) return 'underline';
    if (props.delete) return 'line-through';
    return props.decoration || 'none';
  }};
  
  /* Text color */
  color: ${props => {
    if (props.disabled) return props.theme.colors?.textDisabled || 'rgba(0, 0, 0, 0.25)';
    if (props.secondary) return props.theme.colors?.textSecondary || 'rgba(0, 0, 0, 0.65)';
    
    if (!props.color) return props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)';
    
    // Check if using a theme color or custom
    if (props.color.startsWith('#') || props.color.startsWith('rgb')) {
      return props.color;
    }
    
    // Using theme color name
    return props.theme.colors?.[props.color] || props.color;
  }};
  
  /* Text alignment */
  text-align: ${props => props.align || 'inherit'};
  
  /* Text transformation */
  text-transform: ${props => props.transform || 'none'};
  
  /* Text truncation */
  ${props => props.truncate && getTruncateStyles(props.truncate)};
  
  /* Letter spacing */
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  
  /* Font feature settings */
  font-feature-settings: ${props => props.fontFeatureSettings || 'normal'};
  
  /* Font smoothing */
  ${props => props.smooth && css`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `}
  
  /* Special styles */
  ${props => props.mark && css`
    background-color: #ffe58f;
    padding: 0 2px;
  `}
  
  ${props => props.code && css`
    padding: 2px 4px;
    background-color: ${props.theme.colors?.bgContainer || '#f5f5f5'};
    border-radius: ${props.theme.radii?.xs || '2px'};
    border: 1px solid ${props.theme.colors?.borderLight || '#e8e8e8'};
    font-size: 90%;
  `}
  
  ${props => props.keyboard && css`
    padding: 2px 4px;
    background-color: ${props.theme.colors?.bgContainer || '#f5f5f5'};
    border-radius: ${props.theme.radii?.xs || '2px'};
    border: 1px solid ${props.theme.colors?.borderBase || '#d9d9d9'};
    box-shadow: 0 1px 0 ${props.theme.colors?.borderBase || '#d9d9d9'};
    font-size: 90%;
  `}
  
  /* Animation for entry (optional) */
  ${props => props.animated && css`
    animation: fadeIn 0.3s ease-in-out;
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}
`;

export default Text;
