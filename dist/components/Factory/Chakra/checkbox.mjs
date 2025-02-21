import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { Checkbox as r } from "@chakra-ui/react";
import { forwardRef as f } from "react";
const l = f(
  function(e, n) {
    const { icon: s, children: t, inputProps: c, rootRef: i, ...x } = e;
    return /* @__PURE__ */ o.jsxs(r.Root, { ref: i, ...x, children: [
      /* @__PURE__ */ o.jsx(r.HiddenInput, { ref: n, ...c }),
      /* @__PURE__ */ o.jsx(r.Control, { children: s || /* @__PURE__ */ o.jsx(r.Indicator, {}) }),
      t != null && /* @__PURE__ */ o.jsx(r.Label, { children: t })
    ] });
  }
);
export {
  l as Checkbox
};
//# sourceMappingURL=checkbox.mjs.map
