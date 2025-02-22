import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Portal, HoverCard } from "@chakra-ui/react";
import { forwardRef } from "react";
const HoverCardContent = forwardRef(function HoverCardContent2(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoverCard.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoverCard.Content, { ref, ...rest }) }) });
});
const HoverCardArrow = forwardRef(
  function HoverCardArrow2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HoverCard.Arrow, { ref, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoverCard.ArrowTip, {}) });
  }
);
const HoverCardRoot = HoverCard.Root;
const HoverCardTrigger = HoverCard.Trigger;
export {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger
};
//# sourceMappingURL=hover-card.mjs.map
