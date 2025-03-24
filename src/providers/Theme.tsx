import { ChakraProvider, defaultConfig, defineConfig, createSystem } from "@chakra-ui/react"

import { ColorModeProvider, type ColorModeProviderProps } from "@/components/Factory/Chakra/color-mode"

function ThemeProvider(props: ColorModeProviderProps) {

  const _config = defineConfig({
    theme: {
      breakpoints: {
        "xs": "340px", // >=
        "sm": "480px", // >=
        "md": "768px", // >=
        "lg": "1024px", // >=
        "xl": "1280px", // >=
        "2xl": "1536px", // >=
      }
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
