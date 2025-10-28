declare module '@theme/Layout' {
  import type { ComponentType, ReactNode } from 'react'

  export interface Props {
    readonly children?: ReactNode
    readonly title?: string
    readonly description?: string
  }

  const Layout: ComponentType<Props>
  export default Layout
}

declare module '@theme/Icon/ExternalLink' {
  import type { ComponentType, SVGProps } from 'react'

  const IconExternalLink: ComponentType<SVGProps<SVGSVGElement>>
  export default IconExternalLink
}

declare module '@theme/ThemedImage' {
  import type { ComponentType, CSSProperties } from 'react'

  interface ThemedImageProps {
    readonly alt: string
    readonly sources: { light: string; dark: string }
    readonly width?: number | string
    readonly height?: number | string
    readonly style?: CSSProperties
  }

  const ThemedImage: ComponentType<ThemedImageProps>
  export default ThemedImage
}

declare module '@theme/Layout/Provider' {
  import type { ComponentType, ReactNode } from 'react'

  export interface Props {
    readonly children: ReactNode
  }

  const LayoutProvider: ComponentType<Props>
  export default LayoutProvider
}

declare module '@theme/NavbarItem' {
  import type { ComponentType } from 'react'

  export type Props = Record<string, unknown>

  const NavbarItem: ComponentType<Props>
  export default NavbarItem
}

declare module '@theme/Navbar/MobileSidebar/Toggle' {
  import type { ComponentType } from 'react'

  const NavbarMobileSidebarToggle: ComponentType<Record<string, unknown>>
  export default NavbarMobileSidebarToggle
}

declare module '@theme/Navbar/MobileSidebar' {
  import type { ComponentType } from 'react'

  const NavbarMobileSidebar: ComponentType<Record<string, unknown>>
  export default NavbarMobileSidebar
}

declare module '@theme/Navbar/Logo' {
  import type { ComponentType } from 'react'

  const NavbarLogo: ComponentType<Record<string, unknown>>
  export default NavbarLogo
}

declare module '@theme/Navbar/ColorModeToggle' {
  import type { ComponentType } from 'react'

  const ColorModeToggle: ComponentType<Record<string, unknown>>
  export default ColorModeToggle
}

declare module '@theme/Navbar/Search' {
  import type { ComponentType } from 'react'

  const NavbarSearch: ComponentType<Record<string, unknown>>
  export default NavbarSearch
}

declare module '@theme/SearchBar' {
  import type { ComponentType } from 'react'

  const SearchBar: ComponentType<Record<string, unknown>>
  export default SearchBar
}
