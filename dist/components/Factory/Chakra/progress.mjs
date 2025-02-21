import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { Progress as o, IconButton as l } from "@chakra-ui/react";
import { T as x, H as f } from "../../../.chunks/DGNRXwko.js";
import { forwardRef as n } from "react";
const p = n(function(s, e) {
  return /* @__PURE__ */ r.jsx(o.Track, { ...s, ref: e, children: /* @__PURE__ */ r.jsx(o.Range, {}) });
}), P = o.Root, d = o.ValueText, h = n(
  function(s, e) {
    const { children: a, info: t, ...c } = s;
    return /* @__PURE__ */ r.jsxs(o.Label, { ...c, ref: e, children: [
      a,
      t && /* @__PURE__ */ r.jsx(x, { content: t, children: /* @__PURE__ */ r.jsx(l, { variant: "ghost", "aria-label": "info", size: "2xs", ms: "1", children: /* @__PURE__ */ r.jsx(f, {}) }) })
    ] });
  }
);
export {
  p as ProgressBar,
  h as ProgressLabel,
  P as ProgressRoot,
  d as ProgressValueText
};
//# sourceMappingURL=progress.mjs.map
