import { j as e } from "../../.chunks/CYK1ROHF.js";
import { createContext as m, useState as g, useContext as j, useEffect as p } from "react";
import { Table as l, HStack as f, Kbd as d, Stack as b } from "@chakra-ui/react";
import { Checkbox as u } from "../Factory/Chakra/checkbox.mjs";
import { PaginationRoot as C, PaginationPrevTrigger as S, PaginationItems as w, PaginationNextTrigger as k } from "../Factory/Chakra/pagination.mjs";
import { Button as h } from "../Factory/Chakra/button.mjs";
import { ActionBarRoot as y, ActionBarContent as T, ActionBarSelectionTrigger as v, ActionBarSeparator as A } from "../Factory/Chakra/action-bar.mjs";
function P(t) {
  if (!t) return "";
  let r = t.replace(/([A-Z])/g, " $1");
  return r = r.trim(), r.charAt(0).toUpperCase() + r.slice(1);
}
function B(t, r = []) {
  if (!t || t.length === 0)
    return { columns: [], rows: [] };
  const i = /* @__PURE__ */ new Set();
  t.forEach((n) => {
    Object.keys(n).forEach((c) => i.add(c));
  });
  const s = Array.from(i).map((n) => {
    const c = r.includes(n);
    return { field: n, label: P(n), visible: !c, isNumeric: !1 };
  }), o = t.map((n, c) => ({
    id: n.id ?? String(c),
    data: n
  }));
  return { columns: s, rows: o };
}
const x = m(void 0), D = (t) => (i) => {
  const { columns: s, rows: o } = B(i.items, i.hiddenFields), [n, c] = g([]);
  return /* @__PURE__ */ e.jsx(
    x.Provider,
    {
      value: {
        columns: s,
        rows: o,
        pagination: i.pagination,
        select: { selection: n, setSelection: c }
      },
      children: /* @__PURE__ */ e.jsx(t, { ...i })
    }
  );
}, a = () => {
  const t = j(x);
  if (!t)
    throw new Error("useTableContext must be used within LiquidTable");
  return t;
}, I = () => {
  const { columns: t, rows: r, select: i } = a(), o = i.selection.length > 0 && i.selection.length < r.length;
  return /* @__PURE__ */ e.jsx(l.Header, { children: /* @__PURE__ */ e.jsxs(l.Row, { bg: "bg.subtle", children: [
    /* @__PURE__ */ e.jsx(l.ColumnHeader, { w: "6", children: /* @__PURE__ */ e.jsx(
      u,
      {
        top: "1",
        "aria-label": "Select all rows",
        checked: o ? "indeterminate" : i.selection.length > 0,
        onCheckedChange: (n) => n.checked ? i.setSelection(r.map((c) => c.id)) : i.setSelection([])
      }
    ) }),
    t.filter((n) => n.visible).map(
      (n) => /* @__PURE__ */ e.jsx(
        l.ColumnHeader,
        {
          textAlign: n.isNumeric ? "end" : "start",
          children: n.label
        },
        crypto.randomUUID()
      )
    )
  ] }) });
}, R = () => {
  const { columns: t, rows: r, select: i } = a();
  return /* @__PURE__ */ e.jsx(l.Body, { children: r.map((s) => /* @__PURE__ */ e.jsxs(l.Row, { children: [
    /* @__PURE__ */ e.jsx(l.Cell, { children: /* @__PURE__ */ e.jsx(
      u,
      {
        top: "1",
        "aria-label": "Select row",
        checked: i.selection.includes(s.id),
        onCheckedChange: (o) => i.setSelection((n) => o.checked ? [...n, s.id] : n.filter((c) => c !== s.id))
      }
    ) }),
    t.filter((o) => o.visible).map(
      (o) => /* @__PURE__ */ e.jsx(
        l.Cell,
        {
          textAlign: o.isNumeric ? "end" : "start",
          children: s.data[o.field] == null ? "/" : s.data[o.field]
        },
        crypto.randomUUID()
      )
    )
  ] }, crypto.randomUUID())) });
}, U = () => {
  const { pagination: t } = a();
  return t && /* @__PURE__ */ e.jsx(
    C,
    {
      padding: "0.3rem",
      count: t.totalPages,
      width: "fit-content",
      pageSize: t.size,
      page: t.offset,
      borderRadius: "10px",
      backgroundColor: "gray.100",
      _dark: { backgroundColor: "gray.950" },
      children: /* @__PURE__ */ e.jsxs(f, { wrap: "wrap", children: [
        /* @__PURE__ */ e.jsx(S, {}),
        /* @__PURE__ */ e.jsx(w, {}),
        /* @__PURE__ */ e.jsx(k, {})
      ] })
    }
  );
}, z = () => {
  const { select: t } = a(), r = t.selection.length > 0;
  return p(() => {
    const i = document.getElementsByClassName("chakra-action-bar__positioner");
    for (let s = 0; s < i.length; s++)
      i[s].style.zIndex = "9999";
  }, []), /* @__PURE__ */ e.jsx(y, { open: r, children: /* @__PURE__ */ e.jsxs(T, { children: [
    /* @__PURE__ */ e.jsxs(v, { children: [
      t.selection.length,
      " selected"
    ] }),
    /* @__PURE__ */ e.jsx(A, {}),
    /* @__PURE__ */ e.jsxs(h, { variant: "outline", size: "sm", children: [
      "Delete ",
      /* @__PURE__ */ e.jsx(d, { children: "⌫" })
    ] }),
    /* @__PURE__ */ e.jsxs(h, { variant: "outline", size: "sm", children: [
      "Share ",
      /* @__PURE__ */ e.jsx(d, { children: "T" })
    ] })
  ] }) });
}, E = () => /* @__PURE__ */ e.jsxs(b, { width: "full", gap: "3", alignItems: "flex-end", children: [
  /* @__PURE__ */ e.jsx(U, {}),
  /* @__PURE__ */ e.jsx(l.ScrollArea, { borderWidth: "1px", rounded: "md", width: "100%", height: "100%", children: /* @__PURE__ */ e.jsxs(l.Root, { size: "lg", stickyHeader: !0, interactive: !0, children: [
    /* @__PURE__ */ e.jsx(I, {}),
    /* @__PURE__ */ e.jsx(R, {})
  ] }) }),
  /* @__PURE__ */ e.jsx(z, {})
] }), O = D(E);
export {
  O as default
};
//# sourceMappingURL=index.mjs.map
