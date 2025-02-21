import { j as o } from "../../../.chunks/CYK1ROHF.js";
import { Blockquote as t } from "@chakra-ui/react";
import { forwardRef as m } from "react";
const d = m(
  function(e, n) {
    const { children: r, cite: c, citeUrl: s, showDash: i, icon: l, ...u } = e;
    return /* @__PURE__ */ o.jsxs(t.Root, { ref: n, ...u, children: [
      l,
      /* @__PURE__ */ o.jsx(t.Content, { cite: s, children: r }),
      c && /* @__PURE__ */ o.jsxs(t.Caption, { children: [
        i ? /* @__PURE__ */ o.jsx(o.Fragment, { children: "—" }) : null,
        " ",
        /* @__PURE__ */ o.jsx("cite", { children: c })
      ] })
    ] });
  }
), f = t.Icon;
export {
  d as Blockquote,
  f as BlockquoteIcon
};
//# sourceMappingURL=blockquote.mjs.map
