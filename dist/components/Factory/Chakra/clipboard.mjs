import { j as n } from "../../../.chunks/CYK1ROHF.js";
import { Clipboard as i, Button as l, IconButton as d, Input as c } from "@chakra-ui/react";
import { forwardRef as o } from "react";
import { a as u, b as p, c as x } from "../../../.chunks/CF0BrBy-.js";
const a = o(function(r, t) {
  return /* @__PURE__ */ n.jsx(i.Indicator, { copied: /* @__PURE__ */ n.jsx(p, {}), ...r, ref: t, children: /* @__PURE__ */ n.jsx(u, {}) });
}), s = o(function(r, t) {
  return /* @__PURE__ */ n.jsx(i.Indicator, { copied: "Copied", ...r, ref: t, children: "Copy" });
}), m = o(function(r, t) {
  return /* @__PURE__ */ n.jsx(
    i.Label,
    {
      textStyle: "sm",
      fontWeight: "medium",
      display: "inline-block",
      mb: "1",
      ...r,
      ref: t
    }
  );
}), h = o(
  function(r, t) {
    return /* @__PURE__ */ n.jsx(i.Trigger, { asChild: !0, children: /* @__PURE__ */ n.jsxs(l, { ref: t, size: "sm", variant: "surface", ...r, children: [
      /* @__PURE__ */ n.jsx(a, {}),
      /* @__PURE__ */ n.jsx(s, {})
    ] }) });
  }
), I = o(
  function(r, t) {
    return /* @__PURE__ */ n.jsx(i.Trigger, { asChild: !0, children: /* @__PURE__ */ n.jsxs(
      l,
      {
        unstyled: !0,
        variant: "plain",
        size: "xs",
        display: "inline-flex",
        alignItems: "center",
        gap: "2",
        ref: t,
        ...r,
        children: [
          /* @__PURE__ */ n.jsx(x, {}),
          /* @__PURE__ */ n.jsx(s, {})
        ]
      }
    ) });
  }
), g = o(
  function(r, t) {
    return /* @__PURE__ */ n.jsx(i.Trigger, { asChild: !0, children: /* @__PURE__ */ n.jsxs(d, { ref: t, size: "xs", variant: "subtle", ...r, children: [
      /* @__PURE__ */ n.jsx(a, {}),
      /* @__PURE__ */ n.jsx(s, { srOnly: !0 })
    ] }) });
  }
), L = o(
  function(r, t) {
    return /* @__PURE__ */ n.jsx(i.Input, { asChild: !0, children: /* @__PURE__ */ n.jsx(c, { ref: t, ...r }) });
  }
), y = i.Root;
export {
  h as ClipboardButton,
  g as ClipboardIconButton,
  L as ClipboardInput,
  m as ClipboardLabel,
  I as ClipboardLink,
  y as ClipboardRoot
};
//# sourceMappingURL=clipboard.mjs.map
