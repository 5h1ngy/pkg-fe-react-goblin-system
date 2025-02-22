import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { EmptyState as EmptyState$1, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";
const EmptyState = forwardRef(
  function EmptyState2(props, ref) {
    const { title, description, icon, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Root, { ref, ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(EmptyState$1.Content, { children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Indicator, { children: icon }),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { textAlign: "center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Title, { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Description, { children: description })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Title, { children: title }),
      children
    ] }) });
  }
);
export {
  EmptyState
};
//# sourceMappingURL=empty-state.mjs.map
