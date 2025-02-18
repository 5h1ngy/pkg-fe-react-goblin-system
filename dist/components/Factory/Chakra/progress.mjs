import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Progress, IconButton } from "@chakra-ui/react";
import { T as ToggleTip, H as HiOutlineInformationCircle } from "../../../.chunks/4Il6cKWL.js";
import { forwardRef } from "react";
const ProgressBar = forwardRef(function ProgressBar2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Progress.Track, { ...props, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress.Range, {}) });
});
const ProgressRoot = Progress.Root;
const ProgressValueText = Progress.ValueText;
const ProgressLabel = forwardRef(
  function ProgressLabel2(props, ref) {
    const { children, info, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Progress.Label, { ...rest, ref, children: [
      children,
      info && /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleTip, { content: info, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: "ghost", "aria-label": "info", size: "2xs", ms: "1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineInformationCircle, {}) }) })
    ] });
  }
);
export {
  ProgressBar,
  ProgressLabel,
  ProgressRoot,
  ProgressValueText
};
