import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { Flex, Text, Spacer } from "@chakra-ui/react";
const SectionCardRow = ({ field, value }) => {
  return field ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { wrap: "wrap", gapX: "5rem", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Text,
      {
        textStyle: "lg",
        style: { wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal" },
        children: field
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Spacer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Text,
      {
        textStyle: "lg",
        style: { wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal" },
        children: value
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    Text,
    {
      textStyle: "lg",
      style: { wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal" },
      children: value
    }
  );
};
export {
  SectionCardRow as default
};
//# sourceMappingURL=index.mjs.map
