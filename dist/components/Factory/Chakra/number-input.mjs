import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { NumberInput } from "@chakra-ui/react";
import { forwardRef } from "react";
const NumberInputRoot = forwardRef(
  function NumberInput$1(props, ref) {
    const { children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(NumberInput.Root, { ref, variant: "outline", ...rest, children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(NumberInput.Control, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput.IncrementTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput.DecrementTrigger, {})
      ] })
    ] });
  }
);
const NumberInputField = NumberInput.Input;
const NumberInputScruber = NumberInput.Scrubber;
const NumberInputLabel = NumberInput.Label;
export {
  NumberInputField,
  NumberInputLabel,
  NumberInputRoot,
  NumberInputScruber
};
//# sourceMappingURL=number-input.mjs.map
