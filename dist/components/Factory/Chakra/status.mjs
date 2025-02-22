import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Status as Status$1 } from "@chakra-ui/react";
import { forwardRef } from "react";
const statusMap = {
  success: "green",
  error: "red",
  warning: "orange",
  info: "blue"
};
const Status = forwardRef(
  function Status2(props, ref) {
    const { children, value = "info", ...rest } = props;
    const colorPalette = rest.colorPalette ?? statusMap[value];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Status$1.Root, { ref, ...rest, colorPalette, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Status$1.Indicator, {}),
      children
    ] });
  }
);
export {
  Status
};
