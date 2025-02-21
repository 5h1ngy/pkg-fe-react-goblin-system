import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { RadioGroup as RadioGroup$1 } from "@chakra-ui/react";
import { forwardRef } from "react";
const Radio = forwardRef(
  function Radio2(props, ref) {
    const { children, inputProps, rootRef, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup$1.Item, { ref: rootRef, ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup$1.ItemHiddenInput, { ref, ...inputProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup$1.ItemIndicator, {}),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup$1.ItemText, { children })
    ] });
  }
);
const RadioGroup = RadioGroup$1.Root;
export {
  Radio,
  RadioGroup
};
