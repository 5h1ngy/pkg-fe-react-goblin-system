import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { Toggle as a, useToggleContext as u, Button as c } from "@chakra-ui/react";
import { forwardRef as i } from "react";
const d = {
  solid: { on: "solid", off: "outline" },
  surface: { on: "surface", off: "outline" },
  subtle: { on: "subtle", off: "ghost" },
  ghost: { on: "subtle", off: "ghost" }
}, h = i(
  function(t, n) {
    const { variant: s = "subtle", size: o, children: e, ...f } = t, l = d[s];
    return /* @__PURE__ */ r.jsx(a.Root, { asChild: !0, ...f, children: /* @__PURE__ */ r.jsx(T, { size: o, variant: l, ref: n, children: e }) });
  }
), T = i(
  function(t, n) {
    const s = u(), { variant: o, ...e } = t;
    return /* @__PURE__ */ r.jsx(
      c,
      {
        variant: s.pressed ? o.on : o.off,
        ref: n,
        ...e
      }
    );
  }
), v = a.Indicator;
export {
  h as Toggle,
  v as ToggleIndicator
};
//# sourceMappingURL=toggle.mjs.map
