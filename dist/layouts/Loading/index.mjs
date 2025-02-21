import { j as t } from "../../.chunks/CYK1ROHF.js";
import { Flex as r, Icon as e } from "@chakra-ui/react";
import { EmptyState as i } from "../../components/Factory/Chakra/empty-state.mjs";
import { ProgressRoot as n, ProgressBar as a } from "../../components/Factory/Chakra/progress.mjs";
import { G as s } from "../../.chunks/DSKTHwal.js";
function c(o) {
  return s({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" }, child: [] }, { tag: "path", attr: { d: "M17 12a5 5 0 1 0 -5 5" }, child: [] }] })(o);
}
const x = () => /* @__PURE__ */ t.jsx(
  r,
  {
    position: "fixed",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    children: /* @__PURE__ */ t.jsx(
      i,
      {
        icon: /* @__PURE__ */ t.jsx(e, { as: c, boxSize: 6 }),
        title: "Fetching...",
        description: "Wait please!",
        children: /* @__PURE__ */ t.jsx(n, { width: "25vw", value: null, children: /* @__PURE__ */ t.jsx(a, {}) })
      }
    )
  }
);
export {
  x as default
};
//# sourceMappingURL=index.mjs.map
