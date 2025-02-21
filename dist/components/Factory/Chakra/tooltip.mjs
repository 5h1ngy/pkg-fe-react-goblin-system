import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { Tooltip as r, Portal as x } from "@chakra-ui/react";
import { forwardRef as j } from "react";
const u = j(
  function(i, e) {
    const {
      showArrow: n,
      children: t,
      disabled: s,
      portalled: l,
      content: d,
      contentProps: p,
      portalRef: c,
      ...a
    } = i;
    return s ? t : /* @__PURE__ */ o.jsxs(r.Root, { ...a, children: [
      /* @__PURE__ */ o.jsx(r.Trigger, { asChild: !0, children: t }),
      /* @__PURE__ */ o.jsx(x, { disabled: !l, container: c, children: /* @__PURE__ */ o.jsx(r.Positioner, { children: /* @__PURE__ */ o.jsxs(r.Content, { ref: e, ...p, children: [
        n && /* @__PURE__ */ o.jsx(r.Arrow, { children: /* @__PURE__ */ o.jsx(r.ArrowTip, {}) }),
        d
      ] }) }) })
    ] });
  }
);
export {
  u as Tooltip
};
//# sourceMappingURL=tooltip.mjs.map
