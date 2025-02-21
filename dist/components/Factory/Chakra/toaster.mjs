import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { createToaster as s, Portal as o, Toaster as t, Toast as r, Spinner as l, Stack as c } from "@chakra-ui/react";
const d = s({
  placement: "bottom-end",
  pauseOnPageIdle: !0
}), m = () => /* @__PURE__ */ e.jsx(o, { children: /* @__PURE__ */ e.jsx(t, { toaster: d, insetInline: { mdDown: "4" }, children: (i) => {
  var n;
  return /* @__PURE__ */ e.jsxs(r.Root, { width: { md: "sm" }, children: [
    i.type === "loading" ? /* @__PURE__ */ e.jsx(l, { size: "sm", color: "blue.solid" }) : /* @__PURE__ */ e.jsx(r.Indicator, {}),
    /* @__PURE__ */ e.jsxs(c, { gap: "1", flex: "1", maxWidth: "100%", children: [
      i.title && /* @__PURE__ */ e.jsx(r.Title, { children: i.title }),
      i.description && /* @__PURE__ */ e.jsx(r.Description, { children: i.description })
    ] }),
    i.action && /* @__PURE__ */ e.jsx(r.ActionTrigger, { children: i.action.label }),
    ((n = i.meta) == null ? void 0 : n.closable) && /* @__PURE__ */ e.jsx(r.CloseTrigger, {})
  ] });
} }) });
export {
  m as Toaster,
  d as toaster
};
//# sourceMappingURL=toaster.mjs.map
