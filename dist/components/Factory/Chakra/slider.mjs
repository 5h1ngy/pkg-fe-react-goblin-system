import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { Slider as l, HStack as b } from "@chakra-ui/react";
import { forwardRef as f } from "react";
const S = f(
  function(i, c) {
    const { marks: s, label: r, showValue: a, ...d } = i, u = i.defaultValue ?? i.value, n = s == null ? void 0 : s.map((t) => typeof t == "number" ? { value: t, label: void 0 } : t), h = !!(n != null && n.some((t) => t.label));
    return /* @__PURE__ */ e.jsxs(l.Root, { ref: c, thumbAlignment: "center", ...d, children: [
      r && !a && /* @__PURE__ */ e.jsx(l.Label, { fontWeight: "medium", children: r }),
      r && a && /* @__PURE__ */ e.jsxs(b, { justify: "space-between", children: [
        /* @__PURE__ */ e.jsx(l.Label, { fontWeight: "medium", children: r }),
        /* @__PURE__ */ e.jsx(l.ValueText, {})
      ] }),
      /* @__PURE__ */ e.jsxs(l.Control, { mb: h ? "4" : void 0, children: [
        /* @__PURE__ */ e.jsx(l.Track, { children: /* @__PURE__ */ e.jsx(l.Range, {}) }),
        u == null ? void 0 : u.map((t, o) => /* @__PURE__ */ e.jsx(l.Thumb, { index: o, children: /* @__PURE__ */ e.jsx(l.HiddenInput, {}) }, o))
      ] }),
      (n == null ? void 0 : n.length) && /* @__PURE__ */ e.jsx(l.MarkerGroup, { children: n.map((t, o) => {
        const j = typeof t == "number" ? t : t.value, x = typeof t == "number" ? void 0 : t.label;
        return /* @__PURE__ */ e.jsxs(l.Marker, { value: j, children: [
          /* @__PURE__ */ e.jsx(l.MarkerIndicator, {}),
          x
        ] }, o);
      }) })
    ] });
  }
);
export {
  S as Slider
};
//# sourceMappingURL=slider.mjs.map
