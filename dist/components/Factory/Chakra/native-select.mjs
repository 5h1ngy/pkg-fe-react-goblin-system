import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { NativeSelect as s } from "@chakra-ui/react";
import { forwardRef as a, useMemo as u } from "react";
const x = a(function(l, r) {
  const { icon: t, children: n, ...c } = l;
  return /* @__PURE__ */ o.jsxs(s.Root, { ref: r, ...c, children: [
    n,
    /* @__PURE__ */ o.jsx(s.Indicator, { children: t })
  ] });
}), h = a(function(l, r) {
  const { items: t, children: n, ...c } = l, i = u(
    () => t == null ? void 0 : t.map(
      (e) => typeof e == "string" ? { label: e, value: e } : e
    ),
    [t]
  );
  return /* @__PURE__ */ o.jsxs(s.Field, { ref: r, ...c, children: [
    n,
    i == null ? void 0 : i.map((e) => /* @__PURE__ */ o.jsx("option", { value: e.value, disabled: e.disabled, children: e.label }, e.value))
  ] });
});
export {
  h as NativeSelectField,
  x as NativeSelectRoot
};
//# sourceMappingURL=native-select.mjs.map
