import { j as i } from "../../../.chunks/CYK1ROHF.js";
import { Button as a, AbsoluteCenter as x, Spinner as e, Span as c } from "@chakra-ui/react";
import { forwardRef as h } from "react";
const f = h(
  function(o, s) {
    const { loading: n, disabled: l, loadingText: t, children: r, ...d } = o;
    return /* @__PURE__ */ i.jsx(a, { disabled: n || l, ref: s, ...d, children: n && !t ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(x, { display: "inline-flex", children: /* @__PURE__ */ i.jsx(e, { size: "inherit", color: "inherit" }) }),
      /* @__PURE__ */ i.jsx(c, { opacity: 0, children: r })
    ] }) : n && t ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(e, { size: "inherit", color: "inherit" }),
      t
    ] }) : r });
  }
);
export {
  f as Button
};
//# sourceMappingURL=button.mjs.map
