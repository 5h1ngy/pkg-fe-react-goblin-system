import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { RadioCard as t } from "@chakra-ui/react";
import { forwardRef as x, Fragment as j } from "react";
const u = x(
  function(s, c) {
    const {
      inputProps: m,
      label: e,
      description: r,
      addon: i,
      icon: a,
      indicator: n = /* @__PURE__ */ o.jsx(t.ItemIndicator, {}),
      indicatorPlacement: d = "end",
      ...I
    } = s, l = e || r || a, p = n ? t.ItemContent : j;
    return /* @__PURE__ */ o.jsxs(t.Item, { ...I, children: [
      /* @__PURE__ */ o.jsx(t.ItemHiddenInput, { ref: c, ...m }),
      /* @__PURE__ */ o.jsxs(t.ItemControl, { children: [
        d === "start" && n,
        l && /* @__PURE__ */ o.jsxs(p, { children: [
          a,
          e && /* @__PURE__ */ o.jsx(t.ItemText, { children: e }),
          r && /* @__PURE__ */ o.jsx(t.ItemDescription, { children: r }),
          d === "inside" && n
        ] }),
        d === "end" && n
      ] }),
      i && /* @__PURE__ */ o.jsx(t.ItemAddon, { children: i })
    ] });
  }
), b = t.Root, L = t.Label, P = t.ItemIndicator;
export {
  u as RadioCardItem,
  P as RadioCardItemIndicator,
  L as RadioCardLabel,
  b as RadioCardRoot
};
//# sourceMappingURL=radio-card.mjs.map
