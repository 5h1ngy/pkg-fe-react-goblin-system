import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { createContext as m, Pagination as l, Button as h, usePaginationContext as f, IconButton as P, Text as M } from "@chakra-ui/react";
import { forwardRef as u, useMemo as R } from "react";
import { c as C, d as p, e as x } from "../../../.chunks/zuxVbpQO.js";
import { LinkButton as v } from "./link-button.mjs";
const [T, d] = m({
  name: "RootPropsProvider"
}), H = {
  outline: { default: "ghost", ellipsis: "plain", current: "outline" },
  solid: { default: "outline", ellipsis: "outline", current: "solid" },
  subtle: { default: "ghost", ellipsis: "plain", current: "subtle" }
}, N = u(
  function(e, r) {
    const { size: n = "sm", variant: a = "outline", getHref: i, ...o } = e;
    return /* @__PURE__ */ t.jsx(
      T,
      {
        value: { size: n, variantMap: H[a], getHref: i },
        children: /* @__PURE__ */ t.jsx(
          l.Root,
          {
            ref: r,
            type: i ? "link" : "button",
            ...o
          }
        )
      }
    );
  }
), $ = u(function(e, r) {
  const { size: n, variantMap: a } = d();
  return /* @__PURE__ */ t.jsx(l.Ellipsis, { ref: r, ...e, asChild: !0, children: /* @__PURE__ */ t.jsx(h, { as: "span", variant: a.ellipsis, size: n, children: /* @__PURE__ */ t.jsx(C, {}) }) });
}), z = u(function(e, r) {
  const { page: n } = f(), { size: a, variantMap: i, getHref: o } = d(), c = n === e.value ? i.current : i.default;
  return o ? /* @__PURE__ */ t.jsx(v, { href: o(e.value), variant: c, size: a, children: e.value }) : /* @__PURE__ */ t.jsx(l.Item, { ref: r, ...e, asChild: !0, children: /* @__PURE__ */ t.jsx(h, { variant: c, size: a, children: e.value }) });
}), k = u(function(e, r) {
  const { size: n, variantMap: a, getHref: i } = d(), { previousPage: o } = f();
  return i ? /* @__PURE__ */ t.jsx(
    v,
    {
      href: o != null ? i(o) : void 0,
      variant: a.default,
      size: n,
      children: /* @__PURE__ */ t.jsx(p, {})
    }
  ) : /* @__PURE__ */ t.jsx(l.PrevTrigger, { ref: r, asChild: !0, ...e, children: /* @__PURE__ */ t.jsx(P, { variant: a.default, size: n, children: /* @__PURE__ */ t.jsx(p, {}) }) });
}), L = u(function(e, r) {
  const { size: n, variantMap: a, getHref: i } = d(), { nextPage: o } = f();
  return i ? /* @__PURE__ */ t.jsx(
    v,
    {
      href: o != null ? i(o) : void 0,
      variant: a.default,
      size: n,
      children: /* @__PURE__ */ t.jsx(x, {})
    }
  ) : /* @__PURE__ */ t.jsx(l.NextTrigger, { ref: r, asChild: !0, ...e, children: /* @__PURE__ */ t.jsx(P, { variant: a.default, size: n, children: /* @__PURE__ */ t.jsx(x, {}) }) });
}), w = (s) => /* @__PURE__ */ t.jsx(l.Context, { children: ({ pages: e }) => e.map((r, n) => r.type === "ellipsis" ? /* @__PURE__ */ t.jsx($, { index: n, ...s }, n) : /* @__PURE__ */ t.jsx(
  z,
  {
    type: "page",
    value: r.value,
    ...s
  },
  n
)) }), W = u(function(e, r) {
  const { format: n = "compact", ...a } = e, { page: i, pages: o, pageRange: g, count: c } = f(), j = R(() => n === "short" ? `${i} / ${o.length}` : n === "compact" ? `${i} of ${o.length}` : `${g.start + 1} - ${g.end} of ${c}`, [n, i, o.length, g, c]);
  return /* @__PURE__ */ t.jsx(M, { fontWeight: "medium", ref: r, ...a, children: j });
});
export {
  $ as PaginationEllipsis,
  z as PaginationItem,
  w as PaginationItems,
  L as PaginationNextTrigger,
  W as PaginationPageText,
  k as PaginationPrevTrigger,
  N as PaginationRoot
};
//# sourceMappingURL=pagination.mjs.map
