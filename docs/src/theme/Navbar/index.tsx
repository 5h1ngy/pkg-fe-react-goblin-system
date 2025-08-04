import { useState } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Header } from 'pkg-fe-react-goblin-system/components'
import { useThemeController } from '../ThemeControllerContext'

const navigation = [
  { label: 'Profilo', targetId: 'about' },
  { label: 'Competenze', targetId: 'skills' },
  { label: 'Prodotti', targetId: 'open-source-products' },
  { label: 'Open Source', targetId: 'open-source' },
  { label: 'Esperienza', targetId: 'experience' },
]

const accentOptions = ['#ffb422', '#7f5bff', '#00c8ff', '#ff4bd5', '#24f49b']

export default function Navbar(): JSX.Element {
  const { mode, accent, setMode, setAccent } = useThemeController()
  const brandLogo = useBaseUrl('img/logo.png')
  const [locale, setLocale] = useState('it')

  return (
    <Header
      navigation={navigation}
      themeMode={mode}
      onThemeChange={setMode}
      accentOptions={accentOptions}
      accentColor={accent}
      onAccentChange={setAccent}
      locale={locale}
      locales={[
        { code: 'it', label: 'IT' },
        { code: 'en', label: 'EN' },
      ]}
      onLocaleChange={setLocale}
      profileName="Goblin System"
      brand={{ href: '#hero', logoSrc: brandLogo, logoAlt: 'Goblin System logo' }}
    />
  )
}
