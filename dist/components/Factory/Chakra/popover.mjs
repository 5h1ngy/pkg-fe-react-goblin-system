import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Portal, Popover } from "@chakra-ui/react";
import { CloseButton } from "./close-button.mjs";
import { forwardRef } from "react";
const PopoverContent = forwardRef(
  function PopoverContent2(props, ref) {
    const { portalled = true, portalRef, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Content, { ref, ...rest }) }) });
  }
);
const PopoverArrow = forwardRef(function PopoverArrow2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Arrow, { ...props, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.ArrowTip, {}) });
});
const PopoverCloseTrigger = forwardRef(function PopoverCloseTrigger2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Popover.CloseTrigger,
    {
      position: "absolute",
      top: "1",
      insetEnd: "1",
      ...props,
      asChild: true,
      ref,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButton, { size: "sm" })
    }
  );
});
const PopoverTitle = Popover.Title;
const PopoverDescription = Popover.Description;
const PopoverFooter = Popover.Footer;
const PopoverHeader = Popover.Header;
const PopoverRoot = Popover.Root;
const PopoverBody = Popover.Body;
const PopoverTrigger = Popover.Trigger;
export {
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger
};
//# sourceMappingURL=popover.mjs.map
