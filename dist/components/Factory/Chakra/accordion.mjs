import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { Accordion as o, HStack as a } from "@chakra-ui/react";
import { forwardRef as i } from "react";
import { L as c } from "../../../.chunks/CF0BrBy-.js";
const j = i(function(r, e) {
  const { children: s, indicatorPlacement: n = "end", ...m } = r;
  return /* @__PURE__ */ t.jsxs(o.ItemTrigger, { ...m, ref: e, children: [
    n === "start" && /* @__PURE__ */ t.jsx(o.ItemIndicator, { rotate: { base: "-90deg", _open: "0deg" }, children: /* @__PURE__ */ t.jsx(c, {}) }),
    /* @__PURE__ */ t.jsx(a, { gap: "4", flex: "1", textAlign: "start", width: "full", children: s }),
    n === "end" && /* @__PURE__ */ t.jsx(o.ItemIndicator, { children: /* @__PURE__ */ t.jsx(c, {}) })
  ] });
}), l = i(function(r, e) {
  return /* @__PURE__ */ t.jsx(o.ItemContent, { children: /* @__PURE__ */ t.jsx(o.ItemBody, { ...r, ref: e }) });
}), p = o.Root, A = o.Item;
export {
  A as AccordionItem,
  l as AccordionItemContent,
  j as AccordionItemTrigger,
  p as AccordionRoot
};
//# sourceMappingURL=accordion.mjs.map
