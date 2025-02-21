import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { Stack as a, Skeleton as o, Circle as m } from "@chakra-ui/react";
import { forwardRef as x } from "react";
const j = (n) => {
  const { size: e, ...r } = n;
  return /* @__PURE__ */ t.jsx(m, { size: e, asChild: !0, children: /* @__PURE__ */ t.jsx(o, { ...r }) });
}, u = x(
  function(e, r) {
    const { noOfLines: s = 3, gap: l, ...i } = e;
    return /* @__PURE__ */ t.jsx(a, { gap: l, width: "full", ref: r, children: Array.from({ length: s }).map((f, c) => /* @__PURE__ */ t.jsx(
      o,
      {
        height: "4",
        ...e,
        _last: { maxW: "80%" },
        ...i
      },
      c
    )) });
  }
), d = o;
export {
  d as Skeleton,
  j as SkeletonCircle,
  u as SkeletonText
};
//# sourceMappingURL=skeleton.mjs.map
