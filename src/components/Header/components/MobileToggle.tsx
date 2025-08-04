import { MobileToggle } from './MobileToggle.style'
import { VisuallyHidden } from '@/components/shared/metadata/VisuallyHidden'

interface HeaderMobileToggleProps {
  isOpen: boolean
  onToggle: () => void
  hiddenLabel: string
  closedLabel: string
  openLabel: string
}

export const HeaderMobileToggle = ({ isOpen, onToggle, hiddenLabel, closedLabel, openLabel }: HeaderMobileToggleProps) => (
  <MobileToggle
    type="button"
    onClick={onToggle}
    aria-expanded={isOpen}
    aria-controls="primary-navigation"
    $isActive={isOpen}
  >
    <VisuallyHidden>{hiddenLabel}</VisuallyHidden>
    <span aria-hidden>{isOpen ? openLabel : closedLabel}</span>
  </MobileToggle>
)
