/**
 * Text component
 * A flexible text component with various style options
 * 
 * @module Text
 */
import styled, { css } from 'styled-components';

export interface TextProps {
  /** Text variant size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Custom font size (overrides size) */
  fontSize?: string;
  /** Font weight */
  weight?: 'light' | 'regular' | 'medium' | 'bold';
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
 * 
 * Features:
 * - Multiple size variants
 * - Font weight control
 * - Text alignment
 * - Color customization
 * - Text transformation
 * - Multi-line truncation with ellipsis
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

  /* Font size based on variant or custom font size */
  font-size: ${props => props.fontSize || (
    props.size && {
      xs: props.theme.typography.fontSize.xs,
      sm: props.theme.typography.fontSize.sm,
      md: props.theme.typography.fontSize.md,
      lg: props.theme.typography.fontSize.lg,
      xl: props.theme.typography.fontSize.xl,
      xxl: props.theme.typography.fontSize.xxl,
    }[props.size]
  )};

  /* Font weight */
  font-weight: ${props => {
    switch (props.weight) {
      case 'light': return props.theme.typography.fontWeight.light;
      case 'medium': return props.theme.typography.fontWeight.medium;
      case 'bold': return props.theme.typography.fontWeight.bold;
      case 'regular':
      default: return props.theme.typography.fontWeight.regular;
    }
  }};
  
  /* Color */
  color: ${props => {
    if (!props.color) return props.theme.colors.textPrimary;
    
    // Check if using a theme color or custom
    if (props.color.startsWith('#') || props.color.startsWith('rgb')) {
      return props.color;
    }
    
    // Using theme color name
    return props.theme.colors[props.color as keyof typeof props.theme.colors] || props.theme.colors.textPrimary;
  }};
  
  /* Text alignment */
  text-align: ${props => props.align || 'left'};
  
  /* Text transformation */
  text-transform: ${props => props.transform || 'none'};
  
  /* Text decoration */
  text-decoration: ${props => props.decoration || 'none'};
  
  /* Italic style */
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  
  /* Line height */
  line-height: ${props => {
    if (props.lineHeight) return props.lineHeight;
    
    switch (props.size) {
      case 'xs': return props.theme.typography.lineHeight.xs;
      case 'sm': return props.theme.typography.lineHeight.sm;
      case 'lg': return props.theme.typography.lineHeight.lg;
      case 'xl': return props.theme.typography.lineHeight.xl;
      case 'xxl': return props.theme.typography.lineHeight.xxl;
      case 'md':
      default: return props.theme.typography.lineHeight.md;
    }
  }};
  
  /* Letter spacing */
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  
  /* Truncation */
  ${props => props.truncate && getTruncateStyles(props.truncate)}
`;

export default Text;
