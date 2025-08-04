import { useCallback } from 'react'

import { Nav, NavLink } from './Navigation.style'
import type { HeaderNavigationItem } from '../Header.types'

interface HeaderNavigationProps {
  navigation: HeaderNavigationItem[]
  isMobile: boolean
  isOpen: boolean
  onItemSelect: () => void
  ariaLabel: string
  activeId?: string
}

export const HeaderNavigation = ({
  navigation,
  isMobile,
  isOpen,
  onItemSelect,
  ariaLabel,
  activeId,
}: HeaderNavigationProps) => {
  const handleNavLinkClick = useCallback(() => {
    if (!isMobile) {
      return
    }
    onItemSelect()
  }, [isMobile, onItemSelect])

  return (
    <Nav id="primary-navigation" aria-label={ariaLabel} $isOpen={isMobile ? isOpen : true}>
      {navigation.map(({ targetId, label }) => (
        <NavLink
          key={targetId}
          href={`#${targetId}`}
          onClick={handleNavLinkClick}
          $active={targetId === activeId}
          aria-current={targetId === activeId ? 'page' : undefined}
        >
          {label}
        </NavLink>
      ))}
    </Nav>
  )
}
