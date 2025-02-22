import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Slider as Slider$1, HStack } from "@chakra-ui/react";
import { forwardRef } from "react";
const Slider = forwardRef(
  function Slider2(props, ref) {
    const { marks: marksProp, label, showValue, ...rest } = props;
    const value = props.defaultValue ?? props.value;
    const marks = marksProp == null ? void 0 : marksProp.map((mark) => {
      if (typeof mark === "number") return { value: mark, label: void 0 };
      return mark;
    });
    const hasMarkLabel = !!(marks == null ? void 0 : marks.some((mark) => mark.label));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Slider$1.Root, { ref, thumbAlignment: "center", ...rest, children: [
      label && !showValue && /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.Label, { fontWeight: "medium", children: label }),
      label && showValue && /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { justify: "space-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.Label, { fontWeight: "medium", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.ValueText, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Slider$1.Control, { mb: hasMarkLabel ? "4" : void 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.Track, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.Range, {}) }),
        value == null ? void 0 : value.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.Thumb, { index, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.HiddenInput, {}) }, index))
      ] }),
      (marks == null ? void 0 : marks.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.MarkerGroup, { children: marks.map((mark, index) => {
        const value2 = typeof mark === "number" ? mark : mark.value;
        const label2 = typeof mark === "number" ? void 0 : mark.label;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Slider$1.Marker, { value: value2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1.MarkerIndicator, {}),
          label2
        ] }, index);
      }) })
    ] });
  }
);
export {
  Slider
};
//# sourceMappingURL=slider.mjs.map
