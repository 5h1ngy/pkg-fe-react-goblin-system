import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { RadioGroup as o } from "@chakra-ui/react";
import { forwardRef as m } from "react";
const u = m(
  function(e, i) {
    const { children: t, inputProps: s, rootRef: n, ...d } = e;
    return /* @__PURE__ */ r.jsxs(o.Item, { ref: n, ...d, children: [
      /* @__PURE__ */ r.jsx(o.ItemHiddenInput, { ref: i, ...s }),
      /* @__PURE__ */ r.jsx(o.ItemIndicator, {}),
      t && /* @__PURE__ */ r.jsx(o.ItemText, { children: t })
    ] });
  }
), x = o.Root;
export {
  u as Radio,
  x as RadioGroup
};
//# sourceMappingURL=radio.mjs.map
