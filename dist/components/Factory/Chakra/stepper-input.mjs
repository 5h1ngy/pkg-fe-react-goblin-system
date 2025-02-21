import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { NumberInput as n, HStack as l, IconButton as c } from "@chakra-ui/react";
import { forwardRef as i } from "react";
import { l as m, m as x } from "../../../.chunks/CF0BrBy-.js";
const h = i(
  function(r, t) {
    const { label: o, ...u } = r;
    return /* @__PURE__ */ e.jsxs(n.Root, { ...u, unstyled: !0, ref: t, children: [
      o && /* @__PURE__ */ e.jsx(n.Label, { children: o }),
      /* @__PURE__ */ e.jsxs(l, { gap: "2", children: [
        /* @__PURE__ */ e.jsx(a, {}),
        /* @__PURE__ */ e.jsx(n.ValueText, { textAlign: "center", fontSize: "lg", minW: "3ch" }),
        /* @__PURE__ */ e.jsx(g, {})
      ] })
    ] });
  }
), a = i(function(r, t) {
  return /* @__PURE__ */ e.jsx(n.DecrementTrigger, { ...r, asChild: !0, ref: t, children: /* @__PURE__ */ e.jsx(c, { variant: "outline", size: "sm", children: /* @__PURE__ */ e.jsx(m, {}) }) });
}), g = i(function(r, t) {
  return /* @__PURE__ */ e.jsx(n.IncrementTrigger, { ...r, asChild: !0, ref: t, children: /* @__PURE__ */ e.jsx(c, { variant: "outline", size: "sm", children: /* @__PURE__ */ e.jsx(x, {}) }) });
});
export {
  h as StepperInput
};
//# sourceMappingURL=stepper-input.mjs.map
