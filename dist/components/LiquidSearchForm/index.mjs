import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { Stack, Box } from "@chakra-ui/react";
import { D as DynamicForm } from "../../.chunks/Bl3vSNnG.js";
import { Button } from "../Factory/Chakra/button.mjs";
function LiquidSearchForm({ schema }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DynamicForm,
    {
      schema,
      width: "full",
      rowsWidth: "fit-content",
      render: (fields) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          width: "full",
          wrap: "wrap",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.5rem",
          borderRadius: "10px",
          backgroundColor: "gray.100",
          _dark: { backgroundColor: "gray.950" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { width: "fit-content", height: "fit-content", children: fields }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { width: "fit-content", height: "fit-content", alignItems: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", type: "submit", colorPalette: "teal", width: "fit-content", marginTop: "20px", children: "Crea Account" }) })
          ]
        }
      )
    }
  );
}
export {
  LiquidSearchForm as default
};
