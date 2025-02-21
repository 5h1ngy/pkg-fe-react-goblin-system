import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { PinInput as r, Group as m } from "@chakra-ui/react";
import { forwardRef as c } from "react";
const h = c(
  function(o, p) {
    const { count: s = 4, inputProps: i, rootRef: e, attached: u, ...f } = o;
    return /* @__PURE__ */ t.jsxs(r.Root, { ref: e, ...f, children: [
      /* @__PURE__ */ t.jsx(r.HiddenInput, { ref: p, ...i }),
      /* @__PURE__ */ t.jsx(r.Control, { children: /* @__PURE__ */ t.jsx(m, { attached: u, children: Array.from({ length: s }).map((j, n) => /* @__PURE__ */ t.jsx(r.Input, { index: n }, n)) }) })
    ] });
  }
);
export {
  h as PinInput
};
//# sourceMappingURL=pin-input.mjs.map
