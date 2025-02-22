import { j as jsxRuntimeExports } from "../.chunks/CSg68eI9.js";
import { defineConfig, ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider } from "../components/Factory/Chakra/color-mode.mjs";
function ThemeProvider(props) {
  const _config = defineConfig({});
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChakraProvider, { value: createSystem(defaultConfig, _config), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColorModeProvider, { ...props }) });
}
export {
  ThemeProvider as default
};
//# sourceMappingURL=Theme.mjs.map
