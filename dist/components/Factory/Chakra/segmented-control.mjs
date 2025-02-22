import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { SegmentGroup, For } from "@chakra-ui/react";
import { forwardRef, useMemo } from "react";
function normalize(items) {
  return items.map((item) => {
    if (typeof item === "string") return { value: item, label: item };
    return item;
  });
}
const SegmentedControl = forwardRef(function SegmentedControl2(props, ref) {
  const { items, ...rest } = props;
  const data = useMemo(() => normalize(items), [items]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SegmentGroup.Root, { ref, ...rest, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SegmentGroup.Indicator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(For, { each: data, children: (item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SegmentGroup.Item,
      {
        value: item.value,
        disabled: item.disabled,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SegmentGroup.ItemText, { children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SegmentGroup.ItemHiddenInput, {})
        ]
      },
      item.value
    ) })
  ] });
});
export {
  SegmentedControl
};
//# sourceMappingURL=segmented-control.mjs.map
