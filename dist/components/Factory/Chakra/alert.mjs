import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Alert as Alert$1 } from "@chakra-ui/react";
import { CloseButton } from "./close-button.mjs";
import { forwardRef } from "react";
const Alert = forwardRef(
  function Alert2(props, ref) {
    const {
      title,
      children,
      icon,
      closable,
      onClose,
      startElement,
      endElement,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert$1.Root, { ref, ...rest, children: [
      startElement || /* @__PURE__ */ jsxRuntimeExports.jsx(Alert$1.Indicator, { children: icon }),
      children ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert$1.Content, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Alert$1.Title, { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Alert$1.Description, { children })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Alert$1.Title, { flex: "1", children: title }),
      endElement,
      closable && /* @__PURE__ */ jsxRuntimeExports.jsx(
        CloseButton,
        {
          size: "sm",
          pos: "relative",
          top: "-2",
          insetEnd: "-2",
          alignSelf: "flex-start",
          onClick: onClose
        }
      )
    ] });
  }
);
export {
  Alert
};
//# sourceMappingURL=alert.mjs.map
