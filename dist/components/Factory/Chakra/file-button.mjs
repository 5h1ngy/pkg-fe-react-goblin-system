import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { FileUpload, Icon, Text, useFileUploadContext, useRecipe, Button, Span, IconButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import { d as LuUpload, e as LuFile, f as LuX } from "../../../.chunks/Bol7GxK0.js";
const FileUploadRoot = forwardRef(
  function FileUploadRoot2(props, ref) {
    const { children, inputProps, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FileUpload.Root, { ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.HiddenInput, { ref, ...inputProps }),
      children
    ] });
  }
);
const FileUploadDropzone = forwardRef(function FileUploadDropzone2(props, ref) {
  const { children, label, description, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FileUpload.Dropzone, { ref, ...rest, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { fontSize: "xl", color: "fg.muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuUpload, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FileUpload.DropzoneContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: label }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { color: "fg.muted", children: description })
    ] }),
    children
  ] });
});
const FileUploadItem = (props) => {
  const { file, showSize, clearable } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FileUpload.Item, { file, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.ItemPreview, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { fontSize: "lg", color: "fg.muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuFile, {}) }) }),
    showSize ? /* @__PURE__ */ jsxRuntimeExports.jsxs(FileUpload.ItemContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.ItemName, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.ItemSizeText, {})
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.ItemName, { flex: "1" }),
    clearable && /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.ItemDeleteTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: "ghost", color: "fg.muted", size: "xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuX, {}) }) })
  ] });
};
const FileUploadList = forwardRef(
  function FileUploadList2(props, ref) {
    const { showSize, clearable, files, ...rest } = props;
    const fileUpload = useFileUploadContext();
    const acceptedFiles = files ?? fileUpload.acceptedFiles;
    if (acceptedFiles.length === 0) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.ItemGroup, { ref, ...rest, children: acceptedFiles.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FileUploadItem,
      {
        file,
        showSize,
        clearable
      },
      file.name
    )) });
  }
);
const FileInput = forwardRef(
  function FileInput2(props, ref) {
    const inputRecipe = useRecipe({ key: "input" });
    const [recipeProps, restProps] = inputRecipe.splitVariantProps(props);
    const { placeholder = "Select file(s)", ...rest } = restProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        unstyled: true,
        py: "0",
        ref,
        ...rest,
        css: [inputRecipe(recipeProps), props.css],
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload.Context, { children: ({ acceptedFiles }) => {
          if (acceptedFiles.length === 1) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: acceptedFiles[0].name });
          }
          if (acceptedFiles.length > 1) {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              acceptedFiles.length,
              " files"
            ] });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Span, { color: "fg.subtle", children: placeholder });
        } })
      }
    ) });
  }
);
const FileUploadLabel = FileUpload.Label;
const FileUploadClearTrigger = FileUpload.ClearTrigger;
const FileUploadTrigger = FileUpload.Trigger;
export {
  FileInput,
  FileUploadClearTrigger,
  FileUploadDropzone,
  FileUploadLabel,
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger
};
//# sourceMappingURL=file-button.mjs.map
