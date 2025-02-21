import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { ProgressCircle, AbsoluteCenter } from "@chakra-ui/react";
import { forwardRef } from "react";
const ProgressCircleRoot = ProgressCircle.Root;
const ProgressCircleRing = forwardRef(function ProgressCircleRing2(props, ref) {
  const { trackColor, cap, color, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ProgressCircle.Circle, { ...rest, ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressCircle.Track, { stroke: trackColor }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressCircle.Range, { stroke: color, strokeLinecap: cap })
  ] });
});
const ProgressCircleValueText = forwardRef(function ProgressCircleValueText2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AbsoluteCenter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressCircle.ValueText, { ...props, ref }) });
});
export {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText
};
//# sourceMappingURL=progress-circle.mjs.map
