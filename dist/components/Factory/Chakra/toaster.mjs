import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { createToaster, Portal, Toaster as Toaster$1, Toast, Spinner, Stack } from "@chakra-ui/react";
const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true
});
const Toaster = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster$1, { toaster, insetInline: { mdDown: "4" }, children: (toast) => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Toast.Root, { width: { md: "sm" }, children: [
      toast.type === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "sm", color: "blue.solid" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Toast.Indicator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { gap: "1", flex: "1", maxWidth: "100%", children: [
        toast.title && /* @__PURE__ */ jsxRuntimeExports.jsx(Toast.Title, { children: toast.title }),
        toast.description && /* @__PURE__ */ jsxRuntimeExports.jsx(Toast.Description, { children: toast.description })
      ] }),
      toast.action && /* @__PURE__ */ jsxRuntimeExports.jsx(Toast.ActionTrigger, { children: toast.action.label }),
      ((_a = toast.meta) == null ? void 0 : _a.closable) && /* @__PURE__ */ jsxRuntimeExports.jsx(Toast.CloseTrigger, {})
    ] });
  } }) });
};
export {
  Toaster,
  toaster
};
