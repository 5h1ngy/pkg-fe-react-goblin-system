import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { createContext, useState, useContext, useEffect } from "react";
import { Table, HStack, Kbd, Stack } from "@chakra-ui/react";
import { Checkbox } from "../Factory/Chakra/checkbox.mjs";
import { PaginationRoot, PaginationPrevTrigger, PaginationItems, PaginationNextTrigger } from "../Factory/Chakra/pagination.mjs";
import { Button } from "../Factory/Chakra/button.mjs";
import { ActionBarRoot, ActionBarContent, ActionBarSelectionTrigger, ActionBarSeparator } from "../Factory/Chakra/action-bar.mjs";
function prettifyFieldName(fieldName) {
  if (!fieldName) return "";
  let replaced = fieldName.replace(/_/g, " ");
  replaced = replaced.replace(/([A-Z])/g, " $1");
  replaced = replaced.replace(/\s+/g, " ").trim();
  return replaced.charAt(0).toUpperCase() + replaced.slice(1);
}
function parseItems(items, hiddenFields = []) {
  if (!items || items.length === 0) {
    return { columns: [], rows: [] };
  }
  const allFields = /* @__PURE__ */ new Set();
  items.forEach((obj) => {
    Object.keys(obj).forEach((key) => allFields.add(key));
  });
  const columns = Array.from(allFields).map((fieldKey) => {
    const shouldHide = hiddenFields.includes(fieldKey);
    return { field: fieldKey, label: prettifyFieldName(fieldKey), visible: !shouldHide, isNumeric: false };
  });
  const rows = items.map((item, index2) => ({
    id: item.id ?? String(index2),
    data: item
  }));
  return { columns, rows };
}
const Context = createContext(void 0);
const withContext = (WrappedComponent) => {
  const Provider = (props) => {
    const { columns, rows } = parseItems(props.items, props.hiddenFields);
    const [selection, setSelection] = useState([]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Context.Provider,
      {
        value: {
          columns,
          rows,
          pagination: props.pagination,
          select: { selection, setSelection }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedComponent, { ...props })
      }
    );
  };
  return Provider;
};
const useTableContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTableContext must be used within LiquidTable");
  }
  return context;
};
const DynamicTable$2 = () => {
  const { columns, rows, select } = useTableContext();
  const hasSelection = select.selection.length > 0;
  const indeterminate = hasSelection && select.selection.length < rows.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Header, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Row, { bg: "bg.subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.ColumnHeader, { w: "6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Checkbox,
      {
        top: "1",
        "aria-label": "Select all rows",
        checked: indeterminate ? "indeterminate" : select.selection.length > 0,
        onCheckedChange: (changes) => changes.checked ? select.setSelection(rows.map((row) => row.id)) : select.setSelection([])
      }
    ) }),
    columns.filter((col) => col.visible).map(
      (col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Table.ColumnHeader,
        {
          textAlign: col.isNumeric ? "end" : "start",
          children: col.label
        },
        crypto.randomUUID()
      )
    )
  ] }) });
};
const DynamicTable$1 = () => {
  const { columns, rows, select } = useTableContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Body, { children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.Cell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Checkbox,
      {
        top: "1",
        "aria-label": "Select row",
        checked: select.selection.includes(row.id),
        onCheckedChange: (changes) => select.setSelection((prev) => changes.checked ? [...prev, row.id] : prev.filter((id) => id !== row.id))
      }
    ) }),
    columns.filter((col) => col.visible).map(
      (col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Table.Cell,
        {
          textAlign: col.isNumeric ? "end" : "start",
          children: row.data[col.field] == null ? "/" : row.data[col.field]
        },
        crypto.randomUUID()
      )
    )
  ] }, crypto.randomUUID())) });
};
const Pagination = () => {
  const { pagination } = useTableContext();
  return pagination && /* @__PURE__ */ jsxRuntimeExports.jsx(
    PaginationRoot,
    {
      padding: "0.3rem",
      count: pagination.totalPages,
      width: "fit-content",
      pageSize: pagination.size,
      page: pagination.offset,
      borderRadius: "10px",
      backgroundColor: "gray.100",
      _dark: { backgroundColor: "gray.950" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { wrap: "wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationPrevTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItems, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationNextTrigger, {})
      ] })
    }
  );
};
const DynamicTable = () => {
  const { select } = useTableContext();
  const hasSelection = select.selection.length > 0;
  useEffect(() => {
    const elements = document.getElementsByClassName("chakra-action-bar__positioner");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.zIndex = "9999";
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBarRoot, { open: hasSelection, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ActionBarContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ActionBarSelectionTrigger, { children: [
      select.selection.length,
      " selected"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBarSeparator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
      "Delete ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { children: "⌫" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
      "Share ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { children: "T" })
    ] })
  ] }) });
};
const LiquidTable = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { width: "full", gap: "3", alignItems: "flex-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Table.ScrollArea, { borderWidth: "1px", rounded: "md", width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table.Root, { size: "lg", stickyHeader: true, interactive: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicTable$2, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicTable$1, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicTable, {})
  ] });
};
const index = withContext(LiquidTable);
export {
  index as default
};
