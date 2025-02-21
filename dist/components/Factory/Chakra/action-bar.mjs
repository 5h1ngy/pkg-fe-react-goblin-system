import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { Portal as d, ActionBar as r } from "@chakra-ui/react";
import { CloseButton as f } from "./close-button.mjs";
import { forwardRef as n } from "react";
const C = n(function(t, e) {
  const { children: s, portalled: c = !0, portalRef: a, ...l } = t;
  return /* @__PURE__ */ o.jsx(d, { disabled: !c, container: a, children: /* @__PURE__ */ o.jsx(r.Positioner, { children: /* @__PURE__ */ o.jsx(r.Content, { ref: e, ...l, asChild: !1, children: s }) }) });
}), u = n(function(t, e) {
  return /* @__PURE__ */ o.jsx(r.CloseTrigger, { ...t, asChild: !0, ref: e, children: /* @__PURE__ */ o.jsx(f, { size: "sm" }) });
}), x = r.Root, A = r.SelectionTrigger, j = r.Separator;
export {
  u as ActionBarCloseTrigger,
  C as ActionBarContent,
  x as ActionBarRoot,
  A as ActionBarSelectionTrigger,
  j as ActionBarSeparator
};
//# sourceMappingURL=action-bar.mjs.map
