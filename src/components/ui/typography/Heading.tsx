/**
 * Heading component
 * A component for displaying headings with various levels and style options
 * 
 * @module Heading
 */
import React from 'react';
import styled, { css } from 'styled-components';

export interface HeadingProps {
  /** Heading level (h1-h6) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Font weight */
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  /** Text color - can use theme colors or custom colors */
  color?: string;
  /** Align text: left, center, right */
  align?: 'left' | 'center' | 'right';
  /** Transform text: none, uppercase, lowercase, capitalize */
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
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
  /** Truncate text with ellipsis after specified number of lines */
  truncate?: number;
  /** Line height */
  lineHeight?: number | string;
  /** Letter spacing */
  letterSpacing?: string;
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
 * Base heading styles applied to all heading levels
 */
const headingStyles = css<HeadingProps>`
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
  
  /* Font weight */
  font-weight: ${props => {
    switch (props.weight) {
      case 'light': return props.theme.typography.fontWeight.light;
      case 'regular': return props.theme.typography.fontWeight.regular;
      case 'medium': return props.theme.typography.fontWeight.medium;
      case 'bold':
      default: return props.theme.typography.fontWeight.bold;
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
  
  /* Line height */
  line-height: ${props => props.lineHeight || '1.2'};
  
  /* Letter spacing */
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  
  /* Truncation */
  ${props => props.truncate && getTruncateStyles(props.truncate)}
`;

// Create styled components for each heading level
const H1 = styled.h1<HeadingProps>`
  ${headingStyles}
  font-size: ${props => props.theme.typography.fontSize.xxl};
`;

const H2 = styled.h2<HeadingProps>`
  ${headingStyles}
  font-size: ${props => props.theme.typography.fontSize.xl};
`;

const H3 = styled.h3<HeadingProps>`
  ${headingStyles}
  font-size: ${props => props.theme.typography.fontSize.lg};
`;

const H4 = styled.h4<HeadingProps>`
  ${headingStyles}
  font-size: ${props => props.theme.typography.fontSize.md};
`;

const H5 = styled.h5<HeadingProps>`
  ${headingStyles}
  font-size: ${props => props.theme.typography.fontSize.sm};
`;

const H6 = styled.h6<HeadingProps>`
  ${headingStyles}
  font-size: ${props => props.theme.typography.fontSize.xs};
`;

/**
 * Heading component for displaying headings with different levels and styles
 * 
 * Features:
 * - Six heading levels (h1-h6)
 * - Customizable font weight
 * - Text alignment
 * - Color customization
 * - Margin and padding control
 */
const Heading: React.FC<HeadingProps & React.HTMLAttributes<HTMLHeadingElement>> = ({ 
  level = 1,
  children,
  ...rest
}) => {
  switch (level) {
    case 1: return <H1 {...rest}>{children}</H1>;
    case 2: return <H2 {...rest}>{children}</H2>;
    case 3: return <H3 {...rest}>{children}</H3>;
    case 4: return <H4 {...rest}>{children}</H4>;
    case 5: return <H5 {...rest}>{children}</H5>;
    case 6: return <H6 {...rest}>{children}</H6>;
    default: return <H1 {...rest}>{children}</H1>;
  }
};

export default Heading;
