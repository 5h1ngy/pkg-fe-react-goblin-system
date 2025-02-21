import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { Select as n, Portal as u } from "@chakra-ui/react";
import { CloseButton as a } from "./close-button.mjs";
import { forwardRef as o } from "react";
const f = o(
  function(t, r) {
    const { children: i, clearable: l, ...c } = t;
    return /* @__PURE__ */ e.jsxs(n.Control, { ...c, children: [
      /* @__PURE__ */ e.jsx(n.Trigger, { ref: r, children: i }),
      /* @__PURE__ */ e.jsxs(n.IndicatorGroup, { children: [
        l && /* @__PURE__ */ e.jsx(x, {}),
        /* @__PURE__ */ e.jsx(n.Indicator, {})
      ] })
    ] });
  }
), x = o(function(t, r) {
  return /* @__PURE__ */ e.jsx(n.ClearTrigger, { asChild: !0, ...t, ref: r, children: /* @__PURE__ */ e.jsx(
    a,
    {
      size: "xs",
      variant: "plain",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      pointerEvents: "auto"
    }
  ) });
}), S = o(
  function(t, r) {
    const { portalled: i = !0, portalRef: l, ...c } = t;
    return /* @__PURE__ */ e.jsx(u, { disabled: !i, container: l, children: /* @__PURE__ */ e.jsx(n.Positioner, { children: /* @__PURE__ */ e.jsx(n.Content, { ...c, ref: r }) }) });
  }
), I = o(
  function(t, r) {
    const { item: i, children: l, ...c } = t;
    return /* @__PURE__ */ e.jsxs(n.Item, { item: i, ...c, ref: r, children: [
      l,
      /* @__PURE__ */ e.jsx(n.ItemIndicator, {})
    ] }, i.value);
  }
), C = o(function(t, r) {
  const { children: i, ...l } = t;
  return /* @__PURE__ */ e.jsx(n.ValueText, { ...l, ref: r, children: /* @__PURE__ */ e.jsx(n.Context, { children: (c) => {
    const d = c.selectedItems;
    return d.length === 0 ? t.placeholder : i ? i(d) : d.length === 1 ? c.collection.stringifyItem(d[0]) : `${d.length} selected`;
  } }) });
}), T = o(
  function(t, r) {
    return /* @__PURE__ */ e.jsx(
      n.Root,
      {
        ...t,
        ref: r,
        positioning: { sameWidth: !0, ...t.positioning },
        children: t.asChild ? t.children : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(n.HiddenSelect, {}),
          t.children
        ] })
      }
    );
  }
), p = o(
  function(t, r) {
    const { children: i, label: l, ...c } = t;
    return /* @__PURE__ */ e.jsxs(n.ItemGroup, { ...c, ref: r, children: [
      /* @__PURE__ */ e.jsx(n.ItemGroupLabel, { children: l }),
      i
    ] });
  }
), R = n.Label, b = n.ItemText;
export {
  S as SelectContent,
  I as SelectItem,
  p as SelectItemGroup,
  b as SelectItemText,
  R as SelectLabel,
  T as SelectRoot,
  f as SelectTrigger,
  C as SelectValueText
};
//# sourceMappingURL=select.mjs.map
