import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { Field as r } from "@chakra-ui/react";
import { forwardRef as c } from "react";
const m = c(
  function(l, s) {
    const { label: o, children: n, helperText: t, errorText: i, optionalText: x, ...d } = l;
    return /* @__PURE__ */ e.jsxs(r.Root, { ref: s, ...d, children: [
      o && /* @__PURE__ */ e.jsxs(r.Label, { children: [
        o,
        /* @__PURE__ */ e.jsx(r.RequiredIndicator, { fallback: x })
      ] }),
      n,
      t && /* @__PURE__ */ e.jsx(r.HelperText, { children: t }),
      i && /* @__PURE__ */ e.jsx(r.ErrorText, { children: i })
    ] });
  }
);
export {
  m as Field
};
//# sourceMappingURL=field.mjs.map
