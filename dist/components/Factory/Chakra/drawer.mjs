import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { Portal as D, Drawer as r } from "@chakra-ui/react";
import { CloseButton as g } from "./close-button.mjs";
import { forwardRef as n } from "react";
const u = n(
  function(o, t) {
    const { children: i, portalled: a = !0, portalRef: c, offset: d, ...l } = o;
    return /* @__PURE__ */ e.jsx(D, { disabled: !a, container: c, children: /* @__PURE__ */ e.jsx(r.Positioner, { padding: d, children: /* @__PURE__ */ e.jsx(r.Content, { ref: t, ...l, asChild: !1, children: i }) }) });
  }
), C = n(function(o, t) {
  return /* @__PURE__ */ e.jsx(
    r.CloseTrigger,
    {
      position: "absolute",
      top: "2",
      insetEnd: "2",
      ...o,
      asChild: !0,
      children: /* @__PURE__ */ e.jsx(g, { size: "sm", ref: t })
    }
  );
}), T = r.Trigger, x = r.Root, j = r.Footer, h = r.Header, B = r.Body, R = r.Backdrop, b = r.Description, k = r.Title, y = r.ActionTrigger;
export {
  y as DrawerActionTrigger,
  R as DrawerBackdrop,
  B as DrawerBody,
  C as DrawerCloseTrigger,
  u as DrawerContent,
  b as DrawerDescription,
  j as DrawerFooter,
  h as DrawerHeader,
  x as DrawerRoot,
  k as DrawerTitle,
  T as DrawerTrigger
};
//# sourceMappingURL=drawer.mjs.map
