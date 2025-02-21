import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { Tag as r } from "@chakra-ui/react";
import { forwardRef as c } from "react";
const f = c(
  function(s, l) {
    const {
      startElement: n,
      endElement: t,
      onClose: o,
      closable: i = !!o,
      children: m,
      ...a
    } = s;
    return /* @__PURE__ */ e.jsxs(r.Root, { ref: l, ...a, children: [
      n && /* @__PURE__ */ e.jsx(r.StartElement, { children: n }),
      /* @__PURE__ */ e.jsx(r.Label, { children: m }),
      t && /* @__PURE__ */ e.jsx(r.EndElement, { children: t }),
      i && /* @__PURE__ */ e.jsx(r.EndElement, { children: /* @__PURE__ */ e.jsx(r.CloseTrigger, { onClick: o }) })
    ] });
  }
);
export {
  f as Tag
};
//# sourceMappingURL=tag.mjs.map
