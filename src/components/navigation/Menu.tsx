/**
 * Menu component
 * A versatile navigation component that can be used for dropdown menus, context menus, and sidebar navigation
 * 
 * @module Menu
 */
import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

export interface MenuProps {
  /** Menu items */
  children: React.ReactNode;
  /** Determines if the menu is rendered */
  isOpen?: boolean;
  /** Handler for when menu is closed */
  onClose?: () => void;
  /** CSS class applied to the container */
  className?: string;
  /** Whether the menu is a dropdown menu */
  dropdown?: boolean;
  /** Parent element that triggers the menu */
  triggerRef?: React.RefObject<HTMLElement>;
  /** Placement of dropdown relative to trigger */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Width of the menu */
  width?: string;
  /** Max height of the menu with scrolling */
  maxHeight?: string;
  /** Add a box shadow to the menu */
  withShadow?: boolean;
  /** Add a border to the menu */
  withBorder?: boolean;
}

export interface MenuItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Callback when item is clicked */
  onClick?: (e: React.MouseEvent) => void;
  /** Whether the item is active */
  active?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** URL if item is a link */
  href?: string;
  /** Icon to display before the label */
  icon?: React.ReactNode;
  /** Indicates presence of a submenu */
  hasSubmenu?: boolean;
  /** CSS class */
  className?: string;
}

export interface MenuDividerProps {
  /** Additional CSS class */
  className?: string;
}

export interface MenuTitleProps {
  /** Title content */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

// Get placement styles for dropdown menu
const getPlacementStyles = (placement: string) => {
  switch (placement) {
    case 'top':
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: ${props => props.theme.spacing.xs};
      `;
    case 'right':
      return css`
        left: 100%;
        top: 0;
        margin-left: ${props => props.theme.spacing.xs};
      `;
    case 'left':
      return css`
        right: 100%;
        top: 0;
        margin-right: ${props => props.theme.spacing.xs};
      `;
    case 'bottom':
    default:
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: ${props => props.theme.spacing.xs};
      `;
  }
};

const MenuContainer = styled.ul<{
  dropdown: boolean;
  width?: string;
  maxHeight?: string;
  placement: string;
  withShadow: boolean;
  withBorder: boolean;
}>`
  list-style: none;
  padding: ${props => props.theme.spacing.xs} 0;
  margin: 0;
  background-color: ${props => props.theme.colors.bgElevated};
  border-radius: ${props => props.theme.radii.md};
  width: ${props => props.width || 'auto'};
  z-index: 1050;
  
  ${props => props.maxHeight && css`
    max-height: ${props.maxHeight};
    overflow-y: auto;
  `}
  
  ${props => props.withShadow && css`
    box-shadow: ${props => props.theme.shadows.md};
  `}
  
  ${props => props.withBorder && css`
    border: 1px solid ${props => props.theme.colors.borderBase};
  `}
  
  ${props => props.dropdown && css`
    position: absolute;
    ${getPlacementStyles(props.placement)}
  `}
`;

const StyledMenuItem = styled.li<{
  active?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  margin: 0;
  padding: 0;
  
  a, button {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
    color: ${props => props.active
      ? props.theme.colors.primary
      : props.theme.colors.textPrimary
    };
    font-size: ${props => props.theme.typography.fontSize.sm};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.6 : 1};
    transition: background-color 0.2s;
    
    &:hover, &:focus {
      ${props => !props.disabled && css`
        background-color: ${`${props.theme.colors.bgContainer}`};
        outline: none;
      `}
    }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: ${props => props.theme.spacing.sm};
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const SubmenuIndicator = styled.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const MenuDividerContainer = styled.li`
  height: 1px;
  margin: ${props => props.theme.spacing.xs} 0;
  background-color: ${props => props.theme.colors.borderLight};
`;

const MenuTitleContainer = styled.li`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

/**
 * Menu component for navigation
 * 
 * Features:
 * - Can be used as dropdown or sidebar navigation
 * - Support for icons
 * - Support for dividers and section titles
 * - Positioning options
 */
const Menu: React.FC<MenuProps> = ({
  children,
  isOpen = true,
  onClose,
  className,
  dropdown = false,
  triggerRef,
  placement = 'bottom',
  width,
  maxHeight,
  withShadow = true,
  withBorder = false,
}) => {
  const menuRef = useRef<HTMLUListElement>(null);
  
  // Handle clicks outside the menu
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isOpen) return;
      
      // Don't close if clicking on the trigger element
      if (triggerRef?.current && triggerRef.current.contains(event.target as Node)) {
        return;
      }
      
      // Close if clicking outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose, triggerRef]);
  
  if (!isOpen) {
    return null;
  }
  
  return (
    <MenuContainer
      ref={menuRef}
      dropdown={dropdown}
      className={className}
      placement={placement}
      width={width}
      maxHeight={maxHeight}
      withShadow={withShadow}
      withBorder={withBorder}
      role="menu"
    >
      {children}
    </MenuContainer>
  );
};

/**
 * MenuItem component for Menu
 * 
 * Features:
 * - Support for active state
 * - Support for icons
 * - Disabled state
 * - Link or button rendering
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClick,
  active = false,
  disabled = false,
  href,
  icon,
  hasSubmenu = false,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    onClick?.(e);
  };
  
  const content = (
    <>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <span>{children}</span>
      {hasSubmenu && (
        <SubmenuIndicator>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </SubmenuIndicator>
      )}
    </>
  );
  
  return (
    <StyledMenuItem 
      active={active} 
      disabled={disabled}
      className={className}
      role="menuitem"
    >
      {href ? (
        <a href={href} onClick={handleClick}>
          {content}
        </a>
      ) : (
        <button type="button" onClick={handleClick} disabled={disabled}>
          {content}
        </button>
      )}
    </StyledMenuItem>
  );
};

/**
 * MenuDivider component for visual separation in menus
 */
export const MenuDivider: React.FC<MenuDividerProps> = ({ className }) => {
  return <MenuDividerContainer className={className} role="separator" />;
};

/**
 * MenuTitle component for section titles in menus
 */
export const MenuTitle: React.FC<MenuTitleProps> = ({ children, className }) => {
  return (
    <MenuTitleContainer className={className}>
      {children}
    </MenuTitleContainer>
  );
};

export default Menu;
