import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { Switch as n } from "@chakra-ui/react";
import { forwardRef as d } from "react";
const p = d(
  function(c, s) {
    const { inputProps: f, children: i, rootRef: e, trackLabel: t, thumbLabel: r, ...l } = c;
    return /* @__PURE__ */ o.jsxs(n.Root, { ref: e, ...l, children: [
      /* @__PURE__ */ o.jsx(n.HiddenInput, { ref: s, ...f }),
      /* @__PURE__ */ o.jsxs(n.Control, { children: [
        /* @__PURE__ */ o.jsx(n.Thumb, { children: r && /* @__PURE__ */ o.jsx(n.ThumbIndicator, { fallback: r == null ? void 0 : r.off, children: r == null ? void 0 : r.on }) }),
        t && /* @__PURE__ */ o.jsx(n.Indicator, { fallback: t.off, children: t.on })
      ] }),
      i != null && /* @__PURE__ */ o.jsx(n.Label, { children: i })
    ] });
  }
);
export {
  p as Switch
};
//# sourceMappingURL=switch.mjs.map
