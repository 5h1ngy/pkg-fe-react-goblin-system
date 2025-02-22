import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Group, InputElement } from "@chakra-ui/react";
import { forwardRef, cloneElement } from "react";
const InputGroup = forwardRef(
  function InputGroup2(props, ref) {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      children,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Group, { ref, ...rest, children: [
      startElement && /* @__PURE__ */ jsxRuntimeExports.jsx(InputElement, { pointerEvents: "none", ...startElementProps, children: startElement }),
      cloneElement(children, {
        ...startElement && { ps: "calc(var(--input-height) - 6px)" },
        ...endElement && { pe: "calc(var(--input-height) - 6px)" },
        ...children.props
      }),
      endElement && /* @__PURE__ */ jsxRuntimeExports.jsx(InputElement, { placement: "end", ...endElementProps, children: endElement })
    ] });
  }
);
export {
  InputGroup
};
//# sourceMappingURL=input-group.mjs.map
