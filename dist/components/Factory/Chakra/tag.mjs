import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Tag as Tag$1 } from "@chakra-ui/react";
import { forwardRef } from "react";
const Tag = forwardRef(
  function Tag2(props, ref) {
    const {
      startElement,
      endElement,
      onClose,
      closable = !!onClose,
      children,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag$1.Root, { ref, ...rest, children: [
      startElement && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag$1.StartElement, { children: startElement }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag$1.Label, { children }),
      endElement && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag$1.EndElement, { children: endElement }),
      closable && /* @__PURE__ */ jsxRuntimeExports.jsx(Tag$1.EndElement, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag$1.CloseTrigger, { onClick: onClose }) })
    ] });
  }
);
export {
  Tag
};
//# sourceMappingURL=tag.mjs.map
