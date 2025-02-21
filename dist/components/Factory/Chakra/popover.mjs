import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { Portal as l, Popover as o } from "@chakra-ui/react";
import { CloseButton as P } from "./close-button.mjs";
import { forwardRef as n } from "react";
const f = n(
  function(e, t) {
    const { portalled: i = !0, portalRef: p, ...c } = e;
    return /* @__PURE__ */ r.jsx(l, { disabled: !i, container: p, children: /* @__PURE__ */ r.jsx(o.Positioner, { children: /* @__PURE__ */ r.jsx(o.Content, { ref: t, ...c }) }) });
  }
), g = n(function(e, t) {
  return /* @__PURE__ */ r.jsx(o.Arrow, { ...e, ref: t, children: /* @__PURE__ */ r.jsx(o.ArrowTip, {}) });
}), m = n(function(e, t) {
  return /* @__PURE__ */ r.jsx(
    o.CloseTrigger,
    {
      position: "absolute",
      top: "1",
      insetEnd: "1",
      ...e,
      asChild: !0,
      ref: t,
      children: /* @__PURE__ */ r.jsx(P, { size: "sm" })
    }
  );
}), x = o.Title, j = o.Description, C = o.Footer, T = o.Header, h = o.Root, w = o.Body, R = o.Trigger;
export {
  g as PopoverArrow,
  w as PopoverBody,
  m as PopoverCloseTrigger,
  f as PopoverContent,
  j as PopoverDescription,
  C as PopoverFooter,
  T as PopoverHeader,
  h as PopoverRoot,
  x as PopoverTitle,
  R as PopoverTrigger
};
//# sourceMappingURL=popover.mjs.map
