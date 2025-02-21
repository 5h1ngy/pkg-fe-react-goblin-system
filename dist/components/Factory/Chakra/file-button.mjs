import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { FileUpload as t, Icon as x, Text as h, useFileUploadContext as j, useRecipe as m, Button as f, Span as g, IconButton as F } from "@chakra-ui/react";
import { forwardRef as a } from "react";
import { d as I, e as U, f as z } from "../../../.chunks/CF0BrBy-.js";
const b = a(
  function(r, o) {
    const { children: n, inputProps: l, ...s } = r;
    return /* @__PURE__ */ e.jsxs(t.Root, { ...s, children: [
      /* @__PURE__ */ e.jsx(t.HiddenInput, { ref: o, ...l }),
      n
    ] });
  }
), D = a(function(r, o) {
  const { children: n, label: l, description: s, ...d } = r;
  return /* @__PURE__ */ e.jsxs(t.Dropzone, { ref: o, ...d, children: [
    /* @__PURE__ */ e.jsx(x, { fontSize: "xl", color: "fg.muted", children: /* @__PURE__ */ e.jsx(I, {}) }),
    /* @__PURE__ */ e.jsxs(t.DropzoneContent, { children: [
      /* @__PURE__ */ e.jsx("div", { children: l }),
      s && /* @__PURE__ */ e.jsx(h, { color: "fg.muted", children: s })
    ] }),
    n
  ] });
}), C = (c) => {
  const { file: r, showSize: o, clearable: n } = c;
  return /* @__PURE__ */ e.jsxs(t.Item, { file: r, children: [
    /* @__PURE__ */ e.jsx(t.ItemPreview, { asChild: !0, children: /* @__PURE__ */ e.jsx(x, { fontSize: "lg", color: "fg.muted", children: /* @__PURE__ */ e.jsx(U, {}) }) }),
    o ? /* @__PURE__ */ e.jsxs(t.ItemContent, { children: [
      /* @__PURE__ */ e.jsx(t.ItemName, {}),
      /* @__PURE__ */ e.jsx(t.ItemSizeText, {})
    ] }) : /* @__PURE__ */ e.jsx(t.ItemName, { flex: "1" }),
    n && /* @__PURE__ */ e.jsx(t.ItemDeleteTrigger, { asChild: !0, children: /* @__PURE__ */ e.jsx(F, { variant: "ghost", color: "fg.muted", size: "xs", children: /* @__PURE__ */ e.jsx(z, {}) }) })
  ] });
}, P = a(
  function(r, o) {
    const { showSize: n, clearable: l, files: s, ...d } = r, p = j(), i = s ?? p.acceptedFiles;
    return i.length === 0 ? null : /* @__PURE__ */ e.jsx(t.ItemGroup, { ref: o, ...d, children: i.map((u) => /* @__PURE__ */ e.jsx(
      C,
      {
        file: u,
        showSize: n,
        clearable: l
      },
      u.name
    )) });
  }
), w = a(
  function(r, o) {
    const n = m({ key: "input" }), [l, s] = n.splitVariantProps(r), { placeholder: d = "Select file(s)", ...p } = s;
    return /* @__PURE__ */ e.jsx(t.Trigger, { asChild: !0, children: /* @__PURE__ */ e.jsx(
      f,
      {
        unstyled: !0,
        py: "0",
        ref: o,
        ...p,
        css: [n(l), r.css],
        children: /* @__PURE__ */ e.jsx(t.Context, { children: ({ acceptedFiles: i }) => i.length === 1 ? /* @__PURE__ */ e.jsx("span", { children: i[0].name }) : i.length > 1 ? /* @__PURE__ */ e.jsxs("span", { children: [
          i.length,
          " files"
        ] }) : /* @__PURE__ */ e.jsx(g, { color: "fg.subtle", children: d }) })
      }
    ) });
  }
), v = t.Label, y = t.ClearTrigger, B = t.Trigger;
export {
  w as FileInput,
  y as FileUploadClearTrigger,
  D as FileUploadDropzone,
  v as FileUploadLabel,
  P as FileUploadList,
  b as FileUploadRoot,
  B as FileUploadTrigger
};
//# sourceMappingURL=file-button.mjs.map
