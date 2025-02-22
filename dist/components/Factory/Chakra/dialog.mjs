import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Portal, Dialog } from "@chakra-ui/react";
import { CloseButton } from "./close-button.mjs";
import { forwardRef } from "react";
const DialogContent = forwardRef(
  function DialogContent2(props, ref) {
    const {
      children,
      portalled = true,
      portalRef,
      backdrop = true,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Portal, { disabled: !portalled, container: portalRef, children: [
      backdrop && /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog.Backdrop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog.Content, { ref, ...rest, asChild: false, children }) })
    ] });
  }
);
const DialogCloseTrigger = forwardRef(function DialogCloseTrigger2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog.CloseTrigger,
    {
      position: "absolute",
      top: "2",
      insetEnd: "2",
      ...props,
      asChild: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButton, { size: "sm", ref, children: props.children })
    }
  );
});
const DialogRoot = Dialog.Root;
const DialogFooter = Dialog.Footer;
const DialogHeader = Dialog.Header;
const DialogBody = Dialog.Body;
const DialogBackdrop = Dialog.Backdrop;
const DialogTitle = Dialog.Title;
const DialogDescription = Dialog.Description;
const DialogTrigger = Dialog.Trigger;
const DialogActionTrigger = Dialog.ActionTrigger;
export {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger
};
