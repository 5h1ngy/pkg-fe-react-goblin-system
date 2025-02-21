import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { EmptyState as e, VStack as d } from "@chakra-ui/react";
import { forwardRef as m } from "react";
const h = m(
  function(o, s) {
    const { title: r, description: i, icon: n, children: c, ...l } = o;
    return /* @__PURE__ */ t.jsx(e.Root, { ref: s, ...l, children: /* @__PURE__ */ t.jsxs(e.Content, { children: [
      n && /* @__PURE__ */ t.jsx(e.Indicator, { children: n }),
      i ? /* @__PURE__ */ t.jsxs(d, { textAlign: "center", children: [
        /* @__PURE__ */ t.jsx(e.Title, { children: r }),
        /* @__PURE__ */ t.jsx(e.Description, { children: i })
      ] }) : /* @__PURE__ */ t.jsx(e.Title, { children: r }),
      c
    ] }) });
  }
);
export {
  h as EmptyState
};
//# sourceMappingURL=empty-state.mjs.map
