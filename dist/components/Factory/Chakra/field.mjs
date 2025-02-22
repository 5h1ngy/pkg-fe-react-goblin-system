import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Field as Field$1 } from "@chakra-ui/react";
import { forwardRef } from "react";
const Field = forwardRef(
  function Field2(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$1.Root, { ref, ...rest, children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$1.Label, { children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1.RequiredIndicator, { fallback: optionalText })
      ] }),
      children,
      helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1.HelperText, { children: helperText }),
      errorText && /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1.ErrorText, { children: errorText })
    ] });
  }
);
export {
  Field
};
