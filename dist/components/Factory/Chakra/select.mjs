import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Select, Portal } from "@chakra-ui/react";
import { CloseButton } from "./close-button.mjs";
import { forwardRef } from "react";
const SelectTrigger = forwardRef(
  function SelectTrigger2(props, ref) {
    const { children, clearable, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.Control, { ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Trigger, { ref, children }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.IndicatorGroup, { children: [
        clearable && /* @__PURE__ */ jsxRuntimeExports.jsx(SelectClearTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Indicator, {})
      ] })
    ] });
  }
);
const SelectClearTrigger = forwardRef(function SelectClearTrigger2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Select.ClearTrigger, { asChild: true, ...props, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    CloseButton,
    {
      size: "xs",
      variant: "plain",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      pointerEvents: "auto"
    }
  ) });
});
const SelectContent = forwardRef(
  function SelectContent2(props, ref) {
    const { portalled = true, portalRef, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Content, { ...rest, ref }) }) });
  }
);
const SelectItem = forwardRef(
  function SelectItem2(props, ref) {
    const { item, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.Item, { item, ...rest, ref, children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.ItemIndicator, {})
    ] }, item.value);
  }
);
const SelectValueText = forwardRef(function SelectValueText2(props, ref) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Select.ValueText, { ...rest, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Context, { children: (select) => {
    const items = select.selectedItems;
    if (items.length === 0) return props.placeholder;
    if (children) return children(items);
    if (items.length === 1)
      return select.collection.stringifyItem(items[0]);
    return `${items.length} selected`;
  } }) });
});
const SelectRoot = forwardRef(
  function SelectRoot2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select.Root,
      {
        ...props,
        ref,
        positioning: { sameWidth: true, ...props.positioning },
        children: props.asChild ? props.children : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Select.HiddenSelect, {}),
          props.children
        ] })
      }
    );
  }
);
const SelectItemGroup = forwardRef(
  function SelectItemGroup2(props, ref) {
    const { children, label, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Select.ItemGroup, { ...rest, ref, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.ItemGroupLabel, { children: label }),
      children
    ] });
  }
);
const SelectLabel = Select.Label;
const SelectItemText = Select.ItemText;
export {
  SelectContent,
  SelectItem,
  SelectItemGroup,
  SelectItemText,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText
};
//# sourceMappingURL=select.mjs.map
