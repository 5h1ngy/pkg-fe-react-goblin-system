import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { NumberInput as r } from "@chakra-ui/react";
import { forwardRef as m } from "react";
const b = m(
  function(e, n) {
    const { children: o, ...u } = e;
    return /* @__PURE__ */ t.jsxs(r.Root, { ref: n, variant: "outline", ...u, children: [
      o,
      /* @__PURE__ */ t.jsxs(r.Control, { children: [
        /* @__PURE__ */ t.jsx(r.IncrementTrigger, {}),
        /* @__PURE__ */ t.jsx(r.DecrementTrigger, {})
      ] })
    ] });
  }
), l = r.Input, I = r.Scrubber, x = r.Label;
export {
  l as NumberInputField,
  x as NumberInputLabel,
  b as NumberInputRoot,
  I as NumberInputScruber
};
//# sourceMappingURL=number-input.mjs.map
