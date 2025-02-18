import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Portal, ActionBar } from "@chakra-ui/react";
import { CloseButton } from "./close-button.mjs";
import { forwardRef } from "react";
const ActionBarContent = forwardRef(function ActionBarContent2(props, ref) {
  const { children, portalled = true, portalRef, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Content, { ref, ...rest, asChild: false, children }) }) });
});
const ActionBarCloseTrigger = forwardRef(function ActionBarCloseTrigger2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.CloseTrigger, { ...props, asChild: true, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButton, { size: "sm" }) });
});
const ActionBarRoot = ActionBar.Root;
const ActionBarSelectionTrigger = ActionBar.SelectionTrigger;
const ActionBarSeparator = ActionBar.Separator;
export {
  ActionBarCloseTrigger,
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator
};
