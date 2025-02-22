import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Blockquote as Blockquote$1 } from "@chakra-ui/react";
import { forwardRef } from "react";
const Blockquote = forwardRef(
  function Blockquote2(props, ref) {
    const { children, cite, citeUrl, showDash, icon, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Blockquote$1.Root, { ref, ...rest, children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Blockquote$1.Content, { cite: citeUrl, children }),
      cite && /* @__PURE__ */ jsxRuntimeExports.jsxs(Blockquote$1.Caption, { children: [
        showDash ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "—" }) : null,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("cite", { children: cite })
      ] })
    ] });
  }
);
const BlockquoteIcon = Blockquote$1.Icon;
export {
  Blockquote,
  BlockquoteIcon
};
//# sourceMappingURL=blockquote.mjs.map
