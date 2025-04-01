import { FC, useState } from "react";
import styled from 'styled-components';
import { CiGlobe } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";

import { usePageContext, useHooks } from "../shared/hooks";

// Header container in stile Ant Design
const HeaderContainer = styled.div`
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
`;

// Navbar container in stile Ant Design
const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  gap: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 64px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// Navbar item in stile Ant Design
const NavItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 64px;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.65);
  transition: color 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    color: #1890ff;
  }
  
  &.active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.65);
    
    &:hover {
      color: #1890ff;
    }
    
    &.active {
      color: #1890ff;
      border-bottom: 2px solid #1890ff;
    }
  }
`;

// Logo container in stile Ant Design
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
`;

// Dropdown menu in stile Ant Design
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  padding: 4px 0;
  
  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32), 0 9px 28px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Dropdown menu item in stile Ant Design
const DropdownMenuItem = styled.div`
  padding: 5px 12px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.65);
  transition: all 0.3s;
  
  &:hover {
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.85);
  }
  
  &.active {
    background-color: #e6f7ff;
    color: #1890ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.65);
    
    &:hover {
      background-color: #303030;
      color: rgba(255, 255, 255, 0.85);
    }
    
    &.active {
      background-color: #111d2c;
      color: #1890ff;
    }
  }
`;

// Action buttons container in stile Ant Design
const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Tab items container in stile Ant Design
const TabsContainer = styled.div`
  display: flex;
  padding: 0 50px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    border-bottom: 1px solid #303030;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// Tab item in stile Ant Design
const TabItem = styled.div<{ isActive: boolean }>`
  padding: 12px 0;
  margin-right: 32px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.isActive ? '#1890ff' : 'rgba(0, 0, 0, 0.65)'};
  border-bottom: 2px solid ${props => props.isActive ? '#1890ff' : 'transparent'};
  transition: all 0.3s;
  
  &:hover {
    color: #40a9ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.isActive ? '#1890ff' : 'rgba(255, 255, 255, 0.65)'};
    
    &:hover {
      color: #40a9ff;
    }
  }
`;

// Mobile menu styles
const DrawerBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 10;
`;

const DrawerContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 256px;
  height: 100%;
  background-color: #fff;
  z-index: 11;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  
  @media (prefers-color-scheme: dark) {
    background-color: #141414;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.45);
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const MobileMenuItem = styled.div<{ isActive: boolean }>`
  padding: 12px 24px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  color: ${props => props.isActive ? '#1890ff' : 'rgba(0, 0, 0, 0.85)'};
  background-color: ${props => props.isActive ? '#e6f7ff' : 'transparent'};
  transition: all 0.3s;
  
  &:hover {
    color: #1890ff;
    background-color: #e6f7ff;
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.isActive ? '#1890ff' : 'rgba(255, 255, 255, 0.85)'};
    background-color: ${props => props.isActive ? '#111d2c' : 'transparent'};
    
    &:hover {
      color: #1890ff;
      background-color: #111d2c;
    }
  }
`;

const IconButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
  color: rgba(0, 0, 0, 0.65);
  
  &:hover {
    color: #1890ff;
    background-color: rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.65);
    
    &:hover {
      color: #1890ff;
      background-color: rgba(255, 255, 255, 0.04);
    }
  }
`;

const ButtonWrapper = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid ${props => props.variant === 'secondary' ? '#d9d9d9' : '#1890ff'};
  background-color: ${props => props.variant === 'secondary' ? 'transparent' : '#1890ff'};
  color: ${props => props.variant === 'secondary' ? 'rgba(0, 0, 0, 0.65)' : '#fff'};
  
  &:hover {
    border-color: ${props => props.variant === 'secondary' ? '#40a9ff' : '#40a9ff'};
    background-color: ${props => props.variant === 'secondary' ? 'transparent' : '#40a9ff'};
    color: ${props => props.variant === 'secondary' ? '#40a9ff' : '#fff'};
  }
  
  @media (prefers-color-scheme: dark) {
    border-color: ${props => props.variant === 'secondary' ? '#434343' : '#1890ff'};
    color: ${props => props.variant === 'secondary' ? 'rgba(255, 255, 255, 0.65)' : '#fff'};
    
    &:hover {
      border-color: ${props => props.variant === 'secondary' ? '#40a9ff' : '#40a9ff'};
      color: ${props => props.variant === 'secondary' ? '#40a9ff' : '#fff'};
    }
  }
`;

/**
 * Header component
 * Navigation and branding header with Ant Design styling
 */
