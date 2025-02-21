import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { Portal as d, Menu as e, AbsoluteCenter as x } from "@chakra-ui/react";
import { forwardRef as i } from "react";
import { b as m, g as a } from "../../../.chunks/CF0BrBy-.js";
const j = i(
  function(n, r) {
    const { portalled: o = !0, portalRef: s, ...u } = n;
    return /* @__PURE__ */ t.jsx(d, { disabled: !o, container: s, children: /* @__PURE__ */ t.jsx(e.Positioner, { children: /* @__PURE__ */ t.jsx(e.Content, { ref: r, ...u }) }) });
  }
), g = i(
  function(n, r) {
    return /* @__PURE__ */ t.jsx(e.Arrow, { ref: r, ...n, children: /* @__PURE__ */ t.jsx(e.ArrowTip, {}) });
  }
), p = i(function(n, r) {
  return /* @__PURE__ */ t.jsxs(e.CheckboxItem, { ref: r, ...n, children: [
    /* @__PURE__ */ t.jsx(e.ItemIndicator, { hidden: !1, children: /* @__PURE__ */ t.jsx(m, {}) }),
    n.children
  ] });
}), f = i(function(n, r) {
  const { children: o, ...s } = n;
  return /* @__PURE__ */ t.jsxs(e.RadioItem, { ps: "8", ref: r, ...s, children: [
    /* @__PURE__ */ t.jsx(x, { axis: "horizontal", left: "4", asChild: !0, children: /* @__PURE__ */ t.jsx(e.ItemIndicator, { children: /* @__PURE__ */ t.jsx(m, {}) }) }),
    /* @__PURE__ */ t.jsx(e.ItemText, { children: o })
  ] });
}), C = i(function(n, r) {
  const { title: o, children: s, ...u } = n;
  return /* @__PURE__ */ t.jsxs(e.ItemGroup, { ref: r, ...u, children: [
    o && /* @__PURE__ */ t.jsx(e.ItemGroupLabel, { userSelect: "none", children: o }),
    s
  ] });
}), R = i(
  function(n, r) {
    const { startIcon: o, children: s, ...u } = n;
    return /* @__PURE__ */ t.jsxs(e.TriggerItem, { ref: r, ...u, children: [
      o,
      s,
      /* @__PURE__ */ t.jsx(a, {})
    ] });
  }
), T = e.RadioItemGroup, b = e.ContextTrigger, G = e.Root, w = e.Separator, A = e.Item, k = e.ItemText, L = e.ItemCommand, S = e.Trigger;
export {
  g as MenuArrow,
  p as MenuCheckboxItem,
  j as MenuContent,
  b as MenuContextTrigger,
  A as MenuItem,
  L as MenuItemCommand,
  C as MenuItemGroup,
  k as MenuItemText,
  f as MenuRadioItem,
  T as MenuRadioItemGroup,
  G as MenuRoot,
  w as MenuSeparator,
  S as MenuTrigger,
  R as MenuTriggerItem
};
//# sourceMappingURL=menu.mjs.map
