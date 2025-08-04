import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { HeaderLanguageSelect } from './components/LanguageSelect'
import { HeaderMobileToggle } from './components/MobileToggle'
import { HeaderNavigation } from './components/Navigation'
import { HeaderThemeMenu } from './components/ThemeMenu'
import { useActiveSection } from './Header.hooks'
import {
  BrandInitial,
  BrandLink,
  BrandLogo,
  Controls,
  HeaderInner,
  HeaderRoot,
  MobileBackdrop,
} from './Header.style'
import { defaultHeaderLabels, type HeaderProps } from './Header.types'

const DEFAULT_ACCENT_NAMES: Record<string, string> = {
  '#00c8ff': 'Sky pulse',
  '#ff4bd5': 'Bloom pulse',
  '#24f49b': 'Mint charge',
  '#ffb422': 'Amber spark',
}

export const Header = ({
  navigation,
  themeMode,
  onThemeChange,
  accentOptions,
  accentColor,
  onAccentChange,
  accentLabels,
  locale,
  locales,
  onLocaleChange,
  profileName,
  brand,
  labels,
}: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const themeMenuRef = useRef<HTMLDivElement>(null)

  const resolvedLabels = useMemo(() => ({ ...defaultHeaderLabels, ...labels }), [labels])
  const accentNameMap = useMemo(() => ({ ...DEFAULT_ACCENT_NAMES, ...(accentLabels ?? {}) }), [accentLabels])
  const sectionIds = useMemo(() => navigation.map((item) => item.targetId), [navigation])
  const activeSectionId = useActiveSection(sectionIds)

  useEffect(() => {
    const updateViewport = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 834)
      }
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsNavOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = isNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isNavOpen, isMobile])

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!themeMenuRef.current || themeMenuRef.current.contains(event.target as Node)) {
        return
      }

      setIsThemeMenuOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsThemeMenuOpen(false)
        setIsNavOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickAway)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    setIsNavOpen(false)
    setIsThemeMenuOpen(false)
  }, [locale])

  useEffect(() => {
    if (isNavOpen) {
      setIsThemeMenuOpen(false)
    }
  }, [isNavOpen])

  const accentLabel = useCallback(
    (value: string, index: number) => accentNameMap[value] ?? resolvedLabels.accentFallback(value, index),
    [accentNameMap, resolvedLabels],
  )

  const accentSummary = useMemo(() => {
    const index = accentOptions.indexOf(accentColor)
    const safeIndex = index >= 0 ? index : 0
    return accentLabel(accentColor, safeIndex)
  }, [accentColor, accentOptions, accentLabel])

  const nextMode = themeMode === 'dark' ? 'light' : 'dark'
  const menuButtonAria = resolvedLabels.themeMenuButton(themeMode, accentSummary)
  const themeToggleLabel = resolvedLabels.themeToggle(nextMode)

  const handleThemeSelect = useCallback(
    (mode: typeof themeMode) => {
      if (mode !== themeMode) {
        onThemeChange(mode)
      }
      setIsThemeMenuOpen(false)
    },
    [onThemeChange, themeMode],
  )

  const handleNavItemSelect = useCallback(() => {
    setIsNavOpen(false)
  }, [])

  const handleMobileToggle = useCallback(() => {
    setIsNavOpen((open) => !open)
    setIsThemeMenuOpen(false)
  }, [])

  const handleThemeMenuToggle = useCallback(() => {
    setIsThemeMenuOpen((open) => !open)
  }, [])

  const brandHref = brand?.href ?? '#hero'
  const brandLogoAlt = brand?.logoAlt ?? `${profileName} logo`
  const brandInitial = profileName ? profileName.slice(0, 1).toUpperCase() : '•'

  return (
    <HeaderRoot>
      <HeaderInner>
        {!isMobile && (
          <BrandLink href={brandHref} aria-label={resolvedLabels.brandHome}>
            {brand?.logoSrc ? (
              <BrandLogo src={brand.logoSrc} alt={brandLogoAlt} width={30} height={30} />
            ) : (
              <BrandInitial aria-hidden="true">{brandInitial}</BrandInitial>
            )}
          </BrandLink>
        )}

        <HeaderNavigation
          navigation={navigation}
          isMobile={isMobile}
          isOpen={isNavOpen}
          onItemSelect={handleNavItemSelect}
          ariaLabel={resolvedLabels.navigation}
          activeId={activeSectionId}
        />

        <Controls>
          <HeaderMobileToggle
            isOpen={isNavOpen}
            onToggle={handleMobileToggle}
            hiddenLabel={isNavOpen ? resolvedLabels.menuClose : resolvedLabels.menuOpen}
            closedLabel={resolvedLabels.menuOpenLabel}
            openLabel={resolvedLabels.menuCloseLabel}
          />
          <HeaderLanguageSelect locale={locale} locales={locales} onChange={onLocaleChange} />
          <HeaderThemeMenu
            menuRef={themeMenuRef}
            isOpen={isThemeMenuOpen}
            onToggle={handleThemeMenuToggle}
            themeMode={themeMode}
            onThemeSelect={handleThemeSelect}
            accentOptions={accentOptions}
            accentColor={accentColor}
            onAccentSelect={onAccentChange}
            accentLabel={accentLabel}
            labels={{
              themeSection: resolvedLabels.themeSection,
              accentSection: resolvedLabels.accentSection,
              accentGroup: resolvedLabels.accentGroup,
              toggleAria: themeToggleLabel,
              menuButtonAria,
            }}
          />
        </Controls>
      </HeaderInner>

      <MobileBackdrop
        $visible={isMobile && isNavOpen}
        aria-hidden={!(isMobile && isNavOpen)}
        onClick={handleNavItemSelect}
      />
    </HeaderRoot>
  )
}