const Header: FC = () => {
    const { props } = usePageContext();
    const { navbarItems, navbarSubItems, logo, branding, navigationScroll } = props;
    const { isMobileRef } = useHooks();
    const [open, setOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    
    // Funzione per gestire la navigazione e lo scrolling
    const handleNavigationAndScroll = (path: string, useScroll?: boolean) => {
        // Qui aggiungeresti la logica per navigare o scorrere alla sezione
        console.log(`Navigating to: ${path}, useScroll: ${useScroll}`);
    };
    
    const renderLogo = () => {
        if (branding?.icon || branding?.text) {
            return (
                <LogoContainer>
                    {branding?.icon && branding.icon}
                    {branding?.text && <span>{branding.text}</span>}
                </LogoContainer>
            );
        }
        
        if (logo) {
            return (
                <LogoContainer>
                    <img src={logo} alt="Logo" style={{ height: 32 }} />
                </LogoContainer>
            );
        }
        
        return null;
    };
    
    // Funzione per verificare se un percorso corrisponde a quello corrente
    const isPathActive = (value: string): boolean => {
        return window.location.pathname.includes(value);
    };

    return (
        <HeaderContainer>
            {!isMobileRef ? (
                <>
                    <NavbarContainer>
                        {renderLogo()}

                        {/* Menu di navigazione principale */}
                        {navbarItems && (
                            <div style={{ display: 'flex' }}>
                                {navbarItems.map((item) => (
                                    <div 
                                        key={item.value} 
                                        style={{ position: 'relative' }}
                                        onMouseEnter={() => setHoveredItem(item.value)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <NavItem 
                                            className={isPathActive(item.value) ? 'active' : ''}
                                            onClick={() => handleNavigationAndScroll(item.value, navigationScroll)}
                                        >
                                            {item.icon} {item.label}
                                        </NavItem>
                                        
                                        {/* Dropdown menu */}
                                        {item.children && hoveredItem === item.value && (
                                            <DropdownMenu>
                                                {item.children.map((child) => (
                                                    <DropdownMenuItem 
                                                        key={child.value}
                                                        className={isPathActive(child.value) ? 'active' : ''}
                                                        onClick={() => handleNavigationAndScroll(child.value, navigationScroll)}
                                                    >
                                                        {child.label}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenu>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {/* Action buttons */}
                        <ActionContainer>
                            <IconButtonWrapper aria-label="Language">
                                <CiGlobe size={20} />
                            </IconButtonWrapper>
                            <ButtonWrapper variant="secondary">
                                Toggle Theme
                            </ButtonWrapper>
                        </ActionContainer>
                    </NavbarContainer>

                    {/* Tab navigation for sub-items */}
                    {navbarSubItems && navbarSubItems.length > 0 && (
                        <TabsContainer>
                            {navbarSubItems.map((item) => (
                                <TabItem 
                                    key={item.value}
                                    isActive={isPathActive(item.value)}
                                    onClick={() => handleNavigationAndScroll(item.value, navigationScroll)}
                                >
                                    {item.label}
                                </TabItem>
                            ))}
                        </TabsContainer>
                    )}
                </>
            ) : (
                <NavbarContainer>
                    {renderLogo()}
                    
                    <IconButtonWrapper
                        aria-label="Menu"
                        onClick={() => setOpen(true)}
                    >
                        <HiOutlineMenu size={20} />
                    </IconButtonWrapper>
                    
                    {/* Mobile menu */}
                    {open && (
                        <>
                            <DrawerBackdrop onClick={() => setOpen(false)} />
                            <DrawerContent>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                                    <IconButtonWrapper onClick={() => setOpen(false)}>
                                        <IoMdClose size={20} />
                                    </IconButtonWrapper>
                                </div>
                                
                                <MobileMenuContainer>
                                    {navbarItems && navbarItems.map((item) => (
                                        <MobileMenuItem 
                                            key={item.value}
                                            isActive={isPathActive(item.value)}
                                            onClick={() => {
                                                handleNavigationAndScroll(item.value, navigationScroll);
                                                setOpen(false);
                                            }}
                                        >
                                            {item.icon} {item.label}
                                        </MobileMenuItem>
                                    ))}
                                    
                                    {navbarSubItems && navbarSubItems.map((item) => (
                                        <MobileMenuItem 
                                            key={item.value}
                                            isActive={isPathActive(item.value)}
                                            onClick={() => {
                                                handleNavigationAndScroll(item.value, navigationScroll);
                                                setOpen(false);
                                            }}
                                        >
                                            {item.label}
                                        </MobileMenuItem>
                                    ))}
                                </MobileMenuContainer>
                            </DrawerContent>
                        </>
                    )}
                </NavbarContainer>
            )}
        </HeaderContainer>
    );
};

export default Header;
