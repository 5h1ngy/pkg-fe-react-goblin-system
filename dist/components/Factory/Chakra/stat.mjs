import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { Stat as o, IconButton as u, FormatNumber as x, Badge as c } from "@chakra-ui/react";
import { T as f, H as m } from "../../../.chunks/DGNRXwko.js";
import { forwardRef as a } from "react";
const p = a(
  function(n, e) {
    const { info: r, children: l, ...s } = n;
    return /* @__PURE__ */ t.jsxs(o.Label, { ...s, ref: e, children: [
      l,
      r && /* @__PURE__ */ t.jsx(f, { content: r, children: /* @__PURE__ */ t.jsx(u, { variant: "ghost", "aria-label": "info", size: "2xs", children: /* @__PURE__ */ t.jsx(m, {}) }) })
    ] });
  }
), g = a(
  function(n, e) {
    const { value: r, formatOptions: l, children: s, ...d } = n;
    return /* @__PURE__ */ t.jsx(o.ValueText, { ...d, ref: e, children: s || r != null && /* @__PURE__ */ t.jsx(x, { value: r, ...l }) });
  }
), b = a(
  function(n, e) {
    return /* @__PURE__ */ t.jsxs(c, { colorPalette: "green", gap: "0", ...n, ref: e, children: [
      /* @__PURE__ */ t.jsx(o.UpIndicator, {}),
      n.children
    ] });
  }
), U = a(
  function(n, e) {
    return /* @__PURE__ */ t.jsxs(c, { colorPalette: "red", gap: "0", ...n, ref: e, children: [
      /* @__PURE__ */ t.jsx(o.DownIndicator, {}),
      n.children
    ] });
  }
), V = o.Root, w = o.HelpText, H = o.ValueUnit;
export {
  U as StatDownTrend,
  w as StatHelpText,
  p as StatLabel,
  V as StatRoot,
  b as StatUpTrend,
  g as StatValueText,
  H as StatValueUnit
};
//# sourceMappingURL=stat.mjs.map
