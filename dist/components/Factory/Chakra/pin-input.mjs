import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { PinInput as PinInput$1, Group } from "@chakra-ui/react";
import { forwardRef } from "react";
const PinInput = forwardRef(
  function PinInput2(props, ref) {
    const { count = 4, inputProps, rootRef, attached, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(PinInput$1.Root, { ref: rootRef, ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PinInput$1.HiddenInput, { ref, ...inputProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PinInput$1.Control, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { attached, children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PinInput$1.Input, { index }, index)) }) })
    ] });
  }
);
export {
  PinInput
};
