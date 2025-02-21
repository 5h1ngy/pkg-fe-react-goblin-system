import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { Portal as c, HoverCard as r } from "@chakra-ui/react";
import { forwardRef as n } from "react";
const p = n(function(t, e) {
  const { portalled: s = !0, portalRef: a, ...d } = t;
  return /* @__PURE__ */ o.jsx(c, { disabled: !s, container: a, children: /* @__PURE__ */ o.jsx(r.Positioner, { children: /* @__PURE__ */ o.jsx(r.Content, { ref: e, ...d }) }) });
}), x = n(
  function(t, e) {
    return /* @__PURE__ */ o.jsx(r.Arrow, { ref: e, ...t, children: /* @__PURE__ */ o.jsx(r.ArrowTip, {}) });
  }
), j = r.Root, m = r.Trigger;
export {
  x as HoverCardArrow,
  p as HoverCardContent,
  j as HoverCardRoot,
  m as HoverCardTrigger
};
//# sourceMappingURL=hover-card.mjs.map
