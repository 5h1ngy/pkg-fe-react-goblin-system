import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Switch as Switch$1 } from "@chakra-ui/react";
import { forwardRef } from "react";
const Switch = forwardRef(
  function Switch2(props, ref) {
    const { inputProps, children, rootRef, trackLabel, thumbLabel, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Switch$1.Root, { ref: rootRef, ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch$1.HiddenInput, { ref, ...inputProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Switch$1.Control, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch$1.Thumb, { children: thumbLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(Switch$1.ThumbIndicator, { fallback: thumbLabel == null ? void 0 : thumbLabel.off, children: thumbLabel == null ? void 0 : thumbLabel.on }) }),
        trackLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(Switch$1.Indicator, { fallback: trackLabel.off, children: trackLabel.on })
      ] }),
      children != null && /* @__PURE__ */ jsxRuntimeExports.jsx(Switch$1.Label, { children })
    ] });
  }
);
export {
  Switch
};
//# sourceMappingURL=switch.mjs.map
