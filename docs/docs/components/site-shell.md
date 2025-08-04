---
sidebar_position: 6
title: Header & Footer
---

The shell components wrap the shared atoms so you can recreate the full portfolio experience without rebuilding navigation or metadata.

## Header

```tsx
import { Header } from 'pkg-fe-react-goblin-system'

<Header
  navigation={[
    { label: 'Hero', targetId: 'hero' },
    { label: 'Projects', targetId: 'projects' },
  ]}
  themeMode="dark"
  onThemeChange={setTheme}
  accentOptions={['#7f5bff', '#00c8ff', '#ff4bd5', '#24f49b']}
  accentColor={accent}
  onAccentChange={setAccent}
  accentLabels={{ '#7f5bff': 'Violet pulse' }}
  locale={locale}
  locales={[
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
  ]}
  onLocaleChange={setLocale}
  profileName="Avery Goblin"
  brand={{ href: '#hero', logoSrc: '/logo.svg', logoAlt: 'Goblin System' }}
/>
```

- `navigation` drives the pill-style anchor list; make sure matching section IDs exist in the DOM so `useActiveSection` can highlight the current view.
- `themeMode`, `accentColor` and `locale` are controlled from the outside. The component exposes callbacks (`onThemeChange`, `onAccentChange`, `onLocaleChange`) so Storybook or your app can keep state in sync.
- Provide optional `accentLabels` or override `labels` to customize aria copy, menu text or accent fallback strings.
- `brand.logoSrc` accepts any image (a data URI works great for Storybook). When omitted the header falls back to the first letter of `profileName`.

## Footer

```tsx
import { Footer } from 'pkg-fe-react-goblin-system'

<Footer
  profile={{
    name: 'Avery Goblin',
    links: [
      { label: 'GitHub', url: 'https://github.com/avery' },
      { label: 'Mail', url: 'mailto:hi@example.com' },
    ],
  }}
  meta={{ title: 'Goblin System' }}
/>
```

- `profile.links` renders as `TextLink` buttons. External links automatically open in a new tab.
- Override accessible copy with `labels.profileLinks`.
- The copyright line uses `meta.title` if provided—falling back to the profile name.
