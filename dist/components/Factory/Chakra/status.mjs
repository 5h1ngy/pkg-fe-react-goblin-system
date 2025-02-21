import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { Status as r } from "@chakra-ui/react";
import { forwardRef as i } from "react";
const u = {
  success: "green",
  error: "red",
  warning: "orange",
  info: "blue"
}, d = i(
  function(s, e) {
    const { children: n, value: a = "info", ...t } = s, c = t.colorPalette ?? u[a];
    return /* @__PURE__ */ o.jsxs(r.Root, { ref: e, ...t, colorPalette: c, children: [
      /* @__PURE__ */ o.jsx(r.Indicator, {}),
      n
    ] });
  }
);
export {
  d as Status
};
//# sourceMappingURL=status.mjs.map
