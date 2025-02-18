import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { RatingGroup } from "@chakra-ui/react";
import { forwardRef } from "react";
const Rating = forwardRef(
  function Rating2(props, ref) {
    const { icon, count = 5, label, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RatingGroup.Root, { ref, count, ...rest, children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx(RatingGroup.Label, { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RatingGroup.HiddenInput, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RatingGroup.Control, { children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(RatingGroup.Item, { index: index + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RatingGroup.ItemIndicator, { icon }) }, index)) })
    ] });
  }
);
export {
  Rating
};
