import { composeProviders } from '@docusaurus/theme-common'
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal'
import { DocsPreferredVersionContextProvider } from '@docusaurus/plugin-content-docs/client'

export const composeLayoutProviders = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
])
