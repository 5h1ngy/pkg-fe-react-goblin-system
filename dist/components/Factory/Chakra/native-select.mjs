import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { NativeSelect } from "@chakra-ui/react";
import { forwardRef, useMemo } from "react";
const NativeSelectRoot = forwardRef(function NativeSelect$1(props, ref) {
  const { icon, children, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(NativeSelect.Root, { ref, ...rest, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelect.Indicator, { children: icon })
  ] });
});
const NativeSelectField = forwardRef(function NativeSelectField2(props, ref) {
  const { items: itemsProp, children, ...rest } = props;
  const items = useMemo(
    () => itemsProp == null ? void 0 : itemsProp.map(
      (item) => typeof item === "string" ? { label: item, value: item } : item
    ),
    [itemsProp]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(NativeSelect.Field, { ref, ...rest, children: [
    children,
    items == null ? void 0 : items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.value, disabled: item.disabled, children: item.label }, item.value))
  ] });
});
export {
  NativeSelectField,
  NativeSelectRoot
};
//# sourceMappingURL=native-select.mjs.map
