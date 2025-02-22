import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Clipboard, Button, IconButton, Input } from "@chakra-ui/react";
import { forwardRef } from "react";
import { a as LuClipboard, b as LuCheck, c as LuLink } from "../../../index-B99rpP98.js";
const ClipboardIcon = forwardRef(function ClipboardIcon2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard.Indicator, { copied: /* @__PURE__ */ jsxRuntimeExports.jsx(LuCheck, {}), ...props, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuClipboard, {}) });
});
const ClipboardCopyText = forwardRef(function ClipboardCopyText2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard.Indicator, { copied: "Copied", ...props, ref, children: "Copy" });
});
const ClipboardLabel = forwardRef(function ClipboardLabel2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Clipboard.Label,
    {
      textStyle: "sm",
      fontWeight: "medium",
      display: "inline-block",
      mb: "1",
      ...props,
      ref
    }
  );
});
const ClipboardButton = forwardRef(
  function ClipboardButton2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { ref, size: "sm", variant: "surface", ...props, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardIcon, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopyText, {})
    ] }) });
  }
);
const ClipboardLink = forwardRef(
  function ClipboardLink2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        unstyled: true,
        variant: "plain",
        size: "xs",
        display: "inline-flex",
        alignItems: "center",
        gap: "2",
        ref,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LuLink, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopyText, {})
        ]
      }
    ) });
  }
);
const ClipboardIconButton = forwardRef(
  function ClipboardIconButton2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(IconButton, { ref, size: "xs", variant: "subtle", ...props, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardIcon, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopyText, { srOnly: true })
    ] }) });
  }
);
const ClipboardInput = forwardRef(
  function ClipboardInputElement(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard.Input, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref, ...props }) });
  }
);
const ClipboardRoot = Clipboard.Root;
export {
  ClipboardButton,
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardLink,
  ClipboardRoot
};
//# sourceMappingURL=clipboard.mjs.map
