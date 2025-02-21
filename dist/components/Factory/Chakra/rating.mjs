import { j as r } from "../../../.chunks/CYK1ROHF.js";
import { RatingGroup as t } from "@chakra-ui/react";
import { forwardRef as c } from "react";
const f = c(
  function(i, s) {
    const { icon: m, count: o = 5, label: n, ...a } = i;
    return /* @__PURE__ */ r.jsxs(t.Root, { ref: s, count: o, ...a, children: [
      n && /* @__PURE__ */ r.jsx(t.Label, { children: n }),
      /* @__PURE__ */ r.jsx(t.HiddenInput, {}),
      /* @__PURE__ */ r.jsx(t.Control, { children: Array.from({ length: o }).map((x, e) => /* @__PURE__ */ r.jsx(t.Item, { index: e + 1, children: /* @__PURE__ */ r.jsx(t.ItemIndicator, { icon: m }) }, e)) })
    ] });
  }
);
export {
  f as Rating
};
//# sourceMappingURL=rating.mjs.map
