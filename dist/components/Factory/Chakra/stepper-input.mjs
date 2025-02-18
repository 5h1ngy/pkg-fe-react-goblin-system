import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { NumberInput, HStack, IconButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import { l as LuMinus, m as LuPlus } from "../../../.chunks/Bol7GxK0.js";
const StepperInput = forwardRef(
  function StepperInput2(props, ref) {
    const { label, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(NumberInput.Root, { ...rest, unstyled: true, ref, children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput.Label, { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DecrementTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput.ValueText, { textAlign: "center", fontSize: "lg", minW: "3ch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IncrementTrigger, {})
      ] })
    ] });
  }
);
const DecrementTrigger = forwardRef(function DecrementTrigger2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput.DecrementTrigger, { ...props, asChild: true, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuMinus, {}) }) });
});
const IncrementTrigger = forwardRef(function IncrementTrigger2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NumberInput.IncrementTrigger, { ...props, asChild: true, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuPlus, {}) }) });
});
export {
  StepperInput
};
