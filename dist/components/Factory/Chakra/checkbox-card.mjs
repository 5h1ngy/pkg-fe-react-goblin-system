import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { CheckboxCard as n } from "@chakra-ui/react";
import { forwardRef as l, Fragment as j } from "react";
const u = l(
  function(c, a) {
    const {
      inputProps: x,
      label: t,
      description: e,
      icon: i,
      addon: s,
      indicator: r = /* @__PURE__ */ o.jsx(n.Indicator, {}),
      indicatorPlacement: d = "end",
      ...C
    } = c, h = t || e || i, p = r ? n.Content : j;
    return /* @__PURE__ */ o.jsxs(n.Root, { ...C, children: [
      /* @__PURE__ */ o.jsx(n.HiddenInput, { ref: a, ...x }),
      /* @__PURE__ */ o.jsxs(n.Control, { children: [
        d === "start" && r,
        h && /* @__PURE__ */ o.jsxs(p, { children: [
          i,
          t && /* @__PURE__ */ o.jsx(n.Label, { children: t }),
          e && /* @__PURE__ */ o.jsx(n.Description, { children: e }),
          d === "inside" && r
        ] }),
        d === "end" && r
      ] }),
      s && /* @__PURE__ */ o.jsx(n.Addon, { children: s })
    ] });
  }
), I = n.Indicator;
export {
  u as CheckboxCard,
  I as CheckboxCardIndicator
};
//# sourceMappingURL=checkbox-card.mjs.map
