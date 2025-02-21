import { j as e } from "../.chunks/CYK1ROHF.js";
import { defineConfig as t, ChakraProvider as i, createSystem as a, defaultConfig as m } from "@chakra-ui/react";
import { ColorModeProvider as f } from "../components/Factory/Chakra/color-mode.mjs";
function s(o) {
  const r = t({});
  return localStorage.getItem("theme") === null && localStorage.setItem("theme", "dark"), /* @__PURE__ */ e.jsx(i, { value: a(m, r), children: /* @__PURE__ */ e.jsx(f, { ...o }) });
}
export {
  s as default
};
//# sourceMappingURL=Theme.mjs.map
