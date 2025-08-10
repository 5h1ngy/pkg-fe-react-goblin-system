import { ChangeEvent, useMemo, useState } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { TextField } from './TextField'
import { AutocompleteMenu } from './Autocomplete.style'
import type { AutocompleteOption, AutocompleteProps } from './Autocomplete.types'

export const Autocomplete = ({ options, onChange, sx, style, ...rest }: AutocompleteProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const [query, setQuery] = useState(rest.value ?? '')
  const [open, setOpen] = useState(false)
  const filtered = useMemo(
    () => options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase())),
    [options, query],
  )

  const handleSelect = (option: AutocompleteOption) => {
    const synthetic = { target: { value: option.label } } as ChangeEvent<HTMLInputElement>
    setQuery(option.label)
    setOpen(false)
    onChange?.(synthetic, option)
  }

  return (
    <div style={{ position: 'relative', ...resolvedStyle }}>
      <TextField
        {...rest}
        value={query}
        onChange={(event) => {
          const inputEvent = event as ChangeEvent<HTMLInputElement>
          setQuery(inputEvent.target.value)
          setOpen(true)
          onChange?.(inputEvent, null)
        }}
        onFocus={() => setOpen(true)}
      />
      {open && filtered.length > 0 && (
        <AutocompleteMenu>
          {filtered.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </AutocompleteMenu>
      )}
    </div>
  )
}

Autocomplete.displayName = 'Autocomplete'
