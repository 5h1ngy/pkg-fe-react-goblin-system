import { j as r } from "../../.chunks/CYK1ROHF.js";
import { VStack as t, HStack as e } from "@chakra-ui/react";
import { D as i } from "../../.chunks/DzTRbplN.js";
import { Button as n } from "../Factory/Chakra/button.mjs";
function l({ schema: o }) {
  return /* @__PURE__ */ r.jsx(
    i,
    {
      schema: o,
      width: "100%",
      render: (a) => /* @__PURE__ */ r.jsxs(
        t,
        {
          gap: "1rem",
          padding: "1.5rem",
          borderRadius: "10px",
          backgroundColor: "gray.100",
          _dark: { backgroundColor: "gray.950" },
          children: [
            /* @__PURE__ */ r.jsx(e, { gap: "4", width: "100%", children: a }),
            /* @__PURE__ */ r.jsx(t, { gap: "4", width: "100%", alignItems: "flex-end", children: /* @__PURE__ */ r.jsx(n, { variant: "outline", type: "submit", colorPalette: "teal", children: "Crea Account" }) })
          ]
        }
      )
    }
  );
}
export {
  l as default
};
//# sourceMappingURL=index.mjs.map
