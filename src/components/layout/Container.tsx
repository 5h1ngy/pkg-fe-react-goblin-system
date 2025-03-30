/**
 * Container component
 * A responsive wrapper that centers content and applies appropriate margins
 * 
 * @module Container
 */
import styled from 'styled-components';

export interface ContainerProps {
  /** Sets maximum width of container. Can be a px value or percentage */
  maxWidth?: string;
  /** Disable default padding on the container */
  disableGutters?: boolean;
  /** Apply padding to the container */
  p?: string;
  /** Apply padding top to the container */
  pt?: string;
  /** Apply padding right to the container */
  pr?: string;
  /** Apply padding bottom to the container */
  pb?: string;
  /** Apply padding left to the container */
  pl?: string;
  /** Apply padding to the x-axis (left and right) */
  px?: string;
  /** Apply padding to the y-axis (top and bottom) */
  py?: string;
  /** Apply margin to the container */
  m?: string;
  /** Apply margin top to the container */
  mt?: string;
  /** Apply margin right to the container */
  mr?: string;
  /** Apply margin bottom to the container */
  mb?: string;
  /** Apply margin left to the container */
  ml?: string;
  /** Apply margin to the x-axis (left and right) */
  mx?: string;
  /** Apply margin to the y-axis (top and bottom) */
  my?: string;
  /** Sets the background color */
  bg?: string;
  /** Sets a border radius */
  borderRadius?: string;
  /** Full width container without max-width */
  fluid?: boolean;
}

/**
 * Container component for centering content within a section
 * 
 * Features:
 * - Responsive width
 * - Optional max-width control
 * - Fluid option for full-width
 * - Customizable padding and margin
 */
const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  /* Max width based on prop or theme breakpoints */
  max-width: ${props => props.fluid 
    ? '100%' 
    : props.maxWidth 
      ? props.maxWidth 
      : props.theme.breakpoints.lg
  };
  
  /* Padding */
  padding: ${props => props.disableGutters ? '0' : props.p || props.theme.spacing.md};
  padding-top: ${props => props.disableGutters ? '0' : props.pt || props.py || props.p || props.theme.spacing.md};
  padding-right: ${props => props.disableGutters ? '0' : props.pr || props.px || props.p || props.theme.spacing.md};
  padding-bottom: ${props => props.disableGutters ? '0' : props.pb || props.py || props.p || props.theme.spacing.md};
  padding-left: ${props => props.disableGutters ? '0' : props.pl || props.px || props.p || props.theme.spacing.md};
  
  /* Margin */
  margin: ${props => props.m || ''};
  margin-top: ${props => props.mt || props.my || props.m || ''};
  margin-right: ${props => props.mr || props.mx || props.m || ''};
  margin-bottom: ${props => props.mb || props.my || props.m || ''};
  margin-left: ${props => props.ml || props.mx || props.m || ''};
  
  /* Background and border radius */
  background-color: ${props => props.bg || 'transparent'};
  border-radius: ${props => props.borderRadius || props.theme.radii.sm};
`;

export default Container;
