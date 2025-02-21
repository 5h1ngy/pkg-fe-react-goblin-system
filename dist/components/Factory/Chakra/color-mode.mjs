import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { ClientOnly as i, IconButton as u, Skeleton as d, Tabs as n } from "@chakra-ui/react";
import { z as g, J as x } from "../../../.chunks/DwT-v3zK.js";
import { forwardRef as h } from "react";
import { a as C, b as M } from "../../../.chunks/zuxVbpQO.js";
import { j, k as m } from "../../../.chunks/CF0BrBy-.js";
function B(r) {
  return /* @__PURE__ */ o.jsx(x, { attribute: "class", disableTransitionOnChange: !0, ...r });
}
function l() {
  const { resolvedTheme: r, setTheme: e } = g();
  return {
    colorMode: r,
    setColorMode: e,
    toggleColorMode: () => {
      e(r === "light" ? "dark" : "light");
    }
  };
}
function S(r, e) {
  const { colorMode: t } = l();
  return t === "light" ? r : e;
}
function f() {
  const { colorMode: r } = l();
  return r === "light" ? /* @__PURE__ */ o.jsx(j, {}) : /* @__PURE__ */ o.jsx(m, {});
}
const y = function(e) {
  const { toggleColorMode: t, colorMode: s } = l(), { variant: a, size: c } = e;
  return (
    // Usa ClientOnly per assicurarsi che il componente venga renderizzato solo sul client
    /* @__PURE__ */ o.jsx(i, { fallback: /* @__PURE__ */ o.jsx(d, { boxSize: "8" }), children: /* @__PURE__ */ o.jsx(
      n.Root,
      {
        defaultValue: s,
        variant: a,
        size: c,
        onValueChange: t,
        children: /* @__PURE__ */ o.jsxs(
          n.List,
          {
            backgroundColor: "gray.100",
            _dark: { backgroundColor: "gray.950" },
            children: [
              /* @__PURE__ */ o.jsx(n.Trigger, { value: "light", children: /* @__PURE__ */ o.jsx(C, {}) }),
              /* @__PURE__ */ o.jsx(n.Trigger, { value: "dark", children: /* @__PURE__ */ o.jsx(M, {}) })
            ]
          }
        )
      },
      crypto.randomUUID()
    ) })
  );
}, E = h(function(e, t) {
  const { toggleColorMode: s } = l();
  return (
    // Usa ClientOnly per garantire che il bottone venga renderizzato solo sul client
    /* @__PURE__ */ o.jsx(i, { fallback: /* @__PURE__ */ o.jsx(d, { boxSize: "8" }), children: /* @__PURE__ */ o.jsx(
      u,
      {
        onClick: s,
        variant: "ghost",
        "aria-label": "Toggle color mode",
        size: "sm",
        ref: t,
        ...e,
        css: { _icon: { width: "5", height: "5" } },
        children: /* @__PURE__ */ o.jsx(f, {})
      }
    ) })
  );
});
export {
  E as ColorModeButton,
  y as ColorModeButtonExtended,
  f as ColorModeIcon,
  B as ColorModeProvider,
  l as useColorMode,
  S as useColorModeValue
};
//# sourceMappingURL=color-mode.mjs.map
