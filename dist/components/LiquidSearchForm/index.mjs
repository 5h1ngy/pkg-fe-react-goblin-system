import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { Stack } from "@chakra-ui/react";
import { D as DynamicForm } from "../../.chunks/Clcub7Py.js";
import { Button } from "../Factory/Chakra/button.mjs";
function LiquidSearchForm({ schema }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DynamicForm,
    {
      schema,
      width: "full",
      render: (fields) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          width: "full",
          wrap: "wrap",
          gap: "1rem",
          padding: "1.5rem",
          borderRadius: "10px",
          backgroundColor: "gray.100",
          _dark: { backgroundColor: "gray.950" },
          children: [
            fields,
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", type: "submit", colorPalette: "teal", width: "fit-content", children: "Crea Account" })
          ]
        }
      )
    }
  );
}
export {
  LiquidSearchForm as default
};
