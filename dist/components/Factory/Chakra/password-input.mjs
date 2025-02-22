import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { useControllableState, Input, mergeRefs, IconButton, Stack, HStack, Box } from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { h as LuEyeOff, i as LuEye } from "../../../index-B99rpP98.js";
import { InputGroup } from "./input-group.mjs";
const PasswordInput = forwardRef(
  function PasswordInput2(props, ref) {
    const {
      rootProps,
      defaultVisible,
      visible: visibleProp,
      onVisibleChange,
      visibilityIcon = { on: /* @__PURE__ */ jsxRuntimeExports.jsx(LuEye, {}), off: /* @__PURE__ */ jsxRuntimeExports.jsx(LuEyeOff, {}) },
      ...rest
    } = props;
    const [visible, setVisible] = useControllableState({
      value: visibleProp,
      defaultValue: defaultVisible || false,
      onChange: onVisibleChange
    });
    const inputRef = useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputGroup,
      {
        width: "full",
        endElement: /* @__PURE__ */ jsxRuntimeExports.jsx(
          VisibilityTrigger,
          {
            disabled: rest.disabled,
            onPointerDown: (e) => {
              if (rest.disabled) return;
              if (e.button !== 0) return;
              e.preventDefault();
              setVisible(!visible);
            },
            children: visible ? visibilityIcon.off : visibilityIcon.on
          }
        ),
        ...rootProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            ...rest,
            ref: mergeRefs(ref, inputRef),
            type: visible ? "text" : "password"
          }
        )
      }
    );
  }
);
const VisibilityTrigger = forwardRef(
  function VisibilityTrigger2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        tabIndex: -1,
        ref,
        me: "-2",
        aspectRatio: "square",
        size: "sm",
        variant: "ghost",
        height: "calc(100% - {spacing.2})",
        "aria-label": "Toggle password visibility",
        ...props
      }
    );
  }
);
const PasswordStrengthMeter = forwardRef(function PasswordStrengthMeter2(props, ref) {
  const { max = 4, value, ...rest } = props;
  const percent = value / max * 100;
  const { label, colorPalette } = getColorPalette(percent);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { align: "flex-end", gap: "1", ref, ...rest, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { width: "full", ref, ...rest, children: Array.from({ length: max }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        height: "1",
        flex: "1",
        rounded: "sm",
        "data-selected": index < value ? "" : void 0,
        layerStyle: "fill.subtle",
        colorPalette: "gray",
        _selected: {
          colorPalette,
          layerStyle: "fill.solid"
        }
      },
      index
    )) }),
    label && /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { textStyle: "xs", children: label })
  ] });
});
function getColorPalette(percent) {
  switch (true) {
    case percent < 33:
      return { label: "Low", colorPalette: "red" };
    case percent < 66:
      return { label: "Medium", colorPalette: "orange" };
    default:
      return { label: "High", colorPalette: "green" };
  }
}
export {
  PasswordInput,
  PasswordStrengthMeter
};
//# sourceMappingURL=password-input.mjs.map
