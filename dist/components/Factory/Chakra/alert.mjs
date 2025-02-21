import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { Alert as e } from "@chakra-ui/react";
import { CloseButton as f } from "./close-button.mjs";
import { forwardRef as a } from "react";
const C = a(
  function(n, s) {
    const {
      title: r,
      children: o,
      icon: l,
      closable: i,
      onClose: c,
      startElement: m,
      endElement: x,
      ...d
    } = n;
    return /* @__PURE__ */ t.jsxs(e.Root, { ref: s, ...d, children: [
      m || /* @__PURE__ */ t.jsx(e.Indicator, { children: l }),
      o ? /* @__PURE__ */ t.jsxs(e.Content, { children: [
        /* @__PURE__ */ t.jsx(e.Title, { children: r }),
        /* @__PURE__ */ t.jsx(e.Description, { children: o })
      ] }) : /* @__PURE__ */ t.jsx(e.Title, { flex: "1", children: r }),
      x,
      i && /* @__PURE__ */ t.jsx(
        f,
        {
          size: "sm",
          pos: "relative",
          top: "-2",
          insetEnd: "-2",
          alignSelf: "flex-start",
          onClick: c
        }
      )
    ] });
  }
);
export {
  C as Alert
};
//# sourceMappingURL=alert.mjs.map
