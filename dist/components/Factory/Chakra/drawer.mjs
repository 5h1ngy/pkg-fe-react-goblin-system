import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Portal, Drawer } from "@chakra-ui/react";
import { CloseButton } from "./close-button.mjs";
import { forwardRef } from "react";
const DrawerContent = forwardRef(
  function DrawerContent2(props, ref) {
    const { children, portalled = true, portalRef, offset, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer.Positioner, { padding: offset, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer.Content, { ref, ...rest, asChild: false, children }) }) });
  }
);
const DrawerCloseTrigger = forwardRef(function DrawerCloseTrigger2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Drawer.CloseTrigger,
    {
      position: "absolute",
      top: "2",
      insetEnd: "2",
      ...props,
      asChild: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButton, { size: "sm", ref })
    }
  );
});
const DrawerTrigger = Drawer.Trigger;
const DrawerRoot = Drawer.Root;
const DrawerFooter = Drawer.Footer;
const DrawerHeader = Drawer.Header;
const DrawerBody = Drawer.Body;
const DrawerBackdrop = Drawer.Backdrop;
const DrawerDescription = Drawer.Description;
const DrawerTitle = Drawer.Title;
const DrawerActionTrigger = Drawer.ActionTrigger;
export {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger
};
//# sourceMappingURL=drawer.mjs.map
