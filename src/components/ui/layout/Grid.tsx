/**
 * Grid system components
 * Provides a responsive grid layout system with Row and Column components
 * 
 * @module Grid
 */
import styled from 'styled-components';

// Row Props Interface
export interface RowProps {
  /** Sets horizontal gap between columns (in px or any CSS unit) */
  gutter?: string;
  /** Sets vertical gap between rows in nested columns (in px or any CSS unit) */
  gutterY?: string;
  /** Horizontal alignment of columns */
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Vertical alignment of columns */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  /** Allow columns to wrap */
  wrap?: boolean;
  /** Apply padding to the row */
  p?: string;
  /** Apply padding top to the row */
  pt?: string;
  /** Apply padding right to the row */
  pr?: string;
  /** Apply padding bottom to the row */
  pb?: string;
  /** Apply padding left to the row */
  pl?: string;
  /** Apply padding to the x-axis (left and right) */
  px?: string;
  /** Apply padding to the y-axis (top and bottom) */
  py?: string;
  /** Apply margin to the row */
  m?: string;
  /** Apply margin top to the row */
  mt?: string;
  /** Apply margin right to the row */
  mr?: string;
  /** Apply margin bottom to the row */
  mb?: string;
  /** Apply margin left to the row */
  ml?: string;
  /** Apply margin to the x-axis (left and right) */
  mx?: string;
  /** Apply margin to the y-axis (top and bottom) */
  my?: string;
}

// Column Props Interface
export interface ColProps {
  /** Number of columns to span (out of 12) */
  span?: number;
  /** Number of columns to span at extra small breakpoint */
  xs?: number;
  /** Number of columns to span at small breakpoint */
  sm?: number;
  /** Number of columns to span at medium breakpoint */
  md?: number;
  /** Number of columns to span at large breakpoint */
  lg?: number;
  /** Number of columns to span at extra large breakpoint */
  xl?: number;
  /** Number of columns to offset from the left */
  offset?: number;
  /** Sets column order */
  order?: number;
  /** Allow column to grow and fill available space */
  flex?: number | string;
  /** Apply padding to the column */
  p?: string;
  /** Apply padding top to the column */
  pt?: string;
  /** Apply padding right to the column */
  pr?: string;
  /** Apply padding bottom to the column */
  pb?: string;
  /** Apply padding left to the column */
  pl?: string;
  /** Apply padding to the x-axis (left and right) */
  px?: string;
  /** Apply padding to the y-axis (top and bottom) */
  py?: string;
  /** Apply margin to the column */
  m?: string;
  /** Apply margin top to the column */
  mt?: string;
  /** Apply margin right to the column */
  mr?: string;
  /** Apply margin bottom to the column */
  mb?: string;
  /** Apply margin left to the column */
  ml?: string;
  /** Apply margin to the x-axis (left and right) */
  mx?: string;
  /** Apply margin to the y-axis (top and bottom) */
  my?: string;
  /** Sets the background color */
  bg?: string;
  /** Sets a border radius */
  borderRadius?: string;
}

/**
 * Row component that serves as a container for columns
 * 
 * Features:
 * - Configurable gutters between columns
 * - Flexbox alignment options
 * - Responsive layout control
 */
export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${props => props.wrap === false ? 'nowrap' : 'wrap'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  margin: ${props => {
    const gutter = props.gutter ? `calc(-${props.gutter} / 2)` : '0';
    return props.m || gutter;
  }};
  margin-top: ${props => {
    const gutterY = props.gutterY ? `calc(-${props.gutterY} / 2)` : '0';
    return props.mt || props.my || props.m || gutterY;
  }};
  margin-right: ${props => props.mr || props.mx || props.m || '0'};
  margin-bottom: ${props => props.mb || props.my || props.m || '0'};
  margin-left: ${props => props.ml || props.mx || props.m || '0'};
  
  /* Padding */
  padding: ${props => props.p || '0'};
  padding-top: ${props => props.pt || props.py || props.p || '0'};
  padding-right: ${props => props.pr || props.px || props.p || '0'};
  padding-bottom: ${props => props.pb || props.py || props.p || '0'};
  padding-left: ${props => props.pl || props.px || props.p || '0'};
  
  /* Apply margin to child columns based on gutter */
  ${props => props.gutter && `
    > * {
      padding-left: calc(${props.gutter} / 2);
      padding-right: calc(${props.gutter} / 2);
    }
  `}
  
  /* Apply margin to child columns based on vertical gutter */
  ${props => props.gutterY && `
    > * {
      padding-top: calc(${props.gutterY} / 2);
      padding-bottom: calc(${props.gutterY} / 2);
    }
  `}
`;

/**
 * Column component that defines grid cells within a Row
 * 
 * Features:
 * - Configurable span width (1-12 columns)
 * - Responsive breakpoint control
 * - Flexbox ordering and alignment
 */
export const Col = styled.div<ColProps>`
  /* Base flex settings */
  flex: ${props => {
    if (props.flex) return props.flex;
    if (props.span) return `0 0 ${(props.span / 12) * 100}%`;
    return '1 0 0%'; // Default to equal width columns
  }};
  
  /* Base width calculation */
  max-width: ${props => props.span ? `${(props.span / 12) * 100}%` : '100%'};
  
  /* Offset */
  margin-left: ${props => props.offset ? `${(props.offset / 12) * 100}%` : '0'};
  
  /* Order */
  order: ${props => props.order || 0};
  
  /* Responsive breakpoints */
  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    ${props => props.xs && `
      flex: 0 0 ${(props.xs / 12) * 100}%;
      max-width: ${(props.xs / 12) * 100}%;
    `}
  }
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    ${props => props.sm && `
      flex: 0 0 ${(props.sm / 12) * 100}%;
      max-width: ${(props.sm / 12) * 100}%;
    `}
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    ${props => props.md && `
      flex: 0 0 ${(props.md / 12) * 100}%;
      max-width: ${(props.md / 12) * 100}%;
    `}
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    ${props => props.lg && `
      flex: 0 0 ${(props.lg / 12) * 100}%;
      max-width: ${(props.lg / 12) * 100}%;
    `}
  }
  
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    ${props => props.xl && `
      flex: 0 0 ${(props.xl / 12) * 100}%;
      max-width: ${(props.xl / 12) * 100}%;
    `}
  }
  
  /* Padding */
  padding: ${props => props.p || '0'};
  padding-top: ${props => props.pt || props.py || props.p || '0'};
  padding-right: ${props => props.pr || props.px || props.p || '0'};
  padding-bottom: ${props => props.pb || props.py || props.p || '0'};
  padding-left: ${props => props.pl || props.px || props.p || '0'};
  
  /* Margin */
  margin: ${props => props.m || '0'};
  margin-top: ${props => props.mt || props.my || props.m || '0'};
  margin-right: ${props => props.mr || props.mx || props.m || '0'};
  margin-bottom: ${props => props.mb || props.my || props.m || '0'};
  margin-left: ${props => props.ml || props.mx || props.m || '0'};
  
  /* Background and border radius */
  background-color: ${props => props.bg || 'transparent'};
  border-radius: ${props => props.borderRadius || '0'};
`;

// Export Col as Column as well for backward compatibility
export const Column = Col;

export default { Row, Col, Column };
