import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { DataList as o, IconButton as c } from "@chakra-ui/react";
import { T as f } from "../../../.chunks/DGNRXwko.js";
import { forwardRef as x } from "react";
import { H as d } from "../../../.chunks/zuxVbpQO.js";
const g = o.Root, v = x(
  function(r, s) {
    const { label: n, info: i, value: a, children: l, grow: e, ...m } = r;
    return /* @__PURE__ */ t.jsxs(o.Item, { ref: s, ...m, children: [
      /* @__PURE__ */ t.jsxs(o.ItemLabel, { flex: e ? "1" : void 0, children: [
        n,
        i && /* @__PURE__ */ t.jsx(f, { content: i, children: /* @__PURE__ */ t.jsx(c, { variant: "ghost", "aria-label": "info", size: "2xs", children: /* @__PURE__ */ t.jsx(d, {}) }) })
      ] }),
      /* @__PURE__ */ t.jsx(o.ItemValue, { flex: e ? "1" : void 0, children: a }),
      l
    ] });
  }
);
export {
  v as DataListItem,
  g as DataListRoot
};
//# sourceMappingURL=data-list.mjs.map
