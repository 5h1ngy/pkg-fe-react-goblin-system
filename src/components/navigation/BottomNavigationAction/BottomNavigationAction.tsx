import { useBottomNavigationContext } from '../BottomNavigation/BottomNavigation.context'
import { BottomNavigationButton } from './BottomNavigationAction.style'
import type { BottomNavigationActionProps } from './BottomNavigationAction.types'

export const BottomNavigationAction = ({ label, icon, value, showLabel, ...rest }: BottomNavigationActionProps) => {
  const ctx = useBottomNavigationContext()
  const actionValue = value ?? label?.toString() ?? ''
  const selected = ctx.value === actionValue

  return (
    <BottomNavigationButton
      type="button"
      $selected={selected}
      onClick={(event) => ctx.onChange(event, actionValue)}
      {...rest}
    >
      {icon}
      {(showLabel || selected) && label}
    </BottomNavigationButton>
  )
}

BottomNavigationAction.displayName = 'BottomNavigationAction'
