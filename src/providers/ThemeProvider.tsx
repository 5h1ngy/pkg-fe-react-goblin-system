import { ChakraProvider, defaultConfig, defineConfig, createSystem } from "@chakra-ui/react"

import { ColorModeProvider, type ColorModeProviderProps } from "@/components/Factory/Chakra/color-mode"

function ThemeProvider(props: ColorModeProviderProps) {

  const _config = defineConfig({
    theme: {
      // semanticTokens: {
      //   colors: {
      //     bg: {
      //       DEFAULT: { value: "{colors.red.900}" },
      //       primary: { value: "{colors.teal.100}" },
      //       secondary: { value: "{colors.red.900}" },
      //     },
      //     fg: {
      //       DEFAULT: { value: "{colors.red.900}" },
      //       primary: { value: "{colors.teal.100}" },
      //       secondary: { value: "{colors.red.900}" },
      //     },
      //   },
      // },
    }
  })

  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark")
  }

  return <ChakraProvider value={createSystem(defaultConfig, _config)} >
    <ColorModeProvider {...props} />
  </ChakraProvider>
}

export default ThemeProvider
