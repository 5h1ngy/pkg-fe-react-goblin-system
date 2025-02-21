import { j as r } from "./CYK1ROHF.js";
import { Popover as o, Portal as h, IconButton as p } from "@chakra-ui/react";
import { forwardRef as x } from "react";
import { G as u } from "./DSKTHwal.js";
function f(t) {
  return u({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, child: [] }] })(t);
}
const j = x(
  function(n, e) {
    const {
      showArrow: s,
      children: a,
      portalled: l = !0,
      content: c,
      portalRef: d,
      ...i
    } = n;
    return /* @__PURE__ */ r.jsxs(
      o.Root,
      {
        ...i,
        positioning: { ...i.positioning, gutter: 4 },
        children: [
          /* @__PURE__ */ r.jsx(o.Trigger, { asChild: !0, children: a }),
          /* @__PURE__ */ r.jsx(h, { disabled: !l, container: d, children: /* @__PURE__ */ r.jsx(o.Positioner, { children: /* @__PURE__ */ r.jsxs(
            o.Content,
            {
              width: "auto",
              px: "2",
              py: "1",
              textStyle: "xs",
              rounded: "sm",
              ref: e,
              children: [
                s && /* @__PURE__ */ r.jsx(o.Arrow, { children: /* @__PURE__ */ r.jsx(o.ArrowTip, {}) }),
                c
              ]
            }
          ) }) })
        ]
      }
    );
  }
), I = (t) => {
  const { children: n, ...e } = t;
  return /* @__PURE__ */ r.jsx(j, { content: n, ...e, children: /* @__PURE__ */ r.jsx(p, { variant: "ghost", "aria-label": "info", size: "2xs", children: /* @__PURE__ */ r.jsx(f, {}) }) });
};
export {
  f as H,
  I,
  j as T
};
//# sourceMappingURL=DGNRXwko.js.map
