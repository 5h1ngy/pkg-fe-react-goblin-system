import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { VStack, HStack } from "@chakra-ui/react";
import { D as DynamicForm } from "../../.chunks/COlaR-yO.js";
import { Button } from "../Factory/Chakra/button.mjs";
function LiquidSearchForm({ schema }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DynamicForm,
    {
      schema,
      width: "100%",
      render: (fields) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        VStack,
        {
          gap: "1rem",
          padding: "1.5rem",
          borderRadius: "10px",
          backgroundColor: "gray.100",
          _dark: { backgroundColor: "gray.950" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { gap: "4", width: "100%", children: fields }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { gap: "4", width: "100%", alignItems: "flex-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", type: "submit", colorPalette: "teal", children: "Crea Account" }) })
          ]
        }
      )
    }
  );
}
export {
  LiquidSearchForm as default
};
//# sourceMappingURL=index.mjs.map
