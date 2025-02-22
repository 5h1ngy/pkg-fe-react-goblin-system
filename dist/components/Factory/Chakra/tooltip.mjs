import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Tooltip as Tooltip$1, Portal } from "@chakra-ui/react";
import { forwardRef } from "react";
const Tooltip = forwardRef(
  function Tooltip2(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props;
    if (disabled) return children;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip$1.Root, { ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1.Trigger, { asChild: true, children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip$1.Content, { ref, ...contentProps, children: [
        showArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1.Arrow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip$1.ArrowTip, {}) }),
        content
      ] }) }) })
    ] });
  }
);
export {
  Tooltip
};
//# sourceMappingURL=tooltip.mjs.map
