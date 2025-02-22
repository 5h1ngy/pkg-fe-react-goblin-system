import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { RadioCard } from "@chakra-ui/react";
import { forwardRef, Fragment } from "react";
const RadioCardItem = forwardRef(
  function RadioCardItem2(props, ref) {
    const {
      inputProps,
      label,
      description,
      addon,
      icon,
      indicator = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioCard.ItemIndicator, {}),
      indicatorPlacement = "end",
      ...rest
    } = props;
    const hasContent = label || description || icon;
    const ContentWrapper = indicator ? RadioCard.ItemContent : Fragment;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioCard.Item, { ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioCard.ItemHiddenInput, { ref, ...inputProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioCard.ItemControl, { children: [
        indicatorPlacement === "start" && indicator,
        hasContent && /* @__PURE__ */ jsxRuntimeExports.jsxs(ContentWrapper, { children: [
          icon,
          label && /* @__PURE__ */ jsxRuntimeExports.jsx(RadioCard.ItemText, { children: label }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(RadioCard.ItemDescription, { children: description }),
          indicatorPlacement === "inside" && indicator
        ] }),
        indicatorPlacement === "end" && indicator
      ] }),
      addon && /* @__PURE__ */ jsxRuntimeExports.jsx(RadioCard.ItemAddon, { children: addon })
    ] });
  }
);
const RadioCardRoot = RadioCard.Root;
const RadioCardLabel = RadioCard.Label;
const RadioCardItemIndicator = RadioCard.ItemIndicator;
export {
  RadioCardItem,
  RadioCardItemIndicator,
  RadioCardLabel,
  RadioCardRoot
};
//# sourceMappingURL=radio-card.mjs.map
