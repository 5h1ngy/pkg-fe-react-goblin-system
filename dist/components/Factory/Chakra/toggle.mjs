import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Toggle as Toggle$1, useToggleContext, Button } from "@chakra-ui/react";
import { forwardRef } from "react";
const variantMap = {
  solid: { on: "solid", off: "outline" },
  surface: { on: "surface", off: "outline" },
  subtle: { on: "subtle", off: "ghost" },
  ghost: { on: "subtle", off: "ghost" }
};
const Toggle = forwardRef(
  function Toggle2(props, ref) {
    const { variant = "subtle", size, children, ...rest } = props;
    const variantConfig = variantMap[variant];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle$1.Root, { asChild: true, ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleBaseButton, { size, variant: variantConfig, ref, children }) });
  }
);
const ToggleBaseButton = forwardRef(
  function ToggleBaseButton2(props, ref) {
    const toggle = useToggleContext();
    const { variant, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: toggle.pressed ? variant.on : variant.off,
        ref,
        ...rest
      }
    );
  }
);
const ToggleIndicator = Toggle$1.Indicator;
export {
  Toggle,
  ToggleIndicator
};
//# sourceMappingURL=toggle.mjs.map
