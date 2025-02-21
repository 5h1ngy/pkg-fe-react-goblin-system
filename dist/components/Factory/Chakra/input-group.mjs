import { j as n } from "../../../.chunks/CYK1ROHF.js";
import { Group as c, InputElement as p } from "@chakra-ui/react";
import { forwardRef as u, cloneElement as a } from "react";
const f = u(
  function(o, s) {
    const {
      startElement: e,
      startElementProps: i,
      endElement: t,
      endElementProps: l,
      children: r,
      ...m
    } = o;
    return /* @__PURE__ */ n.jsxs(c, { ref: s, ...m, children: [
      e && /* @__PURE__ */ n.jsx(p, { pointerEvents: "none", ...i, children: e }),
      a(r, {
        ...e && { ps: "calc(var(--input-height) - 6px)" },
        ...t && { pe: "calc(var(--input-height) - 6px)" },
        ...r.props
      }),
      t && /* @__PURE__ */ n.jsx(p, { placement: "end", ...l, children: t })
    ] });
  }
);
export {
  f as InputGroup
};
//# sourceMappingURL=input-group.mjs.map
