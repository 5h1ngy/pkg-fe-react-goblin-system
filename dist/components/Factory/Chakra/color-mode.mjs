import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { ClientOnly, IconButton, Skeleton, Tabs } from "@chakra-ui/react";
import { z, J } from "../../../index-CHz_-0gi.js";
import { forwardRef } from "react";
import { a as HiSun, b as HiMoon } from "../../../index-Bsqq3xGi.js";
import { j as LuSun, k as LuMoon } from "../../../index-B99rpP98.js";
function ColorModeProvider(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(J, { attribute: "class", disableTransitionOnChange: true, ...props });
}
function useColorMode() {
  const { resolvedTheme, setTheme } = z();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode
  };
}
function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}
function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LuSun, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(LuMoon, {});
}
const ColorModeButtonExtended = function ColorModeButtonExtended2(props) {
  const { toggleColorMode, colorMode } = useColorMode();
  const { variant, size } = props;
  return (
    // Usa ClientOnly per assicurarsi che il componente venga renderizzato solo sul client
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { boxSize: "8" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tabs.Root,
      {
        defaultValue: colorMode,
        variant,
        size,
        onValueChange: toggleColorMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Tabs.List,
          {
            backgroundColor: "gray.100",
            _dark: { backgroundColor: "gray.950" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs.Trigger, { value: "light", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiSun, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs.Trigger, { value: "dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiMoon, {}) })
            ]
          }
        )
      },
      crypto.randomUUID()
    ) })
  );
};
const ColorModeButton = forwardRef(function ColorModeButton2(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    // Usa ClientOnly per garantire che il bottone venga renderizzato solo sul client
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { boxSize: "8" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        onClick: toggleColorMode,
        variant: "ghost",
        "aria-label": "Toggle color mode",
        size: "sm",
        ref,
        ...props,
        css: { _icon: { width: "5", height: "5" } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColorModeIcon, {})
      }
    ) })
  );
});
export {
  ColorModeButton,
  ColorModeButtonExtended,
  ColorModeIcon,
  ColorModeProvider,
  useColorMode,
  useColorModeValue
};
//# sourceMappingURL=color-mode.mjs.map
