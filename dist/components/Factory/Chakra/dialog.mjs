import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { Portal as d, Dialog as o } from "@chakra-ui/react";
import { CloseButton as D } from "./close-button.mjs";
import { forwardRef as e } from "react";
const x = e(
  function(t, i) {
    const {
      children: s,
      portalled: l = !0,
      portalRef: a,
      backdrop: c = !0,
      ...g
    } = t;
    return /* @__PURE__ */ r.jsxs(d, { disabled: !l, container: a, children: [
      c && /* @__PURE__ */ r.jsx(o.Backdrop, {}),
      /* @__PURE__ */ r.jsx(o.Positioner, { children: /* @__PURE__ */ r.jsx(o.Content, { ref: i, ...g, asChild: !1, children: s }) })
    ] });
  }
), C = e(function(t, i) {
  return /* @__PURE__ */ r.jsx(
    o.CloseTrigger,
    {
      position: "absolute",
      top: "2",
      insetEnd: "2",
      ...t,
      asChild: !0,
      children: /* @__PURE__ */ r.jsx(D, { size: "sm", ref: i, children: t.children })
    }
  );
}), T = o.Root, h = o.Footer, j = o.Header, B = o.Body, R = o.Backdrop, k = o.Title, b = o.Description, y = o.Trigger, A = o.ActionTrigger;
export {
  A as DialogActionTrigger,
  R as DialogBackdrop,
  B as DialogBody,
  C as DialogCloseTrigger,
  x as DialogContent,
  b as DialogDescription,
  h as DialogFooter,
  j as DialogHeader,
  T as DialogRoot,
  k as DialogTitle,
  y as DialogTrigger
};
//# sourceMappingURL=dialog.mjs.map
