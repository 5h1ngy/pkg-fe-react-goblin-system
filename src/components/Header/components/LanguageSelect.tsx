import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'

import {
  LanguageSelectMenu,
  LanguageSelectOption,
  LanguageSelectToggle,
  LanguageSelectWrapper,
} from './LanguageSelect.style'
import type { HeaderLocaleOption } from '../Header.types'

interface HeaderLanguageSelectProps {
  locale: string
  locales: HeaderLocaleOption[]
  onChange: (locale: string) => void
}

export const HeaderLanguageSelect = ({ locale, locales, onChange }: HeaderLanguageSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const currentLabel = useMemo(() => {
    const match = locales.find((item) => item.code === locale)
    return match?.label ?? locale.toUpperCase()
  }, [locale, locales])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleToggle = useCallback(() => {
    setIsOpen((open) => !open)
  }, [])

  const handleSelect = useCallback(
    (code: string) => {
      onChange(code)
      setIsOpen(false)
    },
    [onChange],
  )

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!wrapperRef.current || wrapperRef.current.contains(event.target as Node)) {
        return
      }
      setIsOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
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
    closeMenu()
  }, [locale, closeMenu])

  return (
    <LanguageSelectWrapper ref={wrapperRef}>
      <LanguageSelectToggle
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        $open={isOpen}
      >
        {currentLabel}
      </LanguageSelectToggle>

      <LanguageSelectMenu
        id={menuId}
        role="listbox"
        aria-activedescendant={`${menuId}-${locale}`}
        $open={isOpen}
        hidden={!isOpen}
      >
        {locales.map(({ code, label }) => (
          <LanguageSelectOption
            key={code}
            id={`${menuId}-${code}`}
            type="button"
            role="option"
            aria-selected={locale === code}
            $active={locale === code}
            onClick={() => handleSelect(code)}
          >
            {label}
          </LanguageSelectOption>
        ))}
      </LanguageSelectMenu>
    </LanguageSelectWrapper>
  )
}
