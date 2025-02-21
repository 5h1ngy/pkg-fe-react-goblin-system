import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { Breadcrumb as r } from "@chakra-ui/react";
import { forwardRef as p, Children as u, isValidElement as h, Fragment as f } from "react";
const L = p(
  function(o, s) {
    const { separator: i, separatorGap: a, children: c, ...l } = o, e = u.toArray(c).filter(h);
    return /* @__PURE__ */ t.jsx(r.Root, { ref: s, ...l, children: /* @__PURE__ */ t.jsx(r.List, { gap: a, children: e.map((m, n) => {
      const d = n === e.length - 1;
      return /* @__PURE__ */ t.jsxs(f, { children: [
        /* @__PURE__ */ t.jsx(r.Item, { children: m }),
        !d && /* @__PURE__ */ t.jsx(r.Separator, { children: i })
      ] }, n);
    }) }) });
  }
), R = r.Link, k = r.CurrentLink, C = r.Ellipsis;
export {
  k as BreadcrumbCurrentLink,
  C as BreadcrumbEllipsis,
  R as BreadcrumbLink,
  L as BreadcrumbRoot
};
//# sourceMappingURL=breadcrumb.mjs.map
