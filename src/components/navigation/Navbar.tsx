/**
 * Navbar component
 * A responsive navigation bar for site header navigation
 * 
 * @module Navbar
 */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export interface NavbarProps {
  /** Brand/logo element to display */
  brand?: React.ReactNode;
  /** Nav items to display */
  children?: React.ReactNode;
  /** Right aligned items */
  rightItems?: React.ReactNode;
  /** Fixed position at top of viewport */
  fixed?: boolean;
  /** Navbar background color */
  bgColor?: string;
  /** Navbar text color */
  textColor?: string;
  /** Additional CSS class */
  className?: string;
  /** Override the mobile breakpoint (default is 768px) */
  mobileBreakpoint?: string;
  /** Controls if the navbar is expanded on mobile */
  expanded?: boolean;
  /** Callback when mobile menu button is clicked */
  onToggle?: (expanded: boolean) => void;
}

export interface NavItemProps {
  /** Whether the item is active/current */
  active?: boolean;
  /** Nav item content */
  children: React.ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** URL for link items */
  href?: string;
  /** Additional CSS class */
  className?: string;
}

const NavbarContainer = styled.nav<{
  fixed: boolean;
  bgColor?: string;
  textColor?: string;
  mobileBreakpoint: string;
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background-color: ${props => props.bgColor || props.theme.colors.bgElevated};
  color: ${props => props.textColor || props.theme.colors.textPrimary};
  width: 100%;
  z-index: 1000;
  box-shadow: ${props => props.theme.shadows.sm};
  
  ${props => props.fixed && css`
    position: fixed;
    top: 0;
    left: 0;
  `}
  
  @media (max-width: ${props => props.mobileBreakpoint}) {
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  }
`;

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-right: ${props => props.theme.spacing.lg};
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    max-height: 40px;
  }
`;

const NavContent = styled.div<{
  expanded: boolean;
  mobileBreakpoint: string;
}>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.mobileBreakpoint}) {
    flex-basis: 100%;
    flex-grow: 1;
    overflow: hidden;
    max-height: ${props => props.expanded ? '1000px' : '0'};
    transition: max-height 0.3s ease-in-out;
  }
`;

const NavItems = styled.ul`
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledNavItem = styled.li<{
  active?: boolean;
  disabled?: boolean;
}>`
  margin: 0 ${props => props.theme.spacing.sm};
  
  a, button {
    display: block;
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    color: ${props => props.active
      ? props.theme.colors.primary
      : 'inherit'
    };
    text-decoration: none;
    border-radius: ${props => props.theme.radii.sm};
    background: none;
    border: none;
    font-size: ${props => props.theme.typography.fontSize.md};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.6 : 1};
    font-weight: ${props => props.active ? props.theme.typography.fontWeight.medium : 'inherit'};
    transition: color 0.2s, background-color 0.2s;
    
    &:hover, &:focus {
      ${props => !props.disabled && css`
        color: ${props.theme.colors.primary};
        background-color: ${`${props.theme.colors.primary}11`};
      `}
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: ${props => props.theme.spacing.xs} 0;
    width: 100%;
    
    a, button {
      width: 100%;
      text-align: left;
    }
  }
`;

const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin-top: ${props => props.theme.spacing.md};
    justify-content: flex-start;
  }
`;

const NavToggle = styled.button<{ expanded: boolean }>`
  display: none;
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  color: inherit;
  cursor: pointer;
  border-radius: ${props => props.theme.radii.sm};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => `${props.theme.colors.primary}33`};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
  }
  
  /* Hamburger icon with animated transition */
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: currentColor;
    border-radius: 3px;
    transition: transform 0.2s ease-in-out;
    
    &:nth-child(1) {
      transform: ${props => props.expanded
        ? 'translateY(9px) rotate(45deg)'
        : 'none'
      };
    }
    
    &:nth-child(2) {
      opacity: ${props => props.expanded ? 0 : 1};
    }
    
    &:nth-child(3) {
      transform: ${props => props.expanded
        ? 'translateY(-9px) rotate(-45deg)'
        : 'none'
      };
    }
  }
`;

/**
 * NavItem component for navigation items in the navbar
 * 
 * Features:
 * - Support for active state
 * - Link or button rendering based on props
 * - Disabled state
 */
export const NavItem: React.FC<NavItemProps> = ({
  active = false,
  children,
  disabled = false,
  onClick,
  href,
  className,
}) => {
  const content = href ? (
    <a href={href} onClick={disabled ? undefined : onClick}>
      {children}
    </a>
  ) : (
    <button 
      type="button" 
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
  
  return (
    <StyledNavItem 
      active={active} 
      disabled={disabled}
      className={className}
    >
      {content}
    </StyledNavItem>
  );
};

/**
 * Navbar component for site navigation
 * 
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Support for brand/logo
 * - Right-aligned items
 * - Fixed positioning option
 * - Customizable colors
 */
const Navbar: React.FC<NavbarProps> = ({
  brand,
  children,
  rightItems,
  fixed = false,
  bgColor,
  textColor,
  className,
  mobileBreakpoint = '768px',
  expanded: controlledExpanded,
  onToggle,
}) => {
  // State for mobile menu toggle (controlled or uncontrolled)
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState(false);
  const isControlled = typeof controlledExpanded !== 'undefined';
  const expanded = isControlled ? controlledExpanded : uncontrolledExpanded;
  
  // Handle mobile menu toggle
  const handleToggle = () => {
    if (isControlled) {
      onToggle?.(!expanded);
    } else {
      setUncontrolledExpanded(!expanded);
      onToggle?.(!expanded);
    }
  };
  
  return (
    <NavbarContainer 
      fixed={fixed}
      bgColor={bgColor}
      textColor={textColor}
      className={className}
      mobileBreakpoint={mobileBreakpoint}
    >
      {brand && <NavbarBrand>{brand}</NavbarBrand>}
      
      <NavToggle 
        aria-label={expanded ? 'Close menu' : 'Open menu'}
        expanded={expanded}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </NavToggle>
      
      <NavContent expanded={expanded} mobileBreakpoint={mobileBreakpoint}>
        {children && (
          <NavItems>
            {children}
          </NavItems>
        )}
        
        {rightItems && (
          <RightItemsContainer>
            {rightItems}
          </RightItemsContainer>
        )}
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
