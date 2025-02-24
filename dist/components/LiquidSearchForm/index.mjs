import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { VStack, Stack } from "@chakra-ui/react";
import { D as DynamicForm } from "../../.chunks/Clcub7Py.js";
import { Button } from "../Factory/Chakra/button.mjs";
function LiquidSearchForm({ schema }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DynamicForm,
    {
      schema,
      width: "full",
      render: (fields) => /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { width: "fit-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Stack,
          {
            width: "fit-content",
            wrap: "wrap",
            gap: "1rem",
            padding: "1.5rem",
            borderRadius: "10px",
            backgroundColor: "gray.100",
            _dark: { backgroundColor: "gray.950" },
            children: fields
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { width: "100%", alignItems: "flex-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", type: "submit", colorPalette: "teal", children: "Crea Account" }) })
      ] })
    }
  );
}
export {
  LiquidSearchForm as default
};
