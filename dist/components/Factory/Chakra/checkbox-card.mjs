import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { CheckboxCard as CheckboxCard$1 } from "@chakra-ui/react";
import { forwardRef, Fragment } from "react";
const CheckboxCard = forwardRef(
  function CheckboxCard2(props, ref) {
    const {
      inputProps,
      label,
      description,
      icon,
      addon,
      indicator = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxCard$1.Indicator, {}),
      indicatorPlacement = "end",
      ...rest
    } = props;
    const hasContent = label || description || icon;
    const ContentWrapper = indicator ? CheckboxCard$1.Content : Fragment;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(CheckboxCard$1.Root, { ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxCard$1.HiddenInput, { ref, ...inputProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CheckboxCard$1.Control, { children: [
        indicatorPlacement === "start" && indicator,
        hasContent && /* @__PURE__ */ jsxRuntimeExports.jsxs(ContentWrapper, { children: [
          icon,
          label && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxCard$1.Label, { children: label }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxCard$1.Description, { children: description }),
          indicatorPlacement === "inside" && indicator
        ] }),
        indicatorPlacement === "end" && indicator
      ] }),
      addon && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxCard$1.Addon, { children: addon })
    ] });
  }
);
const CheckboxCardIndicator = CheckboxCard$1.Indicator;
export {
  CheckboxCard,
  CheckboxCardIndicator
};
//# sourceMappingURL=checkbox-card.mjs.map
