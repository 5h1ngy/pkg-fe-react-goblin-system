import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Checkbox as Checkbox$1 } from "@chakra-ui/react";
import { forwardRef } from "react";
const Checkbox = forwardRef(
  function Checkbox2(props, ref) {
    const { icon, children, inputProps, rootRef, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Checkbox$1.Root, { ref: rootRef, ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox$1.HiddenInput, { ref, ...inputProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox$1.Control, { children: icon || /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox$1.Indicator, {}) }),
      children != null && /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox$1.Label, { children })
    ] });
  }
);
export {
  Checkbox
};
//# sourceMappingURL=checkbox.mjs.map
