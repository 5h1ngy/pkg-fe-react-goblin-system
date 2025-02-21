import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { ProgressCircle as e, AbsoluteCenter as a } from "@chakra-ui/react";
import { forwardRef as t } from "react";
const f = e.Root, j = t(function(o, s) {
  const { trackColor: i, cap: n, color: l, ...x } = o;
  return /* @__PURE__ */ r.jsxs(e.Circle, { ...x, ref: s, children: [
    /* @__PURE__ */ r.jsx(e.Track, { stroke: i }),
    /* @__PURE__ */ r.jsx(e.Range, { stroke: l, strokeLinecap: n })
  ] });
}), m = t(function(o, s) {
  return /* @__PURE__ */ r.jsx(a, { children: /* @__PURE__ */ r.jsx(e.ValueText, { ...o, ref: s }) });
});
export {
  j as ProgressCircleRing,
  f as ProgressCircleRoot,
  m as ProgressCircleValueText
};
//# sourceMappingURL=progress-circle.mjs.map
