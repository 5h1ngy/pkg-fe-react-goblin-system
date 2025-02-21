import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { SegmentGroup as n, For as u } from "@chakra-ui/react";
import { forwardRef as i, useMemo as c } from "react";
function m(t) {
  return t.map((e) => typeof e == "string" ? { value: e, label: e } : e);
}
const j = i(function(e, l) {
  const { items: s, ...a } = e, d = c(() => m(s), [s]);
  return /* @__PURE__ */ r.jsxs(n.Root, { ref: l, ...a, children: [
    /* @__PURE__ */ r.jsx(n.Indicator, {}),
    /* @__PURE__ */ r.jsx(u, { each: d, children: (o) => /* @__PURE__ */ r.jsxs(
      n.Item,
      {
        value: o.value,
        disabled: o.disabled,
        children: [
          /* @__PURE__ */ r.jsx(n.ItemText, { children: o.label }),
          /* @__PURE__ */ r.jsx(n.ItemHiddenInput, {})
        ]
      },
      o.value
    ) })
  ] });
});
export {
  j as SegmentedControl
};
//# sourceMappingURL=segmented-control.mjs.map
